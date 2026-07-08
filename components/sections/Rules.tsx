import { ClipboardList } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

/**
 * "Judging & rules" — the detailed scoring criteria aren't locked yet, so this
 * shows only the ground rules plus a "criteria revealed at kickoff" note.
 * Once the judging sheet is final, add the criteria to content/site.ts → rules
 * and render them here.
 */
export function Rules() {
  const { rules } = site;

  return (
    <Section id="rules" title={rules.heading} intro={rules.intro}>
      <Reveal as="div">
        <div className="inline-flex items-center gap-3 rounded-lg border border-tarmac bg-graphite px-5 py-3.5">
          <ClipboardList
            className="size-4 text-ignition-orange"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <span className="text-sm text-[var(--color-text-2)]">
            {rules.criteriaNote}
          </span>
        </div>
      </Reveal>

      <Reveal as="div" delay={0.1}>
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
