/**
 * Site-wide feature switches.
 *
 * SCROLL_MODE chooses how the page animates as you scroll. Both experiences are
 * fully implemented and kept in the codebase — flip this one value to try each:
 *
 *   "refined" — apple.com-style scroll-linked motion: content fades/slides in by
 *               scroll position, a top progress bar, gentle parallax. Always in
 *               control, best on mobile. (default)
 *
 *   "pinned"  — the "How the day works" section pins in place and its steps
 *               transition through while held, like apple.com's product
 *               scroll sequences. More cinematic. Degrades to a normal stacked
 *               list under prefers-reduced-motion.
 */
export const SCROLL_MODE: "refined" | "pinned" = "pinned";
