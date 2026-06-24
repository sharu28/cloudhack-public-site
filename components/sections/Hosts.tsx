import { Building2, Sparkles } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { RingIcon, GlowAccent } from "@/components/ui/bento";

const HOST_ICONS = [Building2, Sparkles];

export function Hosts() {
  const { hosts } = site;

  return (
    <Section id="hosts" band="gray" title={hosts.heading}>
      <div className="grid grid-cols-6 gap-3 sm:gap-4">
        {hosts.items.map((host, i) => {
          const Icon = HOST_ICONS[i] ?? Building2;

          return (
            <Reveal
              as="div"
              key={host.name}
              delay={i * 0.1}
              className="col-span-6 lg:col-span-3"
            >
              <a
                href={host.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="h-full">
                  {i === 0 && <GlowAccent className="-right-16 -top-20 h-64 w-64" />}
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
                      <h3 className="mt-6 text-3xl font-semibold text-[var(--color-text)]">
                        {host.name}
                      </h3>
                      <p className="mt-3 text-[var(--color-text-2)]">
                        {host.blurb}
                      </p>
                    </div>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan transition group-hover:gap-3">
                      Visit site
                      <span aria-hidden="true">→</span>
                    </span>
                  </CardContent>
                </Card>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
