import { MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

/**
 * "Join the community" — compact WhatsApp call-to-action band. The join button
 * only goes live once community.href in content/site.ts is a real invite URL;
 * until then it renders an inert "link coming soon" pill so the section can
 * ship ahead of the link.
 */
export function Community() {
  const { community } = site;
  const hasLink = community.href.startsWith("http");

  return (
    <section id="community" className="relative px-6">
      <div className="mx-auto max-w-6xl py-16 sm:py-20">
        <Reveal as="div">
          <div className="flex flex-col items-start gap-8 rounded-lg border border-tarmac bg-graphite p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">
                {community.heading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[var(--color-text-2)]">
                {community.body}
              </p>
            </div>

            {hasLink ? (
              <a
                href={community.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2.5 rounded-lg bg-ignition-orange px-7 py-3.5 text-sm font-semibold text-stark-white transition hover:bg-ignition-orange/90"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                {community.ctaLabel}
              </a>
            ) : (
              <span className="inline-flex shrink-0 items-center gap-2.5 rounded-lg border border-tarmac bg-obsidian px-7 py-3.5 text-sm font-medium text-dusk-gray">
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
