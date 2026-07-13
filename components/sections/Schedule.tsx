import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { ManifestList, ManifestRow } from "@/components/ManifestRow";
import { SplitFlap } from "@/components/SplitFlap";

/**
 * Schedule — a true ledger: each row is a Split-Flap time, a title, a
 * blurb. The single best fit for the Split-Flap device on the page, since a
 * schedule is literally a timetable (Section 20's recommended first slice).
 */
export function Schedule() {
  const { schedule } = site;

  return (
    <Section id="schedule" eyebrow="Run of day" title={schedule.heading} intro={schedule.intro}>
      <ManifestList>
        {schedule.items.map((item, i) => {
          const [hour, minute] = item.time.split(":");
          return (
            <ManifestRow
              key={item.time}
              index={i}
              total={schedule.items.length}
              leading={
                <span className="flex items-center gap-[3px]">
                  <SplitFlap
                    value={hour}
                    cellClassName="h-7 w-[0.68em] text-lg font-medium font-mono"
                    staggerMs={40}
                    ariaLabel={item.time}
                  />
                  <span aria-hidden="true" className="font-mono text-sm text-line-strong">
                    :
                  </span>
                  <SplitFlap
                    value={minute}
                    cellClassName="h-7 w-[0.68em] text-lg font-medium font-mono"
                    staggerMs={40}
                    ariaLabel=""
                  />
                </span>
              }
              title={item.title}
              description={item.blurb}
            />
          );
        })}
      </ManifestList>

      <p className="mt-8 text-sm text-ink-2">{schedule.note}</p>
    </Section>
  );
}
