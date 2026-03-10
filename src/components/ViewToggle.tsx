"use client";

import type { FC } from "react";

type ViewMode = "map" | "globe";

type Props = {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
};

const ViewToggle: FC<Props> = ({ mode, onChange }) => {
  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-zinc-900/70 p-1 text-xs shadow-[0_0_24px_rgba(59,130,246,0.35)]">
      <button
        type="button"
        onClick={() => onChange("map")}
        className={`flex items-center gap-1 rounded-full px-3 py-1 transition-colors ${
          mode === "map"
            ? "bg-emerald-500/20 text-emerald-200 shadow-[0_0_18px_rgba(34,197,94,0.6)]"
            : "text-zinc-400 hover:text-zinc-200"
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        2D Map
      </button>
      <button
        type="button"
        onClick={() => onChange("globe")}
        className={`flex items-center gap-1 rounded-full px-3 py-1 transition-colors ${
          mode === "globe"
            ? "bg-sky-500/20 text-sky-200 shadow-[0_0_18px_rgba(56,189,248,0.6)]"
            : "text-zinc-400 hover:text-zinc-200"
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
        3D Globe
      </button>
    </div>
  );
};

export default ViewToggle;

