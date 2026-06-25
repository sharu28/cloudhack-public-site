import type { ReactNode } from "react";

import { ClipReveal } from "@/components/ui/ClipReveal";

/**
 * Two-column feature row: a text block beside a visual block, sides alternating
 * via `reverse`. The reveal animation lives on the WORDS — the text block wipes
 * in left→right via the shared ClipReveal — while the visual block stays static.
 * Compact vertical rhythm (no full-viewport panels) keeps rows tight together.
 */
export function FeaturePanel({
  id,
  eyebrow,
  title,
  body,
  reverse = false,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative px-6 py-10 sm:py-14">
      <div
        className={`mx-auto flex w-full max-w-6xl flex-col items-center gap-8 md:gap-16 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Text side — the reveal animation lives on the words. */}
        <ClipReveal className="flex-1">
          {eyebrow && (
            <p className="font-tomorrow text-xs font-medium uppercase tracking-[0.18em] text-ignition-orange">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.02em] text-stark-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {body && (
            <p className="mt-5 max-w-md text-base leading-relaxed text-ash">
              {body}
            </p>
          )}
        </ClipReveal>

        {/* Visual side — static (no animation, by design). */}
        <div className="flex-1">{children}</div>
      </div>
    </section>
  );
}
