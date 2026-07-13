"use client";

import { useEffect, useRef, useState } from "react";

import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { cn } from "@/lib/utils";

const FLIP_MS = 300;

/**
 * The Split-Flap board — an airport departure-board character flip, built in
 * pure CSS 3D transforms (see `.flap-cell` / `.flap-leaf` in globals.css), no
 * animation library. Used for hero stats, the countdown, schedule times, and
 * prize amounts — anywhere a value is real data, not decoration.
 *
 * Behaviour:
 *  - Starts blank and flips in once the board scrolls into view.
 *  - Only characters that actually change re-flip; the rest hold still.
 *  - Each cell staggers by `staggerMs * index` so a whole board never flips
 *    in one flat beat — pass a larger `staggerMs` on narrow screens to
 *    spread a long value (e.g. the countdown) over more time and keep fewer
 *    cells animating at once.
 *  - Reduced motion: every character snaps straight to its value, no flip.
 *
 * Sizing is intentionally unopinionated — pass explicit width/height/text
 * size via `cellClassName` for the context (hero stat vs. schedule time).
 */
export function SplitFlap({
  value,
  className,
  cellClassName,
  staggerMs = 30,
  ariaLabel,
}: {
  value: string;
  className?: string;
  cellClassName?: string;
  staggerMs?: number;
  ariaLabel?: string;
}) {
  const reduce = useReducedMotionSafe();
  const rootRef = useRef<HTMLSpanElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (reduce) {
      setActive(true);
      return;
    }
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  const chars = value.split("");
  const blankChar = (c: string) => (c === " " ? " " : /[0-9]/.test(c) ? "0" : "\u00A0");

  return (
    <span ref={rootRef} className={cn("inline-flex items-stretch gap-[3px]", className)}>
      <span className="sr-only">{ariaLabel ?? value}</span>
      <span aria-hidden="true" className="inline-flex items-stretch gap-[3px]">
        {chars.map((char, i) => (
          <FlapCell
            key={i}
            char={active ? char : blankChar(char)}
            reduce={reduce}
            delayMs={i * staggerMs}
            className={cellClassName}
          />
        ))}
      </span>
    </span>
  );
}

function FlapCell({
  char,
  reduce,
  delayMs,
  className,
}: {
  char: string;
  reduce: boolean;
  delayMs: number;
  className?: string;
}) {
  const [settled, setSettled] = useState(char);
  const [incoming, setIncoming] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (char === settled) return;

    if (reduce) {
      setSettled(char);
      return;
    }

    setIncoming(char);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const timer = setTimeout(() => {
      setSettled(char);
      setIncoming(null);
    }, FLIP_MS + delayMs);
    timeoutRef.current = timer;
    return () => clearTimeout(timer);
    // Only the target character should retrigger a flip — `reduce`/`delayMs`
    // changing mid-flight shouldn't restart it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [char]);

  if (char === " ") {
    return <span className={cn("inline-block", className)} aria-hidden="true" />;
  }

  const flipping = incoming !== null;
  const delayStyle = { animationDelay: `${delayMs}ms` };

  return (
    <span
      data-flipping={flipping}
      className={cn("flap-cell rounded-flap", className)}
      style={flipping ? delayStyle : undefined}
    >
      <span className="flap-face absolute inset-0">{flipping ? incoming : settled}</span>
      {flipping && (
        <>
          <span className="flap-leaf flap-leaf--front" style={delayStyle}>
            {settled}
          </span>
          <span className="flap-leaf flap-leaf--back" style={delayStyle}>
            {incoming}
          </span>
        </>
      )}
    </span>
  );
}
