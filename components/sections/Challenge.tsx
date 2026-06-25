import { Lock } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

/**
 * The Challenge — a placeholder for the sponsor problem briefs, which stay under
 * wraps until the event. A single "coming soon" panel.
 */
export function Challenge() {
  const { challenge } = site;

  return (
    <Section id="challenge" title={challenge.heading} intro={challenge.intro}>
      <Reveal>
        <div className="flex flex-col items-center gap-4 rounded-lg border border-tarmac bg-charcoal px-6 py-14 text-center sm:py-16">
          <div className="flex size-12 items-center justify-center rounded-lg border border-tarmac bg-graphite">
            <Lock
              className="size-5 text-ignition-orange"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </div>
          <p className="font-tomorrow text-2xl font-medium tracking-[-0.01em] text-stark-white sm:text-3xl">
            {challenge.status}
          </p>
          <p className="max-w-md text-sm leading-relaxed text-ash">
            {challenge.note}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
