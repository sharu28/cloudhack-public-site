import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { ManifestList, ManifestRow } from "@/components/ManifestRow";
import { ManifestCard } from "@/components/ManifestCard";
import { SplitFlap } from "@/components/SplitFlap";

/**
 * Schedule - a true ledger: each row is a Split-Flap time, a title, a
 * blurb. The single best fit for the Split-Flap device on the page, since a
 * schedule is literally a timetable (Section 20's recommended first slice).
 *
 * Keynote speakers render directly below the ledger: a single honest
 * pending line while `speakers.items` is empty (same device as the Judges
 * footnote in Hosts), switching to a card per speaker once real names and
 * bios are confirmed.
 */
export function Schedule() {
  const { schedule, speakers } = site;

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
                <span className="flex items-center gap-1">
                  <SplitFlap
                    value={hour}
                    cellClassName="h-7 w-6 text-lg font-medium font-mono"
                    staggerMs={40}
                    ariaLabel={item.time}
                  />
                  <span aria-hidden="true" className="font-mono text-sm text-line-strong">
                    :
                  </span>
                  <SplitFlap
                    value={minute}
                    cellClassName="h-7 w-6 text-lg font-medium font-mono"
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

      {speakers.items.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {speakers.items.map((speaker) => (
            <ManifestCard key={speaker.name}>
              <div>
                {speaker.photo && (
                  <img
                    src={speaker.photo}
                    alt={speaker.name}
                    className="size-11 shrink-0 border border-line-strong object-cover"
                  />
                )}
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink-2">
                  {speaker.role}
                </div>
                <h3 className="mt-3 text-xl font-extralight tracking-[-0.01em] text-ink">
                  {speaker.name}
                </h3>
                <p className="mt-1 text-sm text-ink-2">{speaker.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-2">{speaker.bio}</p>
              </div>
            </ManifestCard>
          ))}
        </div>
      ) : (
        <p className="mt-6 border-l-2 border-line-strong pl-4 text-sm leading-relaxed text-ink-2">
          <span className="font-light text-ink">{speakers.heading}.</span> {speakers.pending}
        </p>
      )}
    </Section>
  );
}
