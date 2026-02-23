import React from "react";
import Link from "next/link";
import CommandPageShell from "@/components/command-os/CommandPageShell";
import SpecCard from "@/components/command-os/SpecCard";
import StatusBadge from "@/components/command-os/StatusBadge";
import {
  getModuleById,
  getSpecsByModule,
  modulePageNarratives,
  type ModuleId,
} from "@/lib/command-os-data";

interface ModulePageProps {
  moduleId: ModuleId;
}

export default function ModulePage({ moduleId }: ModulePageProps) {
  const module = getModuleById(moduleId);
  const narrative = modulePageNarratives[moduleId];
  const specs = getSpecsByModule(moduleId);

  if (!module) {
    return null;
  }

  return (
    <CommandPageShell eyebrow={module.label} title={module.title} description={narrative.summary}>
      <section className="mb-4 rounded-2xl border border-borderSoft bg-surface/70 p-4 backdrop-blur-xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold font-display">{narrative.heading}</h2>
            <p className="mt-2 text-sm text-textMuted">{module.description}</p>
          </div>
          <StatusBadge status={module.status} tone={module.status === "ONLINE" ? "green" : "amber"} />
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-borderSoft bg-background/50 p-4">
            <p className="font-mono text-[10px] tracking-[0.18em] text-textMuted">FOCUS AREAS</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {module.focusAreas.map((item) => (
                <span key={item} className="rounded-full border border-[color:var(--color-goldSoft)]/70 px-3 py-1 text-xs text-textMuted">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-borderSoft bg-background/50 p-4">
            <p className="font-mono text-[10px] tracking-[0.18em] text-textMuted">MODULE STATS</p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {module.quickStats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-borderSoft bg-surface/50 p-3">
                  <p className="font-mono text-[10px] text-textMuted">{stat.label}</p>
                  <p className="mt-1 text-xs text-textPrimary">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-4 rounded-2xl border border-borderSoft bg-surface/70 p-4 backdrop-blur-xl">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-[color:var(--color-gold)]">SPEC INDEX</p>
            <h2 className="mt-1 text-xl font-semibold font-display">Module Specifications</h2>
          </div>
          <Link href="/experiments" className="text-sm text-textMuted hover:text-textPrimary">
            View experiments
          </Link>
        </div>
        <div className="grid gap-3">
          {specs.map((spec) => (
            <SpecCard key={spec.slug} spec={spec} />
          ))}
        </div>
      </section>
    </CommandPageShell>
  );
}
