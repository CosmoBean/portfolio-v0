import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedCard from "@/components/shared/AnimatedCard";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import Tag from "@/components/shared/Tag";
import { getProjectsByDomain } from "@/lib/content";
import { domainSummaries, getDomainSummary } from "@/lib/domains";
import { buildMetadata } from "@/lib/seo";

interface DomainPageProps {
  params: Promise<{ slug: string }>;
}

const languageSet = new Set(["Python", "Go", "Node.js"]);
const frameworkSet = new Set([
  "PyTorch",
  "TensorFlow",
  "FastAPI",
  "LangChain",
  "MLFlow",
  "Spark ML",
  "RNN/LSTM",
  "CNN",
  "GCNs",
  "ResNets",
]);
const toolSet = new Set([
  "Docker",
  "Redis",
  "PostgreSQL",
  "GitHub Actions",
  "AWS ECS",
  "GPU Management",
  "Vector DBs",
  "Monitoring",
  "WebSockets",
]);

function groupSkills(skills: string[]) {
  const groups = {
    Languages: [] as string[],
    Frameworks: [] as string[],
    Tools: [] as string[],
    Concepts: [] as string[],
  };

  for (const skill of skills) {
    if (languageSet.has(skill)) {
      groups.Languages.push(skill);
    } else if (frameworkSet.has(skill)) {
      groups.Frameworks.push(skill);
    } else if (toolSet.has(skill)) {
      groups.Tools.push(skill);
    } else {
      groups.Concepts.push(skill);
    }
  }

  return groups;
}

export async function generateStaticParams() {
  return domainSummaries.map((domain) => ({ slug: domain.slug }));
}

export async function generateMetadata({ params }: DomainPageProps): Promise<Metadata> {
  const { slug } = await params;
  const domain = getDomainSummary(slug);

  if (!domain) {
    return buildMetadata({
      title: "Domain Not Found",
      description: "Requested domain page could not be found.",
      path: "/domains",
    });
  }

  return buildMetadata({
    title: `${domain.title} Domain`,
    description: domain.description,
    path: `/domains/${domain.slug}`,
  });
}

export default async function DomainPage({ params }: DomainPageProps) {
  const { slug } = await params;
  const domain = getDomainSummary(slug);

  if (!domain) {
    notFound();
  }

  const projects = getProjectsByDomain(slug);
  const relatedDomains = domain.related
    .map((relatedSlug) => getDomainSummary(relatedSlug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
  const skillGroups = groupSkills(domain.skills);

  return (
    <main className="px-6 pb-20 sm:px-10 lg:px-12">
      <section
        className="mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-border-subtle bg-card/78 p-8 shadow-[0_26px_80px_rgba(0,0,0,0.26)] backdrop-blur-sm sm:p-10"
        style={
          {
            "--domain-color": domain.color,
            "--domain-color-soft": `${domain.color}22`,
          } as React.CSSProperties
        }
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--domain-color-soft)] bg-[radial-gradient(circle_at_18%_18%,var(--domain-color-soft),transparent_36%),linear-gradient(180deg,rgba(26,26,30,0.86),rgba(10,10,11,0.92))] p-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--domain-color)]">Domain</p>
          <h1 className="mt-5 font-display text-5xl text-text-primary sm:text-6xl">{domain.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-text-secondary">{domain.tagline}</p>
          <p className="mt-6 max-w-4xl text-sm leading-8 text-text-secondary sm:text-base">{domain.description}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {domain.skills.map((skill, index) => (
              <ScrollReveal key={skill} delay={index * 0.03}>
                <Tag>{skill}</Tag>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl">
        <SectionHeader
          eyebrow={`Projects in ${domain.title}`}
          title={`Projects in ${domain.title}`}
          subtitle="Each project here leans on the same technical station, but applies it under different constraints."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.05}>
              <AnimatedCard href={`/projects/${project.slug}`} glowColor={index % 2 === 0 ? "amber" : "copper"} className={index % 3 === 0 ? "lg:row-span-2" : undefined}>
                <Tag variant="metric">{project.category}</Tag>
                <h3 className="mt-5 font-display text-3xl text-text-primary">{project.title}</h3>
                <p className="mt-4 text-2xl text-accent-amber">{project.headlineMetric}</p>
                <p className="mt-4 text-sm leading-7 text-text-secondary">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
                <div className="mt-8 text-sm text-text-primary">Read case study →</div>
              </AnimatedCard>
            </ScrollReveal>
          ))}

          {projects.length < 3 ? (
            <div className="rounded-[2rem] border border-dashed border-border-subtle bg-surface/55 p-6 text-sm leading-7 text-text-secondary">
              More projects coming soon. The domain shell is live and ready for the next case study to land here.
            </div>
          ) : null}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl">
        <SectionHeader
          eyebrow="Skills Map"
          title="Technologies that carry this domain."
          subtitle="Grouped by the role they play in practice, not just by resume category."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {Object.entries(skillGroups).map(([group, skills], groupIndex) => (
            <ScrollReveal key={group} delay={groupIndex * 0.05}>
              <article className="rounded-[1.8rem] border border-border-subtle bg-card/72 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-copper">{group}</p>
                <div className="mt-5 space-y-4">
                  {skills.map((skill, skillIndex) => (
                    <div key={skill}>
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm text-text-primary">{skill}</span>
                        <span className="text-xs uppercase tracking-[0.18em] text-text-secondary">
                          L{Math.max(1, 3 - (skillIndex % 3))}
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 rounded-full bg-surface">
                        <div
                          className="h-full w-[var(--skill-width)] rounded-full bg-gradient-to-r from-accent-amber to-accent-copper"
                          style={{ "--skill-width": `${80 - (skillIndex % 3) * 15}%` } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl">
        <SectionHeader
          eyebrow="Adjacent Stations"
          title="Related domains to explore next."
          subtitle="The most useful neighboring disciplines for this station."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {relatedDomains.map((related, index) => (
            <ScrollReveal key={related.slug} delay={index * 0.05}>
              <AnimatedCard href={`/domains/${related.slug}`} glowColor={index % 2 === 0 ? "amber" : "copper"}>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-copper">{related.slug}</p>
                <h3 className="mt-4 font-display text-3xl text-text-primary">{related.title}</h3>
                <p className="mt-4 text-sm leading-7 text-text-secondary">{related.tagline}</p>
                <div className="mt-6">
                  <Tag variant="metric">{related.highlightMetric}</Tag>
                </div>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/projects" className="text-sm text-text-secondary underline decoration-accent-amber/35 underline-offset-4 hover:text-text-primary">
            Browse all projects
          </Link>
        </div>
      </section>
    </main>
  );
}
