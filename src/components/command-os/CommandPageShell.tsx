import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { dashboardDiagnostics, globalActions } from "@/lib/command-os-data";

interface CommandPageShellProps {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
  actions?: Array<{ label: string; href: string; external?: boolean }>;
}

export default function CommandPageShell({ eyebrow, title, description, children, actions }: CommandPageShellProps) {
  const actionItems: Array<{ label: string; href: string; external?: boolean }> = actions ?? globalActions;

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-textPrimary">
      <div className="absolute inset-0 command-grid opacity-45" aria-hidden />
      <div className="absolute inset-0 command-vignette" aria-hidden />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-4 rounded-2xl border border-borderSoft bg-surface/70 p-4 backdrop-blur-xl">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-textMuted hover:text-textPrimary">
                <ArrowLeft size={14} /> Dashboard
              </Link>
              <p className="mt-3 font-mono text-[10px] tracking-[0.24em] text-[color:var(--color-gold)]">{eyebrow}</p>
              <h1 className="mt-2 text-2xl font-semibold font-display md:text-3xl">{title}</h1>
              <p className="mt-2 max-w-3xl text-sm text-textMuted md:text-base">{description}</p>
            </div>

            <div className="rounded-xl border border-borderSoft bg-background/60 px-3 py-2 font-mono text-xs text-textMuted">
              <p>DATTA_OS {dashboardDiagnostics.version}</p>
              <p className="text-accent">STATUS // {dashboardDiagnostics.status}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {actionItems.map((action) => {
              const isExternal =
                action.external ?? (action.href.startsWith("http") || action.href.startsWith("mailto:"));
              return (
                <Link
                  key={`${action.label}-${action.href}`}
                  href={action.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-borderSoft bg-background/60 px-3 py-2 text-sm text-textMuted hover:border-[color:var(--color-goldSoft)] hover:text-textPrimary"
                >
                  {action.label}
                  {isExternal && <ExternalLink size={13} />}
                </Link>
              );
            })}
          </div>
        </header>

        {children}
      </div>
    </main>
  );
}
