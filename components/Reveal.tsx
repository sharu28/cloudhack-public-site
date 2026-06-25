"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

type Direction = "up" | "left" | "right" | "none";

const OFFSET: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 24 },
  left: { x: -24 },
  right: { x: 24 },
  none: {},
};

/**
 * Reveal-on-scroll: a translate + fade that fires once as the element nears the
 * viewport. Honours prefers-reduced-motion. Directions: up (default), left,
 * right, none (opacity only). Stagger neighbouring instances via `delay`.
 */
export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  as?: "div" | "li" | "section" | "span";
}) {
  const reduce = useReducedMotionSafe();
  const MotionTag = motion[as];
  const offset = OFFSET[direction];

  // `initial` and `whileInView` are kept deterministic (NOT branched on
  // `reduce`) so the server and first client render always agree — branching
  // them on the reduced-motion preference is what caused the hydration mismatch,
  // and removing `whileInView` after mount used to strand the element at
  // opacity:0. Reduced-motion is honoured by collapsing the transition to an
  // instant cut instead, so the content still reveals — it just doesn't move.
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={
        reduce
          ? { duration: 0, delay: 0 }
          : { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </MotionTag>
  );
}
