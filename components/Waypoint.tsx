"use client";

import type { Waypoint as WaypointData } from "@/lib/dispatch";
import { cn } from "@/lib/utils";

/**
 * A single stop on the Route Line: a hard-edged marker, a small always-on
 * index number, and (only when active, or on hover/focus) its full
 * reference code and label. Keeping the persistent footprint to a couple of
 * characters means the rail never has to fight page content for space at
 * any viewport width — the one thing the revamp plan flags as this device's
 * biggest technical risk. Real `<a href="#id">`, not a div with an onClick,
 * so the rail is a genuine keyboard- and screen-reader-navigable table of
 * contents, not just a decorative scroll indicator.
 */
export function Waypoint({
  waypoint,
  index,
  lit,
  active,
}: {
  waypoint: WaypointData;
  index: number;
  lit: boolean;
  active: boolean;
}) {
  const isOrigin = waypoint.code === "";
  const ordinal = String(index).padStart(2, "0");

  return (
    <a
      href={`#${waypoint.id}`}
      className="group absolute left-0 top-0 flex -translate-y-1/2 items-center gap-2.5 py-2.5"
    >
      <span
        aria-hidden="true"
        className={cn(
          "block size-[7px] shrink-0 -translate-x-1/2 border transition-colors duration-300",
          lit ? "border-stamp bg-stamp" : "border-line-strong bg-paper group-hover:border-stamp/60",
          active && "size-[9px]"
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          "font-mono text-[9px] tabular-nums leading-none transition-colors duration-300",
          active ? "font-light text-stamp" : lit ? "text-ink-2" : "text-ink-2/40"
        )}
      >
        {isOrigin ? "◆" : ordinal}
      </span>

      {/* Full label — only the active waypoint carries it permanently; any
          waypoint reveals it on hover/keyboard focus. A flat paper backdrop
          keeps it legible on the rare frame it sits over body copy.
          aria-hidden: the sr-only span below is the link's real accessible
          name, so this purely visual reveal doesn't get announced twice. */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-full ml-2 whitespace-nowrap border border-line bg-paper-raised px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink shadow-raised transition-opacity duration-200",
          active ? "opacity-100" : "opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100"
        )}
      >
        {!isOrigin && <span className="mr-1.5 text-stamp">{waypoint.code}</span>}
        {waypoint.label}
      </span>
      <span className="sr-only">{isOrigin ? "Start" : `${waypoint.code} — ${waypoint.label}`}</span>
    </a>
  );
}
