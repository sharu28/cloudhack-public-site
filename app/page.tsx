import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Tracks } from "@/components/sections/Tracks";
import { Challenge } from "@/components/sections/Challenge";
import { Prizes } from "@/components/sections/Prizes";
import { Details } from "@/components/sections/Details";
import { Hosts } from "@/components/sections/Hosts";
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
        <Hosts />
        <WhyParticipate />
        <ForSponsors />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
