import Link from "next/link";
import { site } from "@/content/site";

/**
 * Masthead navigation — a flat, always-solid ink-bordered bar (no frosted
 * transparency-on-scroll trick). Sign Up is the one visually dominant
 * action everywhere on the site; "Join as Partner" is a quiet text link,
 * never a peer button, and now points at the dedicated /partners route.
 */
export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink bg-paper">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          className="font-stencil text-lg font-bold tracking-[-0.01em] text-ink transition-colors hover:text-stamp"
        >
          {site.brand.wordmark}
          <span className="text-stamp"> {site.brand.year}</span>
        </Link>

        <div className="flex items-center gap-5 sm:gap-6">
          <Link
            href="/partners"
            className="hidden text-sm font-medium text-ink-2 underline decoration-line-strong decoration-1 underline-offset-4 transition-colors hover:text-stamp hover:decoration-stamp sm:inline-block"
          >
            {site.hero.partnerLabel}
          </Link>
          <Link
            href={site.hero.ctaHref}
            className="inline-flex items-center justify-center border border-ink bg-stamp px-4 py-2 text-sm font-semibold text-paper-raised shadow-stamp transition-colors hover:bg-stamp-deep sm:px-5"
          >
            {site.hero.ctaLabel}
          </Link>
        </div>
      </nav>
    </header>
  );
}
