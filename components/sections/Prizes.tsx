import { Trophy, Medal, Award } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { ManifestList, ManifestRow } from "@/components/ManifestRow";
import { SplitFlap } from "@/components/SplitFlap";

const PRIZE_ICONS = [Trophy, Medal, Award];

/**
 * Prizes - three manifest rows, amounts rendered in Split-Flap so the real
 * confirmed cash figures get the same "read it, don't just see it" treatment
 * as a departure board's fare or gate number.
 */
export function Prizes() {
  const { prizes } = site;

  return (
    <Section id="prizes" eyebrow="Prizes" title={prizes.heading} intro={prizes.intro}>
      <ManifestList>
        {prizes.items.map((p, i) => {
          const Icon = PRIZE_ICONS[i] ?? Trophy;
          const amount = p.amount.replace(/^LKR\s*/, "");

          return (
            <ManifestRow
              key={p.place}
              index={i}
              total={prizes.items.length}
              code={`PRZ-${String(i + 1).padStart(2, "0")}`}
              icon={<Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />}
              title={`${p.place} place`}
              trailing={
                <span className="flex items-center gap-2">
                  <span className="font-mono text-xs text-ink-2">LKR</span>
                  <SplitFlap
                    value={amount}
                    cellClassName="h-8 w-7 text-xl font-medium font-mono"
                    ariaLabel={p.amount}
                  />
                </span>
              }
            />
          );
        })}
      </ManifestList>

      <p className="mt-6 text-sm text-ink-2">{prizes.note}</p>
    </Section>
  );
}
