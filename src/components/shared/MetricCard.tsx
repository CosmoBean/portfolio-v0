"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { hoverSpring } from "@/lib/animations";

interface MetricCardProps {
  className?: string;
  decimals?: number;
  label: string;
  prefix?: string;
  suffix?: string;
  value: number;
}

function formatValue(value: number, decimals: number) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export default function MetricCard({
  className,
  decimals = 0,
  label,
  prefix = "",
  suffix = "",
  value,
}: MetricCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const reduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (reduceMotion) {
      return;
    }

    let frame = 0;
    const duration = 900;
    const startedAt = performance.now();

    const tick = (timestamp: number) => {
      const progress = Math.min((timestamp - startedAt) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplayValue(value * eased);

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frame);
  }, [isInView, reduceMotion, value]);

  return (
    <motion.div
      ref={ref}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={hoverSpring}
      className={clsx(
        "rounded-[1.75rem] border border-border-subtle bg-gradient-to-br from-card via-surface to-obsidian p-6 shadow-[0_12px_40px_rgba(0,0,0,0.22)]",
        className,
      )}
    >
      <p className="font-display text-4xl text-text-primary sm:text-5xl">
        {prefix}
        {formatValue(reduceMotion && isInView ? value : displayValue, decimals)}
        {suffix}
      </p>
      <p className="mt-3 text-sm uppercase tracking-[0.22em] text-text-secondary">{label}</p>
    </motion.div>
  );
}
