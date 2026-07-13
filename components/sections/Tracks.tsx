import { Cog, Globe, Building2, Lock } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { ManifestList, ManifestRow } from "@/components/ManifestRow";

const TRACK_ICONS = [Cog, Globe, Building2];

/**
 * Tracks — the three challenge tracks as manifest rows with a track code,
 * absorbing the old standalone Challenge section (P4: a whole section that
 * only said "coming soon") as one inline note instead of its own
 * full-width scroll beat.
 */
export function Tracks() {
  const { tracks, challenge } = site;

  return (
    <Section id="tracks" eyebrow="The themes" title={tracks.heading} intro={tracks.intro}>
      <ManifestList>
        {tracks.items.map((track, i) => {
          const Icon = TRACK_ICONS[i] ?? Cog;
          return (
            <ManifestRow
              key={track.name}
              index={i}
              total={tracks.items.length}
              code={`TRK-${String(i + 1).padStart(2, "0")}`}
              icon={<Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />}
              title={track.name}
              description={track.blurb}
            />
          );
        })}
      </ManifestList>

      <div className="mt-8 flex items-start gap-3 border border-dashed border-line-strong bg-paper-dim px-5 py-4">
        <Lock className="mt-0.5 size-4 shrink-0 text-stamp" strokeWidth={1.75} aria-hidden="true" />
        <p className="text-sm leading-relaxed text-ink-2">
          <span className="font-semibold text-ink">{challenge.status}.</span> {challenge.intro}{" "}
          {challenge.note}
        </p>
      </div>
    </Section>
  );
}
