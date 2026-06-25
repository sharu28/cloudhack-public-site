"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";

import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

/**
 * Split-text line reveal. The content sits inside an overflow-hidden mask and
 * rolls up from y:110% → y:0 as it enters view, so headings/taglines "unmask"
 * from below. Signature easing [0.19, 1, 0.22, 1] (fast in, smooth settle).
 *
 * Pass plain `children` for a single masked line, or an array of strings via
 * `lines` for a per-line staggered roll-up.
 */
export function SplitReveal({
  children,
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.08,
  duration = 0.9,
}: {
  children?: ReactNode;
  lines?: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const reduce = useReducedMotionSafe();

  const ease = [0.19, 1, 0.22, 1] as const;

  if (lines) {
    return (
      <span ref={ref} className={cn("block", className)}>
        {lines.map((line, i) => (
          <span
            key={i}
            className={cn("block overflow-hidden", lineClassName)}
          >
            <motion.span
              className="block"
              initial={reduce ? false : { y: "110%" }}
              animate={reduce || inView ? { y: 0 } : {}}
              transition={{ duration, ease, delay: delay + i * stagger }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </span>
    );
  }

  return (
    <span ref={ref} className={cn("block overflow-hidden", className)}>
      <motion.span
        className="block"
        initial={reduce ? false : { y: "110%" }}
        animate={reduce || inView ? { y: 0 } : {}}
        transition={{ duration, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/**
 * Divider line that draws in from the left (scaleX 0 → 1) when revealed.
 * A gradient hairline used under section headers.
 */
export function DividerLine({ className }: { className?: string }) {
  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "h-px w-16 origin-left bg-ignition-orange",
        className
      )}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={{ duration: 1, ease: [0.645, 0.045, 0.355, 1] }}
    />
  );
}
