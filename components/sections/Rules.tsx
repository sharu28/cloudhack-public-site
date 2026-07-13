import { ClipboardList } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

/**
 * Judging & rules — restyled to a flat manifest block instead of a rounded
 * charcoal card (Section 8). The detailed scoring criteria aren't locked
 * yet, so this shows only the ground rules plus a "revealed at kickoff" note.
 */
export function Rules() {
  const { rules } = site;

  return (
    <Section id="rules" eyebrow="Judging" title={rules.heading} intro={rules.intro}>
      <Reveal as="div">
        <div className="inline-flex items-center gap-3 border border-stamp bg-paper-raised px-5 py-3.5">
          <ClipboardList className="size-4 text-stamp" strokeWidth={1.75} aria-hidden="true" />
          <span className="text-sm text-ink-2">{rules.criteriaNote}</span>
        </div>
      </Reveal>

      <Reveal as="div" delay={0.1}>
        <div className="mt-10 border border-line-strong bg-paper-raised p-7">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-2">
            {rules.rulesHeading}
          </h3>
          <ol className="mt-5 flex flex-col divide-y divide-line">
            {rules.items.map((rule, i) => (
              <li key={rule} className="flex items-start gap-4 py-3.5 text-sm leading-relaxed text-ink-2 first:pt-0 last:pb-0">
                <span className="font-mono text-xs font-light text-stamp">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {rule}
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </Section>
  );
}
