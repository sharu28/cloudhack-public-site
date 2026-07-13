import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

/**
 * A compact, honest pointer to /partners — replaces the old full sponsorship
 * pricing table sitting inside the participant funnel (P1). One line of
 * intent, one CTA; the full tier ledger lives on its own route.
 */
export function PartnersTeaser() {
  const { partnersTeaser } = site;

  return (
    <div className="px-5 sm:px-8">
      <div className="mx-auto max-w-6xl border-y border-line-strong py-8">
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-stamp">
                {partnersTeaser.eyebrow}
              </p>
              <p className="mt-2 text-lg font-bold tracking-[-0.01em] text-ink">
                {partnersTeaser.heading}
              </p>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-2">
                {partnersTeaser.body}
              </p>
            </div>
            <Link
              href={partnersTeaser.ctaHref}
              className="group inline-flex shrink-0 items-center gap-2 border border-ink bg-paper-raised px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-stamp hover:text-stamp"
            >
              {partnersTeaser.ctaLabel}
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
