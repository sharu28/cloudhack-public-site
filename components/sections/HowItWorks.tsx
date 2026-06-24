import { Hammer, Megaphone, Trophy } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { RingIcon, SignalAccent } from "@/components/ui/bento";

const STEP_ICONS = [Megaphone, Hammer, Trophy];

export function HowItWorks() {
  const { howItWorks } = site;

  return (
    <Section id="how" band="gray" title={howItWorks.heading}>
      <div className="grid grid-cols-6 gap-3 sm:gap-4">
        {howItWorks.steps.map((step, i) => {
          const Icon = STEP_ICONS[i] ?? Megaphone;
          const isWide = i === 2; // the final step is a full-width banner
          const span = isWide ? "col-span-6" : "col-span-6 lg:col-span-3";

          return (
            <Reveal as="div" key={step.time} delay={i * 0.1} className={span}>
              <Card className="h-full">
                <CardContent
                  className={
                    isWide
                      ? "grid items-center gap-8 p-7 sm:grid-cols-2"
                      : "flex h-full flex-col p-7"
                  }
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-4">
                      <RingIcon>
                        <Icon
                          className="size-5"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </RingIcon>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-2)]">
                        {String(i + 1).padStart(2, "0")} · {step.time}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-[var(--color-text)]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-2)]">
                      {step.body}
                    </p>
                  </div>

                  {isWide && (
                    <div className="relative -mb-7 -mr-7 mt-2 hidden h-full min-h-32 items-end overflow-hidden sm:flex">
                      <SignalAccent className="opacity-90" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
