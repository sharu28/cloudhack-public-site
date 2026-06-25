"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A thin gradient progress bar pinned to the top of the viewport that fills as
 * the page scrolls — a subtle apple.com-style scroll cue. Sits just under the
 * nav. Spring-smoothed so it glides rather than snapping.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-ignition-orange"
    />
  );
}
