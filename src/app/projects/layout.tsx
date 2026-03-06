"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { projectCatalog } from "@/lib/project-catalog";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const segments = useSelectedLayoutSegments();
  const activeSlug = segments.at(0);
  const activeProject = activeSlug
    ? projectCatalog.find((project) => project.slug === activeSlug)
    : null;

  return (
    <div className="min-h-screen bg-obsidian">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 sm:px-10 lg:px-12">
        <div className="flex flex-wrap items-center gap-2 text-sm text-text-secondary">
          <Link href="/" className="transition hover:text-text-primary">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/projects" className="transition hover:text-text-primary">Projects</Link>
          {activeProject ? (
            <>
              <ChevronRight className="h-4 w-4" />
              <span className="text-text-primary">{activeProject.title}</span>
            </>
          ) : null}
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-border-subtle px-4 py-2 text-sm text-text-secondary transition hover:-translate-x-0.5 hover:border-accent-amber/35 hover:text-text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
      </div>
      {children}
    </div>
  );
}
