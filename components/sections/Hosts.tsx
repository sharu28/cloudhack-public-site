import { Sparkles, Building2, Mail, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { RingIcon } from "@/components/ui/bento";

const HOST_ICONS = [Sparkles, Building2];

/**
 * "Who's behind CloudHack" — the two co-host cards (Ether Labs · Convoy Tech)
 * side by side, each with its blurb plus direct website + email links.
 */
export function Hosts() {
  const { hosts } = site;

  return (
    <Section id="hosts" title={hosts.heading}>
      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
        {hosts.items.map((host, i) => {
          const Icon = HOST_ICONS[i] ?? Building2;

          return (
            <Reveal as="div" key={host.name} delay={i * 0.1}>
              <Card className="h-full">
                <CardContent className="relative flex h-full flex-col justify-between p-8">
                  <div>
                    <div className="flex items-center gap-4">
                      <RingIcon>
                        <Icon
                          className="size-5"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </RingIcon>
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-2)]">
                        {host.role}
                      </div>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">
                      {host.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-2)] sm:text-base">
                      {host.blurb}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col gap-2 text-sm">
                    <a
                      href={host.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-ignition-orange transition hover:gap-2.5"
                    >
                      {host.website}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                    <a
                      href={`mailto:${host.email}`}
                      className="inline-flex items-center gap-2 text-dusk-gray transition hover:text-stark-white"
                    >
                      <Mail className="size-4" aria-hidden="true" />
                      {host.email}
                    </a>
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
