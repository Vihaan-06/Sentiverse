"use client";

import type { FC } from "react";
import { useEffect, useRef } from "react";
import SentimentBadge from "./SentimentBadge";
import type { RawSentimentPost } from "@/lib/aggregation";

type Props = {
  posts: RawSentimentPost[];
  isLoading: boolean;
};

const ActivityFeed: FC<Props> = ({ posts, isLoading }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.animate(
      [
        { transform: "translateY(6px)", opacity: 0 },
        { transform: "translateY(0)", opacity: 1 },
      ],
      {
        duration: 220,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      }
    );
  }, [posts]);

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center justify-between border-b border-white/5 px-4 py-3">
        <div>
          <h2 className="text-sm font-medium text-zinc-100">
            Live Activity Feed
          </h2>
          <p className="text-xs text-zinc-500">
            Streaming the latest simulated social posts.
          </p>
        </div>
      </header>
      <div
        ref={containerRef}
        className="relative flex-1 overflow-hidden px-2 py-3"
      >
        <div className="absolute inset-0 overflow-y-auto px-2 pb-3">
          {isLoading && (
            <div className="space-y-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="skeleton h-14 rounded-lg bg-zinc-800/80"
                />
              ))}
            </div>
          )}

          {!isLoading && posts.length === 0 && (
            <div className="flex h-full items-center justify-center text-xs text-zinc-500">
              Waiting for the first mood signals…
            </div>
          )}

          {!isLoading && posts.length > 0 && (
            <ul className="space-y-2.5 text-xs">
              {posts.map((post) => (
                <li
                  key={post.id}
                  className="group rounded-lg bg-zinc-900/60 px-3 py-2.5 ring-1 ring-white/5 transition hover:bg-zinc-900/90"
                >
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <SentimentBadge sentiment={post.sentiment} />
                    <span className="text-[10px] text-zinc-500">
                      {new Date(post.timestamp).toLocaleTimeString(undefined, {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                    </span>
                  </div>
                  <p className="line-clamp-2 text-[11px] text-zinc-200">
                    {post.text}
                  </p>
                  <div className="mt-1.5 flex items-center justify-between text-[11px] text-zinc-500">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400/80" />
                      {post.country}
                    </span>
                    <span className="text-[10px] text-zinc-500">
                      score {post.sentimentScore.toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;

