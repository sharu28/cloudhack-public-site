import { Trophy, Medal, Award } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { RingIcon } from "@/components/ui/bento";

const PRIZE_ICONS = [Trophy, Medal, Award];

/**
 * Prizes — 1st / 2nd / 3rd place cards with confirmed cash amounts.
 */
export function Prizes() {
  const { prizes } = site;

  return (
    <Section id="prizes" title={prizes.heading} intro={prizes.intro}>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        {prizes.items.map((p, i) => {
          const Icon = PRIZE_ICONS[i] ?? Trophy;
          const highlight = i === 0;

          return (
            <Reveal as="div" key={p.place} delay={i * 0.08}>
              <Card
                className={`h-full ${highlight ? "border-ignition-orange/50" : ""}`}
              >
                <CardContent className="flex h-full flex-col p-7">
                  <div className="flex items-center justify-between gap-3">
                    <RingIcon>
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                    </RingIcon>
                    {highlight && (
                      <span className="rounded-md border border-ignition-orange/40 px-2 py-0.5 font-tomorrow text-[10px] font-medium uppercase tracking-[0.16em] text-ignition-orange">
                        Top prize
                      </span>
                    )}
                  </div>
                  <div className="mt-5 font-tomorrow text-2xl font-medium tracking-[-0.02em] text-stark-white">
                    {p.place} place
                  </div>
                  <div className="mt-2 h-px w-10 bg-ignition-orange" />
                  <p className="mt-4 font-tomorrow text-xl font-medium text-ignition-orange">
                    {p.amount}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-6 text-sm text-dusk-gray">{prizes.note}</p>
      </Reveal>
    </Section>
  );
}
