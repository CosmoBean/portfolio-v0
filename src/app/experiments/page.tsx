import CommandPageShell from "@/components/command-os/CommandPageShell";
import StatusBadge from "@/components/command-os/StatusBadge";
import { experimentLogs } from "@/lib/command-os-data";

export default function ExperimentsPage() {
  return (
    <CommandPageShell
      eyebrow="MODULE_04 // EXPERIMENTS"
      title="Experiments & Postmortems"
      description="Honest iteration logs, failed attempts, and what changed next. This route is meant to show engineering judgment, not only polished outcomes."
    >
      <section className="grid gap-3">
        {experimentLogs.map((log) => (
          <article key={log.id} className="rounded-2xl border border-borderSoft bg-surface/70 p-4 backdrop-blur-xl">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[10px] tracking-[0.18em] text-[color:var(--color-gold)]">{log.dateLabel}</p>
                <h2 className="mt-2 text-lg font-semibold font-display">{log.title}</h2>
              </div>
              <StatusBadge status={log.outcome} tone={log.outcome === "ABANDONED" ? "slate" : "amber"} />
            </div>
            <p className="mt-3 text-sm text-textMuted">{log.summary}</p>
            <div className="mt-4 rounded-xl border border-borderSoft bg-background/50 p-3">
              <p className="font-mono text-[10px] tracking-[0.18em] text-textMuted">LESSON</p>
              <p className="mt-2 text-sm text-textPrimary">{log.lesson}</p>
            </div>
          </article>
        ))}
      </section>
    </CommandPageShell>
  );
}
