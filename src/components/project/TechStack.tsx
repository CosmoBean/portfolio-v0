import Tag from "@/components/shared/Tag";

interface TechStackProps {
  items: string[];
  title?: string;
}

export default function TechStack({
  items = [],
  title = "Tech Stack",
}: TechStackProps) {
  return (
    <section className="my-8 rounded-[1.8rem] border border-border-subtle bg-card/76 p-6">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent-copper">{title}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </section>
  );
}
