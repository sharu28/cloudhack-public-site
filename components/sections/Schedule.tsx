import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function Schedule() {
  const { schedule } = site;

  return (
    <Section id="schedule" title={schedule.heading} intro={schedule.intro}>
      <ol className="relative ml-2 border-l border-tarmac sm:ml-4">
        {schedule.items.map((item, i) => (
          <Reveal as="li" key={item.time} delay={Math.min(i * 0.05, 0.4)}>
            <div className="relative pb-10 pl-8 last:pb-0 sm:pl-12">
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-ignition-orange ring-4 ring-obsidian"
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="w-14 shrink-0 font-tomorrow text-sm font-medium tabular-nums text-ignition-orange">
                  {item.time}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-2)]">
                    {item.blurb}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      <p className="mt-10 text-sm text-dusk-gray">{schedule.note}</p>
    </Section>
  );
}
