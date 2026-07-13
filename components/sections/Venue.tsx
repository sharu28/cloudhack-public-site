import { MapPin } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

/**
 * The venue — embedded Google Map beside the practical notes, restyled to a
 * flat manifest block instead of a rounded charcoal card (Section 8).
 */
export function Venue() {
  const { venue } = site;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(venue.mapQuery)}&output=embed`;

  return (
    <Section id="venue" eyebrow="Venue" title={venue.heading} intro={venue.intro}>
      <div className="grid grid-cols-1 gap-px border border-line-strong bg-line-strong lg:grid-cols-2">
        <Reveal as="div" className="bg-paper-raised">
          {/* Google's embed has no dark-mode parameter without the full JS
              Maps API — invert+hue-rotate is the standard CSS-only trick to
              keep it from sitting as a jarring bright rectangle on the dark
              canvas. Full color is one hover/focus away for real map reading. */}
          <iframe
            src={mapSrc}
            title={`Map — ${venue.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-72 w-full opacity-90 invert transition-[filter,opacity] duration-300 hue-rotate-180 hover:opacity-100 hover:invert-0 hover:hue-rotate-0 focus-visible:opacity-100 focus-visible:invert-0 focus-visible:hue-rotate-0 lg:h-full lg:min-h-[22rem]"
            style={{ border: 0 }}
          />
        </Reveal>

        <Reveal as="div" delay={0.1}>
          <div className="flex h-full flex-col justify-between gap-8 bg-paper-raised p-8">
            <div>
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-ink-2">
                <MapPin className="size-4 text-stamp" strokeWidth={2} aria-hidden="true" />
                Venue Partner
              </p>
              <h3 className="mt-4 text-2xl font-extralight tracking-[-0.01em] text-ink sm:text-3xl">
                {venue.name}
              </h3>
              <p className="mt-1 text-sm text-ink-2">{venue.city}</p>
            </div>

            <ul className="flex flex-col gap-5">
              {venue.notes.map((note) => (
                <li key={note.title} className="border-l-2 border-line-strong pl-4">
                  <div className="text-sm font-light text-ink">{note.title}</div>
                  <p className="mt-1 text-sm leading-relaxed text-ink-2">{note.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
