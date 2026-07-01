"use client";

import { useMemo } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import { site } from "@/content/site";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

/**
 * Auto-scrolling sponsor logo cloud — the shadcnblocks "logos3" pattern built on
 * Embla with the AutoScroll plugin (continuous drift, drag-able, pauses on hover).
 * Sponsors aren't confirmed yet, so the cloud scrolls "coming soon" plates. Once a
 * real logo image is dropped into content/site.ts → sponsors.logos[].logo, the same
 * cloud swaps over to the actual logos. Edge gradients dissolve the plates into the
 * page rather than hard-cutting.
 */
export function SponsorCarousel() {
  const { sponsors } = site;

  // Only run the real logo cloud once a logo image exists; until then scroll a set
  // of identical "coming soon" plates so the carousel still turns.
  const hasLogos = sponsors.logos.some((logo) => logo.logo);
  const comingSoonSlots = Array.from({ length: 8 });

  // Stable plugin instance — recreating it every render makes Embla re-init.
  const plugins = useMemo(
    () => [
      AutoScroll({
        playOnInit: true,
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
    []
  );

  return (
    <div>
      <p className="text-center font-tomorrow text-xs font-medium uppercase tracking-[0.18em] text-ignition-orange">
        {sponsors.carouselLabel}
      </p>

      <div className="relative mt-6">
        <Carousel
          opts={{ loop: true, align: "start", dragFree: true }}
          plugins={plugins}
        >
          <CarouselContent className="ml-0">
            {hasLogos
              ? sponsors.logos.map((logo) => (
                  <CarouselItem
                    key={logo.name}
                    className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                  >
                    <div className="mx-3 flex h-28 w-full max-w-[14rem] shrink-0 flex-col items-center justify-center gap-2 rounded-lg border border-tarmac bg-graphite px-6 transition-colors hover:border-white/25">
                      {logo.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={logo.logo}
                          alt={logo.name}
                          className="max-h-10 w-auto object-contain"
                        />
                      ) : (
                        <>
                          <span className="font-tomorrow text-lg font-medium tracking-[0.06em] text-stark-white sm:text-xl">
                            {logo.name}
                          </span>
                          <span className="font-tomorrow text-[10px] font-medium uppercase tracking-[0.2em] text-dusk-gray">
                            {logo.tier}
                          </span>
                        </>
                      )}
                    </div>
                  </CarouselItem>
                ))
              : comingSoonSlots.map((_, i) => (
                  <CarouselItem
                    key={i}
                    className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                  >
                    <div className="mx-3 flex h-28 w-full max-w-[14rem] shrink-0 flex-col items-center justify-center gap-2 rounded-lg border border-tarmac bg-graphite px-6">
                      <span className="font-tomorrow text-[10px] font-medium uppercase tracking-[0.2em] text-dusk-gray">
                        Sponsors
                      </span>
                      <span className="font-tomorrow text-lg font-medium tracking-[0.06em] text-stark-white sm:text-xl">
                        Coming soon
                      </span>
                    </div>
                  </CarouselItem>
                ))}
          </CarouselContent>
        </Carousel>

        {/* Edge fades so plates dissolve into the page rather than hard-cutting. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-obsidian to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-obsidian to-transparent sm:w-16" />
      </div>
    </div>
  );
}
