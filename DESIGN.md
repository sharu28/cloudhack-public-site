# CloudHack 2026 Design System — DISPATCH

## Direction

The site is not a landing page. It is a live dispatch board for a one-day
build-and-ship operation: a manifest, not a marketing page. Warm parchment
paper, ink-stamp red, hard rectangles, monospace reference codes. Built
directly from the client's own vocabulary — Convoy (vehicles moving
together), Cloud (the destination), Hack (the single day of transit) — and
the real deployment lifecycle winning apps run through:
`pending -> building -> deploying -> deployed` (see `AGENTS.md`).

Two rebuilds preceded this one: a dark Linear/Vercel/Raycast-style system,
then a light Apple-product-page system. Both were competent executions of
someone else's identity. This system is built to be ownable — recognizable
with the wordmark removed.

## Principles

1. Trace every visual element back to something real — a route, a status, a
   manifest, a ticket — or cut it.
2. One primary action, always: Sign Up. Every other ask is visually and
   hierarchically secondary.
3. Silence over placeholder theater. Say nothing decorative where there is
   nothing real yet (no synthetic "coming soon" sponsor plates, no empty
   judge cards).
4. Flat and hard-edged, not floating and rounded. No glassmorphism, no
   gradient blobs, no soft drop shadows.
5. Motion narrates position and state — it doesn't just announce that
   content has loaded.
6. Reduced motion is designed per-animation from the start, not bolted on.
7. Content type decides layout: lists get ledgers, not cards; a genuine
   explainer gets a block, not a grid.

## The four ownable devices

1. **Route Line** (`components/RouteLine.tsx`, `Waypoint.tsx`) — a fixed
   rail read scroll-first: a persistent scroll indicator, a table of
   contents, and the literal route through the page, all at once. The fill
   height is written directly to a `--route-progress` CSS custom property by
   `DispatchProgress.tsx` on every scroll frame — never through React state.
   Only the active waypoint's full code/label shows persistently; others
   reveal on hover/focus, so the rail never fights page content for room at
   any viewport width (the real risk identified before building this).
2. **Manifest Row / Card** (`ManifestRow.tsx`, `ManifestCard.tsx`) — a
   hard-edged ledger block: monospace reference codes, a die-cut notch, no
   rounded floating card. Used for Tracks, Why Participate, Prizes, Schedule,
   and the Cloud Platform build stages. `ManifestCard` is reserved for the
   two Host organizations — the one place a bounded "card" shape is honest.
3. **Status Chip** (`StatusChip.tsx`) — a small pinned readout using the
   platform's real deployment states. Rather than a four-colour traffic
   light, the four stages are read through the same two brand colours at
   rising then resolving intensity: empty ink (pending) → empty stamp-red
   (building) → solid stamp-red (deploying) → solid ink (deployed).
4. **Split-Flap** (`SplitFlap.tsx`) — an airport departure-board character
   flip in pure CSS 3D transforms, no library. Used for hero stats, the
   countdown, schedule times, and prize amounts — real data, never
   decoration. Only characters that change re-flip.

## Color tokens

| Token | Value | Use |
| --- | --- | --- |
| `--color-paper` | `#f1eada` | Base canvas — warm parchment, not screen white |
| `--color-paper-raised` | `#faf6ec` | Card / raised surface |
| `--color-paper-dim` | `#eae0c9` | Recessed surface, zebra rows |
| `--color-ink` | `#1c1712` | Primary text — warm near-black |
| `--color-ink-2` | `#5c5344` | Secondary / muted text |
| `--color-line` | `#d8ccae` | Hairline — decorative dividers |
| `--color-line-strong` | `#8c7b57` | Meaningful boundary — inputs, active rules (≥3:1 contrast) |
| `--color-stamp` | `#a62e1d` | The one operational accent — CTAs, active state, links |
| `--color-stamp-deep` | `#7d2113` | Hover / pressed |
| `--color-hazard` | `#7a4e00` | Rare amber — genuine urgency only (final-hours countdown) |

Every pairing above is contrast-checked for WCAG AA (verified ≥4.5:1 for
text, ≥3:1 for meaningful UI boundaries) — see the git history for the
calculation. Legacy `--color-convoy-red` / `--color-text` / `--color-line`
aliases still resolve (repointed to the tokens above) so nothing silently
breaks if an old class survives somewhere; new work should reach for the
named tokens directly.

## Typography

Three tiers, each with exactly one job:

- **Display/stencil — Big Shoulders / Big Shoulders Stencil.** Reserved for
  the wordmark, Split-Flap numerals, and Status Chip labels *only*. Section
  headings deliberately do NOT use it — keeping it rare is what makes it
  land.
- **Body/UI — IBM Plex Sans.** Every heading, paragraph, button, and label.
  Chosen over Inter for its engineering/technical-documentation heritage
  rather than a general consumer-product one. Loaded as a single variable
  font (100–700).
- **Data/mono — IBM Plex Mono.** Every timestamp, reference code,
  coordinate, and price. Deliberately developer-native.

## Shape and elevation

- Radius: `--radius-none` (0px) everywhere by default. Two deliberate
  exceptions: `--radius-flap` (3px, Split-Flap cells) and `--radius-chip`
  (2px, small tag corners).
- Elevation: `--shadow-raised` and `--shadow-lifted` are **hard, unblurred
  offset shadows** (e.g. `3px 3px 0 rgba(...)`) — a "card sitting on paper"
  read, not a soft glow. Interactive cards lift along that same offset on
  hover, like picking a card up off a stack.
- Motifs: `.manifest-grid` (faint blueprint texture, replaces the old
  cloud-grid dot field), `.cut-line` (dashed "cut here" rule), `.notch-corner`
  (die-cut corner clip-path), `.crosshair` (registration mark).

## Motion

- `Reveal.tsx` — CSS transition + one `IntersectionObserver` per instance,
  no per-element framer-motion wrapper (cut real JS weight across the ~30
  call sites that only ever needed a fade-up).
- `ClipReveal.tsx` — kept, scoped to headline text only (the "typographic
  mask reveal").
- `Parallax.tsx` — kept, used sparingly (About's stamped quote only).
- `SplitFlap.tsx` / `RouteLine.tsx` / `StatusChip.tsx` — bespoke motion
  systems described above.
- Every animation honours `prefers-reduced-motion`: the global media query
  in `globals.css` collapses transitions/animations to ~0ms site-wide;
  scroll-linked effects (the Route Line's fill, the cursor-follow devices)
  additionally short-circuit their JS listeners entirely rather than
  fighting a live transition.

## Do

- Keep headlines short; let Plex Sans Bold carry the weight, not a display
  face.
- Use stamp red for exactly one clear primary action per view.
- Use manifest rows for lists, manifest cards only for genuinely distinct
  bounded entities (the two hosts).
- Trace every reference code back to real content (WP- for route
  waypoints, TRK- for tracks, PRZ- for prizes, RSN- for why-participate —
  distinct prefixes per data type, like a real cargo manifest).

## Do not

- Reintroduce gradient blobs, glassmorphism, or rounded floating cards.
- Add a second display/stencil-weight font anywhere outside the wordmark,
  numerals, and Status Chip.
- Invent sponsor names, judges, testimonials, or metrics that aren't real —
  an honest "to be announced" line beats a placeholder card.
- Add WebGL, canvas, or a 3D library for the Route Line or Split-Flap — both
  are deliberately CSS/SVG-only.
