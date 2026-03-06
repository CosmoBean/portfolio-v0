import clsx from "clsx";

interface CalloutProps {
  children: React.ReactNode;
  tone?: "info" | "insight" | "warning";
}

const toneMap = {
  info: "border-border-subtle bg-surface/70 text-text-secondary",
  insight: "border-accent-amber/25 bg-accent-amber/10 text-text-primary",
  warning: "border-accent-copper/25 bg-accent-copper/10 text-text-primary",
} as const;

export default function Callout({
  children,
  tone = "info",
}: CalloutProps) {
  return (
    <aside className={clsx("my-8 rounded-[1.6rem] border p-5 text-sm leading-7", toneMap[tone])}>
      {children}
    </aside>
  );
}
