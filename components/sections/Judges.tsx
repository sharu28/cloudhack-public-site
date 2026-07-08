import { Scale, UserRound } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { RingIcon } from "@/components/ui/bento";

export function Judges() {
  const { judges } = site;
  const confirmed = judges.items;

  return (
    <Section id="judges" title={judges.heading} intro={judges.intro}>
      {confirmed.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {confirmed.map((person, i) => (
            <Reveal as="div" key={person.name} delay={i * 0.08}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col p-8">
                  <div className="flex items-center gap-4">
                    <RingIcon>
                      <Scale className="size-5" strokeWidth={1.75} aria-hidden="true" />
                    </RingIcon>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-2)]">
                      {person.role}
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[var(--color-text)]">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm text-ignition-orange">{person.org}</p>
                  {person.blurb && (
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-2)]">
                      {person.blurb}
                    </p>
                  )}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {judges.placeholders.map((slot, i) => (
              <Reveal as="div" key={`${slot.role}-${i}`} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-lg border border-dashed border-tarmac p-8">
                  <div className="flex items-center gap-4">
                    <RingIcon>
                      <UserRound className="size-5" strokeWidth={1.75} aria-hidden="true" />
                    </RingIcon>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-2)]">
                      {slot.role}
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-dusk-gray">
                    To be announced
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-2)]">
                    {slot.hint}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-dusk-gray">{judges.pending}</p>
        </>
      )}
    </Section>
  );
}
