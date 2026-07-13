"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";

function useScrollDirection() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);
  const focusedRef = useRef(false);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 16);
      // Never hide while a nav link has keyboard focus - a focused element
      // translated off-screen would strand a keyboard user's visible focus
      // ring (Shift+Tab back up the page after scroll-hide, for example).
      if (focusedRef.current) {
        setHidden(false);
      } else if (y < 16) {
        setHidden(false);
      } else if (y > lastY.current + 4) {
        setHidden(true);
      } else if (y < lastY.current - 2) {
        setHidden(false);
      }
      lastY.current = y;
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onFocus() {
    focusedRef.current = true;
    setHidden(false);
  }
  function onBlur(e: React.FocusEvent<HTMLElement>) {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      focusedRef.current = false;
    }
  }

  return { hidden, scrolled, onFocus, onBlur };
}

/**
 * Masthead navigation - a floating, frosted pill (Convoy Cloud's own chrome
 * language), hiding on scroll-down and reappearing on scroll-up so it never
 * competes with the Route Line for the reader's eye. Sign Up is the one
 * visually dominant action everywhere on the site; "Join as Partner" is a
 * quiet text link, never a peer button.
 */
export function Nav() {
  const { hidden, scrolled, onFocus, onBlur } = useScrollDirection();

  return (
    <header
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-all duration-300 ease-standard sm:top-5"
      style={{ transform: hidden ? "translateY(-140%)" : "translateY(0)" }}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <nav
        className={`flex w-full max-w-4xl items-center justify-between gap-4 rounded-full border border-line-strong px-4 py-2.5 backdrop-blur-xl transition-colors duration-300 sm:px-5 ${
          scrolled ? "bg-paper-raised/85" : "bg-paper-raised/60"
        }`}
      >
        <Link
          href="/"
          className="text-base font-light tracking-[-0.02em] text-ink transition-colors hover:text-stamp"
        >
          {site.brand.wordmark}
          <span className="text-stamp"> {site.brand.year}</span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/partners"
            className="hidden text-sm font-light text-ink-2 transition-colors hover:text-stamp sm:inline-block"
          >
            {site.hero.partnerLabel}
          </Link>
          <Link
            href={site.hero.ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-stamp-deep px-4 py-2 text-sm font-light text-ink shadow-stamp transition-opacity hover:opacity-90 sm:px-5"
          >
            {site.hero.ctaLabel}
          </Link>
        </div>
      </nav>
    </header>
  );
}
