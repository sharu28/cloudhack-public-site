import {
  Calendar,
  MapPin,
  Clock,
  Users,
  UsersRound,
  GraduationCap,
  Cpu,
  KeyRound,
} from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

const ICONS: Record<string, typeof Calendar> = {
  calendar: Calendar,
  pin: MapPin,
  clock: Clock,
  users: Users,
  team: UsersRound,
  school: GraduationCap,
  cpu: Cpu,
  key: KeyRound,
};

/**
 * Event logistics in a scannable grid of tiles, with a notice banner up top.
 */
export function Details() {
  const { details } = site;

  return (
    <Section id="details" title={details.heading}>
      {/* Confirmed venue callout above the details grid. */}
      <Reveal>
        <div className="mb-6 flex items-center gap-3 rounded-lg border border-ignition-orange/30 bg-charcoal px-5 py-4">
          <Calendar
            className="size-5 shrink-0 text-ignition-orange"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <p className="text-sm font-medium text-stark-white">
            {details.notice}
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {details.items.map((item, i) => {
          const Icon = ICONS[item.icon] ?? Users;

          return (
            <Reveal as="div" key={item.label} delay={(i % 3) * 0.06}>
              <div className="flex h-full items-start gap-4 rounded-lg border border-tarmac bg-charcoal p-6">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-tarmac bg-graphite">
                  <Icon
                    className="size-5 text-stark-white"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="font-tomorrow text-xs font-medium uppercase tracking-[0.18em] text-dusk-gray">
                    {item.label}
                  </div>
                  <div className="mt-1 text-lg font-medium text-stark-white">
                    {item.value}
                  </div>
                  {item.note && (
                    <div className="mt-1 text-sm text-ash">{item.note}</div>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
