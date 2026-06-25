"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";

/**
 * Top navigation (dark theme).
 *
 * The whole site is dark, so text stays light throughout. `overHero` lets pages
 * that open with a full-bleed hero (the home page) start fully transparent; once
 * scrolled — or on pages without a hero (/contact, /signup) — the bar becomes a
 * translucent dark, blurred strip with a hairline border.
 */
export function Nav({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = overHero && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-tarmac bg-obsidian/80 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-tomorrow text-sm font-medium tracking-[0.2em] text-stark-white transition hover:text-white/90"
        >
          {site.brand.wordmark}
          <span className="text-ignition-orange"> {site.brand.year}</span>
        </Link>

        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Secondary — graphite surface. */}
          <Link
            href={site.hero.partnerHref}
            className="hidden rounded-lg border border-tarmac bg-graphite px-4 py-2 text-sm font-medium text-stark-white transition hover:bg-tarmac sm:inline-block"
          >
            {site.hero.partnerLabel}
          </Link>
          {/* Primary — Ignition Orange CTA */}
          <Link
            href={site.hero.ctaHref}
            className="rounded-lg bg-ignition-orange px-5 py-2 text-sm font-semibold text-stark-white transition hover:bg-ignition-orange/90"
          >
            {site.hero.ctaLabel}
          </Link>
        </div>
      </nav>
    </header>
  );
}
