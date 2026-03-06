import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "Background, identity, and working style for Sri Datta Bandreddi.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-20 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-4xl rounded-[2rem] border border-border-subtle bg-card/72 p-8 backdrop-blur-sm">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-secondary">About</p>
        <h1 className="mt-4 font-display text-4xl text-text-primary sm:text-5xl">Portfolio scaffolding is in place.</h1>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
          This route is part of the Phase 1 structure. Shared navigation, motion, and richer content arrive in later phases.
        </p>
      </section>
    </main>
  );
}
