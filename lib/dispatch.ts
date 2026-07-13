/**
 * Single source of truth for the DISPATCH route: the ordered list of
 * homepage sections, their manifest waypoint codes, and which real Convoy
 * Cloud deployment state (`pending -> building -> deploying -> deployed`,
 * see AGENTS.md) each one maps to. RouteLine and StatusChip both read this
 * list so the rail, the waypoint dots, and the status readout can never
 * drift out of sync with each other or with the actual page order.
 *
 * Hero is the route's origin - it is the start of the line, not a numbered
 * waypoint, so it carries no WP code.
 */

export type DispatchStage = "PENDING" | "BUILDING" | "DEPLOYING" | "DEPLOYED";

export interface Waypoint {
  /** Matches the section's `id` attribute. */
  id: string;
  /** Manifest reference code, e.g. "WP-01". Empty string for the origin. */
  code: string;
  /** Short label shown on the rail and in skip-navigation contexts. */
  label: string;
  stage: DispatchStage;
}

export const ORIGIN: Waypoint = {
  id: "hero",
  code: "",
  label: "ORIGIN",
  stage: "PENDING",
};

export const WAYPOINTS: Waypoint[] = [
  { id: "about", code: "WP-01", label: "ABOUT", stage: "BUILDING" },
  { id: "why", code: "WP-02", label: "WHY PARTICIPATE", stage: "BUILDING" },
  { id: "tracks", code: "WP-03", label: "TRACKS", stage: "BUILDING" },
  { id: "cloud-platform", code: "WP-04", label: "CLOUD PLATFORM", stage: "DEPLOYING" },
  { id: "schedule", code: "WP-05", label: "SCHEDULE", stage: "DEPLOYING" },
  { id: "prizes", code: "WP-06", label: "PRIZES", stage: "DEPLOYING" },
  { id: "details", code: "WP-07", label: "DETAILS", stage: "DEPLOYED" },
  { id: "venue", code: "WP-08", label: "VENUE", stage: "DEPLOYED" },
  { id: "rules", code: "WP-09", label: "RULES", stage: "DEPLOYED" },
  { id: "hosts", code: "WP-10", label: "HOSTS", stage: "DEPLOYED" },
  { id: "community", code: "WP-11", label: "COMMUNITY", stage: "DEPLOYED" },
  { id: "faq", code: "WP-12", label: "FAQ", stage: "DEPLOYED" },
];

/** Full route including the unlabeled origin, in page order. */
export const ROUTE: Waypoint[] = [ORIGIN, ...WAYPOINTS];

export function stageForId(id: string): DispatchStage {
  return ROUTE.find((w) => w.id === id)?.stage ?? "PENDING";
}
