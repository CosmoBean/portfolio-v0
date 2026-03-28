import type { TargetAndTransition, Transition, Variants } from "framer-motion";

export type RevealDirection = "up" | "down" | "left" | "right";

export const easeOutStrong = [0.23, 1, 0.32, 1] as const;
export const easeInOutStrong = [0.77, 0, 0.175, 1] as const;
export const easeDrawer = [0.32, 0.72, 0, 1] as const;

export const springTransition: Transition = {
  type: "spring",
  stiffness: 140,
  damping: 18,
  mass: 0.9,
};

export const hoverSpring: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 22,
  mass: 0.72,
};

export const revealTransition: Transition = {
  duration: 0.48,
  ease: easeOutStrong,
};

export const pageTransition: Transition = {
  duration: 0.22,
  ease: easeOutStrong,
};

export const pageTransitionVariants: Variants = {
  initial: { opacity: 0, y: 8 },
  enter: { opacity: 1, y: 0, transition: pageTransition },
  exit: { opacity: 0, y: -8, transition: pageTransition },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: revealTransition,
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: revealTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export function getRevealInitial(direction: RevealDirection, distance = 24): TargetAndTransition {
  switch (direction) {
    case "down":
      return { opacity: 0, y: -distance, scale: 0.985 };
    case "left":
      return { opacity: 0, x: distance, scale: 0.985 };
    case "right":
      return { opacity: 0, x: -distance, scale: 0.985 };
    case "up":
    default:
      return { opacity: 0, y: distance, scale: 0.985 };
  }
}
