"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { hoverSpring } from "@/lib/animations";

type GlowColor = "amber" | "copper";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: GlowColor;
  href?: string;
}

const glowClassMap: Record<GlowColor, string> = {
  amber: "before:from-accent-amber/18 before:via-accent-copper/10 before:to-transparent hover:border-accent-amber/45 hover:shadow-[0_20px_70px_rgba(212,160,83,0.14)]",
  copper: "before:from-accent-copper/18 before:via-accent-amber/10 before:to-transparent hover:border-accent-copper/45 hover:shadow-[0_20px_70px_rgba(196,125,62,0.14)]",
};

export default function AnimatedCard({
  children,
  className,
  glowColor = "amber",
  href,
}: AnimatedCardProps) {
  const reduceMotion = useReducedMotion();

  const card = (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={hoverSpring}
      className={clsx(
        "group relative overflow-hidden rounded-[2rem] border border-border-subtle bg-card/76 p-6 backdrop-blur-sm before:absolute before:inset-0 before:bg-gradient-to-br before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        glowClassMap[glowColor],
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );

  if (!href) {
    return card;
  }

  return (
    <Link href={href} className="block">
      {card}
    </Link>
  );
}
