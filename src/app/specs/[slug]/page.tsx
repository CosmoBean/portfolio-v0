import Link from "next/link";
import { notFound } from "next/navigation";
import CommandPageShell from "@/components/command-os/CommandPageShell";
import StatusBadge from "@/components/command-os/StatusBadge";
import { getSpecBySlug, projectSpecs } from "@/lib/command-os-data";

interface SpecPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectSpecs.map((spec) => ({ slug: spec.slug }));
}

export default async function SpecDetailPage({ params }: SpecPageProps) {
  const { slug } = await params;
  const spec = getSpecBySlug(slug);

  if (!spec) {
    notFound();
  }

  return (
    <CommandPageShell
      eyebrow={`SPEC_ID // ${spec.slug}`}
      title={spec.title}
      description={spec.tagline}
      actions={spec.artifactLinks.map((link) => ({ label: link.label, href: link.href }))}
    >
      <section className="mb-4 rounded-2xl border border-borderSoft bg-surface/70 p-4 backdrop-blur-xl">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-textMuted">
              DOMAIN // {spec.domain.toUpperCase()} • MODULE // {spec.module.toUpperCase().replace(/-/g, "_")}
            </p>
            <p className="mt-2 text-sm text-textMuted">{spec.summary}</p>
          </div>
          <StatusBadge status={spec.status} tone={spec.status === "DEPLOYED" ? "green" : "amber"} />
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
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
      </section>

      <section className="mb-4 grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-borderSoft bg-surface/70 p-4 backdrop-blur-xl">
          <p className="font-mono text-[10px] tracking-[0.2em] text-[color:var(--color-gold)]">PROBLEM / CONTEXT</p>
          <ul className="mt-3 space-y-2 text-sm text-textMuted">
            {spec.notes.map((item) => (
              <li key={item} className="rounded-lg border border-borderSoft bg-background/45 px-3 py-2">{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-borderSoft bg-surface/70 p-4 backdrop-blur-xl">
          <p className="font-mono text-[10px] tracking-[0.2em] text-[color:var(--color-gold)]">CONSTRAINTS</p>
          <ul className="mt-3 space-y-2 text-sm text-textMuted">
            {spec.constraints.map((item) => (
              <li key={item} className="rounded-lg border border-borderSoft bg-background/45 px-3 py-2">{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mb-4 rounded-2xl border border-borderSoft bg-surface/70 p-4 backdrop-blur-xl">
        <p className="font-mono text-[10px] tracking-[0.2em] text-[color:var(--color-gold)]">ARCHITECTURE MAP</p>
        <ol className="mt-3 grid gap-2 md:grid-cols-2">
          {spec.architecture.map((step, index) => (
            <li key={step} className="rounded-xl border border-borderSoft bg-background/45 p-3 text-sm text-textMuted">
              <p className="font-mono text-[10px] tracking-[0.15em] text-accent">STEP_{index + 1}</p>
              <p className="mt-2">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-2xl border border-borderSoft bg-surface/70 p-4 backdrop-blur-xl">
          <p className="font-mono text-[10px] tracking-[0.2em] text-[color:var(--color-gold)]">RESULTS</p>
          <ul className="mt-3 space-y-2 text-sm text-textMuted">
            {spec.results.map((item) => (
              <li key={item} className="rounded-lg border border-borderSoft bg-background/45 px-3 py-2">{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-borderSoft bg-surface/70 p-4 backdrop-blur-xl">
          <p className="font-mono text-[10px] tracking-[0.2em] text-[color:var(--color-gold)]">FAILURE MODES</p>
          <ul className="mt-3 space-y-2 text-sm text-textMuted">
            {spec.failureModes.map((item) => (
              <li key={item} className="rounded-lg border border-borderSoft bg-background/45 px-3 py-2">{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-borderSoft bg-surface/70 p-4 backdrop-blur-xl">
          <p className="font-mono text-[10px] tracking-[0.2em] text-[color:var(--color-gold)]">NEXT ITERATION</p>
          <ul className="mt-3 space-y-2 text-sm text-textMuted">
            {spec.nextIteration.map((item) => (
              <li key={item} className="rounded-lg border border-borderSoft bg-background/45 px-3 py-2">{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <div className="mt-4">
        <Link href={`/modules/${spec.module}`} className="text-sm text-textMuted hover:text-textPrimary">
          Return to module: {spec.module}
        </Link>
      </div>
    </CommandPageShell>
  );
}
