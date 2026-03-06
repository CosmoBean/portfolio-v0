interface ArchitectureProps {
  items: string[];
  title: string;
}

export default function Architecture({
  items = [],
  title,
}: ArchitectureProps) {
  return (
    <section className="my-8 rounded-[1.8rem] border border-border-subtle bg-card/76 p-6">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent-copper">{title}</p>
      <div className="mt-5 grid gap-3">
        {items.map((item, index) => (
          <div key={item} className="rounded-[1.3rem] border border-border-subtle bg-surface/58 p-4">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-amber">Step {index + 1}</p>
            <p className="mt-2 text-sm leading-7 text-text-secondary">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
