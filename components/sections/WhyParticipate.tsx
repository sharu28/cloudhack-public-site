import { Target, Trophy, Users, Rocket } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { ManifestList, ManifestRow } from "@/components/ManifestRow";

const WHY_ICONS = [Target, Trophy, Users, Rocket];

/**
 * Why Participate - moved up from position 13 to position 2 (P2): motivation
 * belongs before logistics and rules, not after them. Four manifest rows
 * with reference codes; no CTA here on purpose - this section's job is
 * motivation, conversion happens at the primary Sign Up action elsewhere.
 */
export function WhyParticipate() {
  const { whyParticipate } = site;

  return (
    <Section id="why" eyebrow="Why participate" title={whyParticipate.heading}>
      <ManifestList>
        {whyParticipate.items.map((item, i) => {
          const Icon = WHY_ICONS[i] ?? Target;
          return (
            <ManifestRow
              key={item.title}
              index={i}
              total={whyParticipate.items.length}
              code={`RSN-${String(i + 1).padStart(2, "0")}`}
              icon={<Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />}
              title={item.title}
              description={item.body}
            />
          );
        })}
      </ManifestList>
    </Section>
  );
}
