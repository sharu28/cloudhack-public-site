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
          : "border-b border-white/10 bg-ink/70 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.2em] text-white transition hover:text-white/90"
        >
          {site.brand.wordmark}
          <span className="bg-gradient-to-r from-teal to-violet bg-clip-text text-transparent">
            {" "}
            {site.brand.year}
          </span>
        </Link>

        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Contact — plain text link, hidden on the narrowest screens. */}
          <Link
            href="/contact"
            className="hidden text-sm font-medium text-white/80 transition hover:text-cyan sm:inline-block"
          >
            Contact
          </Link>
          {/* Secondary — ghost outline. */}
          <Link
            href={site.hero.partnerHref}
            className="hidden rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan/60 hover:bg-white/5 sm:inline-block"
          >
            {site.hero.partnerLabel}
          </Link>
          {/* Primary */}
          <Link
            href={site.hero.ctaHref}
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink transition hover:bg-white/90"
          >
            {site.hero.ctaLabel}
          </Link>
        </div>
      </nav>
    </header>
  );
}
