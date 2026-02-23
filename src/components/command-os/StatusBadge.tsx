import React from "react";

interface StatusBadgeProps {
  status: string;
  tone?: "amber" | "green" | "slate";
}

const toneClassMap = {
  amber: "border-[color:var(--color-goldSoft)] text-[color:var(--color-gold)] bg-[color:var(--color-goldSoft)]/10",
  green: "border-accent/40 text-accent bg-accent/10",
  slate: "border-borderSoft text-textMuted bg-surface/70",
} as const;

export default function StatusBadge({ status, tone = "amber" }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-mono tracking-[0.2em] uppercase ${toneClassMap[tone]}`}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-current animate-pulse" aria-hidden />
      {status}
    </span>
  );
}
