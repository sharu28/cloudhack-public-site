"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";

/**
 * Top navigation.
 *
 * `overHero` is set by pages that open with the dark gradient hero (the home
 * page): at the very top the bar is transparent with white text sitting over the
 * dark hero, then once scrolled it becomes a light, blurred bar with dark text.
 * Pages without a dark hero (/contact, /signup) omit `overHero`, so the light bar
 * shows from the top.
 */
export function Nav({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // White-on-transparent only while we're still over the dark hero.
  const onDark = overHero && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        onDark
          ? "border-b border-transparent bg-transparent"
          : "border-b border-[var(--color-line)] bg-[var(--color-paper)]/80 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className={`text-sm font-semibold tracking-[0.2em] transition ${
            onDark ? "text-white" : "text-[var(--color-text)]"
          }`}
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
            className={`hidden text-sm font-medium transition sm:inline-block ${
              onDark
                ? "text-white/80 hover:text-white"
                : "text-[var(--color-text-2)] hover:text-[var(--color-text)]"
            }`}
          >
            Contact
          </Link>
          {/* Secondary — ghost outline. */}
          <Link
            href={site.hero.partnerHref}
            className={`hidden rounded-full border px-4 py-2 text-sm font-medium transition sm:inline-block ${
              onDark
                ? "border-white/25 text-white hover:bg-white/10"
                : "border-[var(--color-line)] text-[var(--color-text)] hover:bg-black/[0.04]"
            }`}
          >
            {site.hero.partnerLabel}
          </Link>
          {/* Primary */}
          <Link
            href={site.hero.ctaHref}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              onDark
                ? "bg-white text-ink hover:bg-white/90"
                : "bg-[var(--color-text)] text-white hover:bg-black"
            }`}
          >
            {site.hero.ctaLabel}
          </Link>
        </div>
      </nav>
    </header>
  );
}
