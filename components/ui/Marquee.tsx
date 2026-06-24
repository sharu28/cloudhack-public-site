"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Seamless infinite marquee ticker. Two copies of the children sit side by side
 * and the track translates -50%, so the loop is invisible. Speed is constant in
 * px/sec regardless of content width — the duration is derived from the measured
 * scrollWidth and kept stable across layout changes via a ResizeObserver.
 */
export function Marquee({
  children,
  speed = 50,
  className,
}: {
  children: ReactNode;
  /** Pixels per second. */
  speed?: number;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [duration, setDuration] = useState(40);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      // The track holds two copies; half its width is one loop's distance.
      const loop = track.scrollWidth / 2;
      if (loop > 0) setDuration(loop / speed);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, [speed, children]);

  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <div
        ref={trackRef}
        className="marquee-track flex w-max"
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
