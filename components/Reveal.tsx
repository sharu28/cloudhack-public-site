"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right" | "none";
type Tag = "div" | "li" | "section" | "span";

/**
 * Reveal-on-scroll - CSS transition driven by a single IntersectionObserver
 * per instance, no animation library (Section 11 of the revamp plan: the
 * ~30 simple fade-up reveals across the page were the cheapest job
 * framer-motion was doing; this cuts that JS out entirely while keeping the
 * exact call-site API every section already uses).
 *
 * Honours prefers-reduced-motion for free: the global media query in
 * globals.css collapses the CSS transition to ~0ms, so content still
 * "reveals" (fires once, same as always) but never visibly moves.
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
  as?: Tag;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = as;
  // A single, contained escape hatch: JSX can't express "one ref type valid
  // across a union of intrinsic tags" without this - every tag here (div,
  // li, section, span) is a plain HTMLElement, so the runtime ref is sound.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const polymorphicRef = ref as any;

  return (
    <Component
      ref={polymorphicRef}
      data-reveal={direction}
      className={cn(visible && "is-visible", className)}
      style={delay ? ({ "--reveal-delay": `${delay}s` } as React.CSSProperties) : undefined}
    >
      {children}
    </Component>
  );
}
