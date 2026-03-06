"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import type { HeadingEntry } from "@/lib/content";

interface ProjectTocProps {
  headings: HeadingEntry[];
}

export default function ProjectToc({ headings }: ProjectTocProps) {
  const [activeId, setActiveId] = useState<string | null>(headings[0]?.id ?? null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.2 },
    );

    for (const heading of headings) {
      const element = document.getElementById(heading.id);

      if (element) {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, [headings]);

  return (
    <aside className="rounded-[1.8rem] border border-border-subtle bg-card/76 p-5">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent-copper">On this page</p>
      <nav className="mt-4 grid gap-2">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={clsx(
              "rounded-xl px-3 py-2 text-sm transition",
              activeId === heading.id
                ? "bg-surface text-text-primary"
                : "text-text-secondary hover:bg-surface/60 hover:text-text-primary",
              heading.level === 3 ? "ml-4" : "",
            )}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
