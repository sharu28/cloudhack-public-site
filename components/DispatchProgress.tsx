"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

import { ROUTE } from "@/lib/dispatch";

interface DispatchProgressValue {
  /** id of the section currently nearest the top of the viewport. */
  activeId: string;
}

const DispatchProgressContext = createContext<DispatchProgressValue>({
  activeId: ROUTE[0].id,
});

export function useDispatchProgress() {
  return useContext(DispatchProgressContext);
}

/**
 * One shared engine behind two devices - the Route Line and the Status
 * Chip - so the page runs a single IntersectionObserver and a single
 * scroll listener no matter how many components read the result.
 *
 *  • Active waypoint (which section is "current") is real React state: it
 *    changes rarely (once per section crossed), so a re-render is cheap.
 *  • Scroll progress (0–1, for the Route Line's drawn fill) is written
 *    directly to a CSS custom property on the document root every animation
 *    frame during a scroll - never through React state - so scrolling never
 *    triggers a re-render. See `.route-fill` in globals.css.
 *  • Under prefers-reduced-motion, the scroll listener is never attached:
 *    the fill is set once to "fully drawn" and stays there, per Section 9
 *    of the revamp plan ("avoid scroll-linked transformations").
 */
export function DispatchProgressProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState(ROUTE[0].id);
  const tickingRef = useRef(false);

  useEffect(() => {
    const elements = ROUTE.map((w) => document.getElementById(w.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reduced motion: render the line fully drawn and skip the listener
    // entirely - waypoint state above still updates (it's a discrete
    // position readout, not a continuous scroll-linked transform).
    if (reduce) {
      root.style.setProperty("--route-progress", "1");
      return;
    }

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      root.style.setProperty("--route-progress", progress.toFixed(4));
      tickingRef.current = false;
    };

    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <DispatchProgressContext.Provider value={{ activeId }}>
      {children}
    </DispatchProgressContext.Provider>
  );
}
