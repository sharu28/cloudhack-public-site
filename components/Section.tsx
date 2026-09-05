import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { ClipReveal } from "@/components/ui/ClipReveal";
import { StatusChipInline } from "@/components/StatusChip";
import { WAYPOINTS } from "@/lib/dispatch";

interface SectionProps {
  id?: string;
  /** Small uppercase kicker above the title. */
  eyebrow?: string;
  /** Section headline - Inter extralight at fluid display sizes, matching
   *  Glenr's h2 register. Never bold; the wordmark's thin weight
   *  and the Split-Flap/Status Chip glow stay the only "loud" moments. */
  title?: ReactNode;
  /** Optional supporting paragraph under the title. */
  intro?: ReactNode;
  className?: string;
  children?: ReactNode;
}

/**
 * The single section primitive every content section is built on. Owns the
 * shared container width, vertical rhythm, and the manifest-style header:
 * a waypoint reference code (looked up from lib/dispatch by `id`), the
 * eyebrow, the headline, a hard stamp-red rule, and an optional intro. On
 * small screens the section's own Status Chip renders inline here - the
 * desktop chip is fixed and shared, but mobile has no room to spare for a
 * persistent corner element, so each section carries its own instead.
 */
export function Section({ id, eyebrow, title, intro, className, children }: SectionProps) {
  const hasHeader = eyebrow || title || intro;
  const waypoint = id ? WAYPOINTS.find((w) => w.id === id) : undefined;

  return (
    <section id={id} className={cn("relative scroll-mt-24 px-5 sm:px-8", className)}>
      <div className="mx-auto max-w-6xl py-20 sm:py-28">
        {hasHeader && (
          <ClipReveal className="max-w-3xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              {(eyebrow || waypoint) && (
                <p className="flex items-center gap-2 font-mono text-xs font-light uppercase tracking-[0.18em] text-stamp">
                  {waypoint?.code && <span className="text-ink-2">{waypoint.code}</span>}
                  {eyebrow}
                </p>
              )}
              {id && (
                <span className="md:hidden">
                  <StatusChipInline id={id} />
                </span>
              )}
            </div>
            {title && (
              <h2 className="mt-3 text-4xl font-extralight tracking-[-0.02em] text-ink sm:text-5xl md:text-6xl md:leading-[1.05]">
                {title}
              </h2>
            )}
            {(eyebrow || title) && <div className="mt-6 h-1 w-12 bg-stamp" aria-hidden="true" />}
            {intro && (
              <div className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">{intro}</div>
            )}
          </ClipReveal>
        )}

        <div className={cn(hasHeader && "mt-12 sm:mt-16")}>{children}</div>
      </div>
    </section>
  );
}
