import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

/**
 * "Judging & rules" — the weighted scoring criteria as cards (weight bar per
 * criterion) with the ground rules listed alongside, so teams know exactly
 * what they're scored on before the day.
 */
export function Rules() {
  const { rules } = site;

  return (
    <Section id="rules" title={rules.heading} intro={rules.intro}>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {rules.criteria.map((criterion, i) => (
          <Reveal as="div" key={criterion.name} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-lg border border-tarmac bg-graphite p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold text-[var(--color-text)]">
                  {criterion.name}
                </h3>
                <span className="font-tomorrow text-xl font-medium tabular-nums text-ignition-orange">
                  {criterion.weight}%
                </span>
              </div>
              {/* Weight bar — width mirrors the criterion's share of the score. */}
              <div className="mt-3 h-1 w-full rounded-full bg-tarmac">
                <div
                  className="h-1 rounded-full bg-ignition-orange"
                  style={{ width: `${criterion.weight}%` }}
                  aria-hidden="true"
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-2)]">
                {criterion.blurb}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal as="div" delay={0.2}>
        <div className="mt-10">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-2)]">
            {rules.rulesHeading}
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {rules.items.map((rule) => (
              <li
                key={rule}
                className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-text-2)]"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-ignition-orange"
                />
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
