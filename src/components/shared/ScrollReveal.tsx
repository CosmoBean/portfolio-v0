"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { getRevealInitial, springTransition, type RevealDirection } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  duration?: number;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.45,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={getRevealInitial(direction)}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : getRevealInitial(direction)}
      transition={{ ...springTransition, delay, duration }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
}
