"use client";

import { useEffect, useState } from "react";

import { SplitFlap } from "@/components/SplitFlap";

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Mins" },
  { key: "seconds", label: "Secs" },
] as const;

type Parts = Record<(typeof UNITS)[number]["key"], number>;

export function partsUntil(targetMs: number, nowMs: number): Parts | null {
  const diff = targetMs - nowMs;
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
  };
}

/** The countdown, rendered entirely on Split-Flap digits - the single best
 *  fit for the device outside Schedule, since a countdown is a live number
 *  changing in place. Only the digits that actually change flip each tick. */
export function Countdown({
  targetISO,
  label,
  className = "",
}: {
  targetISO: string;
  label?: string;
  className?: string;
}) {
  const [parts, setParts] = useState<Parts | null | "pending">("pending");

  useEffect(() => {
    const target = new Date(targetISO).getTime();
    const tick = () => setParts(partsUntil(target, Date.now()));
    tick();

    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  if (parts === null) {
    return (
      <p className={`font-mono text-sm font-light uppercase tracking-[0.2em] text-stamp ${className}`}>
        Happening now
      </p>
    );
  }

  const display = parts === "pending" ? { days: 0, hours: 0, minutes: 0, seconds: 0 } : parts;

  return (
    <div className={className}>
      {label && (
        <p className="font-mono text-xs font-light uppercase tracking-[0.2em] text-ink-2">{label}</p>
      )}
      <div className="mt-3 flex items-end gap-2.5 sm:gap-4">
        {UNITS.map((unit, i) => (
          <div key={unit.key} className="flex items-end gap-2.5 sm:gap-4">
            {i > 0 && (
              <span aria-hidden="true" className="mb-2 font-mono text-lg text-line-strong sm:text-xl">
                :
              </span>
            )}
            <div className="flex flex-col items-center gap-2">
              <SplitFlap
                value={String(display[unit.key]).padStart(2, "0")}
                cellClassName="h-9 w-7 text-2xl font-medium font-mono sm:h-11 sm:w-9 sm:text-3xl"
                staggerMs={20}
                ariaLabel={`${display[unit.key]} ${unit.label}`}
              />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-2">
                {unit.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
