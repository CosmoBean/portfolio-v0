import { Children, isValidElement } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Architecture from "@/components/project/Architecture";
import Callout from "@/components/project/Callout";
import Metric from "@/components/project/Metric";
import ProjectToc from "@/components/project/ProjectToc";
import TechStack from "@/components/project/TechStack";
import CodeBlock from "@/components/shared/CodeBlock";
import Tag from "@/components/shared/Tag";
import {
  getProjectDocument,
  getProjectNavigation,
  getProjectSlugs,
  getProjectsByDomain,
  projectSummaries,
  slugifyHeading,
} from "@/lib/content";
import { getDomainSummary } from "@/lib/domains";
import { buildMetadata } from "@/lib/seo";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

function extractText(children: React.ReactNode): string {
  return Children.toArray(children)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child);
      }

      if (isValidElement<{ children?: React.ReactNode }>(child)) {
        return extractText(child.props.children);
      }

      return "";
    })
    .join("");
}

function Heading({
  as: TagName,
  children,
}: {
  as: "h2" | "h3";
  children: React.ReactNode;
}) {
  const text = extractText(children);
  const id = slugifyHeading(text);
  const className =
    TagName === "h2"
      ? "mt-12 font-display text-4xl text-text-primary"
      : "mt-8 font-display text-2xl text-text-primary";

  return (
    <TagName id={id} className={className}>
      <a href={`#${id}`} className="group inline-flex items-center gap-3">
        <span>{children}</span>
        <span className="text-sm text-text-secondary opacity-0 transition group-hover:opacity-100">#</span>
      </a>
    </TagName>
  );
}

async function Pre({
  children,
}: {
  children?: React.ReactNode;
}) {
  if (!isValidElement<{ children?: React.ReactNode; className?: string }>(children)) {
    return <pre>{children}</pre>;
  }

  const code = typeof children.props.children === "string"
    ? children.props.children.trimEnd()
    : extractText(children.props.children).trimEnd();
  const language = children.props.className?.replace("language-", "") ?? "text";

  return <CodeBlock code={code} language={language} />;
}

const mdxComponents = {
  Architecture,
  Callout,
  Metric,
  TechStack,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      className="text-accent-amber underline decoration-accent-amber/35 underline-offset-4"
    />
  ),
  h2: (props: { children: React.ReactNode }) => <Heading as="h2" {...props} />,
  h3: (props: { children: React.ReactNode }) => <Heading as="h3" {...props} />,
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => <li {...props} className="text-text-secondary" />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="mt-5 text-sm leading-8 text-text-secondary sm:text-base" />
  ),
  pre: Pre,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className="mt-5 list-disc space-y-3 pl-6 text-sm leading-8 text-text-secondary sm:text-base" />
  ),
};

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const document = await getProjectDocument(slug);

  if (!document) {
    return buildMetadata({
      title: "Project Not Found",
      description: "Requested project page could not be found.",
      path: "/projects",
    });
  }

  return buildMetadata({
    title: document.frontmatter.title,
    description: document.frontmatter.description,
    path: `/projects/${document.frontmatter.slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const document = await getProjectDocument(slug);

  if (!document) {
    notFound();
  }

  const { frontmatter, content, headings } = document;
  const domains = frontmatter.domains ?? [];
  const techStack = frontmatter.tech ?? [];
  const navigation = getProjectNavigation(slug);
  const relatedProjects = projectSummaries
    .filter((project) => project.slug !== slug && project.domains.some((domain) => domains.includes(domain)))
    .slice(0, 2);

  return (
    <main className="px-6 pb-20 sm:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <article className="min-w-0">
          <header className="rounded-[2.3rem] border border-border-subtle bg-card/78 p-8 shadow-[0_26px_80px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:p-10">
            <div className="flex flex-wrap gap-2">
              <Tag variant="metric">{frontmatter.category}</Tag>
              {domains.map((domainSlug) => {
                const domain = getDomainSummary(domainSlug);

                return (
                  <Link key={domainSlug} href={`/domains/${domainSlug}`}>
                    <Tag variant="domain">{domain?.title ?? domainSlug}</Tag>
                  </Link>
                );
              })}
            </div>
            <h1 className="mt-6 font-display text-5xl text-text-primary sm:text-6xl">{frontmatter.title}</h1>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.28em] text-text-secondary">{frontmatter.date}</p>
            <p className="mt-6 text-3xl text-accent-amber sm:text-4xl">{frontmatter.headline_metric}</p>
            <p className="mt-5 max-w-4xl text-sm leading-8 text-text-secondary sm:text-base">{frontmatter.description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {techStack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </header>

          <div className="mt-10 rounded-[2.3rem] border border-border-subtle bg-card/70 p-8 backdrop-blur-sm sm:p-10">
            <div className="prose prose-invert max-w-none">
              <MDXRemote source={content} components={mdxComponents} />
            </div>
          </div>

          <section className="mt-10 grid gap-5 md:grid-cols-2">
            {navigation.previous ? (
              <Link href={`/projects/${navigation.previous.slug}`} className="rounded-[1.8rem] border border-border-subtle bg-card/70 p-6 transition hover:border-accent-amber/35">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-text-secondary">Previous project</p>
                <h2 className="mt-3 text-2xl text-text-primary">{navigation.previous.title}</h2>
              </Link>
            ) : (
              <div className="rounded-[1.8rem] border border-dashed border-border-subtle bg-card/50 p-6 text-sm text-text-secondary">
                Start of project sequence.
              </div>
            )}

            {navigation.next ? (
              <Link href={`/projects/${navigation.next.slug}`} className="rounded-[1.8rem] border border-border-subtle bg-card/70 p-6 transition hover:border-accent-copper/35">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-text-secondary">Next project</p>
                <h2 className="mt-3 text-2xl text-text-primary">{navigation.next.title}</h2>
              </Link>
            ) : (
              <div className="rounded-[1.8rem] border border-dashed border-border-subtle bg-card/50 p-6 text-sm text-text-secondary">
                End of project sequence.
              </div>
            )}
          </section>

          {relatedProjects.length > 0 ? (
            <section className="mt-10">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-copper">Related projects</p>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {relatedProjects.map((project) => (
                  <Link key={project.slug} href={`/projects/${project.slug}`} className="rounded-[1.8rem] border border-border-subtle bg-card/70 p-6 transition hover:border-accent-amber/35">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-text-secondary">{project.category}</p>
                    <h2 className="mt-3 text-2xl text-text-primary">{project.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-text-secondary">{project.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          <div className="mt-10">
            <Link
              href={`/domains/${domains[0] ?? "systems"}`}
              className="text-sm text-text-secondary underline decoration-accent-amber/35 underline-offset-4 hover:text-text-primary"
            >
              Back to domain
            </Link>
          </div>
        </article>

        <div className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <ProjectToc headings={headings} />
          <aside className="rounded-[1.8rem] border border-border-subtle bg-card/76 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent-copper">Domains</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {domains.map((domainSlug) => (
                <Link key={domainSlug} href={`/domains/${domainSlug}`}>
                  <Tag variant="domain">{getDomainSummary(domainSlug)?.title ?? domainSlug}</Tag>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-sm text-text-secondary">
              {getProjectsByDomain(domains[0] ?? "systems").length} projects currently mapped to the primary domain.
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
