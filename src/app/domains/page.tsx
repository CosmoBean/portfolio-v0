import type { Metadata } from "next";
import { domainSummaries } from "@/lib/domains";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Domains",
  description: "Explore six technical domains spanning systems, AI/ML, deep learning, MLOps, agentic AI, and applied science.",
  path: "/domains",
});

export default function DomainsIndexPage() {
  return (
    <main className="min-h-screen px-6 py-20 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-5xl rounded-[2rem] border border-border-subtle bg-card/72 p-8 backdrop-blur-sm">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-copper">Domains</p>
        <h1 className="mt-4 font-display text-4xl text-text-primary sm:text-5xl">Domain shells are scaffolded.</h1>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {domainSummaries.map((domain) => (
            <article key={domain.slug} className="rounded-2xl border border-border-subtle bg-surface/60 p-5">
              <h2 className="font-display text-2xl text-text-primary">{domain.title}</h2>
              <p className="mt-3 text-sm leading-7 text-text-secondary">{domain.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
