import { Calendar, Clock, MapPin } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

const ICONS: Record<string, typeof Calendar> = {
  calendar: Calendar,
  pin: MapPin,
  clock: Clock,
};

/**
 * Details — trimmed to pure logistics (when / where / who / teams /
 * capacity). The old "Build setup" group (AI model, tokens, deployment) now
 * lives exactly once, in Cloud Platform. Flat manifest blocks, not rounded
 * charcoal cards (Section 8).
 */
export function Details() {
  const { details } = site;
  const applyGroup = details.groups.find((g) => g.title === "Who should apply");

  return (
    <Section id="details" eyebrow="Logistics" title={details.heading}>
      <Reveal>
        <div className="mb-6 flex items-center gap-3 border border-stamp bg-paper-raised px-4 py-3.5 sm:px-5">
          <Calendar className="size-4 shrink-0 text-stamp" strokeWidth={1.75} aria-hidden="true" />
          <p className="text-sm font-semibold text-ink">{details.notice}</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-px border border-line-strong bg-line-strong sm:grid-cols-3">
        {details.essentials.map((item) => {
          const Icon = ICONS[item.icon] ?? Calendar;
          return (
            <div key={item.label} className="flex items-start gap-4 bg-paper-raised p-6">
              <div className="flex size-11 shrink-0 items-center justify-center border border-ink bg-paper text-stamp">
                <Icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.16em] text-ink-2">
                  {item.label}
                </div>
                <div className="mt-1 text-xl font-bold tracking-[-0.02em] text-ink">
                  {item.value}
                </div>
                {item.note && <div className="mt-1 text-sm text-ink-2">{item.note}</div>}
              </div>
            </div>
          );
        })}
      </div>

      {applyGroup && (
        <div className="mt-4 border border-line-strong bg-paper-raised p-7">
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-ink-2">
            {applyGroup.title}
          </h3>
          <dl className="mt-5 divide-y divide-line">
            {applyGroup.items.map((item) => (
              <div
                key={item.label}
                className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-5"
              >
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-ink-2">
                  {item.label}
                </dt>
                <dd>
                  <div className="text-base font-semibold text-ink">{item.value}</div>
                  <p className="mt-1 text-sm leading-relaxed text-ink-2">{item.note}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </Section>
  );
}
