"use client";

import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail } from "lucide-react";
import { greeting, socialMediaLinks } from "@/lib/data";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  gmail: Mail,
} as const;

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="relative mt-16 border-t border-border-subtle/80 bg-gradient-to-b from-transparent to-card/65">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-amber/30 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-amber">{greeting.logo_name}</p>
          <h2 className="mt-3 font-display text-3xl text-text-primary">{greeting.title}</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-text-secondary">
            Production AI, backend architecture, and biomedical signal systems with a bias for measurable outcomes.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <div className="flex flex-wrap items-center gap-3">
            {socialMediaLinks.map((link) => {
              const Icon = iconMap[link.name.toLowerCase() as keyof typeof iconMap];

              return (
                <a
                  key={link.name}
                  href={link.link}
                  target={link.link.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.link.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="inline-flex items-center gap-2 rounded-full border border-border-subtle px-4 py-2 text-sm text-text-secondary transition hover:border-accent-amber/35 hover:text-text-primary"
                >
                  {Icon ? <Icon className="h-4 w-4" /> : null}
                  {link.name}
                </a>
              );
            })}
          </div>
          <p className="text-sm text-text-secondary">
            Built with love and vibe coding.
          </p>
        </div>
      </div>
    </footer>
  );
}
