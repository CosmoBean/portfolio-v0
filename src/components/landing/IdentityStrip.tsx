import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

const workingStyles = [
  {
    title: "Clarity first",
    copy: "Strong problem framing, explicit constraints, and clear tradeoffs before implementation.",
  },
  {
    title: "Metrics over adjectives",
    copy: "Performance, reliability, and delivery impact are the baseline language of the work.",
  },
  {
    title: "AI4Healthcare trajectory",
    copy: "I am especially interested in healthcare-facing AI where engineering rigor, trust, and implementation details shape real outcomes.",
  },
];

export default function IdentityStrip() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-border-subtle bg-card/74 p-8 backdrop-blur-sm">
          <SectionHeader
            eyebrow="Identity"
            title="I optimize for durable systems, not demo-day optics."
            subtitle="My work sits at the intersection of production engineering and applied intelligence: building systems that are measurable, maintainable, and honest about failure modes. Long-term, that discipline points toward AI4Healthcare, where reliability, traceability, and signal quality matter as much as model performance."
          />
        </div>

        <div className="rounded-[2rem] border border-border-subtle bg-card/74 p-8 backdrop-blur-sm">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-copper">Working Style</p>
          <div className="mt-6 space-y-4">
            {workingStyles.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.05}>
                <article className="rounded-[1.5rem] border border-border-subtle bg-surface/60 p-5">
                  <div className="border-l-2 border-accent-amber pl-4">
                    <h3 className="text-lg text-text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-text-secondary">{item.copy}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
