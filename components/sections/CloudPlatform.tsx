import Link from "next/link";
import { ArrowRight, CalendarDays, Cloud } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

const ICONS = [Cloud, CalendarDays];

export function CloudPlatform() {
  const { cloudPlatform } = site;

  return (
    <Section
      id="cloud-platform"
      title={cloudPlatform.heading}
      intro={cloudPlatform.intro}
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_0.75fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {cloudPlatform.items.map((item, i) => {
            const Icon = ICONS[i] ?? Cloud;

            return (
              <Reveal as="div" key={item.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-lg border border-tarmac bg-charcoal p-6">
                  <div className="flex size-11 items-center justify-center rounded-lg border border-tarmac bg-graphite">
                    <Icon
                      className="size-5 text-ignition-orange"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-stark-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ash">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal as="div" delay={0.14}>
          <div className="flex h-full flex-col justify-between rounded-lg border border-ignition-orange/30 bg-graphite p-7">
            <div>
              <p className="font-tomorrow text-xs font-medium uppercase tracking-[0.18em] text-dusk-gray">
                Platform requirement
              </p>
              <p className="mt-4 text-xl font-semibold leading-snug text-stark-white">
                Final apps deploy on Convoy Cloud before judging.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ash">
                The workshop gives selected teams the deployment workflow before
                event day, so final demos are live links rather than local-only
                builds.
              </p>
            </div>

            <Link
              href={cloudPlatform.ctaHref}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-ignition-orange px-5 py-3 text-sm font-semibold text-stark-white transition hover:bg-ignition-orange/90"
            >
              {cloudPlatform.ctaLabel}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={cloudPlatform.externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg border border-tarmac px-5 py-3 text-sm font-medium text-stark-white transition hover:bg-tarmac"
            >
              {cloudPlatform.externalLabel}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
