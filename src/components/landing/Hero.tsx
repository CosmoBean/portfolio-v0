"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Bot, Brain, Cpu, GitBranch, HeartPulse, Server } from "lucide-react";
import Tag from "@/components/shared/Tag";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { greeting, socialMediaLinks } from "@/lib/data";
import { domainSummaries } from "@/lib/domains";

const iconMap = {
  Brain,
  Cpu,
  Server,
  Bot,
  GitBranch,
  HeartPulse,
} as const;

const constellationNodes = [
  { slug: "deep-learning", x: 28, y: 18 },
  { slug: "ai-ml", x: 72, y: 22 },
  { slug: "systems", x: 20, y: 52 },
  { slug: "agentic-ai", x: 80, y: 50 },
  { slug: "mlops", x: 30, y: 82 },
  { slug: "applied-science", x: 68, y: 78 },
] as const;

const constellationEdges = [
  ["deep-learning", "ai-ml"],
  ["deep-learning", "applied-science"],
  ["ai-ml", "agentic-ai"],
  ["systems", "mlops"],
  ["systems", "agentic-ai"],
  ["applied-science", "agentic-ai"],
  ["mlops", "ai-ml"],
] as const;

const heroSignals = [
  {
    label: "Build axis",
    value: "Backend x AI",
    detail: "Production reliability, model delivery, and explicit system boundaries.",
  },
  {
    label: "Current vector",
    value: "AI4Healthcare",
    detail: "An increasing interest in healthcare systems where traceability and signal quality matter.",
  },
  {
    label: "Operating mode",
    value: "Clarity first",
    detail: "Measured outcomes, durable codepaths, and concrete tradeoffs over vague claims.",
  },
] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [activeDomain, setActiveDomain] = useState<string | null>(null);
  const primaryEmail =
    socialMediaLinks.find((link) => link.name === "Gmail")?.link ?? "mailto:sbandred@andrew.cmu.edu";
  const defaultDomain = domainSummaries[1] ?? domainSummaries[0];

  if (!defaultDomain) {
    return null;
  }

  const nodeBySlug = Object.fromEntries(
    constellationNodes.map((node) => [node.slug, node]),
  ) as Record<string, (typeof constellationNodes)[number]>;
  const focusedDomain = domainSummaries.find((entry) => entry.slug === activeDomain) ?? defaultDomain;

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-6 sm:px-10 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,160,83,0.15),transparent_32%),radial-gradient(circle_at_84%_20%,rgba(196,125,62,0.14),transparent_34%),radial-gradient(circle_at_52%_82%,rgba(212,160,83,0.09),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-accent-amber/7 to-transparent" />
      <motion.div
        aria-hidden
        animate={reduceMotion ? undefined : { x: [0, 26, 0], y: [0, -18, 0], scale: [1, 1.04, 1] }}
        transition={reduceMotion ? undefined : { duration: 18, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
        className="pointer-events-none absolute -left-16 top-24 h-72 w-72 rounded-full bg-accent-amber/10 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={reduceMotion ? undefined : { x: [0, -24, 0], y: [0, 14, 0], scale: [1.02, 1, 1.03] }}
        transition={reduceMotion ? undefined : { duration: 20, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
        className="pointer-events-none absolute right-[-8rem] top-16 h-80 w-80 rounded-full bg-accent-copper/10 blur-3xl"
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-9rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p variants={staggerItem} className="font-mono text-xs uppercase tracking-[0.32em] text-accent-amber">
            Sri Datta Bandreddi
          </motion.p>
          <motion.h1 variants={staggerItem} className="mt-5 font-display text-5xl text-text-primary sm:text-7xl lg:text-[5.6rem]">
            AI engineering with systems discipline.
          </motion.h1>
          <motion.p variants={staggerItem} className="mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
            I work at the seam between modeling and infrastructure, building backend and AI systems that are explicit, performant, and maintainable, with a growing focus on AI4Healthcare.
          </motion.p>
          <motion.div variants={staggerItem} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/domains"
              className="inline-flex items-center justify-center rounded-full border border-accent-amber/35 bg-gradient-to-r from-accent-amber/20 via-accent-copper/12 to-accent-amber/18 px-5 py-3 text-sm font-medium text-text-primary transition hover:-translate-y-0.5 hover:border-accent-amber/55"
            >
              Explore Domains
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center rounded-full border border-border-subtle px-5 py-3 text-sm font-medium text-text-primary transition hover:border-accent-amber/30 hover:bg-surface/65"
            >
              Resume
            </Link>
            <a
              href={primaryEmail}
              className="inline-flex items-center justify-center rounded-full border border-border-subtle px-5 py-3 text-sm font-medium text-text-secondary transition hover:border-accent-copper/35 hover:text-text-primary"
            >
              Contact
            </a>
          </motion.div>
          <motion.div variants={staggerItem} className="mt-8 flex flex-wrap gap-2">
            <Tag variant="metric">Production AI</Tag>
            <Tag variant="domain">AI4Healthcare</Tag>
            <Tag variant="tech">{greeting.subTitle}</Tag>
          </motion.div>
          <motion.div variants={staggerItem} className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroSignals.map((signal) => (
              <div key={signal.label} className="rounded-[1.4rem] border border-border-subtle bg-card/58 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.14)] backdrop-blur-sm">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-accent-copper">{signal.label}</p>
                <p className="mt-3 text-lg text-text-primary">{signal.value}</p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{signal.detail}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.55, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-border-subtle bg-card/78 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-6">
            <div className="ambient-mesh pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(212,160,83,0.12),transparent_34%),radial-gradient(circle_at_82%_20%,rgba(196,125,62,0.1),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.015),transparent)]" />
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-accent-copper">Practice map</p>
                <p className="mt-2 text-sm text-text-secondary">A live view of the technical stations shaping the portfolio and where the work is heading next.</p>
              </div>
              <ArrowDownRight className="h-5 w-5 text-accent-amber" />
            </div>

            <div className="relative mt-6 aspect-[1.05] overflow-hidden rounded-[1.5rem] border border-border-subtle bg-obsidian/92">
              <div className="signal-grid pointer-events-none absolute inset-0 opacity-55" />
              <div className="signal-sweep pointer-events-none absolute left-[-12%] top-[10%] h-24 w-[58%] rounded-full bg-accent-amber/8 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_26%_24%,rgba(212,160,83,0.14),transparent_30%),radial-gradient(circle_at_72%_72%,rgba(196,125,62,0.12),transparent_34%)]" />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {constellationEdges.map(([from, to]) => {
                  const start = nodeBySlug[from];
                  const end = nodeBySlug[to];
                  const isActive = activeDomain ? from === activeDomain || to === activeDomain : false;

                  return (
                    <motion.line
                      key={`${from}-${to}`}
                      x1={start.x}
                      y1={start.y}
                      x2={end.x}
                      y2={end.y}
                      initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              pathLength: 1,
                              opacity: isActive ? 0.95 : 0.28,
                            }
                      }
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      stroke="rgba(212, 160, 83, 0.8)"
                      strokeWidth={isActive ? 0.7 : 0.45}
                    />
                  );
                })}
              </svg>

              {constellationNodes.map((node, index) => {
                const domain = domainSummaries.find((entry) => entry.slug === node.slug);

                if (!domain) {
                  return null;
                }

                const Icon = iconMap[domain.icon];
                const isActive = activeDomain === domain.slug;

                return (
                  <Link
                    key={domain.slug}
                    href={`/domains/${domain.slug}`}
                    onMouseEnter={() => setActiveDomain(domain.slug)}
                    onMouseLeave={() => setActiveDomain(null)}
                    onFocus={() => setActiveDomain(domain.slug)}
                    onBlur={() => setActiveDomain(null)}
                    className="absolute left-[var(--node-left)] top-[var(--node-top)] -translate-x-1/2 -translate-y-1/2"
                    style={
                      {
                        "--node-left": `${node.x}%`,
                        "--node-top": `${node.y}%`,
                      } as React.CSSProperties
                    }
                  >
                    <motion.div
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              scale: isActive ? 1.06 : [1, 1.02, 1],
                              y: isActive ? -4 : [0, -1, 0],
                            }
                      }
                      transition={{
                        duration: reduceMotion ? 0 : 3.6 + index * 0.18,
                        repeat: isActive || reduceMotion ? 0 : Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="group flex w-28 flex-col items-center gap-2"
                    >
                      <div className="pulse-halo absolute inset-x-3 top-1 h-8 rounded-full bg-accent-amber/18 blur-xl opacity-65" />
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-accent-amber/32 bg-surface/90 text-text-primary shadow-[0_0_0_1px_rgba(212,160,83,0.1),0_14px_35px_rgba(0,0,0,0.22)] transition group-hover:border-accent-amber/55">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="rounded-full border border-border-subtle bg-obsidian/84 px-3 py-1 text-center">
                        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-text-secondary">{domain.title}</p>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div
                key={focusedDomain.slug}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="rounded-[1.5rem] border border-border-subtle bg-surface/62 p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-accent-copper">Active station</p>
                    <h3 className="mt-2 text-xl text-text-primary">{focusedDomain.title}</h3>
                  </div>
                  <Tag variant="metric">{focusedDomain.highlightMetric}</Tag>
                </div>
                <p className="mt-3 text-sm leading-7 text-text-secondary">{focusedDomain.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {focusedDomain.skills.slice(0, 3).map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </motion.div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[1.5rem] border border-border-subtle bg-surface/50 p-4">
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-accent-copper">Trajectory</p>
                  <p className="mt-2 text-lg text-text-primary">AI4Healthcare</p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">Interest in healthcare-facing AI where robustness and interpretability matter.</p>
                </div>
                <div className="rounded-[1.5rem] border border-border-subtle bg-surface/50 p-4">
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-accent-copper">Mapped work</p>
                  <p className="mt-2 text-lg text-text-primary">{focusedDomain.projectCount} case studies</p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">Hover through the graph to see how adjacent domains connect into the portfolio.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
