import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { greeting, resumeLinks } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Resume",
    description: "Embedded resume viewer with download access for Sri Datta Bandreddi.",
    path: resumeLinks.route,
  }),
  robots: {
    index: false,
    follow: false,
  },
};

const resumeSignals = [
  { label: "Role", value: greeting.subTitle },
  { label: "Focus", value: "Production AI, full-stack systems, AI4Healthcare" },
  { label: "Format", value: "Embedded preview with direct PDF download" },
];

export default function ResumePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-textPrimary">
      <div className="absolute inset-0 command-grid opacity-35" aria-hidden />
      <div className="absolute inset-0 command-vignette" aria-hidden />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-[2rem] border border-borderSoft bg-surface/72 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-8">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[color:var(--color-gold)]">
            Resume // Embedded Viewer
          </p>

          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl text-textPrimary sm:text-5xl">Resume, without leaving the site.</h1>
              <p className="mt-4 text-sm leading-7 text-textMuted sm:text-base">
                This route now renders the resume inline. Use the download action if you want the PDF directly, or
                open the source in a new tab if the embed stalls.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={resumeLinks.download}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-accent-amber/35 bg-gradient-to-r from-accent-amber/20 via-accent-copper/14 to-accent-amber/18 px-5 py-3 text-sm font-medium text-textPrimary transition hover:-translate-y-0.5 hover:border-accent-amber/55"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
              <a
                href={resumeLinks.view}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-borderSoft px-5 py-3 text-sm font-medium text-textPrimary transition hover:border-accent-amber/30 hover:bg-background/60"
              >
                <ArrowUpRight className="h-4 w-4" />
                Open Source
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-borderSoft px-5 py-3 text-sm font-medium text-textMuted transition hover:border-accent-copper/35 hover:text-textPrimary"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {resumeSignals.map((signal) => (
              <div key={signal.label} className="rounded-[1.4rem] border border-borderSoft bg-background/45 p-4">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-accent-copper">{signal.label}</p>
                <p className="mt-3 text-sm leading-6 text-textPrimary">{signal.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-[2rem] border border-borderSoft bg-surface/72 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-borderSoft bg-background/45 px-5 py-4">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-accent-copper">Preview</p>
              <p className="mt-1 text-sm text-textMuted">Scroll the embedded document or use the download action above.</p>
            </div>
            <p className="text-xs uppercase tracking-[0.18em] text-textMuted">Google Drive Preview</p>
          </div>

          <div className="relative min-h-[75svh] bg-obsidian">
            <iframe
              src={resumeLinks.preview}
              title={`${greeting.title} resume preview`}
              className="absolute inset-0 h-full w-full"
              allow="autoplay"
            />
          </div>
        </section>

        <p className="px-1 text-sm text-textMuted">
          If the embedded preview does not load in your browser, use{" "}
          <a href={resumeLinks.view} target="_blank" rel="noreferrer" className="text-textPrimary underline decoration-accent-amber/45 underline-offset-4">
            Open Source
          </a>{" "}
          or{" "}
          <a
            href={resumeLinks.download}
            target="_blank"
            rel="noreferrer"
            className="text-textPrimary underline decoration-accent-amber/45 underline-offset-4"
          >
            Download PDF
          </a>
          .
        </p>
      </div>
    </main>
  );
}
