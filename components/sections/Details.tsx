import { Calendar, MapPin, Users } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { RingIcon, OrbitAccent } from "@/components/ui/bento";

const ICONS: Record<string, typeof Calendar> = {
  calendar: Calendar,
  pin: MapPin,
  users: Users,
};

// When (compact) + Where (wide, with the orbit accent) share the top row;
// Who spans the full width beneath them.
const SPANS = [
  "col-span-6 lg:col-span-2",
  "col-span-6 lg:col-span-4",
  "col-span-6",
];

export function Details() {
  const { details } = site;

  return (
    <Section id="details" band="white" title={details.heading}>
      <div className="grid grid-cols-6 gap-3 sm:gap-4">
        {details.items.map((item, i) => {
          const Icon = ICONS[item.icon] ?? Users;
          const isWhere = i === 1;

          return (
            <Reveal
              as="div"
              key={item.label}
              delay={i * 0.08}
              className={SPANS[i] ?? "col-span-6 lg:col-span-2"}
            >
              <Card className="h-full">
                {/* The "Where" card carries the orbit accent on its right edge */}
                {isWhere && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 top-1/2 hidden h-48 w-48 -translate-y-1/2 opacity-80 lg:block"
                  >
                    <OrbitAccent />
                  </div>
                )}
                <CardContent className="relative flex h-full flex-col p-7">
                  <RingIcon>
                    <Icon
                      className="size-5"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </RingIcon>
                  <div className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-2)]">
                    {item.label}
                  </div>
                  <div className="mt-1 text-xl font-semibold text-[var(--color-text)]">
                    {item.value}
                  </div>
                  {item.note && (
                    <div className="mt-2 text-sm text-[var(--color-text-2)]">
                      {item.note}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
