import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { SplitFlap } from "@/components/SplitFlap";
import { Countdown } from "@/components/Countdown";
import { ClipReveal } from "@/components/ui/ClipReveal";

/**
 * Hero - establishes the DISPATCH concept immediately: this is a dispatch
 * board, not a landing page. Full-bleed, not the old copy-left/image-right
 * split; the Route Line (fixed, page-level) supplies the graphic weight
 * that used to come from an illustration, so nothing decorative has to fill
 * "the other half." Sign Up is the only button on the page; "Join as
 * Partner" is a quiet text link.
 */
export function Hero() {
  const { brand, hero } = site;

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40"
    >
      <div className="mx-auto max-w-6xl">
        <div>
          <p className="font-mono text-xs font-light uppercase tracking-[0.2em] text-ink-2">
            {brand.eyebrow}
          </p>
        </div>

        <h1 className="mt-6 text-[clamp(4.2rem,14vw,10.5rem)] font-thin leading-[0.86] tracking-[-0.03em] text-ink">
          {brand.wordmark}
          <span className="glow-shimmer block">{brand.year}</span>
        </h1>

        <div className="mt-8 max-w-2xl">
          <ClipReveal>
            <p className="text-2xl font-extralight tracking-[-0.02em] text-ink sm:text-3xl">
              {hero.tagline}.
            </p>
          </ClipReveal>
          <p className="mt-4 text-base leading-relaxed text-ink-2 sm:text-lg">{hero.oneLiner}</p>
        </div>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <ul className="flex flex-wrap items-end gap-x-9 gap-y-6">
              {hero.stats.map((stat) => (
                <li key={stat.label} className="flex flex-col gap-2">
                  <SplitFlap
                    value={stat.value}
                    cellClassName="h-10 w-8 text-3xl font-medium font-mono sm:h-12 sm:w-10 sm:text-4xl"
                    ariaLabel={`${stat.value} ${stat.label}`}
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-2">
                    {stat.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link
                href={hero.ctaHref}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-stamp-deep px-7 py-3.5 text-sm font-light text-ink shadow-stamp transition-colors hover:opacity-90"
              >
                {hero.ctaLabel}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/partners"
                className="text-sm font-medium text-ink-2 underline decoration-line-strong decoration-1 underline-offset-4 transition-colors hover:text-stamp hover:decoration-stamp"
              >
                {hero.partnerLabel}
              </Link>
            </div>
          </div>

          <ManifestDataPlate />
        </div>

        <div className="mt-14 border-t border-line-strong pt-8">
          <Countdown targetISO={site.event.startISO} label={site.event.countdownLabel} />
        </div>
      </div>
    </section>
  );
}

/**
 * The hero's one "visual" - a stamped manifest data plate restating real
 * event facts (route, date, cargo) in a shipping-manifest register instead
 * of an illustrative image. No asset exists (or should exist) to fill this
 * space; the data itself is the graphic.
 */
function ManifestDataPlate() {
  const { venue, details, hero } = site;
  const when = details.essentials.find((e) => e.icon === "calendar")?.value ?? "19 September 2026";

  const fields: Array<{ label: string; value: string }> = [
    { label: "Venue", value: venue.name },
    { label: "Date", value: when },
    {
      label: "Cargo",
      value: `${hero.stats[0]?.value ?? "80"} builders / ${hero.stats[1]?.value ?? "~20"} teams`,
    },
  ];

  return (
    <div className="notch-corner w-full max-w-xs shrink-0 border border-line-strong bg-paper-raised shadow-raised sm:max-w-sm">
      <div className="flex items-center justify-between gap-3 border-b border-line-strong px-5 py-3">
        <span className="font-mono text-[10px] font-light uppercase tracking-[0.18em] text-ink-2">
          Manifest
        </span>
        <span className="font-mono text-[10px] font-light uppercase tracking-[0.18em] text-stamp">
          No. CH-2026
        </span>
      </div>
      <dl className="divide-y divide-line px-5">
        {fields.map((f) => (
          <div key={f.label} className="flex items-baseline justify-between gap-4 py-3.5">
            <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-2">
              {f.label}
            </dt>
            <dd className="text-right text-sm font-light text-ink">{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
