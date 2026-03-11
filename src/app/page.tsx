'use client';

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { io, Socket } from "socket.io-client";
import type { FeatureCollection } from "geojson";
import ActivityFeed from "@/components/ActivityFeed";
import StatsPanel from "@/components/StatsPanel";
import ViewToggle from "@/components/ViewToggle";
import type { AggregatedStats, RawSentimentPost } from "@/lib/aggregation";

type ViewMode = "map" | "globe";

type ServerEventPayload = {
  post: RawSentimentPost;
  stats: AggregatedStats;
  geoJson: FeatureCollection;
};

const MapView = dynamic(() => import("@/components/MapView"), {
  ssr: false,
});

const GlobeView = dynamic(() => import("@/components/GlobeView"), {
  ssr: false,
});

const SOCKET_EVENT = "sentiment_update";

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>("map");
  const [connected, setConnected] = useState(false);
  const [uiPosts, setUiPosts] = useState<RawSentimentPost[]>([]);
  const [uiStats, setUiStats] = useState<AggregatedStats | null>(null);
  const [geoSnapshot, setGeoSnapshot] = useState<FeatureCollection>({
    type: "FeatureCollection",
    features: [],
  });

  const socketRef = useRef<Socket | null>(null);
  const allPostsRef = useRef<RawSentimentPost[]>([]);
  const statsRef = useRef<AggregatedStats | null>(null);
  const geoJsonRef = useRef<FeatureCollection>({
    type: "FeatureCollection",
    features: [],
  });
  const updateTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastUpdateRef = useRef<number>(0);

  const handleServerEvent = (payload: ServerEventPayload) => {
    const now = Date.now();

    allPostsRef.current = [
      payload.post,
      ...allPostsRef.current.slice(0, 19),
    ];
    statsRef.current = payload.stats;
    geoJsonRef.current = payload.geoJson;

    if (!lastUpdateRef.current) {
      lastUpdateRef.current = now;
    }

    const elapsed = now - lastUpdateRef.current;
    if (elapsed >= 500) {
      lastUpdateRef.current = now;
      setUiPosts(allPostsRef.current.slice());
      setUiStats(statsRef.current);
      setGeoSnapshot(geoJsonRef.current);
      return;
    }

    if (!updateTimeoutRef.current) {
      updateTimeoutRef.current = setTimeout(() => {
        lastUpdateRef.current = Date.now();
        updateTimeoutRef.current = null;
        setUiPosts(allPostsRef.current.slice());
        setUiStats(statsRef.current);
        setGeoSnapshot(geoJsonRef.current);
      }, 500 - elapsed);
    }
  };

  const getLatestPosts = useCallback(() => allPostsRef.current, []);

  useEffect(() => {
    if (socketRef.current) return;

    let isActive = true;

    const init = async () => {
      try {
        // Ensure the Socket.io server is attached to the Next.js HTTP server
        await fetch("/api/stream");
      } catch {
        // ignore; the socket connection will surface errors if any
      }

      if (!isActive) return;

      const socket = io({
        path: "/api/stream",
        transports: ["websocket", "polling"],
      });

      socketRef.current = socket;

      socket.on("connect", () => {
        setConnected(true);
      });

      socket.on("disconnect", () => {
        setConnected(false);
      });

      socket.on("connect_error", () => {
        setConnected(false);
      });

      socket.on(SOCKET_EVENT, handleServerEvent);
    };

    void init();

    return () => {
      isActive = false;
      const socket = socketRef.current;
      if (socket) {
        socket.off(SOCKET_EVENT, handleServerEvent);
        socket.disconnect();
      }
      socketRef.current = null;
      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current);
      }
    };
  }, []);

  return (
    <main className="min-h-screen px-4 py-6 md:px-8 md:py-8 bg-gradient-to-br from-black via-[#050510] to-[#020617]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
              Internet Mood Map
            </h1>
            <p className="mt-1 text-sm text-zinc-400 md:text-base">
              Real-time visualization of global social sentiment, rendered in a
              sleek dark dashboard.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div
              className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
                connected
                  ? "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/40"
                  : "bg-zinc-800/80 text-zinc-300 ring-1 ring-zinc-700"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  connected ? "bg-emerald-400 animate-pulse" : "bg-zinc-500"
                }`}
              />
              {connected ? "Streaming live mood data" : "Connecting…"}
            </div>
            <ViewToggle mode={viewMode} onChange={setViewMode} />
          </div>
        </header>

        <section className="dashboard-grid">
          <div className="glass-panel relative flex min-h-[360px] flex-col overflow-hidden">
            {viewMode === "map" ? (
              <MapView geoJson={geoSnapshot} />
            ) : (
              <GlobeView getLatestPosts={getLatestPosts} />
            )}
          </div>

          <div className="glass-panel flex min-h-[360px] flex-col overflow-hidden">
            <ActivityFeed posts={uiPosts} isLoading={!uiPosts.length} />
          </div>

          <div className="glass-panel flex min-h-[360px] flex-col overflow-hidden">
            <StatsPanel stats={uiStats} isLoading={!uiStats} />
          </div>
        </section>
      </div>
    </main>
  );
}
