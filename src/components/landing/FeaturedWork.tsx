"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import AnimatedCard from "@/components/shared/AnimatedCard";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import Tag from "@/components/shared/Tag";

const featuredProjects = [
  {
    category: "Production Systems",
    description:
      "Scaled a high-throughput AI filter layer by improving PostgreSQL sharding behavior, tightening query paths, and rolling out safely across a multi-tenant production surface.",
    href: "/projects/phenom-filter-scaling",
    metric: "40% faster query response",
    slug: "phenom-filter-scaling",
    tech: ["PostgreSQL", "Sharding", "Performance Tuning", "System Design"],
    title: "AI Filter Platform Scaling",
    variant: "amber",
  },
  {
    category: "Biomedical ML",
    description:
      "Built sequence and convolutional models for EMG gesture classification, then iterated on attention-assisted architectures to improve robustness across gesture classes.",
    href: "/projects/emg-gesture-recognition",
    metric: "85-92% gesture accuracy",
    slug: "emg-gesture-recognition",
    tech: ["PyTorch", "CNN/LSTM", "Attention", "Signal Processing"],
    title: "EMG Gesture Recognition",
    variant: "copper",
  },
  {
    category: "Applied AI Product",
    description:
      "Designed an asynchronous summarization pipeline for long-form video, prioritizing usable output quality, orchestration reliability, and user time saved.",
    href: "/projects/youtube-digest",
    metric: "Up to 70% watch time saved",
    slug: "youtube-digest",
    tech: ["FastAPI", "Gemini API", "Async Jobs", "Prompt Design"],
    title: "YouTube Digest",
    variant: "amber",
  },
] as const;

function ProjectVisual({ variant }: { variant: "amber" | "copper" }) {
  const gradient =
    variant === "amber"
      ? "from-accent-amber/25 via-accent-copper/10 to-transparent"
      : "from-accent-copper/24 via-accent-amber/10 to-transparent";

  return (
    <div className={`relative h-56 overflow-hidden rounded-[1.75rem] border border-border-subtle bg-gradient-to-br ${gradient}`}>
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(to_right,rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:26px_26px]" />
      <div className="absolute inset-4 rounded-[1.4rem] border border-white/10 bg-black/20 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="h-2 w-20 rounded-full bg-white/30" />
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-accent-amber/65" />
            <span className="h-2 w-2 rounded-full bg-accent-copper/65" />
          </div>
        </div>
        <div className="grid h-[calc(100%-1.5rem)] grid-cols-12 gap-3">
          <div className="col-span-7 flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <div className="h-2 w-20 rounded-full bg-white/25" />
            <div className="space-y-2">
              <div className="h-2 rounded-full bg-white/12" />
              <div className="h-2 w-5/6 rounded-full bg-white/12" />
              <div className="h-2 w-2/3 rounded-full bg-white/12" />
            </div>
            <div className="mt-auto grid grid-cols-2 gap-2">
              <div className="h-12 rounded-xl bg-white/6" />
              <div className="h-12 rounded-xl bg-white/6" />
            </div>
          </div>
          <div className="col-span-5 grid gap-3">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent" />
            <div className="rounded-2xl border border-white/10 bg-white/[0.04]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yOffsets = [
    useTransform(scrollYProgress, [0, 1], [10, -18]),
    useTransform(scrollYProgress, [0, 1], [0, -8]),
    useTransform(scrollYProgress, [0, 1], [14, -24]),
  ];

  return (
    <section ref={ref} className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Featured Work"
          title="Selected builds with measurable outcomes."
          subtitle="Three projects that best represent the mix: platform-scale performance work, biomedical modeling, and applied AI product execution."
        />

        <div className="mt-10 overflow-x-auto pb-4">
          <div className="flex min-w-max gap-5 lg:min-w-0 lg:grid lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                style={reduceMotion ? undefined : { y: yOffsets[index] }}
                className="w-[20rem] shrink-0 lg:w-auto"
              >
                <ScrollReveal delay={index * 0.05}>
                  <AnimatedCard href={project.href} glowColor={project.variant} className="h-full">
                    <div className="flex h-full flex-col">
                      <Tag variant="metric">{project.category}</Tag>
                      <h3 className="mt-5 font-display text-3xl text-text-primary">{project.title}</h3>
                      <p className="mt-3 text-2xl text-accent-amber">{project.metric}</p>
                      <p className="mt-4 text-sm leading-7 text-text-secondary">{project.description}</p>
                      <div className="mt-6">
                        <ProjectVisual variant={project.variant} />
                      </div>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <Tag key={item}>{item}</Tag>
                        ))}
                      </div>
                      <div className="mt-6 text-sm text-text-primary">Deep dive →</div>
                    </div>
                  </AnimatedCard>
                </ScrollReveal>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
