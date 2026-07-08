import { MapPin } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

/**
 * "The venue" — embedded Google Map beside the practical notes (doors-open
 * time, what to bring, getting there). The map is a keyless maps embed driven
 * by venue.mapQuery in content/site.ts.
 */
export function Venue() {
  const { venue } = site;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    venue.mapQuery
  )}&output=embed`;

  return (
    <Section id="venue" title={venue.heading} intro={venue.intro}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Reveal as="div">
          <div className="h-full overflow-hidden rounded-lg border border-tarmac">
            <iframe
              src={mapSrc}
              title={`Map — ${venue.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-72 w-full lg:h-full lg:min-h-[22rem]"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            />
          </div>
        </Reveal>

        <Reveal as="div" delay={0.1}>
          <div className="flex h-full flex-col justify-between gap-8 rounded-lg border border-tarmac bg-graphite p-8">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-2)]">
                <MapPin
                  className="size-4 text-ignition-orange"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                Venue Partner
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">
                {venue.name}
              </h3>
              <p className="mt-1 text-sm text-[var(--color-text-2)]">
                {venue.city}
              </p>
            </div>

            <ul className="flex flex-col gap-5">
              {venue.notes.map((note) => (
                <li key={note.title}>
                  <div className="text-sm font-semibold text-[var(--color-text)]">
                    {note.title}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-2)]">
                    {note.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
