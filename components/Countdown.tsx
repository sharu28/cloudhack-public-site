"use client";

import { useEffect, useState } from "react";

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
      <p className={`font-tomorrow text-sm uppercase tracking-[0.25em] text-ignition-orange ${className}`}>
        Happening now
      </p>
    );
  }

  return (
    <div className={className}>
      {label && (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-dusk-gray">
          {label}
        </p>
      )}
      <div className="mt-3 flex items-start justify-center gap-4 sm:gap-6">
        {UNITS.map((unit, i) => (
          <div key={unit.key} className="flex items-start gap-4 sm:gap-6">
            {i > 0 && (
              <span
                aria-hidden="true"
                className="font-tomorrow text-2xl leading-none text-tarmac sm:text-3xl"
              >
                :
              </span>
            )}
            <div className="flex w-12 flex-col items-center sm:w-14">
              <span className="font-tomorrow text-2xl font-medium tabular-nums leading-none text-stark-white sm:text-3xl">
                {parts === "pending"
                  ? "--"
                  : String(parts[unit.key]).padStart(2, "0")}
              </span>
              <span className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-dusk-gray">
                {unit.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
