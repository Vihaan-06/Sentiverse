"use client";

import type { FC } from "react";
import type { AggregatedStats } from "@/lib/aggregation";
import SentimentBadge from "./SentimentBadge";

type Props = {
  stats: AggregatedStats | null;
  isLoading: boolean;
};

const AnimatedCounter: FC<{ value: number; suffix?: string }> = ({
  value,
  suffix,
}) => {
  return (
    <span className="tabular-nums">
      {value.toLocaleString(undefined, {
        maximumFractionDigits: 1,
      })}
      {suffix ? <span className="ml-0.5 text-[10px]">{suffix}</span> : null}
    </span>
  );
};

const StatsPanel: FC<Props> = ({ stats, isLoading }) => {
  const skeleton = (
    <div className="space-y-3 px-4 py-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="skeleton h-12 rounded-md bg-zinc-800/80" />
      ))}
    </div>
  );

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center justify-between border-b border-white/5 px-4 py-3">
        <div>
          <h2 className="text-sm font-medium text-zinc-100">Global Stats</h2>
          <p className="text-xs text-zinc-500">
            Aggregated mood signals by country.
          </p>
        </div>
      </header>

      {isLoading || !stats ? (
        skeleton
      ) : (
        <div className="flex flex-1 flex-col gap-4 px-4 py-3 text-xs">
          <div className="rounded-lg bg-zinc-950/60 p-3 ring-1 ring-emerald-500/30 sentiment-pulse">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                  Global Mood Score
                </p>
                <p className="mt-1 text-lg font-semibold text-emerald-200">
                  <AnimatedCounter value={stats.globalMoodScore} />
                </p>
              </div>
              <SentimentBadge sentiment={stats.globalCategory} />
            </div>
            <p className="mt-1 text-[11px] text-zinc-500">
              Based on {stats.totalMessages.toLocaleString()} messages.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-zinc-950/60 p-3 ring-1 ring-emerald-500/20">
              <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                Happiest Country
              </p>
              <p className="mt-1 text-sm font-medium text-emerald-200">
                {stats.happiestCountry ?? "N/A"}
              </p>
              <p className="mt-0.5 text-[11px] text-emerald-300/80">
                <AnimatedCounter value={stats.happiestScore ?? 0} />
              </p>
            </div>

            <div className="rounded-lg bg-zinc-950/60 p-3 ring-1 ring-red-500/25 sentiment-pulse-negative">
              <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                Most Negative
              </p>
              <p className="mt-1 text-sm font-medium text-red-200">
                {stats.mostNegativeCountry ?? "N/A"}
              </p>
              <p className="mt-0.5 text-[11px] text-red-300/80">
                <AnimatedCounter value={stats.mostNegativeScore ?? 0} />
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-zinc-950/60 p-3 ring-1 ring-white/8">
            <p className="text-[11px] uppercase tracking-wide text-zinc-500">
              Total Messages
            </p>
            <p className="mt-1 text-base font-semibold text-zinc-100">
              <AnimatedCounter value={stats.totalMessages} />
            </p>
          </div>

          <div className="rounded-lg bg-zinc-950/60 p-3 ring-1 ring-sky-500/30">
            <p className="text-[11px] uppercase tracking-wide text-zinc-500">
              Trending Keywords
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {stats.trendingKeywords.length === 0 && (
                <span className="text-[11px] text-zinc-500">Listening…</span>
              )}
              {stats.trendingKeywords.map((keyword) => (
                <span
                  key={keyword.word}
                  className="rounded-full bg-sky-500/15 px-2 py-0.5 text-[11px] text-sky-200 ring-1 ring-sky-400/40"
                >
                  #{keyword.word}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsPanel;

