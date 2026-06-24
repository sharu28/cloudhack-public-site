import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const { about } = site;

  return (
    <Section id="about" band="white" title={about.heading} intro={about.body}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {about.stats.map((stat, i) => (
          <Reveal as="div" key={stat.label} delay={i * 0.08}>
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-teal via-cyan to-violet bg-clip-text text-5xl font-semibold text-transparent sm:text-6xl">
                  {stat.value}
                </div>
                <div className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-text-2)]">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
