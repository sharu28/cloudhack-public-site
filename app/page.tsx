import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { RouteLine } from "@/components/RouteLine";
import { StatusChipGlobal } from "@/components/StatusChip";
import { DispatchProgressProvider } from "@/components/DispatchProgress";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyParticipate } from "@/components/sections/WhyParticipate";
import { Tracks } from "@/components/sections/Tracks";
import { CloudPlatform } from "@/components/sections/CloudPlatform";
import { Schedule } from "@/components/sections/Schedule";
import { Prizes } from "@/components/sections/Prizes";
import { Details } from "@/components/sections/Details";
import { Venue } from "@/components/sections/Venue";
import { Rules } from "@/components/sections/Rules";
import { Hosts } from "@/components/sections/Hosts";
import { PartnersTeaser } from "@/components/sections/PartnersTeaser";
import { Community } from "@/components/sections/Community";
import { FAQ } from "@/components/sections/FAQ";

/**
 * Homepage - the 11-section DISPATCH route (Section 7 of the revamp plan),
 * reordered so motivation lands before logistics and the sponsor pricing
 * table moves off the participant funnel entirely (now /partners). Challenge
 * folds into Tracks and Judges folds into Hosts as one-line footnotes rather
 * than sitting empty at full scroll-beat width.
 */
export default function Home() {
  return (
    <DispatchProgressProvider>
      <Nav />
      <RouteLine />
      <StatusChipGlobal />
      <main id="main">
        <Hero />
        <About />
        <WhyParticipate />
        <Tracks />
        <CloudPlatform />
        <Schedule />
        <Prizes />
        <Details />
        <Venue />
        <Rules />
        <Hosts />
        <PartnersTeaser />
        <Community />
        <FAQ />
      </main>
      <StickyCTA />
      <Footer />
    </DispatchProgressProvider>
  );
}
