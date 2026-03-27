import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { greeting } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio Rebuild In Progress",
  description:
    "The homepage is temporarily running as a minimal loader while the full portfolio is being rebuilt.",
  path: "/",
});

export default function Home() {
  return (
    <main className="relative isolate -mt-24 min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,160,83,0.16),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(96,165,250,0.12),transparent_28%),radial-gradient(circle_at_50%_88%,rgba(196,125,62,0.14),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,11,0)_0%,rgba(10,10,11,0.18)_45%,rgba(10,10,11,0.62)_100%)]" />

      <section className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 pb-8 pt-10 sm:px-8 lg:px-12">
        <div className="grid flex-1 items-center gap-12 py-8 lg:grid-cols-[minmax(0,1fr)_34rem]">
          <div className="relative z-10 max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent-amber/85">
              {greeting.logo_name}
            </p>
            <h1 className="mt-5 max-w-[10ch] font-display text-5xl text-text-primary sm:text-6xl lg:text-7xl">
              Still being built.
            </h1>
            <p className="mt-6 max-w-md text-base leading-8 text-text-secondary sm:text-lg">
              New portfolio landing soon.
            </p>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[34rem]">
            <div
              className="relative aspect-square overflow-hidden rounded-[2.25rem] border border-border-subtle/80 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%),linear-gradient(180deg,rgba(26,26,30,0.9)_0%,rgba(10,10,11,0.92)_100%)] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
              role="status"
              aria-live="polite"
            >
              <div className="loader-grid pointer-events-none absolute inset-0 rounded-[2.25rem] opacity-75" />
              <div className="pointer-events-none absolute inset-5 rounded-[1.8rem] border border-white/6" />
              <div className="pointer-events-none absolute inset-10 rounded-full border-2 border-accent-amber/25 [animation:loader-orbit_18s_linear_infinite]" />
              <div className="pointer-events-none absolute inset-[4.4rem] rounded-full border-2 border-dashed border-sky-300/30 [animation:loader-orbit_12s_linear_infinite_reverse]" />
              <div className="pointer-events-none absolute inset-[7.5rem] rounded-full border border-white/10 [animation:loader-orbit_9s_linear_infinite]" />

              <div className="pointer-events-none absolute inset-x-10 top-10 h-px overflow-hidden rounded-full bg-transparent">
                <div className="h-full w-24 bg-gradient-to-r from-transparent via-sky-300/65 to-transparent [animation:signal-sweep_4.5s_linear_infinite]" />
              </div>

              <div className="relative flex h-full items-center justify-center">
                <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-white/8 bg-black/35 shadow-[0_0_120px_rgba(212,160,83,0.16)] sm:h-72 sm:w-72">
                  <div className="pointer-events-none absolute inset-3 rounded-full border border-accent-amber/22 [animation:pulse-halo_3.4s_ease-in-out_infinite]" />
                  <div className="pointer-events-none absolute inset-10 rounded-full border border-sky-300/18 [animation:pulse-halo_4.6s_ease-in-out_infinite]" />
                  <div className="pointer-events-none absolute inset-14 rounded-full bg-[radial-gradient(circle,rgba(212,160,83,0.32),rgba(56,189,248,0.1)_50%,transparent_74%)] blur-xl" />

                  <div className="relative min-w-[12rem] rounded-[2rem] border border-white/10 bg-obsidian/88 px-8 py-6 text-center backdrop-blur-md">
                    <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-accent-copper">
                      Loading
                    </p>
                    <p className="mt-3 text-2xl text-text-primary sm:text-[1.75rem]">
                      Please hold
                    </p>
                    <div className="loader-progress-track relative mt-5 h-2.5 overflow-hidden rounded-full bg-white/8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactForm
          variant="landing"
          title="Contact me"
          description="Leave your email and a note. I’ll get back to you."
          className="relative z-10 mt-auto"
        />
      </section>
    </main>
  );
}
