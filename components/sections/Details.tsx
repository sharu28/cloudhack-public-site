import Link from "next/link";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

const ICONS: Record<string, typeof Calendar> = {
  calendar: Calendar,
  pin: MapPin,
  clock: Clock,
};

/**
 * Event logistics with a paced hierarchy: essentials first, secondary context
 * grouped into quieter rows so the section does not become a wall of cards.
 */
export function Details() {
  const { details } = site;

  return (
    <Section id="details" title={details.heading}>
      <Reveal>
        <div className="mb-5 flex items-center gap-3 rounded-lg border border-ignition-orange/30 bg-charcoal px-4 py-3.5 sm:px-5">
          <Calendar
            className="size-4 shrink-0 text-ignition-orange"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <p className="text-sm font-medium text-stark-white">
            {details.notice}
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {details.essentials.map((item, i) => {
          const Icon = ICONS[item.icon] ?? Calendar;

          return (
            <Reveal as="div" key={item.label} delay={i * 0.05}>
              <div className="flex h-full items-start gap-4 rounded-lg border border-tarmac bg-charcoal p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-tarmac bg-graphite">
                  <Icon
                    className="size-4 text-stark-white"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="font-tomorrow text-xs font-medium uppercase tracking-[0.18em] text-dusk-gray">
                    {item.label}
                  </div>
                  <div className="mt-1 text-xl font-semibold text-stark-white">
                    {item.value}
                  </div>
                  {item.note && (
                    <div className="mt-1 text-sm text-ash">{item.note}</div>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {details.groups.map((group, groupIndex) => (
          <Reveal as="div" key={group.title} delay={0.1 + groupIndex * 0.06}>
            <div className="h-full rounded-lg border border-tarmac bg-charcoal p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-tomorrow text-xs font-medium uppercase tracking-[0.18em] text-dusk-gray">
                  {group.title}
                </h3>
                {"ctaHref" in group && group.ctaHref && (
                  <Link
                    href={group.ctaHref}
                    className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-ignition-orange transition hover:text-ignition-orange/80"
                  >
                    {group.ctaLabel}
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                )}
              </div>

              <div className="mt-5 divide-y divide-tarmac">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-5"
                  >
                    <div className="text-xs font-medium uppercase tracking-[0.14em] text-dusk-gray">
                      {item.label}
                    </div>
                    <div>
                      <div className="text-base font-semibold text-stark-white">
                        {item.value}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-ash">
                        {item.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
