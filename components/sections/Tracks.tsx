import { Cog, Globe, Building2 } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { RingIcon } from "@/components/ui/bento";

const TRACK_ICONS = [Cog, Globe, Building2];

/**
 * The three challenge tracks (Automation / Web Applications / SME Software).
 * Each maps to a sponsor problem track owned by a Track Partner — kept generic,
 * no sponsor names, until they're confirmed.
 */
export function Tracks() {
  const { tracks } = site;

  return (
    <Section id="tracks" title={tracks.heading} intro={tracks.intro}>
      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
        {tracks.items.map((track, i) => {
          const Icon = TRACK_ICONS[i] ?? Cog;

          return (
            <Reveal as="div" key={track.name} delay={i * 0.08}>
              <Card className="h-full">
                <CardContent className="relative flex h-full flex-col p-7">
                  <RingIcon>
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                  </RingIcon>
                  <div className="mt-5 font-tomorrow text-lg font-medium text-stark-white">
                    {track.name}
                  </div>
                  <div className="mt-2 h-px w-10 bg-ignition-orange" />
                  <p className="mt-4 text-sm leading-relaxed text-ash">
                    {track.blurb}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
