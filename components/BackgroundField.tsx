"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * The global, interactive background field.
 *
 * A single fixed, full-viewport layer that sits behind every section so the
 * signature gradient flows consistently down the whole page (not just the hero).
 * Three morphing blobs drift on their own and react to two inputs:
 *   • the pointer  → gentle parallax (each blob at a different depth)
 *   • scroll       → vertical drift + a slow hue evolution as you descend
 *
 * Both inputs are funnelled through ONE requestAnimationFrame loop that only
 * writes CSS custom properties (--mx, --my, --sf) on the root element — no React
 * state, no re-renders, no layout thrash. The CSS in globals.css (.field-blob,
 * .fb-a/.fb-b/.fb-c) consumes those vars. Honours prefers-reduced-motion by
 * skipping the loop and listeners entirely.
 */
export function BackgroundField() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduce) return;

    // Target values (set by input handlers) and current values (eased toward
    // the target each frame for buttery motion).
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let sf = 0;
    let raf = 0;

    const onPointer = (e: PointerEvent) => {
      // Map pointer to [-1, 1] around the viewport centre.
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      sf = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    };

    const tick = () => {
      // Ease ~8% toward the target each frame (frame-rate-independent enough
      // for a background accent).
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      root.style.setProperty("--mx", curX.toFixed(4));
      root.style.setProperty("--my", curY.toFixed(4));
      root.style.setProperty("--sf", sf.toFixed(4));
      // Recolour the whole field gradually as the user scrolls down.
      root.style.setProperty("--hue", `${(sf * 60).toFixed(1)}deg`);
      raf = requestAnimationFrame(tick);
    };

    onScroll();
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reduce]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="field pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Three signature blobs, distributed so different ones lead as you scroll.
          The hue from scroll progress drifts the whole field's colour together. */}
      <div className="field-blob fb-a left-[-10%] top-[-8%] h-[min(70vw,640px)] w-[min(70vw,640px)]">
        <i />
      </div>
      <div className="field-blob fb-b right-[-12%] top-[34%] h-[min(72vw,680px)] w-[min(72vw,680px)]">
        <i />
      </div>
      <div className="field-blob fb-c bottom-[-14%] left-[22%] h-[min(64vw,600px)] w-[min(64vw,600px)]">
        <i />
      </div>

      {/* Vignette so the blobs melt into the near-black background everywhere. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--color-ink)_92%)]" />

      {/* Faint film grain across the entire page for a cohesive finish. */}
      <div className="noise absolute inset-0 opacity-[0.035]" />
    </div>
  );
}
