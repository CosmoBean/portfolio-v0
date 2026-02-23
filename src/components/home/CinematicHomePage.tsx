"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { experience, greeting, projects, socialMediaLinks } from "@/lib/data";

type FeaturedProject = {
  title: string;
  category: string;
  impact: string;
  summary: string;
  metrics: string[];
  stack: string[];
  href: string;
  variant: "platform" | "signals" | "media";
};

const featuredProjects: FeaturedProject[] = [
  {
    title: "AI Filter Platform Scaling at Phenom",
    category: "Production Systems",
    impact: "40% faster query response times for AI-driven filters across 100+ clients.",
    summary:
      "Scaled a high-throughput filter layer by improving PostgreSQL sharding behavior and system-level query performance under multi-tenant production load.",
    metrics: ["40% faster queries", "100+ clients", "3-month delivery"],
    stack: ["PostgreSQL", "Sharding", "Performance Tuning", "System Design"],
    href: "/resume",
    variant: "platform",
  },
  {
    title: "EMG Hand Gesture Recognition",
    category: "Biomedical ML",
    impact: "Achieved 85-92% gesture classification accuracy on EMG signals.",
    summary:
      "Built sequence and convolutional models for biosignal classification, with attention-driven experiments to improve robustness across gesture classes.",
    metrics: ["85-92% accuracy", "EMG signals", "LSTM/CNN + attention"],
    stack: ["PyTorch", "Python", "Deep Learning", "Signal Processing"],
    href: projects.find((project) => project.title === "EMG Hand Gesture Recognition")?.link || "#",
    variant: "signals",
  },
  {
    title: "YouTube Digest",
    category: "Applied AI Product",
    impact: "Reduced watch time by up to 70% through concise AI-generated summaries.",
    summary:
      "Designed an async summarization pipeline for video content using FastAPI and Gemini APIs, focused on usable output quality and processing flow efficiency.",
    metrics: ["Up to 70% time saved", "Async pipeline", "FastAPI + Gemini"],
    stack: ["Python", "FastAPI", "Gemini API", "Async Processing"],
    href: projects.find((project) => project.title === "YouTube Digest")?.link || "#",
    variant: "media",
  },
];

const pillars = [
  {
    title: "Systems",
    label: "Production Engineering",
    text: "Scalable backend architecture, performance tuning, reliability-minded delivery, and end-to-end execution under real constraints.",
  },
  {
    title: "Research",
    label: "Modeling + Evaluation",
    text: "From problem framing to benchmarks and iteration loops, with emphasis on signal quality and deployment viability over novelty theater.",
  },
  {
    title: "Biomedical",
    label: "Signal Intelligence",
    text: "A long-term focus on biosignals, imaging, and clinically meaningful interfaces where engineering rigor directly affects outcomes.",
  },
];

const experienceHighlights = [
  {
    role: "Product Development Engineer",
    company: "Phenom",
    period: "Dec 2023 - Jul 2025",
    line: "Scaled AI-driven filtering infrastructure, led refactors, and built shared cryptographic services across multi-tenant systems.",
    metric: "40% faster query response",
  },
  {
    role: "Software Engineer",
    company: "BYJU'S",
    period: "Jul 2022 - Dec 2023",
    line: "Delivered backend CRM services, optimized cloud scaling, and led auth platform work while mentoring early-career engineers.",
    metric: "70% AWS ECS cost reduction",
  },
  {
    role: "ML Intern",
    company: "Phenom",
    period: "May 2021 - Jun 2022",
    line: "Built NLP classification and production validation services with API and database integrations for recommendation workflows.",
    metric: "Production-scale validation service",
  },
];

function SectionReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.section>
  );
}

function AbstractProjectVisual({ variant }: { variant: FeaturedProject["variant"] }) {
  const paletteByVariant = {
    platform:
      "from-amber-200/15 via-orange-400/12 to-rose-300/10 border-white/8",
    signals:
      "from-orange-200/15 via-amber-500/10 to-zinc-200/8 border-white/10",
    media:
      "from-orange-300/15 via-red-400/12 to-amber-300/10 border-white/8",
  } as const;

  return (
    <div
      className={`relative h-52 overflow-hidden rounded-2xl border bg-gradient-to-br ${paletteByVariant[variant]}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(251,191,36,0.24),transparent_45%),radial-gradient(circle_at_78%_22%,rgba(249,115,22,0.2),transparent_46%),radial-gradient(circle_at_62%_78%,rgba(217,119,6,0.14),transparent_52%)]" />
      <div className="absolute inset-0 opacity-80">
        <div className="absolute left-4 top-4 h-1 w-20 rounded-full bg-white/35" />
        <div className="absolute left-4 top-8 h-1 w-12 rounded-full bg-white/20" />
        <div className="absolute right-4 top-4 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-amber-200/60" />
          <span className="h-2 w-2 rounded-full bg-orange-300/50" />
          <span className="h-2 w-2 rounded-full bg-zinc-100/35" />
        </div>
        <div className="absolute inset-x-4 bottom-4 top-14 rounded-xl border border-white/10 bg-black/20 p-4">
          <div className="grid h-full grid-cols-12 gap-2">
            <div className="col-span-7 rounded-lg border border-white/10 bg-white/5 p-2">
              <div className="mb-2 h-1.5 w-16 rounded-full bg-white/30" />
              <div className="space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-white/10" />
                <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
                <div className="h-1.5 w-3/5 rounded-full bg-white/10" />
              </div>
            </div>
            <div className="col-span-5 flex flex-col gap-2">
              <div className="h-1/2 rounded-lg border border-white/10 bg-gradient-to-br from-white/10 to-transparent" />
              <div className="grid h-1/2 grid-cols-2 gap-2">
                <div className="rounded-lg border border-white/10 bg-white/5" />
                <div className="rounded-lg border border-white/10 bg-white/5" />
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
      </div>
    </div>
  );
}

export default function CinematicHomePage() {
  const reduceMotion = useReducedMotion();
  const primaryEmail =
    socialMediaLinks.find((link) => link.name === "Gmail")?.link || "mailto:sbandred@andrew.cmu.edu";
  const linkedIn = socialMediaLinks.find((link) => link.name === "LinkedIn")?.link || "#";
  const github = socialMediaLinks.find((link) => link.name === "Github")?.link || "#";
  const totalRoles = experience.sections.reduce(
    (count, section) => count + section.experiences.length,
    0,
  );

  return (
    <main className="ember-atmosphere relative min-h-screen overflow-x-clip bg-[#09080a] text-zinc-100">
      <div className="ember-noise pointer-events-none absolute inset-0 opacity-55" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(251,146,60,0.14),transparent_42%),radial-gradient(circle_at_84%_16%,rgba(217,119,6,0.09),transparent_44%),radial-gradient(circle_at_58%_88%,rgba(180,83,9,0.1),transparent_46%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 pt-5 sm:px-8 sm:pb-20 sm:pt-6 lg:px-12">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12 flex flex-col items-start justify-between gap-4 sm:mb-16 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-amber-200/70">Sri Datta Bandreddi</p>
            <p className="mt-1 text-sm text-zinc-400">AI systems, architecture, and biomedical signal intelligence</p>
          </div>
          <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:justify-end sm:gap-3">
            <Link
              href="/resume"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:border-amber-200/40 hover:bg-white/10"
            >
              Resume
            </Link>
            <a
              href={primaryEmail}
              className="rounded-full border border-amber-300/25 bg-gradient-to-r from-amber-200/12 via-orange-300/10 to-amber-500/12 px-4 py-2 text-sm text-amber-50 transition hover:border-amber-200/45 hover:from-amber-200/18 hover:to-orange-300/18"
            >
              Contact
            </a>
          </div>
        </motion.header>

        <SectionReveal className="mb-16 grid items-end gap-10 sm:mb-24 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.26em] text-zinc-400">
              {greeting.nickname} / portfolio v2
            </p>
            <h1 className="font-display text-4xl leading-[0.95] text-zinc-50 sm:text-6xl lg:text-7xl">
              Engineering signal
              <br />
              from complex systems.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
              I build production-grade AI and backend systems with a bias toward clarity, performance, and long-term maintainability, while pushing deeper into biomedical intelligence.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href={primaryEmail}
                className="w-full rounded-full border border-amber-200/25 bg-gradient-to-r from-amber-200/15 via-orange-300/15 to-amber-500/15 px-5 py-2.5 text-center text-sm font-medium text-amber-50 transition duration-300 hover:-translate-y-0.5 hover:border-amber-100/45 sm:w-auto"
              >
                Start a conversation
              </a>
              <Link
                href="/resume"
                className="w-full rounded-full border border-white/10 px-5 py-2.5 text-center text-sm font-medium text-zinc-200 transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/5 sm:w-auto"
              >
                Resume
              </Link>
              <a
                href={greeting.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-transparent px-4 py-2.5 text-sm text-zinc-400 transition duration-300 hover:text-zinc-200"
              >
                Master CV
              </a>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-transparent px-4 py-2.5 text-sm text-zinc-400 transition duration-300 hover:text-zinc-200"
              >
                GitHub
              </a>
              <a
                href={linkedIn}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-transparent px-4 py-2.5 text-sm text-zinc-400 transition duration-300 hover:text-zinc-200"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 bg-[radial-gradient(circle_at_30%_40%,rgba(251,146,60,0.14),transparent_50%),radial-gradient(circle_at_75%_55%,rgba(180,83,9,0.12),transparent_52%)] blur-2xl" />
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="editorial-panel relative overflow-hidden rounded-3xl p-6 sm:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(251,191,36,0.1),transparent_45%),radial-gradient(circle_at_78%_22%,rgba(249,115,22,0.08),transparent_50%)]" />
              <div className="relative">
                <p className="mb-6 text-xs uppercase tracking-[0.24em] text-amber-200/70">
                  Current focus
                </p>
                <div className="space-y-4">
                  {[
                    "Production AI infrastructure that survives real traffic patterns",
                    "Research systems with measurable benchmark discipline",
                    "Biomedical signal work with engineering-first execution",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={reduceMotion ? false : { opacity: 0, x: 8 }}
                      animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                      transition={{
                        delay: reduceMotion ? 0 : 0.14 + index * 0.08,
                        duration: 0.45,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-amber-300 to-orange-400" />
                      <p className="text-sm leading-6 text-zinc-300">{item}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Experience</p>
                    <p className="mt-2 text-xl font-semibold text-zinc-100">{totalRoles}+ roles</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Primary axis</p>
                    <p className="mt-2 text-xl font-semibold text-zinc-100">Systems x AI</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionReveal>

        <SectionReveal className="mb-16 sm:mb-24">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Pillars</p>
              <h2 className="mt-3 font-display text-3xl text-zinc-50 sm:text-4xl">
                A practice built across systems, research, and signal.
              </h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: reduceMotion ? 0 : index * 0.06,
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="editorial-panel group rounded-2xl p-6"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-amber-200/70">{pillar.label}</p>
                <h3 className="mt-3 font-display text-2xl text-zinc-100">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-300">{pillar.text}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-amber-200/30 to-transparent transition duration-500 group-hover:from-amber-100/55" />
              </motion.article>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="mb-16 sm:mb-24">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Featured work</p>
            <h2 className="mt-3 font-display text-3xl text-zinc-50 sm:text-4xl">
              Selected builds with measurable outcomes.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-400 sm:text-base">
              Three projects that best represent the mix: platform-scale performance work, biomedical modeling, and applied AI product execution.
            </p>
          </div>

          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  delay: reduceMotion ? 0 : index * 0.08,
                  duration: 0.55,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="editorial-panel grid gap-6 rounded-3xl p-5 sm:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8"
              >
                <div className="order-2 lg:order-1">
                  <p className="text-xs uppercase tracking-[0.22em] text-amber-200/70">{project.category}</p>
                  <h3 className="mt-3 font-display text-2xl leading-tight text-zinc-50 sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-zinc-200">{project.impact}</p>
                  <p className="mt-4 text-sm leading-6 text-zinc-400">{project.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs tracking-[0.06em] text-zinc-300"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="text-xs text-zinc-500">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-2 text-sm text-amber-100 transition hover:text-amber-50"
                    >
                      <span className="h-px w-8 bg-amber-200/45" />
                      View details
                    </Link>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <AbstractProjectVisual variant={project.variant} />
                </div>
              </motion.article>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="mb-16 grid gap-5 sm:mb-24 sm:gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="editorial-panel rounded-3xl p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Identity</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-zinc-50 sm:text-4xl">
              I optimize for durable systems, not demo-day optics.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300">
              My work sits at the intersection of production engineering and applied intelligence: building systems that are measurable, maintainable, and honest about failure modes. I care about shipping outcomes, not just prototypes.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">
              Long-term, that discipline points toward biomedical intelligence, where reliability, signal quality, and implementation details matter as much as model performance.
            </p>
          </div>

          <div className="editorial-panel rounded-3xl p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Working style</p>
            <div className="mt-5 space-y-4">
              {[
                ["Clarity first", "Strong problem framing, explicit constraints, and clear tradeoffs before implementation."],
                ["Metrics over adjectives", "Performance, reliability, and delivery impact are the baseline language of the work."],
                ["Research with discipline", "Experiments are useful only when evaluation and next steps are equally concrete."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                  <p className="text-sm font-medium text-zinc-100">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="mb-16 sm:mb-24">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Experience</p>
            <h2 className="mt-3 font-display text-3xl text-zinc-50 sm:text-4xl">
              Compressed timeline, technical signal forward.
            </h2>
          </div>
          <div className="editorial-panel rounded-3xl p-4 sm:p-6">
            <div className="space-y-3">
              {experienceHighlights.map((item) => (
                <div
                  key={`${item.role}-${item.company}`}
                  className="grid gap-3 rounded-2xl border border-white/8 bg-white/[0.02] p-4 sm:gap-4 lg:grid-cols-[1.1fr_0.9fr_auto]"
                >
                  <div>
                    <p className="text-base font-medium text-zinc-100">
                      {item.role} <span className="text-zinc-500">/ {item.company}</span>
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{item.line}</p>
                  </div>
                  <div className="text-sm text-zinc-300 lg:self-center">{item.metric}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-zinc-500 lg:self-center lg:text-right">
                    {item.period}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="mb-4 sm:mb-8">
          <div className="editorial-panel relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(251,191,36,0.12),transparent_44%),radial-gradient(circle_at_78%_24%,rgba(234,88,12,0.09),transparent_50%),radial-gradient(circle_at_55%_85%,rgba(180,83,9,0.08),transparent_52%)]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Next step</p>
                <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-zinc-50 sm:text-4xl">
                  If you need someone who can move from research ambiguity to production reality, let&apos;s talk.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">
                  I&apos;m open to conversations around AI systems, platform engineering, applied ML, and biomedical intelligence work.
                </p>
              </div>
              <div className="flex w-full flex-wrap gap-2.5 sm:w-auto sm:gap-3">
                <a
                  href={primaryEmail}
                  className="w-full rounded-full border border-amber-200/25 bg-gradient-to-r from-amber-200/14 via-orange-300/14 to-amber-500/14 px-5 py-2.5 text-center text-sm font-medium text-amber-50 transition hover:border-amber-100/45 sm:w-auto"
                >
                  Email
                </a>
                <Link
                  href="/resume"
                  className="w-full rounded-full border border-white/10 px-5 py-2.5 text-center text-sm font-medium text-zinc-200 transition hover:border-white/25 hover:bg-white/5 sm:w-auto"
                >
                  Resume
                </Link>
                <a
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-center text-sm text-zinc-300 transition hover:border-white/25 hover:bg-white/5 hover:text-zinc-100 sm:w-auto"
                >
                  Master CV
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>

      </div>
    </main>
  );
}
