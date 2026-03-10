"use client";

import type { FC } from "react";
import type { SentimentCategory } from "@/lib/aggregation";

type Props = {
  sentiment: SentimentCategory;
};

const SENTIMENT_CONFIG: Record<
  SentimentCategory,
  { label: string; color: string; emoji: string }
> = {
  positive: {
    label: "Positive",
    color: "bg-emerald-500/15 text-emerald-300 border-emerald-400/40",
    emoji: "😊",
  },
  neutral: {
    label: "Neutral",
    color: "bg-yellow-400/15 text-yellow-200 border-yellow-400/50",
    emoji: "😐",
  },
  negative: {
    label: "Negative",
    color: "bg-red-500/15 text-red-300 border-red-400/45",
    emoji: "😡",
  },
};

const SentimentBadge: FC<Props> = ({ sentiment }) => {
  const config = SENTIMENT_CONFIG[sentiment];

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${config.color}`}
    >
      <span>{config.emoji}</span>
      <span>{config.label}</span>
    </span>
  );
};

export default SentimentBadge;

