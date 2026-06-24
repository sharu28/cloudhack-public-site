import type { Metadata } from "next";
import { site } from "@/content/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Contact2 } from "@/components/ui/contact-2";

export const metadata: Metadata = {
  title: "Contact — Cloudhack 2026",
  description:
    "Get in touch with the Cloudhack 2026 team about participating, partnering, or sponsoring the one-day AI hackathon in Colombo.",
};

export default function ContactPage() {
  const { contact, signup } = site;

  return (
    <>
      <Nav />
      <main className="relative pt-20">
        <Contact2
          title={contact.title}
          description={contact.description}
          phone={contact.phone}
          email={contact.email}
          web={contact.web}
          sponsor={signup.sponsorEnquiries}
        />
      </main>
      <Footer />
    </>
  );
}
