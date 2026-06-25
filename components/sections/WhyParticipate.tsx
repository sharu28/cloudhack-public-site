import { Target, Trophy, Users, Rocket } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { RingIcon } from "@/components/ui/bento";

const WHY_ICONS = [Target, Trophy, Users, Rocket];

/**
 * "Why participate" — four value props aimed at students and early-career
 * builders, laid out as a 2×2 card grid.
 */
export function WhyParticipate() {
  const { whyParticipate } = site;

  return (
    <Section id="why" title={whyParticipate.heading}>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {whyParticipate.items.map((item, i) => {
          const Icon = WHY_ICONS[i] ?? Target;

          return (
            <Reveal as="div" key={item.title} delay={i * 0.07}>
              <Card className="h-full">
                <CardContent className="flex h-full items-start gap-5 p-7">
                  <RingIcon>
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                  </RingIcon>
                  <div>
                    <div className="font-tomorrow text-lg font-medium text-stark-white">
                      {item.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ash">
                      {item.body}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
