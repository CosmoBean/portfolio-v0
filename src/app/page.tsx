import type { Metadata } from "next";
import Link from "next/link";
import { greeting, resumeLinks, socialMediaLinks } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

const primaryEmail =
  socialMediaLinks.find((link) => link.name === "Gmail")?.link ||
  "mailto:sbandred@andrew.cmu.edu";
const githubProfile =
  socialMediaLinks.find((link) => link.name === "Github")?.link ||
  greeting.githubProfile;

const statusCards = [
  {
    label: "Mode",
    value: "Loader Page",
    detail: "Home route temporarily stripped back.",
  },
  {
    label: "Focus",
    value: "Sharper Rebuild",
    detail: "Design, content, and interactions are being redone.",
  },
  {
    label: "Access",
    value: "Still Open",
    detail: "Resume and contact stay available while the UI is offline.",
  },
] as const;

const buildSteps = [
  "Reframing the visual system.",
  "Cleaning content architecture.",
  "Replacing the placeholder-heavy UI.",
] as const;

export const metadata: Metadata = buildMetadata({
  title: "Portfolio Rebuild In Progress",
  description:
    "The homepage is temporarily running as an animated loader while the full portfolio is being rebuilt.",
  path: "/",
});

export default function Home() {
  return (
    <main className="relative isolate min-h-[calc(100svh-10rem)] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,160,83,0.16),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(96,165,250,0.12),transparent_28%),radial-gradient(circle_at_50%_88%,rgba(196,125,62,0.14),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,11,0)_0%,rgba(10,10,11,0.18)_45%,rgba(10,10,11,0.62)_100%)]" />

      <section className="mx-auto grid min-h-[calc(100svh-10rem)] max-w-6xl items-center gap-14 px-6 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_30rem] lg:px-12">
        <div className="relative z-10 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent-amber/85">
            {greeting.logo_name} / maintenance mode
          </p>
          <h1 className="mt-5 max-w-[10ch] font-display text-5xl text-text-primary sm:text-6xl lg:text-7xl">
            Still being built.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
            I pulled the half-finished homepage offline and replaced it with a
            cleaner loader screen while the real portfolio gets rebuilt.
          </p>

          <div
            className="mt-8 rounded-[1.75rem] border border-border-subtle/80 bg-card/55 p-4 backdrop-blur-md sm:p-5"
            role="status"
            aria-live="polite"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-accent-copper">
                  Rebuild Status
                </p>
                <p className="mt-2 text-sm text-text-primary">
                  Shipping a more deliberate version of the site.
                </p>
              </div>
              <span className="rounded-full border border-accent-amber/20 bg-accent-amber/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-accent-amber">
                In Progress
              </span>
            </div>
            <div className="loader-progress-track relative mt-4 h-2 overflow-hidden rounded-full bg-white/6" />
            <div className="mt-4 grid gap-2 text-sm text-text-secondary sm:grid-cols-3">
              {buildSteps.map((step, index) => (
                <p
                  key={step}
                  className="rounded-2xl border border-white/6 bg-black/20 px-3 py-3"
                >
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-accent-copper/85">
                    0{index + 1}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-text-primary/88">
                    {step}
                  </span>
                </p>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={resumeLinks.route}
              className="rounded-full border border-accent-amber/25 bg-gradient-to-r from-accent-amber/18 via-accent-copper/10 to-accent-amber/14 px-5 py-3 text-sm text-text-primary transition duration-200 hover:-translate-y-0.5 hover:border-accent-amber/45"
            >
              View resume
            </Link>
            <a
              href={primaryEmail}
              className="rounded-full border border-border-subtle bg-surface/60 px-5 py-3 text-sm text-text-primary transition duration-200 hover:-translate-y-0.5 hover:border-accent-amber/35 hover:bg-surface/85"
            >
              Reach out
            </a>
            <a
              href={githubProfile}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-transparent px-4 py-3 text-sm text-text-secondary transition duration-200 hover:text-text-primary"
            >
              GitHub
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {statusCards.map((card) => (
              <div
                key={card.label}
                className="rounded-[1.4rem] border border-border-subtle/80 bg-card/45 p-4 backdrop-blur-sm"
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-accent-copper">
                  {card.label}
                </p>
                <p className="mt-3 text-lg text-text-primary">{card.value}</p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {card.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[30rem]">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border-subtle/80 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%),linear-gradient(180deg,rgba(26,26,30,0.9)_0%,rgba(10,10,11,0.92)_100%)] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <div className="loader-grid pointer-events-none absolute inset-0 rounded-[2rem] opacity-75" />
            <div className="pointer-events-none absolute inset-5 rounded-[1.6rem] border border-white/6" />
            <div className="pointer-events-none absolute inset-10 rounded-full border border-accent-amber/20 [animation:loader-orbit_18s_linear_infinite]" />
            <div className="pointer-events-none absolute inset-16 rounded-full border border-dashed border-sky-300/25 [animation:loader-orbit_12s_linear_infinite_reverse]" />
            <div className="pointer-events-none absolute inset-24 rounded-full border border-white/8 [animation:loader-orbit_9s_linear_infinite]" />

            <div
              className="pointer-events-none absolute inset-x-10 top-10 h-px overflow-hidden rounded-full bg-transparent"
              aria-hidden="true"
            >
              <div className="h-full w-24 bg-gradient-to-r from-transparent via-sky-300/65 to-transparent [animation:signal-sweep_4.5s_linear_infinite]" />
            </div>

            <div className="relative flex h-full items-center justify-center">
              <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-white/8 bg-black/35 shadow-[0_0_80px_rgba(10,10,11,0.6)]">
                <div className="pointer-events-none absolute inset-3 rounded-full border border-accent-amber/18 [animation:pulse-halo_3.4s_ease-in-out_infinite]" />
                <div className="pointer-events-none absolute inset-10 rounded-full border border-sky-300/15 [animation:pulse-halo_4.6s_ease-in-out_infinite]" />
                <div className="pointer-events-none absolute inset-12 rounded-full bg-[radial-gradient(circle,rgba(212,160,83,0.26),rgba(56,189,248,0.08)_48%,transparent_72%)] blur-xl" />

                <div className="relative rounded-[1.8rem] border border-white/10 bg-obsidian/85 px-6 py-5 text-center backdrop-blur-md">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-accent-copper">
                    Portfolio Loader
                  </p>
                  <p className="mt-3 text-2xl text-text-primary">Stand by</p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    UI refactor in motion.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute inset-x-6 bottom-6 rounded-[1.6rem] border border-white/8 bg-black/30 p-4 backdrop-blur-md">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-accent-copper">
                    Signal Check
                  </p>
                  <p className="mt-2 text-sm text-text-primary">
                    Temporary holding page is live.
                  </p>
                </div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-emerald-300">
                  Stable
                </span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-text-secondary">
                <div className="rounded-2xl border border-white/6 bg-white/4 px-3 py-3">
                  <p className="font-mono uppercase tracking-[0.16em] text-accent-copper">
                    Design
                  </p>
                  <p className="mt-2 text-text-primary">Reworking</p>
                </div>
                <div className="rounded-2xl border border-white/6 bg-white/4 px-3 py-3">
                  <p className="font-mono uppercase tracking-[0.16em] text-accent-copper">
                    Copy
                  </p>
                  <p className="mt-2 text-text-primary">Editing</p>
                </div>
                <div className="rounded-2xl border border-white/6 bg-white/4 px-3 py-3">
                  <p className="font-mono uppercase tracking-[0.16em] text-accent-copper">
                    Launch
                  </p>
                  <p className="mt-2 text-text-primary">Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
