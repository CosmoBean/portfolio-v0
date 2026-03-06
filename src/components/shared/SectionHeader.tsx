import clsx from "clsx";
import ScrollReveal from "@/components/shared/ScrollReveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <ScrollReveal className={clsx("max-w-3xl", className)}>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-amber">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl text-text-primary sm:text-5xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">{subtitle}</p>
      ) : null}
    </ScrollReveal>
  );
}
