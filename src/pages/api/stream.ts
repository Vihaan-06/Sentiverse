import type { NextApiRequest } from "next";
import type { NextApiResponseWithSocket } from "@/types/next-socket";
import { Server } from "socket.io";
import { nanoid } from "nanoid";
import { analyzeSentimentScore, categorizeSentiment } from "@/lib/sentiment";
import { generateRandomPost } from "@/lib/postGenerator";
import {
  buildGeoJsonFromCountries,
  type AggregatedStats,
  type RawSentimentPost,
  updateAggregation,
} from "@/lib/aggregation";

type SentimentServerPayload = {
  post: RawSentimentPost;
  stats: AggregatedStats;
  geoJson: ReturnType<typeof buildGeoJsonFromCountries>;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const INTERVAL_MIN = 1000;
const INTERVAL_MAX = 2000;

const createRandomDelay = () =>
  Math.floor(INTERVAL_MIN + Math.random() * (INTERVAL_MAX - INTERVAL_MIN));

type ServerWithStreamer = Server & {
  streamerRegistered?: boolean;
};

const registerStreamer = (io: ServerWithStreamer) => {
  if (io.streamerRegistered) return;
  io.streamerRegistered = true;

  const loop = () => {
    const basePost = generateRandomPost();
    const score = analyzeSentimentScore(basePost.text);
    const sentiment = categorizeSentiment(score);

    const post: RawSentimentPost = {
      id: nanoid(),
      text: basePost.text,
      country: basePost.country,
      coordinates: basePost.coordinates,
      sentimentScore: score,
      sentiment,
      timestamp: basePost.timestamp,
    };

    const stats = updateAggregation(post);
    const geoJson = buildGeoJsonFromCountries();

    const payload: SentimentServerPayload = {
      post,
      stats,
      geoJson,
    };

    io.emit("sentiment_update", payload);

    setTimeout(loop, createRandomDelay());
  };

  setTimeout(loop, createRandomDelay());
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponseWithSocket
) {
  if (!res.socket.server.io) {
    const io: ServerWithStreamer = new Server(res.socket.server, {
      path: "/api/stream",
      cors: {
        origin: "*",
      },
    });
    res.socket.server.io = io as Server;
    registerStreamer(io);
  }

  res.end();
}

