import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

interface SectionProps {
  id?: string;
  /** Small uppercase kicker above the title. */
  eyebrow?: string;
  /** Large apple-style section headline. */
  title?: ReactNode;
  /** Optional supporting paragraph under the title. */
  intro?: ReactNode;
  /** Alternating page band — "white" (#fff) or "gray" (#f5f5f7). */
  band?: "white" | "gray";
  className?: string;
  children?: ReactNode;
}

/**
 * The single section primitive every content section is built on, so the page
 * reads as one cohesive whole instead of a stack of unrelated blocks. It owns the
 * shared container width, the consistent vertical rhythm, the apple-style
 * eyebrow + headline + intro header, and the alternating white / gray banding
 * that visually separates sections the way apple.com does.
 */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  band = "white",
  className,
  children,
}: SectionProps) {
  const hasHeader = eyebrow || title || intro;

  return (
    <section
      id={id}
      className={cn(
        "relative px-6",
        band === "gray"
          ? "bg-[var(--color-paper-2)]"
          : "bg-[var(--color-paper)]",
        className
      )}
    >
      <div className="mx-auto max-w-6xl py-20 sm:py-28">
        {hasHeader && (
          <header className="max-w-3xl">
            {eyebrow && (
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-text-2)]">
                  {eyebrow}
                </p>
              </Reveal>
            )}
            {title && (
              <Reveal delay={0.05}>
                <h2 className="mt-3 text-3xl font-semibold text-[var(--color-text)] sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
                  {title}
                </h2>
              </Reveal>
            )}
            {intro && (
              <Reveal delay={0.1}>
                <div className="mt-5 text-lg leading-relaxed text-[var(--color-text-2)]">
                  {intro}
                </div>
              </Reveal>
            )}
          </header>
        )}

        <div className={cn(hasHeader && "mt-12 sm:mt-14")}>{children}</div>
      </div>
    </section>
  );
}
