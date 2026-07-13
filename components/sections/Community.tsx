import { MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

/**
 * Join the community — kept, restyled to the flat manifest surface, moved
 * to the tail of the page alongside FAQ (Section 7). The join button only
 * goes live once community.href is a real invite URL.
 */
export function Community() {
  const { community } = site;
  const hasLink = community.href.startsWith("http");

  return (
    <section id="community" className="relative scroll-mt-24 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl py-20 sm:py-28">
        <Reveal as="div">
          <div className="notch-corner flex flex-col items-start gap-8 border border-line-strong bg-paper-raised p-8 shadow-raised sm:p-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="font-mono text-xs font-light uppercase tracking-[0.18em] text-stamp">
                Community
              </p>
              <h2 className="mt-3 text-2xl font-extralight text-ink sm:text-3xl">{community.heading}</h2>
              <p className="mt-3 text-base leading-relaxed text-ink-2">{community.body}</p>
            </div>

            {hasLink ? (
              <a
                href={community.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-stamp-deep px-7 py-3.5 text-sm font-light text-ink shadow-stamp transition-colors hover:opacity-90"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                {community.ctaLabel}
              </a>
            ) : (
              <span className="inline-flex shrink-0 items-center gap-2.5 border border-line-strong bg-paper px-7 py-3.5 text-sm font-medium text-ink-2">
                <MessageCircle className="size-4" aria-hidden="true" />
                {community.pendingLabel}
              </span>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
