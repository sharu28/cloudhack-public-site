"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

/**
 * The site's signature "words wipe in" reveal: a left→right clip-path inset plus
 * a fade, fired once as the block enters view. Shared by every section header and
 * the feature text blocks so all sections reveal their words the same way.
 *
 * `initial`/`whileInView` are deterministic (not branched on the reduced-motion
 * preference) so the server and first client render agree - no hydration drift.
 * The wipe is shown to everyone (including under the OS reduced-motion setting)
 * because it's the headline motion the sections are built around.
 */
export function ClipReveal({
  children,
  className,
  delay = 0,
  duration = 1.5,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
