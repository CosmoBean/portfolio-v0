"use client";

import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";

type TagVariant = "metric" | "tech" | "domain";

interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: TagVariant;
}

const variantClassMap: Record<TagVariant, string> = {
  metric: "border border-accent-amber/30 bg-accent-amber/12 text-accent-amber",
  tech: "border border-border-subtle bg-surface/50 text-text-secondary",
  domain: "border border-accent-copper/30 bg-accent-copper/12 text-accent-copper",
};

export default function Tag({
  children,
  className,
  variant = "tech",
}: TagProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em]",
        variantClassMap[variant],
        className,
      )}
    >
      {children}
    </motion.span>
  );
}
