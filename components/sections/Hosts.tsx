import { Sparkles, Building2, Mail, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { ManifestCard } from "@/components/ManifestCard";

const HOST_ICONS = [Sparkles, Building2];

/**
 * Who's behind CloudHack — the two co-host organizations as manifest cards,
 * one of the few places a card treatment is justified (two genuinely
 * distinct organizations). Absorbs the old standalone, entirely-empty
 * Judges section (P5) as one plain line instead of three placeholder cards.
 */
export function Hosts() {
  const { hosts, judges } = site;

  return (
    <Section id="hosts" eyebrow="Hosts" title={hosts.heading}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {hosts.items.map((host, i) => {
          const Icon = HOST_ICONS[i] ?? Building2;

          return (
            <Reveal as="div" key={host.name} delay={i * 0.1}>
              <ManifestCard>
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center border border-line-strong bg-paper text-stamp">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink-2">
                      {host.role}
                    </div>
                  </div>
                  <h3 className="mt-6 text-2xl font-extralight tracking-[-0.01em] text-ink sm:text-3xl">
                    {host.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-2 sm:text-base">
                    {host.blurb}
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-2 text-sm">
                  <a
                    href={host.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-light text-stamp transition-[gap] hover:gap-2.5"
                  >
                    {host.website}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                  <a
                    href={`mailto:${host.email}`}
                    className="inline-flex items-center gap-2 text-ink-2 transition-colors hover:text-ink"
                  >
                    <Mail className="size-4" aria-hidden="true" />
                    {host.email}
                  </a>
                </div>
              </ManifestCard>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.18}>
        <p className="mt-6 border-l-2 border-line-strong pl-4 text-sm leading-relaxed text-ink-2">
          <span className="font-light text-ink">{judges.heading}.</span> {judges.pending}
        </p>
      </Reveal>
    </Section>
  );
}
