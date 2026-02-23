import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ProjectSpec } from "@/lib/command-os-data";
import StatusBadge from "@/components/command-os/StatusBadge";

interface SpecCardProps {
  spec: ProjectSpec;
}

export default function SpecCard({ spec }: SpecCardProps) {
  return (
    <Link
      href={`/specs/${spec.slug}`}
      className="group block rounded-2xl border border-borderSoft bg-surface/70 p-4 backdrop-blur-xl hover:border-[color:var(--color-goldSoft)]"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] text-[color:var(--color-gold)]">
            SPEC_ID {"//"} {spec.slug}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-textPrimary group-hover:text-[color:var(--color-gold)]">
            {spec.title}
          </h3>
          <p className="mt-2 text-sm text-textMuted">{spec.tagline}</p>
        </div>
        <StatusBadge status={spec.status} tone={spec.status === "DEPLOYED" ? "green" : "amber"} />
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {spec.metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl border border-borderSoft bg-background/50 p-3">
            <p className="font-mono text-[10px] tracking-[0.15em] text-textMuted">{metric.label}</p>
            <p className="mt-1 text-sm text-textPrimary">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {spec.stack.map((item) => (
          <span key={item} className="rounded-full border border-[color:var(--color-goldSoft)]/70 px-2 py-1 font-mono text-[11px] text-textMuted">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-textMuted group-hover:text-textPrimary">
        <span>
          {spec.domain.toUpperCase()} {"//"} {spec.module.toUpperCase().replace(/-/g, "_")}
        </span>
        <ChevronRight size={16} />
      </div>
    </Link>
  );
}
