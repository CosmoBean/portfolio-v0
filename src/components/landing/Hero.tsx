"use client";

import Link from "next/link";
import { useState, type CSSProperties, type PointerEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import clsx from "clsx";
import { ArrowDownRight, Bot, Brain, Cpu, GitBranch, HeartPulse, Server } from "lucide-react";
import Tag from "@/components/shared/Tag";
import {
  easeInOutStrong,
  easeOutStrong,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
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
  const defaultDomain =
    domainSummaries.find((entry) => entry.slug === "systems") ??
    domainSummaries[1] ??
    domainSummaries[0];

  const pointerX = useMotionValue(52);
  const pointerY = useMotionValue(38);
  const springX = useSpring(pointerX, { stiffness: 120, damping: 18, mass: 0.6 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 18, mass: 0.6 });
  const stageRotateX = useTransform(springY, [0, 100], [7, -7]);
  const stageRotateY = useTransform(springX, [0, 100], [-7, 7]);
  const stageTranslateX = useTransform(springX, [0, 100], [-6, 6]);
  const stageTranslateY = useTransform(springY, [0, 100], [-4, 4]);
  const spotlight = useMotionTemplate`
    radial-gradient(circle at ${springX}% ${springY}%, rgba(255, 239, 196, 0.22), transparent 20%),
    radial-gradient(circle at ${springX}% ${springY}%, rgba(212, 160, 83, 0.16), transparent 42%)
  `;

  if (!defaultDomain) {
    return null;
  }

  const nodeBySlug = Object.fromEntries(
    constellationNodes.map((node) => [node.slug, node]),
  ) as Record<string, (typeof constellationNodes)[number]>;
  const focusedSlug = activeDomain ?? defaultDomain.slug;
  const focusedDomain = domainSummaries.find((entry) => entry.slug === focusedSlug) ?? defaultDomain;

  const handleStagePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const nextX = ((event.clientX - bounds.left) / bounds.width) * 100;
    const nextY = ((event.clientY - bounds.top) / bounds.height) * 100;

    pointerX.set(Math.max(0, Math.min(100, nextX)));
    pointerY.set(Math.max(0, Math.min(100, nextY)));
  };

  const resetStagePointer = () => {
    if (reduceMotion) {
      return;
    }

    pointerX.set(52);
    pointerY.set(38);
  };

  return (
    <section className="hero-overlay relative overflow-hidden px-6 pb-20 pt-6 sm:px-10 lg:px-12">
      <div className="hero-overlay-layer pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,160,83,0.15),transparent_32%),radial-gradient(circle_at_84%_20%,rgba(196,125,62,0.14),transparent_34%),radial-gradient(circle_at_52%_82%,rgba(212,160,83,0.09),transparent_38%)]" />
      <div className="hero-overlay-layer pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-accent-amber/7 to-transparent" />
      <motion.div
        aria-hidden
        animate={reduceMotion ? undefined : { x: [0, 26, 0], y: [0, -18, 0], scale: [1, 1.04, 1] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 18, ease: easeInOutStrong, repeat: Number.POSITIVE_INFINITY }
        }
        className="hero-overlay-layer pointer-events-none absolute -left-16 top-24 h-72 w-72 rounded-full bg-accent-amber/10 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={reduceMotion ? undefined : { x: [0, -24, 0], y: [0, 14, 0], scale: [1.02, 1, 1.03] }}
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 20,
                ease: easeInOutStrong,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.3,
              }
        }
        className="hero-overlay-layer pointer-events-none absolute right-[-8rem] top-16 h-80 w-80 rounded-full bg-accent-copper/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-start gap-14 py-8 sm:py-10 lg:min-h-[calc(100svh-9rem)] lg:grid-cols-[1.05fr_0.95fr] lg:py-14">
        <motion.div
          variants={staggerContainer}
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
          className="max-w-3xl"
        >
          <motion.p variants={staggerItem} className="font-mono text-xs uppercase tracking-[0.32em] text-accent-amber">
            Sri Datta Bandreddi
          </motion.p>
          <motion.h1
            variants={staggerItem}
            className="mt-5 font-display text-[clamp(2.35rem,9.5vw,4.8rem)] leading-[0.92] text-text-primary sm:text-7xl lg:text-[5.6rem]"
          >
            <span className="block">AI engineering</span>
            <span className="block">with systems</span>
            <span className="block">discipline.</span>
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-[19rem] text-base leading-8 text-text-secondary sm:max-w-2xl sm:text-lg"
          >
            I work at the seam between modeling and infrastructure, building backend and AI systems that are explicit, performant, and maintainable, with a growing focus on AI4Healthcare.
          </motion.p>

          <motion.div variants={staggerItem} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/domains"
              className="motion-pill inline-flex w-full items-center justify-center rounded-full border border-accent-amber/35 bg-gradient-to-r from-accent-amber/20 via-accent-copper/12 to-accent-amber/18 px-5 py-3 text-sm font-medium text-text-primary shadow-[0_14px_34px_rgba(0,0,0,0.18)] sm:w-auto"
            >
              Explore Domains
            </Link>
            <Link
              href="/resume"
              className="motion-pill inline-flex w-full items-center justify-center rounded-full border border-border-subtle px-5 py-3 text-sm font-medium text-text-primary hover:border-accent-amber/30 hover:bg-surface/65 sm:w-auto"
            >
              Resume
            </Link>
            <a
              href={primaryEmail}
              className="motion-pill inline-flex w-full items-center justify-center rounded-full border border-border-subtle px-5 py-3 text-sm font-medium text-text-secondary hover:border-accent-copper/35 hover:text-text-primary sm:w-auto"
            >
              Contact
            </a>
          </motion.div>

          <motion.div variants={staggerItem} className="mt-8 flex flex-wrap gap-2">
            <Tag variant="metric">Production AI</Tag>
            <Tag variant="domain">AI4Healthcare</Tag>
            <Tag variant="tech" className="hidden sm:inline-flex">
              {greeting.subTitle}
            </Tag>
          </motion.div>

          <motion.div variants={staggerContainer} className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroSignals.map((signal) => (
              <motion.article
                key={signal.label}
                variants={staggerItem}
                className="rounded-[1.4rem] border border-border-subtle bg-card/58 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.14)] backdrop-blur-sm transition-[border-color,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-accent-amber/20 hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-accent-copper">{signal.label}</p>
                <p className="mt-3 text-lg text-text-primary">{signal.value}</p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{signal.detail}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.985 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.14, duration: 0.68, ease: easeOutStrong }}
          className="relative"
        >
          <motion.div
            onPointerMove={handleStagePointerMove}
            onPointerLeave={resetStagePointer}
            onPointerCancel={resetStagePointer}
            style={
              reduceMotion
                ? undefined
                : {
                    rotateX: stageRotateX,
                    rotateY: stageRotateY,
                    transformPerspective: 1400,
                  }
            }
            className="hero-stage relative overflow-hidden rounded-[2rem] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-6"
          >
            <motion.div
              aria-hidden
              style={reduceMotion ? undefined : { backgroundImage: spotlight }}
              className="pointer-events-none absolute inset-0 opacity-90"
            />
            <div className="hero-orbit pointer-events-none absolute -inset-[26%] opacity-70 blur-3xl" />
            <div className="hero-scan pointer-events-none absolute inset-y-10 left-[-30%] w-[56%] rounded-full blur-3xl opacity-80" />

            <motion.div
              style={reduceMotion ? undefined : { x: stageTranslateX, y: stageTranslateY }}
              className="relative"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-accent-copper">Practice map</p>
                  <p className="mt-2 text-sm text-text-secondary">
                    A live view of the technical stations shaping the portfolio and where the work is heading next.
                  </p>
                </div>
                <ArrowDownRight className="h-5 w-5 text-accent-amber" />
              </div>

              <div className="relative mt-6 aspect-[1.05] overflow-hidden rounded-[1.5rem] border border-border-subtle bg-obsidian/92">
                <div className="signal-grid pointer-events-none absolute inset-0 opacity-55" />
                <div className="signal-sweep pointer-events-none absolute left-[-12%] top-[10%] h-24 w-[58%] rounded-full bg-accent-amber/8 blur-3xl" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_26%_24%,rgba(212,160,83,0.14),transparent_30%),radial-gradient(circle_at_72%_72%,rgba(196,125,62,0.12),transparent_34%)]" />

                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {constellationEdges.map(([from, to], index) => {
                    const start = nodeBySlug[from];
                    const end = nodeBySlug[to];
                    const isActive = focusedSlug === from || focusedSlug === to;

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
                                opacity: isActive ? 0.94 : 0.24,
                              }
                        }
                        transition={{
                          duration: 0.62,
                          delay: reduceMotion ? 0 : 0.16 + index * 0.04,
                          ease: easeOutStrong,
                        }}
                        stroke="rgba(212, 160, 83, 0.8)"
                        strokeWidth={isActive ? 0.72 : 0.45}
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
                  const isFocused = focusedSlug === domain.slug;
                  const isNeighbor = focusedDomain.related.includes(domain.slug);

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
                        } as CSSProperties
                      }
                    >
                      <motion.div
                        initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 10 }}
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                opacity: 1,
                                scale: isFocused ? 1.08 : isNeighbor ? 1.02 : 1,
                                y: isFocused ? -4 : 0,
                              }
                        }
                        transition={{
                          delay: reduceMotion ? 0 : 0.3 + index * 0.06,
                          duration: 0.34,
                          ease: easeOutStrong,
                        }}
                        className="group flex w-28 flex-col items-center gap-2"
                      >
                        <div
                          className={clsx(
                            "absolute inset-x-2 top-0 h-10 rounded-full blur-2xl",
                            isFocused
                              ? "beacon-ring bg-accent-amber/32 opacity-85"
                              : isNeighbor
                                ? "bg-accent-copper/14 opacity-60"
                                : "bg-accent-amber/10 opacity-45",
                          )}
                        />
                        <div
                          className={clsx(
                            "relative flex h-14 w-14 items-center justify-center rounded-full border bg-surface/90 text-text-primary shadow-[0_0_0_1px_rgba(212,160,83,0.1),0_14px_35px_rgba(0,0,0,0.22)] transition-[border-color,background-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
                            isFocused
                              ? "border-accent-amber/60 bg-surface"
                              : "border-accent-amber/32 group-hover:border-accent-amber/52",
                          )}
                        >
                          {isFocused ? (
                            <div className="beacon-ring absolute inset-[-0.35rem] rounded-full border border-accent-amber/25" />
                          ) : null}
                          <Icon className="relative z-10 h-5 w-5" />
                        </div>
                        <div
                          className={clsx(
                            "rounded-full border px-3 py-1 text-center transition-[border-color,background-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
                            isFocused
                              ? "border-accent-amber/30 bg-obsidian/88"
                              : "border-border-subtle bg-obsidian/84 group-hover:border-accent-copper/25",
                          )}
                        >
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
                  initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.985 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, ease: easeOutStrong }}
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
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
