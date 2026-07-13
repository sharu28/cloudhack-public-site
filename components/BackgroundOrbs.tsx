/**
 * Drifting glow-orb background field — Convoy Cloud's own marketing-site
 * technique (see control-plane-frontend-v2), translated to CloudHack's
 * ink-stamp red/amber instead of Convoy's emerald. Three large, heavily
 * blurred radial gradients drift and pulse on independent, slow loops
 * behind all page content.
 *
 * Purely decorative (aria-hidden, pointer-events-none via the parent fixed
 * layer). Animations are defined in globals.css (.orb, .orb-1/2/3) and are
 * fully disabled — not merely slowed — under prefers-reduced-motion, since
 * a continuously drifting field is exactly the kind of ambient animation
 * that preference asks to remove.
 */
export function BackgroundOrbs() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <span className="orb orb-1" />
      <span className="orb orb-2" />
      <span className="orb orb-3" />
    </div>
  );
}
