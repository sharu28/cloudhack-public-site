import Link from "next/link";
import { site } from "@/content/site";
import { CircuitCorner, PixelArrow, ConvoyLogo, EtherLabsLogo } from "@/components/graphics";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { SplitReveal } from "@/components/ui/SplitReveal";

export function Hero() {
  const { brand, hero } = site;

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 text-center sm:px-8">
      {/* The gradient aurora behind the hero is the global backdrop mounted in
          app/layout.tsx, so it flows continuously into the sections below. */}

      {/* Accent: hexagonal circuit traces, top-right corner */}
      <CircuitCorner className="absolute right-0 top-0 z-10 hidden text-cyan/40 sm:block" />
      {/* Accent: pixelated cursor arrow, top-center area (matches poster) */}
      <PixelArrow className="absolute left-1/2 top-36 z-10 hidden -translate-x-1/2 text-cyan/60 md:block" />

      <Parallax speed={70} className="relative z-20 w-full max-w-4xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/85 sm:text-sm">
            {brand.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 flex w-full justify-center">
            <span className="wordmark text-[clamp(3rem,16vw,11rem)] text-white">
              {brand.wordmark}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-4 max-w-xl text-base italic text-white/70 sm:text-lg">
            &ldquo;{hero.catchphrase}&rdquo;
          </p>
        </Reveal>

        <p className="mt-8 text-xl font-light tracking-wide text-white/90 sm:text-2xl">
          <SplitReveal delay={0.24}>
            {hero.taglineLead}
            <span className="font-bold italic text-white">
              {hero.taglineEmphasis}
            </span>
          </SplitReveal>
        </p>

        <Reveal delay={0.32}>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            {/* Primary action */}
            <Link
              href={hero.ctaHref}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-ink transition hover:scale-[1.03]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan via-violet to-magenta opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
              <span className="relative">{hero.ctaLabel}</span>
              <span className="relative transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Secondary action — ghost / outline */}
            <Link
              href={hero.partnerHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-cyan/60 hover:bg-white/5"
            >
              {hero.partnerLabel}
            </Link>
          </div>
        </Reveal>
      </Parallax>

      {/* Partner logos — bottom-right, matching the poster */}
      <div className="absolute bottom-8 right-6 z-20 flex items-center gap-4 sm:right-10">
        <ConvoyLogo className="h-7 text-teal" />
        <span className="block h-8 w-px bg-white/40" aria-hidden="true" />
        <EtherLabsLogo className="h-8 text-white" />
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <span className="block h-10 w-[1px] animate-pulse bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
      </div>
    </section>
  );
}
