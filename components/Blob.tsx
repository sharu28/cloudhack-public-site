/**
 * The hero's focal core glow: a large, fluid, organic gradient blob that morphs
 * across teal → cyan → blue → violet → magenta → green, with a film-grain/noise
 * texture clipped to its silhouette. Driven entirely by CSS (see globals.css
 * .blob). This is the bright centrepiece of the hero; the page-wide vignette and
 * grain are owned by the global <BackgroundField />, which carries the same
 * gradient consistently down the rest of the page.
 */
export function Blob() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* The morphing gradient mass, centred behind the hero content */}
      <div className="absolute left-1/2 top-1/2 h-[min(85vw,720px)] w-[min(85vw,720px)] -translate-x-1/2 -translate-y-1/2">
        <div className="blob absolute inset-0 opacity-80" />
        {/* grain clipped to the blob's morphing silhouette via mask-ish overlay */}
        <div className="blob noise absolute inset-0 opacity-[0.18] mix-blend-overlay" />
      </div>
    </div>
  );
}
