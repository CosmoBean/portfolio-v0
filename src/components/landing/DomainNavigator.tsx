import Link from "next/link";
import { ArrowUpRight, Bot, Brain, Cpu, GitBranch, HeartPulse, Server } from "lucide-react";
import AnimatedCard from "@/components/shared/AnimatedCard";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import Tag from "@/components/shared/Tag";
import { domainSummaries } from "@/lib/domains";

const iconMap = {
  Brain,
  Cpu,
  Server,
  Bot,
  GitBranch,
  HeartPulse,
} as const;

export default function DomainNavigator() {
  return (
    <section id="domains" className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Domains"
          title="Six stations. One practice."
          subtitle="Each domain is a different operating mode, but the throughline is the same: technical depth, explicit tradeoffs, and measurable outcomes."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {domainSummaries.map((domain, index) => {
            const Icon = iconMap[domain.icon];
            const glowColor = index % 2 === 0 ? "amber" : "copper";

            return (
              <ScrollReveal key={domain.slug} delay={index * 0.05}>
                <AnimatedCard href={`/domains/${domain.slug}`} glowColor={glowColor} className="h-full">
                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border-subtle bg-surface/80 text-text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-accent-copper" />
                    </div>
                    <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-accent-amber">
                      {domain.projectCount} projects
                    </p>
                    <h3 className="mt-3 font-display text-3xl text-text-primary">{domain.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-text-secondary">{domain.tagline}</p>
                    <p className="mt-4 text-sm leading-7 text-text-secondary/90">{domain.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <Tag variant="metric">{domain.highlightMetric}</Tag>
                      <Tag variant="domain">{domain.slug}</Tag>
                    </div>
                    <div className="mt-8 flex items-center gap-2 text-sm text-text-primary">
                      <span>Open domain</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </AnimatedCard>
              </ScrollReveal>
            );
          })}
        </div>
        <div className="mt-6 text-sm text-text-secondary">
          Prefer a linear path? <Link href="/domains" className="text-text-primary underline decoration-accent-amber/45 underline-offset-4">Browse all domains</Link>.
        </div>
      </div>
    </section>
  );
}
