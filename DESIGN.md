# CloudHack 2026 Design System - DISPATCH (Dark Register)

## Direction

The site is not a landing page. It is a live dispatch board for a one-day
build-and-ship operation: a manifest, not a marketing page - now rendered on
a dark control-plane canvas. Warm near-black field, glowing ink-stamp
red/amber accents, thin-to-medium Inter type, and slow drifting glow orbs.
Built directly from the client's own vocabulary - Convoy (vehicles moving
together), Cloud (the destination), Hack (the single day of transit) - and
the real deployment lifecycle winning apps run through:
`pending -> building -> deploying -> deployed` (see `AGENTS.md`).

This is the system's second surface pass. The first (light parchment paper,
hard ink-black type) is preserved in git history on `main`. This dark
register deliberately borrows Convoy Cloud's own actual marketing-site
register (see `control-plane-frontend-v2`) - thin/light Inter, a near-black
canvas, drifting gradient-orb glow - translated to CloudHack's own
ink-stamp red instead of Convoy's emerald, so the two sibling sites (Convoy
Cloud's product marketing and CloudHack's event site) read as the same
family without being the same site.

## Principles

1. Trace every visual element back to something real - a route, a status, a
   manifest, a ticket - or cut it.
2. One primary action, always: Sign Up. Every other ask is visually and
   hierarchically secondary.
3. Silence over placeholder theater. Say nothing decorative where there is
   nothing real yet (no synthetic "coming soon" sponsor plates, no empty
   judge cards).
4. Content stays hard-edged and flat; chrome (nav, buttons) is pill-shaped -
   a deliberate hybrid, not a contradiction (see "Shape" below).
5. Motion narrates position and state - it doesn't just announce that
   content has loaded.
6. Reduced motion is designed per-animation from the start, not bolted on.
7. Content type decides layout: lists get ledgers, not cards; a genuine
   explainer gets a block, not a grid.

## The four ownable devices

1. **Route Line** (`components/RouteLine.tsx`, `Waypoint.tsx`) - a fixed
   rail read scroll-first: a persistent scroll indicator, a table of
   contents, and the literal route through the page, all at once. The fill
   height is written directly to a `--route-progress` CSS custom property by
   `DispatchProgress.tsx` on every scroll frame - never through React state.
   Only the active waypoint's full code/label shows persistently; others
   reveal on hover/focus, so the rail never fights page content for room at
   any viewport width.
2. **Manifest Row / Card** (`ManifestRow.tsx`, `ManifestCard.tsx`) - a
   hard-edged ledger block: monospace reference codes, a die-cut notch, no
   rounded floating card. Used for Tracks, Why Participate, Prizes, Schedule,
   and the Cloud Platform build stages. `ManifestCard` is reserved for the
   two Host organizations - the one place a bounded "card" shape is honest.
3. **Status Chip** (`StatusChip.tsx`) - a small pinned readout using the
   platform's real deployment states. Rather than a four-colour traffic
   light, the four stages are read through the same two brand colours at
   rising then resolving intensity: empty ink (pending) → empty glow-red
   (building) → solid glow-red (deploying) → solid ink (deployed).
4. **Split-Flap** (`SplitFlap.tsx`) - an airport departure-board character
   flip in pure CSS 3D transforms, no library. Cells render as small lit
   plates (dark plate, glowing red-orange digit) - literally an instrument
   readout. Used for hero stats, the countdown, schedule times, and prize
   amounts. Only characters that change re-flip.

## Color tokens

| Token | Value | Use |
| --- | --- | --- |
| `--color-paper` | `#161210` | Base dark canvas |
| `--color-paper-raised` | `#221c15` | Card / raised surface |
| `--color-paper-dim` | `#1c1712` | Recessed surface, zebra rows |
| `--color-ink` | `#f5efe1` | Primary text - warm off-white (16:1 on canvas) |
| `--color-ink-2` | `#a39a8a` | Secondary / muted text (6.7:1 on canvas) |
| `--color-line` | `rgba(245,239,225,.10)` | Hairline - decorative dividers only |
| `--color-line-strong` | `#8a7c5f` | Meaningful boundary - inputs, card/plate edges (≥4:1) |
| `--color-stamp` | `#ff6b47` | Bright glow - text, icons, links, active fills, Route Line, orb glow (6.6:1 on canvas) |
| `--color-stamp-deep` | `#a62e1d` | Solid fill for the **one** primary Sign Up action, paired with light text (6:1) - never used as small text on the canvas directly (2.7:1, fails AA) |
| `--color-hazard` | `#d9a23f` | Rare amber - genuine urgency only (final-hours countdown, 8.1:1) |

Two reds, two jobs - this is the one rule to hold the line on. `stamp`
(bright) is for anything read as text/icon/accent against the dark canvas.
`stamp-deep` is only for large fills that have light text sitting on top of
them. Mixing the two roles is exactly how a contrast regression sneaks in.

## Typography

Inter only, thin-to-medium, **never bold** - Convoy Cloud's own register:

- **Display** - `font-thin` (100) at fluid `clamp()` sizes for the wordmark
  and page H1s. The one loud, huge moment on each page.
- **Headings** - `font-extralight` (200), tight negative tracking
  (`-0.02em` to `-0.03em`). Every section H2/H3 in the system.
- **Body / UI** - `font-light` (300) is the default weight (set on `body`);
  `font-normal` (400) and `font-medium` (500) appear only where Tailwind's
  own defaults already used them (e.g. native `<label>` elements).
- **Data / mono** - IBM Plex Mono, `font-light` (300) for labels/eyebrows,
  `font-medium` (500) for Split-Flap digit readouts specifically (a
  deliberate exception - live data should read like an instrument, not
  prose).

Only five weights are loaded for Inter (100/200/300/400/500) and three for
Plex Mono (300/400/500) - anything requesting a weight outside those lists
will silently fall back to the browser's system font at that weight, so
new class combinations should stay inside this set.

## Shape - a deliberate hybrid

- **Content stays hard-edged**: Manifest Row/Card, Split-Flap cells, Status
  Chip, icon plates, form inputs, data tables. `--radius-none` (0px)
  everywhere here, plus two exceptions: `--radius-flap` (3px, Split-Flap)
  and `--radius-chip` (2px, small tags).
- **Chrome is pill-shaped**: the floating Nav, and every primary/secondary
  CTA button, use `rounded-full` - matching Convoy Cloud's own nav/button
  language. This is why the hybrid isn't a contradiction: a manifest ledger
  is inherently rectangular (it's a printed form), but the *controls* you
  press to act on it can be a different, friendlier shape, the way a
  physical control panel has rectangular displays and round buttons.
- **Elevation**: dark surfaces don't cast directional shadows - there's no
  light source to imply. `--shadow-raised` is `none`; depth comes from
  background-lightness steps (canvas → paper-dim → paper-raised) and
  borders. `--shadow-lifted` and `--shadow-stamp` are warm ember-glow box
  shadows (soft, colored, no offset) used only on hover/for the primary CTA.
- Motifs: `.manifest-grid` (faint blueprint texture), `.cut-line` (dashed
  "cut here" rule), `.notch-corner` (die-cut corner clip-path), `.crosshair`
  (registration mark), `.orb`/`.orb-1/2/3` (drifting glow field).

## Motion

- `Reveal.tsx` - CSS transition + one `IntersectionObserver` per instance,
  no per-element framer-motion wrapper.
- `ClipReveal.tsx` - kept, scoped to headline text only (the "typographic
  mask reveal").
- `Parallax.tsx` - kept, used sparingly (About's stamped quote only).
- `.glow-shimmer` - a slow gradient sweep across the hero's "2026" mark,
  the one place the glow color moves on its own rather than in response to
  scroll/state.
- `.orb` field - three large blurred gradients drifting/pulsing behind all
  content, disabled entirely (not merely slowed) under reduced motion.
- `SplitFlap.tsx` / `RouteLine.tsx` / `StatusChip.tsx` - bespoke motion
  systems described above.
- Every animation honours `prefers-reduced-motion`: the global media query
  in `globals.css` collapses transitions/animations to ~0ms site-wide;
  scroll-linked effects and the orb field additionally short-circuit their
  JS/CSS entirely rather than fighting a live transition.

## Do

- Keep the wordmark/H1 as the only `font-thin` moment on a page; headings
  underneath it stay `font-extralight`.
- Use `stamp` (bright) for anything read as text on the canvas; use
  `stamp-deep` only for a filled button with light text on top.
- Use manifest rows for lists, manifest cards only for genuinely distinct
  bounded entities (the two hosts).
- Keep chrome pill-shaped, content hard-edged - don't let one bleed into
  the other.

## Do not

- Reintroduce a directional drop shadow on a dark surface - it reads as a
  bug, not depth. Use the glow tokens instead.
- Add a sixth font weight anywhere without also adding the corresponding
  `next/font` weight file - an unloaded weight silently falls back to the
  system font.
- Invent sponsor names, judges, testimonials, or metrics that aren't real -
  an honest "to be announced" line beats a placeholder card.
- Add WebGL, canvas, or a 3D library for the Route Line, Split-Flap, or orb
  field - all three are deliberately CSS/SVG-only.
