import { Check, Minus } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";

// Rows shown as the big "header" stats on each tier card vs. the checklist below.
const STAT_KEYS = ["contribution", "slots"] as const;

/** Renders a comparison value: booleans become ✓ / —, strings render as text. */
function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="size-4 text-ignition-orange" strokeWidth={2.5} aria-label="Included" />
    ) : (
      <Minus className="size-4 text-dusk-gray" aria-label="Not included" />
    );
  }
  return <span className="text-sm font-medium text-stark-white">{value}</span>;
}

/**
 * "For sponsors" — the pitch line plus the three sponsorship tiers as a card
 * layout (mobile-first; a real table is hard to scan on a phone). The Title tier
 * is highlighted. CTA is a mailto for sponsor enquiries.
 */
export function ForSponsors() {
  const { forSponsors } = site;
  const checklistRows = forSponsors.rows.filter(
    (r) => !STAT_KEYS.includes(r.key as (typeof STAT_KEYS)[number])
  );

  return (
    <Section id="sponsorship" title={forSponsors.heading} intro={forSponsors.body}>
      <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-3">
        {forSponsors.tiers.map((tier, i) => (
          <Reveal as="div" key={tier.name} delay={i * 0.08}>
            <Card
              className={`h-full ${
                tier.highlight ? "border-ignition-orange/50" : ""
              }`}
            >
              <CardContent className="flex h-full flex-col p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-tomorrow text-lg font-medium text-stark-white">
                    {tier.name}
                  </span>
                  {tier.highlight && (
                    <span className="rounded-md border border-ignition-orange/40 px-2 py-0.5 font-tomorrow text-[10px] font-medium uppercase tracking-[0.16em] text-ignition-orange">
                      Exclusive
                    </span>
                  )}
                </div>

                {/* Contribution — the headline number */}
                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-dusk-gray">
                    LKR
                  </span>
                  <span className="font-tomorrow text-3xl font-medium tracking-[-0.02em] text-stark-white">
                    {tier.values.contribution}
                  </span>
                </div>
                <div className="mt-1 text-sm text-ash">
                  <span className="text-dusk-gray">Slots: </span>
                  {tier.values.slots}
                </div>

                <div className="my-6 h-px w-full bg-tarmac" />

                <ul className="flex flex-1 flex-col gap-3.5">
                  {checklistRows.map((row) => (
                    <li
                      key={row.key}
                      className="flex items-center justify-between gap-4 text-sm"
                    >
                      <span className="text-ash">{row.label}</span>
                      <CellValue
                        value={
                          tier.values[
                            row.key as keyof typeof tier.values
                          ] as string | boolean
                        }
                      />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-6 text-sm text-dusk-gray">{forSponsors.footnote}</p>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="mt-8">
          <a
            href={forSponsors.ctaHref}
            className="inline-flex items-center gap-2 rounded-lg bg-ignition-orange px-7 py-3 text-sm font-semibold text-stark-white transition hover:bg-ignition-orange/90"
          >
            {forSponsors.ctaLabel}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
