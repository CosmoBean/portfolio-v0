import type { TargetAndTransition, Transition, Variants } from "framer-motion";

export type RevealDirection = "up" | "down" | "left" | "right";

export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 18,
  mass: 0.9,
};

export const hoverSpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

export const pageTransition: Transition = {
  duration: 0.3,
  ease: "easeOut",
};

export const pageTransitionVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  enter: { opacity: 1, y: 0, transition: pageTransition },
  exit: { opacity: 0, y: -10, transition: pageTransition },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export function getRevealInitial(direction: RevealDirection, distance = 24): TargetAndTransition {
  switch (direction) {
    case "down":
      return { opacity: 0, y: -distance };
    case "left":
      return { opacity: 0, x: distance };
    case "right":
      return { opacity: 0, x: -distance };
    case "up":
    default:
      return { opacity: 0, y: distance };
  }
}
