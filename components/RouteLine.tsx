"use client";

import { useDispatchProgress } from "@/components/DispatchProgress";
import { Waypoint } from "@/components/Waypoint";
import { ROUTE } from "@/lib/dispatch";

const RAIL_HEIGHT = "min(62vh, 560px)";

/**
 * The Route Line — a single rail read scroll-first: a persistent scroll
 * indicator, a table of contents, and the literal route through the page's
 * `pending → building → deploying → deployed` narrative, all in one device.
 *
 * One DOM tree at every breakpoint: a hairline track, a stamp-red fill that
 * grows with real scroll progress, and a column of small numbered waypoints
 * hugging the true edge of the viewport. Only the active waypoint's full
 * code + label is ever shown persistently (any other reveals on hover or
 * keyboard focus) — keeping the rail's footprint to a couple of characters
 * at rest means it never has to fight page content for room, at any
 * viewport from a narrow phone to a 1280px laptop.
 *
 * The fill height is driven by `--route-progress`, written directly by
 * DispatchProgressProvider — this component never touches scroll itself.
 */
export function RouteLine() {
  const { activeId } = useDispatchProgress();
  const activeIndex = Math.max(
    ROUTE.findIndex((w) => w.id === activeId),
    0
  );
  const total = ROUTE.length;

  return (
    <nav
      aria-label="Page route"
      className="fixed left-2.5 top-1/2 z-40 -translate-y-1/2 sm:left-4 lg:left-5"
    >
      <ol
        className="relative"
        style={{ height: RAIL_HEIGHT, listStyle: "none", margin: 0, padding: 0 }}
      >
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 -translate-x-1/2 bg-line-strong/30"
          style={{ width: "1px", height: "100%" }}
        />
        <div
          aria-hidden="true"
          className="route-fill absolute left-0 top-0 -translate-x-1/2 bg-stamp"
          style={{ width: "1px", height: "100%" }}
        />
        {ROUTE.map((wp, i) => (
          <li key={wp.id} className="absolute left-0 w-max" style={{ top: `${(i / (total - 1)) * 100}%` }}>
            <Waypoint waypoint={wp} index={i} lit={i <= activeIndex} active={wp.id === activeId} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
