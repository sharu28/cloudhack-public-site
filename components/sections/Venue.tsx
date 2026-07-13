import { ArrowUpRight, Crosshair, MapPin, Navigation } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

/**
 * The venue - a design-system-native location signal beside the practical
 * notes. An abstract grid/route marker avoids a generic third-party map
 * rectangle while the real Google Maps link remains one click away.
 */
export function Venue() {
  const { venue } = site;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.mapQuery)}`;

  return (
    <Section id="venue" eyebrow="Venue" title={venue.heading} intro={venue.intro}>
      <div className="grid grid-cols-1 gap-px border border-line-strong bg-line-strong lg:grid-cols-2">
        <Reveal as="div" className="bg-paper-raised">
          <div className="venue-signal relative min-h-72 overflow-hidden bg-paper-dim p-6 sm:p-8 lg:min-h-[22rem]">
            <div aria-hidden="true" className="venue-signal-grid absolute inset-0" />
            <svg
              aria-hidden="true"
              viewBox="0 0 640 432"
              preserveAspectRatio="xMidYMid slice"
              className="absolute inset-0 size-full text-line-strong/40"
            >
              <path
                d="M-24 340C88 282 138 359 229 286C314 218 366 154 490 181C558 196 594 158 674 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M-12 126C92 142 144 105 245 149C332 187 370 260 472 251C554 244 596 282 658 334"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="6 10"
              />
              <path
                d="M44 432C120 345 155 316 260 286C333 265 394 212 460 124C500 70 556 41 650 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <circle cx="330" cy="218" r="72" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 8" />
              <circle cx="330" cy="218" r="4" fill="currentColor" />
            </svg>

            <div className="relative z-10 flex min-h-[15rem] flex-col justify-between lg:min-h-[18rem]">
              <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-2">
                <span className="flex items-center gap-2">
                  <Crosshair className="size-4 text-stamp" strokeWidth={1.5} aria-hidden="true" />
                  Location signal
                </span>
                <span>Colombo / LK</span>
              </div>

              <div className="self-center text-center">
                <div className="mx-auto flex size-14 items-center justify-center border border-stamp bg-paper-raised text-stamp shadow-stamp">
                  <MapPin className="size-6" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-stamp">Site marker</p>
                <p className="mt-1 text-sm font-light text-ink">{venue.name}</p>
              </div>

              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-max items-center gap-2 border border-line-strong bg-paper-raised px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink transition-colors hover:border-stamp hover:text-stamp"
              >
                <Navigation className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
                Open in Maps
                <ArrowUpRight className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>
          </div>
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
