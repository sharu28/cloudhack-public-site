import Link from "next/link";
import { MapPin } from "lucide-react";
import { site } from "@/content/site";
import { CircuitCorner, PixelArrow } from "@/components/graphics";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { SponsorCarousel } from "@/components/sections/SponsorCarousel";
import { Countdown } from "@/components/Countdown";

export function Hero() {
  const { brand, hero } = site;

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden px-5 pb-8 text-center sm:px-8 sm:pb-10">
      {/* The gradient aurora behind the hero is the global backdrop mounted in
          app/layout.tsx, so it flows continuously into the sections below. */}

      {/* Accent: hexagonal circuit traces, top-right corner */}
      <CircuitCorner className="absolute right-0 top-0 z-10 hidden text-white/15 sm:block" />
      {/* Accent: pixelated cursor arrow, top-center area (matches poster) */}
      <PixelArrow className="absolute left-1/2 top-36 z-10 hidden -translate-x-1/2 text-ignition-orange md:block" />

      {/* Centered hero content fills the space above the sponsor strip. */}
      <div className="flex flex-1 flex-col items-center justify-center">
      <Parallax speed={70} className="relative z-20 w-full max-w-4xl">
        <Reveal>
          <p className="hidden font-tomorrow text-xs font-medium uppercase tracking-[0.3em] text-ignition-orange sm:block sm:text-sm">
            {brand.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 flex w-full justify-center">
            <span className="wordmark text-[clamp(3rem,16vw,11rem)] text-white">
              {brand.wordmark}
              <span className="text-ignition-orange"> {brand.year}</span>
            </span>
          </h1>
        </Reveal>

        <p className="mt-6 font-tomorrow text-xl font-normal tracking-wide text-cloud sm:text-2xl md:text-3xl">
          <SplitReveal delay={0.18}>
            Where Cloud Meets{" "}
            <span className="font-medium italic text-stark-white">Creation</span>
          </SplitReveal>
        </p>

        <Reveal delay={0.26}>
          <p className="mx-auto mt-5 max-w-xl text-base text-ash sm:text-lg">
            {hero.oneLiner}
          </p>
        </Reveal>

        <Reveal delay={0.34}>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            {/* Primary action — sole Ignition Orange CTA */}
            <Link
              href={hero.ctaHref}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-ignition-orange px-8 py-3.5 text-sm font-semibold text-stark-white transition hover:bg-ignition-orange/90"
            >
              <span>{hero.ctaLabel}</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Secondary action — graphite surface */}
            <Link
              href={hero.partnerHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-tarmac bg-graphite px-8 py-3.5 text-sm font-medium text-stark-white transition hover:bg-tarmac"
            >
              {hero.partnerLabel}
            </Link>
          </div>
        </Reveal>

        {/* Quick stats — 80 Participants · ~20 Teams · 1 Day */}
        <Reveal delay={0.42}>
          <ul className="mx-auto mt-10 flex max-w-md flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm sm:gap-x-5">
            {hero.stats.map((stat, i) => (
              <li key={stat.label} className="flex items-center gap-3 sm:gap-5">
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-tarmac"
                  />
                )}
                <span className="flex items-baseline gap-1.5">
                  <span className="font-tomorrow text-base font-medium text-stark-white">
                    {stat.value}
                  </span>
                  <span className="text-dusk-gray">{stat.label}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Location */}
        <Reveal delay={0.48}>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-dusk-gray">
            <MapPin
              className="size-3.5 text-ignition-orange"
              strokeWidth={2}
              aria-hidden="true"
            />
            Colombo, Sri Lanka
          </p>
        </Reveal>

        <Reveal delay={0.54}>
          <Countdown
            targetISO={site.event.startISO}
            label={site.event.countdownLabel}
            className="mt-8"
          />
        </Reveal>
      </Parallax>
      </div>

      {/* Sponsor logo cloud — pinned to the bottom of the hero. */}
      <div className="relative z-20 mx-auto w-full max-w-6xl">
        <SponsorCarousel />
      </div>
    </section>
  );
}
