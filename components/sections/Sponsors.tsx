import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SponsorCarousel } from "@/components/sections/SponsorCarousel";

/**
 * Sponsors (Section 8) — the logo grid. An auto-scrolling logo cloud plus a
 * legend of the tier labels (Title / Track Partner / Community). Logos are
 * placeholders until sponsors are confirmed; the carousel accepts real images
 * dynamically (see content/site.ts → sponsors.logos[].logo).
 */
export function Sponsors() {
  const { sponsors } = site;

  return (
    <Section id="sponsors" title={sponsors.heading} intro={sponsors.intro}>
      <Reveal>
        <SponsorCarousel />
      </Reveal>

      {/* Tier legend so the line-up reads as labelled tiers. */}
      <Reveal delay={0.08}>
        <div className="mt-12 flex flex-wrap items-center gap-2.5">
          {sponsors.tiers.map((tier) => (
            <span
              key={tier.name}
              className="rounded-lg border border-tarmac bg-graphite px-3.5 py-1.5 font-tomorrow text-xs font-medium uppercase tracking-[0.16em] text-dusk-gray"
            >
              {tier.name}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mt-6 text-sm text-dusk-gray">{sponsors.pending}</p>
      </Reveal>
    </Section>
  );
}
