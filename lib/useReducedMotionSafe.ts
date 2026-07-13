"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * SSR-safe wrapper around framer-motion's `useReducedMotion`.
 *
 * The raw hook reads `matchMedia('(prefers-reduced-motion: reduce)')`, which is
 * unavailable on the server - so the server always renders as "motion enabled"
 * while a client with reduced-motion enabled renders as "motion disabled". That
 * divergence makes motion components emit different `initial`/`style` props on
 * the server vs. the first client render, tripping React's hydration check
 * ("some attributes … didn't match"). A failed hydration at the top of the tree
 * forces React to discard the server DOM and re-render the whole root, which in
 * turn leaves imperative libraries bound to stale nodes (e.g. the Embla carousel
 * stops auto-scrolling).
 *
 * Returning `false` until after mount makes the FIRST client render match the
 * server (both "motion enabled"); the real preference is applied on the next
 * render. No hydration mismatch, and reduced-motion is still honoured.
 */
export function useReducedMotionSafe(): boolean {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? !!prefersReduced : false;
}
