# CloudHack 2026 : Full Frontend Revamp Plan

Codename for the creative direction: **DISPATCH**

Scope note: this plan covers the customer-facing marketing site only, the visual
design, content architecture, and frontend engineering of the pages a visitor
sees. Registration storage, spam protection, analytics, testing infrastructure,
and CI tooling are intentionally out of scope for this pass and are called out
briefly at the end so nothing is lost, but they are not part of the active
rebuild. Registration itself stays exactly as it works today (a form that emails
the team via Resend) and can be hardened in a later, separate pass.

Nothing in this plan has been implemented yet. It is the audit and the design
brief for the next round of work on `convoy-hackathon`.

---

## 1. Executive Summary

The site has already been rebuilt once this cycle, from a dark "Rive" system
(Linear/Vercel/Raycast-style: black canvas, one orange accent, technical mono
type, documented in the current `DESIGN.md`) into a light "Apple style" system
(frosted nav, pill buttons, soft rounded cards, gradient blobs). Both are
competent executions of someone else's identity. Neither is ownable, and the
Apple-style version repeats, almost line for line, the exact list of tropes this
revamp is meant to avoid: gradient blobs, glassmorphism, hero-left-copy-right-
image, floating rounded cards, and a directly Apple-derived type and button
language.

The fix is not a third palette swap. This event is run by a company literally
named **Convoy**, deploying to a real platform whose backend states are
`pending -> building -> deploying -> deployed` (see `AGENTS.md` in this
workspace), for an audience of developers who already think in payloads,
manifests, and shipped code. None of that vocabulary appears anywhere in the
current UI. This plan proposes building the entire visual and motion system out
of it.

Grounding facts, verified in the repo, not assumed:
- There are zero photographs or custom raster images anywhere in the project.
  Every visual is inline SVG, generated at build/request time, or CSS. The
  creative direction is built for that constraint, not against it.
- The homepage is 16 stacked sections in `app/page.tsx`, mixing participant
  content with a full sponsor pricing table, with at least one section that is
  currently empty ("Judges") and one that is pure "coming soon" filler
  ("Challenge").
- Current measured baseline from a real production build: homepage First Load
  JS is 175 kB, `/convoy-cloud` is 152 kB, `/signup` is 116 kB, shared baseline
  is 102 kB. Any redesign should hold at or under these numbers.

---

## 2. Current State Audit

### 2.1 Product and communication

| # | Finding | Evidence | Why it matters | Priority |
|---|---|---|---|---|
| P1 | Two audiences share one funnel | `app/page.tsx` interleaves participant content with a full sponsorship pricing table (`components/sections/ForSponsors.tsx`) between "Community" and "FAQ" | A sponsor has to scroll past 14 sections of student content to find pricing; a student hits an LKR 500,000 tier table on the way to registering | High |
| P2 | Motivation buried late | `components/sections/WhyParticipate.tsx` sits at position 13 of 16, after Rules, Hosts, and Judges | Visitors absorb logistics and rules before ever being told why to care | High |
| P3 | Duplicated "how you build" content | `components/sections/Details.tsx`'s "Build setup" group (AI model, tokens, deployment) repeats `components/sections/CloudPlatform.tsx` almost exactly | Reads as unedited, not premium | Medium |
| P4 | A full section that only says "coming soon" | `components/sections/Challenge.tsx` is a whole section whose sole content is a lock icon and "Coming soon," sitting right before Prizes | Kills momentum at the point interest should be peaking | Medium |
| P5 | An empty section given prime space | `components/sections/Judges.tsx`: zero confirmed judges, three generic placeholder hints | A section that is honestly empty should not occupy a full scroll beat in a premium redesign | Medium |
| P6 | Too many competing calls to action | Sign Up, Join as Partner, WhatsApp community, "What is Convoy Cloud," "Visit Convoy Tech," "Become a sponsor," all live at once (`content/site.ts`, `components/Nav.tsx`, `components/sections/Hero.tsx`) | No single action dominates, conversion is diluted | High |

### 2.2 Visual design

| # | Finding | Evidence | Priority |
|---|---|---|---|
| V1 | Two consecutive borrowed identities | Dark version names Linear, Vercel, Raycast, GitHub Codespaces as references in `DESIGN.md`. Current version uses apple.com's clamp() hero type, pill CTAs, frosted nav, soft cards, gradient blobs | Critical |
| V2 | Generic gradient blobs | `.blur-blob-1/2/3` in `app/globals.css`, `components/Blob.tsx`, `components/ui/animated-blur-blob-background.tsx` | Critical |
| V3 | Glassmorphism throughout | `bg-white/80 backdrop-blur-xl` (`components/Nav.tsx`), `bg-white/90 backdrop-blur-xl` (`components/StickyCTA.tsx`), `bg-white/70 backdrop-blur-sm` (`components/sections/Hero.tsx`) | High |
| V4 | Predictable hero, copy left, image right | `components/sections/Hero.tsx`, `lg:grid-cols-[1.05fr_0.95fr]` | Critical |
| V5 | Bento-style card grids without a reason | `Tracks`, `Prizes`, `WhyParticipate`, `Hosts`, `Judges`, `ForSponsors` all use the same rounded `<Card>` grid | High |
| V6 | A marquee of mostly empty content | `components/sections/SponsorCarousel.tsx` auto-scrolls; only "SLIIT" is `confirmed: true` in `content/site.ts`, the rest are synthetic "coming soon" plates | Medium |
| V7 | No owned visual motif | The dark version's circuit-corner and pixel-arrow graphics (`components/graphics.tsx`) are now unused anywhere in the codebase. The current version has a generic decorative cloud SVG and nothing else memorable | Critical |
| V8 | Ungoverned, drifting tokens | Arbitrary values repeated with small variations everywhere: `rounded-[1.5rem]`, `rounded-[1.75rem]`, `rounded-[3.5rem]`, unique `shadow-[...]` strings per component | Medium |

### 2.3 UX and interaction

| # | Finding | Evidence | Priority |
|---|---|---|---|
| U1 | Four overlapping motion primitives, no system | `Reveal.tsx`, `ClipReveal.tsx`, `SplitReveal.tsx`, `Parallax.tsx` all do a variant of fade or wipe, applied inconsistently section to section with no documented rule | High |
| U2 | Per-card mouse tilt at scale | `components/ui/card.tsx` attaches a `mousemove` listener with a 3D tilt to every card, used across six sections at once | Medium |
| U3 | Auto-scrolling carousel has no visible pause control | `components/sections/SponsorCarousel.tsx` only pauses on hover, not on keyboard focus or via a visible control | High |
| U4 | No skip-to-content link | `app/layout.tsx` renders `<Nav>` with no bypass link for keyboard and screen reader users | Medium |
| U5 | No real mobile navigation pattern | `components/Nav.tsx` only ever shows a wordmark and one CTA on mobile; fine today, but any IA growth needs a proper pattern | Low |

### 2.4 Frontend engineering (frontend-relevant only)

| # | Finding | Evidence | Priority |
|---|---|---|---|
| F1 | Orphaned components | `components/Blob.tsx`, `components/BackgroundField.tsx`, `components/ui/animated-gradient-background.tsx`, `components/graphics.tsx`, and `components/ui/contact-2.tsx` are not imported anywhere in the codebase | Low |
| F2 | Motion library used for its cheapest job | `framer-motion` is a real, meaningful dependency, but roughly thirty of its current usages are simple fade or translate reveals that CSS alone can do just as well | Medium |
| F3 | No design-token governance | Radius, shadow, and motion-timing values are invented per component instead of drawn from a small shared set | Medium |

---

## 3. Top Problems Ranked by Impact

1. No ownable creative identity across two consecutive rebuilds (V1, V2, V4, V7).
2. Two audiences sharing one undifferentiated funnel (P1, P6).
3. Motivational content buried behind logistics and rules (P2).
4. Motion applied as decoration, not narrative, the exact pattern this revamp is meant to avoid (U1, F2).
5. Structural redundancy and empty sections cost credibility (P3, P4, P5).
6. Accessibility gaps around motion pause and skip navigation (U3, U4).
7. Dead code and ungoverned tokens raise long-term maintenance risk (F1, V8, F3).

---

## 4. Product and Conversion Assessment

The value proposition itself is clear: a one-day hackathon, real sponsor
problems, cash prizes, readable within seconds on the current hero. That is a
genuine strength worth carrying forward untouched.

What is missing is fit. The current visual language (consumer tech, Apple
product page polish) targets a general aesthetic sensibility, not specifically
university developers and early-career builders in Sri Lanka, the stated
audience. A concept built from developer-native vocabulary (payloads,
manifests, deploy status) and a more industrial, less "consumer gadget"
register will read as built for this audience rather than borrowed from a
different one.

Trust and proof are structurally light, but honestly so. This reads as a
first-of-its-kind event: no past photos, no testimonials, mostly unconfirmed
sponsors. The plan below does not manufacture false proof. It builds
credibility through operational specificity, making the real schedule, the real
prize structure, and the real deployment pipeline feel concrete and well run,
rather than inventing social proof that does not exist yet.

---

## 5. Proposed Creative Direction: DISPATCH

**Central concept.** The site is not a landing page. It is a live dispatch
board for a one-day build-and-ship operation. Every visitor is looking at the
manifest, route, and status board for CloudHack 2026, the way you would read a
departures board or a shipping manifest before a convoy moves out. This is
built directly from the client's own vocabulary: Convoy (vehicles moving
together), Cloud (the destination), Hack (the single day of transit), and the
real deployment lifecycle the winning apps will run through, `pending ->
building -> deploying -> deployed`, which becomes the site's own reading
progress language.

**Emotional target.** Focused urgency and operational confidence: this is a
real, well-run operation, and I want a seat on it. Not Apple's calm
aspiration, not generic SaaS's friendly approachability.

**The four ownable devices** (each should be recognizable with the logo
removed):

1. **The Route Line.** A single SVG path running the length of the page,
   drawn in as the user scrolls, with labeled waypoints (`WP-01 ABOUT`,
   `WP-04 SCHEDULE`) that light up as each section becomes active. Replaces
   the generic top-of-viewport progress bar with something that is a scroll
   indicator, a table of contents, and the literal route the reader is on, all
   at once.
2. **The Manifest Row/Card.** A hard-edged, ledger-style content block, not a
   rounded floating card: monospace reference codes, right-aligned numerals, a
   die-cut notch at one corner. Used for Tracks, Prizes, and Schedule instead
   of a bento grid.
3. **The Status Chip.** A small pinned readout using the platform's real
   deployment states, advancing as the visitor scrolls: Hero is `PENDING`,
   About/Why Participate/Tracks is `BUILDING`, Cloud Platform/Schedule/Prizes
   is `DEPLOYING`, Rules/Hosts/Community/FAQ is `DEPLOYED`. This is the
   hardest device for a competitor to copy convincingly, since it requires
   knowing the real product's internal state machine, not just its name.
4. **The Split-Flap.** An airport departure-board character-flip component for
   the countdown, the hero stats, schedule times, and prize amounts. Built in
   pure CSS 3D transforms, no library.

**Design principles.**
1. Every recurring visual element must map to something real. Decoration must
   justify itself or be cut.
2. One primary action everywhere: Sign Up. Every other ask is visually and
   hierarchically secondary.
3. Say nothing decorative where there is nothing real yet. Silence over
   placeholder theater (Judges, unconfirmed sponsors).
4. Flat and hard-edged over soft and floating. No glassmorphism, no
   drop-shadow-heavy rounded cards.
5. Motion narrates position and state. It does not just announce that content
   has loaded.
6. Reduced motion is specified per animation from the start, not bolted on
   after.
7. Content type determines layout: lists get ledgers, not cards; a genuine
   explainer gets a block, not a grid.

**Typography direction.**
- Display and stencil: **Big Shoulders** (Display/Stencil cut), a condensed
  industrial face whose stencil variant reads like crate and shipping-label
  lettering. Used for the wordmark, section numerals, and Status Chip labels
  only.
- Body and UI: **IBM Plex Sans**, chosen over Inter because Plex was designed
  with an engineering and technical-documentation heritage rather than a
  general consumer-product one.
- Data and mono: **IBM Plex Mono** (or **JetBrains Mono**) for every
  timestamp, ticket code, coordinate, and price, deliberately developer-native.

**Color and contrast strategy.**
- Base neutrals reframed as manifest paper, not screen white: a warm
  parchment/off-white base and a warm near-black ink, both to be finalized and
  contrast-checked during design-system implementation.
- Primary accent: an ink-stamp red, used only as an operational or status
  color (primary CTA, active waypoint, "DEPLOYING" chip), never as decoration.
- Secondary accent, used rarely: a hazard/caution amber, reserved for genuine
  urgency moments (for example, the countdown inside its final 48 hours).

**Shape language.** Hard rectangles, ticket-stub notches, dashed "cut here"
borders, corner crosshair marks at true waypoints, all drawn from print
production and cargo-document conventions, not rounded-corner UI-kit
conventions.

**Imagery.** No photography exists and none should be manufactured. The
language stays entirely vector, typographic, and motion, turning the current
constraint into the identity.

**Why competitors cannot copy this convincingly.** It requires the specific
word "Convoy" in the tech partner's name, real knowledge of that partner's
deployment-state vocabulary, and a developer-native data register that only
makes sense for this audience. A generic hackathon site could copy the paper
and red palette. It could not authentically copy the status-machine
storytelling without either being Convoy or visibly copying it.

---

## 6. Design Principles

Restated as a short checklist for anyone building a new section later:

1. Trace every visual element back to something real, a route, a status, a
   manifest, a ticket, or cut it.
2. One primary action, always, Sign Up.
3. Silence over placeholder theater.
4. Flat and hard-edged, not floating and rounded.
5. Motion narrates where you are and what stage this is.
6. Reduced motion is designed, not defaulted.
7. Content type decides layout.

---

## 7. Information Architecture Changes

**Homepage: reduce from 16 sections to 11, reordered for momentum.**

| Order | Section | Change |
|---|---|---|
| 1 | Hero | Rebuilt |
| 2 | About | Restyled |
| 3 | Why Participate | Moved up from position 13 |
| 4 | Tracks | Restyled as manifest rows, absorbs a one-line "briefs revealed on the day" note in place of the old Challenge section |
| 5 | Cloud Platform | Consolidated, absorbs Details' duplicated build-setup content |
| 6 | Schedule | Restyled as a route/ledger with Split-Flap times |
| 7 | Prizes | Restyled as manifest rows with Split-Flap amounts |
| 8 | Details | Trimmed to pure logistics: when, where, who, teams, capacity |
| 9 | Venue | Kept |
| 10 | Rules | Kept |
| 11 | Hosts | Absorbs a one-line "judging panel and mentors, confirming soon" note in place of the empty Judges section |
| Tail | Community, FAQ | Kept, moved to the close of the page |

**Removed as standalone homepage sections:** Challenge (folded into Tracks),
Judges (folded into Hosts as a footnote), ForSponsors (moved to its own route).

**New route: `/partners`.** The sponsorship pricing table and tier legend move
here in full, with their own framing ("Set the problem. Meet the builders."),
own metadata, and own CTA. The homepage keeps one compact, honest teaser
linking out, instead of a full pricing table sitting inside the participant
funnel.

**`/convoy-cloud` and `/signup`** stay as dedicated routes, restyled under the
new system, no structural change to their existence.

**Contact/sponsor-enquiry component.** `components/ui/contact-2.tsx` is
currently fully built but unused anywhere. Either remove it, or intentionally
wire it up as the enquiry form on the new `/partners` route. This is a small
open decision, not a blocker.

---

## 8. Page-by-Page Revamp Plan

### Home, Hero
- Purpose: establish the DISPATCH concept immediately, communicate what/when/
  where in under ten seconds, drive to Sign Up.
- Content order: eyebrow, Status Chip (`PENDING`), wordmark in Big Shoulders
  Stencil, one-line mission, Split-Flap stats (80 / ~20 / 1), primary CTA,
  Route Line origin point, countdown.
- Layout: full-bleed, not split copy-left/image-right. The Route Line is the
  dominant graphic device, no illustrative asset needed to fill "the other
  half."
- Motion: one choreographed entrance sequence (see Section 9, Animation A).
- Mobile: Route Line collapses to a thin vertical thread on the left edge,
  fewer always-visible waypoint labels.
- CTA: Sign Up is the only button. "Join as Partner" becomes a small text
  link, not a peer button.

### Home, About
- Full-width editorial statement, not a two-column panel with a floating
  pull-quote card. The quote becomes a stamped Manifest entry.
- Motion: typographic mask reveal only, no card, no tilt.

### Home, Why Participate (moved up)
- Four Manifest rows with reference codes (`WP-01` through `WP-04`), not a
  2x2 bento grid.
- No CTA here; this section's job is motivation, not conversion.

### Home, Tracks
- Three Manifest rows with a track code (`TRK-01 AUTOMATION`), absorbing the
  "briefs revealed on the day" note inline.

### Home, Cloud Platform (consolidated)
- Absorbs the Details section's duplicated AI-model/tokens/deployment
  content. Presented as a literal four-stage manifest, Workshop, Build,
  Deploy, Submit, each stamped with a Status Chip state, the most literal use
  of the status-machine device on the page.
- CTA: link out to `/convoy-cloud` for full detail.

### Home, Schedule
- A true ledger: each row is a Split-Flap time, a title, a blurb. The single
  best fit for the Split-Flap device, since it is literally a timetable.

### Home, Prizes
- Three Manifest rows, amounts rendered in Split-Flap.

### Home, Details (trimmed)
- Pure logistics ledger, no repeated build/deploy content.

### Home, Venue and Rules
- Kept structurally, restyled to flat manifest blocks instead of rounded
  charcoal cards.

### Home, Hosts (absorbs Judges footnote)
- Two Manifest Cards, Ether Labs and Convoy Tech, one of the few places a
  card treatment is justified since these are two distinct organizations.
  Followed by one plain line for judges and mentors instead of three
  placeholder cards.

### Home, Community and FAQ
- Kept, restyled, moved to the tail. FAQ keeps native `<details>/<summary>`.

### New: `/partners`
- Own hero framing, the tier comparison restyled as ledger rows (it is
  tabular data, a table is the honest form for it), footnote on in-kind
  support, single CTA.

### `/signup`
- Kept structurally, restyled to the new surface language. `RegisterForm`'s
  field pattern is already solid and should be preserved close to as-is.

### `/convoy-cloud`
- Kept structurally, restyled. This page is the natural home for the fullest
  explanation of the Status Chip's real-world source, the actual deployment
  lifecycle.

---

## 9. Motion and Interaction System

All animations use `transform`, `opacity`, and `clip-path` only. Every one has
a stated reduced-motion fallback.

**A. Hero entrance**
- Trigger: page load.
- Sequence: Status Chip stamps in, wordmark characters stamp in with a slight
  ink overshoot, one-liner mask-reveals left to right, Split-Flap stats spin
  up, CTA appears last.
- Timing: about 900ms total, staggered about 120ms per step, sharp
  deceleration easing.
- Mobile: same sequence, shorter travel distances, Split-Flap limited to two
  digits animating at once.
- Reduced motion: everything appears in its final state with a 150ms opacity
  fade only.

**B. Route Line scroll-draw**
- Trigger: scroll position.
- Sequence: the path's stroke offset is driven by scroll progress, waypoint
  dots switch from unlit to lit as the scroll position passes each section.
- Mobile: condensed to a left-edge thread, waypoint labels shown on tap or
  focus rather than always on.
- Reduced motion: path renders fully drawn immediately, waypoint state still
  updates on scroll since it conveys real position, not decoration.
- Implementation note: drive this from a scroll listener writing directly to
  CSS custom properties, not React state, to avoid re-render cost.

**C. Status Chip advance**
- Trigger: scroll position crossing section boundaries.
- Sequence: chip text cross-fades to the next state with a short transition.
- Reduced motion: state still updates, transition becomes an instant swap.

**D. Typographic mask reveal**
- Used for headline text only (section headers, the About statement): a
  clip-path wipe, left to right, once.
- Reduced motion: content appears in its final state instantly.

**E. Split-Flap board**
- Used for hero stats, the countdown, schedule times, and prize amounts.
- Each character rotates on flip, unchanged digits do not animate.
- Mobile: stagger digit flips by about 40ms each to avoid animating the whole
  countdown at once on first paint.
- Reduced motion: digits snap directly to their value.

**F. Section content entrance (default)**
- A short stagger of opacity and an 8px translate for Manifest rows, smaller
  travel than a typical fade-up.
- Reduced motion: opacity only.

**G. Cursor waypoint readout (desktop hero only, experimental)**
- A small crosshair readout follows the pointer in the hero on
  pointer-fine devices only, showing the current waypoint code.
- Fully disabled on touch and reduced motion, with zero information loss when
  absent.
- Flagged as the one explicitly experimental idea in this system, to validate
  in the first implementation slice before deciding whether it ships broadly.

**H. Route transitions between pages**
- A brief directional wipe using the native View Transitions API where
  supported, instant navigation everywhere else, no animation library
  required.

**Explicitly excluded:** no scroll-hijacking, the Route Line reads scroll, it
never overrides it. No WebGL, canvas, or 3D, see Section 11. No parallax
beyond the existing subtle pattern already in `components/Parallax.tsx`.

---

## 10. Design-System Plan

Keep the existing token mechanism, Tailwind v4's CSS-native `@theme` blocks in
`app/globals.css`, no separate config file. It is already the right approach
for this stack and needs governance, not replacement.

**New token groups:**
- Color: `--color-ink`, `--color-paper`, `--color-stamp` (primary red),
  `--color-hazard` (rare amber accent), plus the existing semantic aliases
  repointed to the new palette.
- Typography: `--font-display` (Big Shoulders), `--font-body` (IBM Plex
  Sans), `--font-mono` (IBM Plex Mono), loaded through `next/font/google`,
  only the weights actually used.
- Radius: collapse the current ad hoc set down to two or three named tokens,
  since the new shape language is mostly hard-edged.
- Elevation: a single small scale, flat and one raised state, replacing the
  many bespoke shadow strings.
- Motion: named easing and duration tokens, centralizing values currently
  hardcoded per component.

**Component inventory.**
- New: `RouteLine`, `StatusChip`, `SplitFlap`, `ManifestRow`, `ManifestCard`,
  `Waypoint`.
- Replaced: `Hero`, `Section` header treatment, `Card` (tilt removed, shape
  flattened, or retired in favor of `ManifestRow`/`ManifestCard` depending on
  content).
- Retired: `Reveal` and `SplitReveal` (superseded by Split-Flap and the
  section entrance pattern), `AnimatedBlurBlobBackground`, `Blob`,
  `BackgroundField`, `animated-gradient-background.tsx`, `graphics.tsx`, and
  `contact-2.tsx` unless wired up per the Section 7 decision. `ClipReveal` is
  kept, scoped specifically to headline text.

---

## 11. Frontend Architecture Plan

Keep Next.js App Router, React, and Tailwind v4. No framework change is
justified by anything in this audit; the problems found are creative,
architectural, and motion-related, not framework-level.

**On WebGL, canvas, shaders, or any 3D library:** explicitly not recommended.
The Route Line is a single SVG path animated with CSS and scroll-derived
custom properties. The Split-Flap is a CSS 3D transform. Neither needs a
rendering engine heavier than the browser already ships. A WebGL layer would
add real bundle weight, mobile battery and performance risk, and accessibility
complexity, for a static informational event site whose actual job is
converting a visitor into a registered participant, not demonstrating a
graphics showcase.

**Motion:** keep `framer-motion` for the moments that need real spring or
gesture behavior (the hero entrance choreography, the Route Line's scroll
binding, reusing the pattern already proven in `components/Parallax.tsx` and
`components/ScrollProgress.tsx`). Convert the simple, repeated fade-up
reveals into a small CSS plus `IntersectionObserver` utility instead of a
framer-motion wrapper component per instance, cutting redundant JS execution
across a page with dozens of these.

**Fonts:** continue self-hosting through `next/font/google` (already the
pattern), load only the weights actually used for Big Shoulders, IBM Plex
Sans, and IBM Plex Mono, keep `display: swap` and CSS variable exposure as
already done for Inter today.

**Assets:** no raster images exist today and the direction does not require
any. If real photography is ever introduced later (event-day photos, for
example), it should go through `next/image` with explicit sizing, this is a
forward rule, not a current violation.

---

## 12. Accessibility and Reduced-Motion Plan

Carried forward from the current implementation, keep as-is:
- The SSR-safe reduced-motion hook (`lib/useReducedMotionSafe.ts`), which
  avoids a real hydration bug already solved once.
- Native `<details>/<summary>` for FAQ, no change needed.
- The `Field` label/hint/error pattern in `RegisterForm.tsx`.
- `aria-hidden` on all decorative graphics.

New requirements introduced by this plan:
- A skip-to-content link before the nav in `app/layout.tsx`.
- A visible pause and play control on the Sponsor carousel if it is kept as a
  marquee at all (see V6, likely replaced by a static list instead).
- Every new motion device (Route Line, Status Chip, Split-Flap, cursor
  readout) ships with the specific reduced-motion fallback described for it
  in Section 9, from the first implementation, not added after.
- The new ink-red and parchment palette must be checked for WCAG contrast
  before the exact hex values are finalized, both for small text and for
  button fills.

---

## 13. Responsive and Mobile Plan

- Route Line: full rail at desktop widths, collapses to a thin left-edge
  thread on mobile with tap or focus-revealed waypoint labels.
- Status Chip: fixed corner placement on desktop, inline near each section's
  eyebrow on mobile rather than fixed, to avoid consuming small-viewport
  space permanently.
- Split-Flap: digit count and simultaneous animation count reduced on mobile
  to control both performance and visual noise on a small screen.
- Manifest rows: the ledger layout is inherently mobile-friendly (a vertical
  list), more so than the current bento-grid cards, which lose their grid
  logic and stack awkwardly below the `sm` breakpoint today.
- Nav: no immediate change needed unless the `/partners` route addition later
  warrants a proper mobile menu instead of a single hidden link.

---

## 14. Performance Strategy

- Baseline to protect: homepage First Load JS currently measures 175 kB,
  `/convoy-cloud` 152 kB, `/signup` 116 kB, shared baseline 102 kB. The
  redesign's budget is to hold at or under these figures despite adding the
  Route Line, Status Chip, and Split-Flap systems.
- The main lever to make room for that budget is converting the ~30 simple
  fade-up reveals off framer-motion and onto a lightweight CSS and
  `IntersectionObserver` utility (Section 11), freeing headroom for the new,
  genuinely justified motion.
- Remove the sponsor carousel's dependencies (`embla-carousel-react`,
  `embla-carousel-auto-scroll`) if the Sponsors section is demoted to a
  static list (V6), reintroducing them later only once there are enough
  confirmed logos to justify a real carousel.
- No new heavy dependency is proposed anywhere in this plan. Every new device
  (Route Line, Status Chip, Split-Flap, cursor readout) is buildable in plain
  SVG, CSS, and the `framer-motion` APIs already in use.

---

## 15. SEO Considerations

- Keep the existing pattern: `metadataBase`, per-route canonical and Open
  Graph overrides, the JSON-LD Organization/WebSite/Event graph in
  `components/StructuredData.tsx`, `robots.ts`, and `sitemap.ts`. This part of
  the implementation is already solid and needs no rework.
- Add the new `/partners` route to `app/sitemap.ts` when it is built, with its
  own title and description targeting sponsor search intent (for example,
  "sponsor a hackathon in Sri Lanka").
- No analytics or conversion tracking is included in this pass, by the
  explicit scope note at the top of this document.

---

## 16. Phased Implementation Roadmap

**Phase 1: Design foundations**
- Finalize the DISPATCH palette (ink, paper, stamp red, hazard amber) with
  contrast checks, the three-tier type system, and the new token set in
  `app/globals.css`.
- Build `RouteLine`, `StatusChip`, and `SplitFlap` as isolated, reusable
  components with reduced-motion behavior built in from the start.
- Files: `app/globals.css`, new files under `components/`.

**Phase 2: Hero and navigation**
- Rebuild `components/sections/Hero.tsx` around the full-bleed DISPATCH
  composition, restyle `components/Nav.tsx` and `components/StickyCTA.tsx` to
  the flat, hard-edged surface language, demote the "Join as Partner" CTA.
- Validate this alone before touching the rest of the page. This is the
  recommended first slice, detailed fully in Section 20.

**Phase 3: Section-by-section rebuild**
- Apply the Manifest row/card treatment across About, Why Participate,
  Tracks, Cloud Platform, Schedule, Prizes, Details, Venue, Rules, Hosts,
  Community, and FAQ, in the reordered sequence from Section 7.
- Fold Challenge into Tracks and Judges into Hosts as described.
- Files: every file under `components/sections/`, `components/Section.tsx`,
  `components/ui/FeaturePanel.tsx`, `components/ui/card.tsx` (or its
  replacement).

**Phase 4: New route and cleanup**
- Build `/partners`, move `ForSponsors` and `Sponsors` content there, update
  `app/sitemap.ts`.
- Delete the orphaned components identified in Section 2.4 (F1), or wire
  `contact-2.tsx` into the new route per the Section 7 decision.

**Phase 5: Responsive, accessibility, and performance pass**
- Verify every device against the mobile adaptations in Section 13 and the
  reduced-motion fallbacks in Section 9 and 12.
- Re-run a production build and compare First Load JS against the Section 14
  baseline.

**Phase 6: Visual QA and launch**
- Full page-by-page review against the design principles in Section 6,
  cross-browser check, then ship.

---

## 17. Component and File-Level Change Map

| File/area | Action |
|---|---|
| `app/globals.css` | Rework: new palette, type, radius, elevation, and motion tokens |
| `components/sections/Hero.tsx` | Rebuild |
| `components/Nav.tsx`, `components/StickyCTA.tsx`, `components/ScrollProgress.tsx` | Restyle, ScrollProgress likely superseded by the Route Line |
| `components/Section.tsx`, `components/ui/FeaturePanel.tsx` | Restyle header treatment to the new type system |
| `components/ui/card.tsx` | Simplify, remove tilt, flatten shape, or retire in favor of Manifest components |
| `components/sections/Challenge.tsx` | Remove as a standalone section, fold one line into Tracks |
| `components/sections/Judges.tsx` | Remove as a standalone section, fold one line into Hosts |
| `components/sections/ForSponsors.tsx`, `components/sections/Sponsors.tsx` | Move to a new `/partners` route |
| `components/sections/SponsorCarousel.tsx` | Replace with a static confirmed-partner list, or add a visible pause control if kept |
| `components/Reveal.tsx`, `components/ui/SplitReveal.tsx` | Retire, superseded by Split-Flap and the new section entrance pattern |
| `components/ui/ClipReveal.tsx` | Keep, scope to headline text only |
| `components/Parallax.tsx` | Keep, use more sparingly |
| `components/Blob.tsx`, `components/BackgroundField.tsx`, `components/ui/animated-gradient-background.tsx`, `components/graphics.tsx` | Delete, confirmed unused anywhere in the codebase |
| `components/ui/contact-2.tsx` | Delete, or wire into `/partners` per the Section 7 decision |
| `app/sitemap.ts` | Add `/partners` |
| `DESIGN.md` | Rewritten at the end of Phase 1 to document the DISPATCH system in place of the current Apple-style reference |
| New: `components/RouteLine.tsx`, `components/StatusChip.tsx`, `components/SplitFlap.tsx`, `components/ManifestRow.tsx`, `components/ManifestCard.tsx` | Add |

---

## 18. Risks, Trade-offs, and Open Questions

- **The Route Line and Status Chip are the riskiest new pieces technically**,
  since they depend on precise scroll-position tracking across a long page.
  Build and test them in isolation first (Phase 1) before wiring them across
  every section.
- **The cursor waypoint readout (Section 9, Animation G) is explicitly
  experimental.** Treat it as a nice-to-have to validate in the first slice,
  not a requirement for launch.
- **Open question:** should `contact-2.tsx` be deleted or wired up as the
  `/partners` enquiry form. Either is reasonable; this only needs a decision
  before Phase 4.
- **Open question:** exact hex values for the ink, paper, stamp red, and
  hazard amber tokens are deliberately left unset in this document pending a
  real contrast check against final type sizes, rather than guessed here.
- **Deferred, not forgotten, and out of scope for this pass:** structured
  registration storage beyond the current email-only flow, spam or rate
  limiting on the registration and any future enquiry form, analytics and
  conversion tracking, automated testing, lint/CI configuration, and security
  headers. All of these were flagged during the audit and remain true, they
  are simply not part of this frontend-focused revamp and can be bootstrapped
  in a separate later pass.

---

## 19. Acceptance Criteria

- Every homepage section in the new 11-section order (Section 7) is present,
  reachable, and content-complete.
- The Route Line, Status Chip, and Split-Flap are implemented, functioning on
  scroll, and each has its documented reduced-motion fallback verified by
  toggling the OS setting.
- No gradient blobs, no glassmorphism, no rounded floating cards remain
  anywhere in the shipped homepage.
- A single primary Sign Up action is visually dominant on every page; all
  other CTAs are visibly secondary.
- `/partners` exists, is linked from the homepage teaser, and is in
  `app/sitemap.ts`.
- A production build's homepage First Load JS is at or below the current 175
  kB baseline.
- All five files listed for deletion in Section 17 are removed, or the
  `contact-2.tsx` decision is explicitly resolved.

---

## 20. Recommended First Implementation Slice

Build and validate before committing to the full rebuild:

1. The new token set in `app/globals.css` (palette, type, radius, motion).
2. `RouteLine`, `StatusChip`, and `SplitFlap` as working, isolated
   components.
3. A fully rebuilt `Hero` and restyled `Nav`/`StickyCTA` using all three.
4. One full content section rebuilt end to end using the Manifest row
   pattern, Schedule is the best candidate since it is a natural fit for both
   the ledger layout and the Split-Flap device.

This slice proves the four ownable devices actually work together, on real
content, at both desktop and mobile sizes, with reduced motion respected,
before the remaining nine sections are touched. It is small enough to review
in isolation and large enough to judge whether DISPATCH is the right
direction before the rest of the site is rebuilt around it.
