import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { HowItWorksPinned } from "@/components/sections/HowItWorksPinned";
import { Details } from "@/components/sections/Details";
import { Hosts } from "@/components/sections/Hosts";
import { Sponsors } from "@/components/sections/Sponsors";
import { SCROLL_MODE } from "@/lib/config";

export default function Home() {
  // The "How the day works" section swaps to a pinned scroll-sequence when
  // SCROLL_MODE is "pinned" (lib/config.ts). Both variants live in the codebase.
  const HowItWorksSection =
    SCROLL_MODE === "pinned" ? HowItWorksPinned : HowItWorks;

  return (
    <>
      <ScrollProgress />
      <Nav overHero />
      <main>
        <Hero />
        <About />
        <HowItWorksSection />
        <Details />
        <Hosts />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
