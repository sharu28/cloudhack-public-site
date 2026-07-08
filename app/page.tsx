import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { StickyCTA } from "@/components/StickyCTA";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Tracks } from "@/components/sections/Tracks";
import { Challenge } from "@/components/sections/Challenge";
import { Prizes } from "@/components/sections/Prizes";
import { Details } from "@/components/sections/Details";
import { Schedule } from "@/components/sections/Schedule";
import { Hosts } from "@/components/sections/Hosts";
import { Judges } from "@/components/sections/Judges";
import { WhyParticipate } from "@/components/sections/WhyParticipate";
import { ForSponsors } from "@/components/sections/ForSponsors";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav overHero />
      <main>
        <Hero />
        <About />
        <Tracks />
        <Challenge />
        <Prizes />
        <Details />
        <Schedule />
        <Hosts />
        <Judges />
        <WhyParticipate />
        <ForSponsors />
        <FAQ />
      </main>
      <StickyCTA />
      <Footer />
    </>
  );
}
