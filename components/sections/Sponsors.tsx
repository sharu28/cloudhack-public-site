import Link from "next/link";
import { Crown, HeartHandshake, Route } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { RingIcon, GlowAccent } from "@/components/ui/bento";

const TIER_ICONS = [Crown, Route, HeartHandshake];

// Title (wide, with a glow) + Track share the top row; Community banners across
// the full width below.
const SPANS = [
  "col-span-6 lg:col-span-4",
  "col-span-6 lg:col-span-2",
  "col-span-6",
];

export function Sponsors() {
  const { sponsors } = site;

  return (
    <Section
      id="sponsors"
      band="white"
      title={sponsors.heading}
      intro={sponsors.body}
    >
      <div className="grid grid-cols-6 gap-3 sm:gap-4">
        {sponsors.tiers.map((tier, i) => {
          const Icon = TIER_ICONS[i] ?? Crown;
          const isTitle = i === 0;

          return (
            <Reveal
              as="div"
              key={tier.name}
              delay={i * 0.08}
              className={SPANS[i] ?? "col-span-6 lg:col-span-2"}
            >
              <Card className="h-full">
                {isTitle && <GlowAccent className="-right-12 -top-20 h-64 w-64" />}
                <CardContent className="relative flex h-full flex-col p-7">
                  <RingIcon>
                    <Icon
                      className="size-5"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </RingIcon>
                  <div className="mt-5 text-lg font-semibold text-[var(--color-text)]">
                    {tier.name}
                  </div>
                  <div className="mt-2 h-px w-10 bg-gradient-to-r from-teal to-violet" />
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--color-text-2)]">
                    {tier.blurb}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12">
          <Link
            href={sponsors.ctaHref}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-text)] px-7 py-3 text-sm font-medium text-white transition hover:bg-black"
          >
            {sponsors.ctaLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
