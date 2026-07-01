/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EDIT ALL SITE COPY HERE
 * ─────────────────────────────────────────────────────────────────────────────
 *  This is the single source of truth for editable text, dates, contacts and
 *  links across the whole site. Tweak the date, tagline, contacts, etc. without
 *  hunting through components. Reflects the CloudHack 2026 content brief.
 */

export const site = {
  // ── Brand ────────────────────────────────────────────────────────────────
  brand: {
    wordmark: "CLOUDHACK",
    year: "2026",
    eyebrow: "ETHER LABS  &  CONVOY TECH present",
  },

  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    // ✏️ The headline tagline for the event.
    tagline: "Where Cloud Meets Creation",
    // Short, punchy one-liner under the tagline.
    oneLiner:
      "80 of Sri Lanka's best young builders. Real problems. One day to solve them.",
    ctaLabel: "Sign Up",
    ctaHref: "/signup",
    partnerLabel: "Join as a Partner",
    partnerHref: "/signup#sponsor",
    // Quick stats surfaced just below the CTA.
    stats: [
      { value: "80", label: "Participants" },
      { value: "~20", label: "Teams" },
      { value: "1", label: "Day" },
    ],
  },

  // ── About CloudHack ────────────────────────────────────────────────────────
  about: {
    heading: "About CloudHack",
    body:
      "CloudHack is a one-day hackathon. 80 university students and " +
      "early-career builders from across Sri Lanka team up to solve real " +
      "business problems set by sponsor companies. We started it for a simple " +
      "reason. There's a lot of tech talent here and not many places to show " +
      "it. So it's more than a one-day event. It's a place for students and " +
      "professionals to build together, learn from each other, and grow the " +
      "local tech scene.",
    // Short pull-quote for the visual side of the section.
    pullQuote: "Not just a hackathon. A community that lasts.",
  },

  // ── Themes / Tracks ────────────────────────────────────────────────────────
  //  These map to sponsor problem tracks — each Track Partner owns one. Kept
  //  generic (no sponsor names) until sponsors are confirmed.
  tracks: {
    heading: "The themes",
    intro:
      "Three tracks, each set by a Track Partner. Pick the one that fits your " +
      "team and build against a real brief.",
    items: [
      {
        name: "Automation",
        blurb:
          "Build tools that handle repetitive work.",
      },
      {
        name: "Web Applications",
        blurb: "Build web apps that people actually want to use.",
      },
      {
        name: "SME Software",
        blurb:
          "Build practical software for small and medium businesses in Sri Lanka.",
      },
    ],
  },

  // ── The Challenge ────────────────────────────────────────────────────────────
  challenge: {
    heading: "The Challenge",
    intro:
      "The problem briefs come from our sponsor companies, and you get them on the day. We're keeping the details quiet for now.",
    status: "Coming soon",
    note: "We'll share the briefs closer to the event.",
  },

  // ── Prizes ───────────────────────────────────────────────────────────────────
  prizes: {
    heading: "Prizes",
    intro:
      "There's more than bragging rights on the line. The full prize pool will be announced soon.",
    note: "Prizes coming soon.",
    items: [{ place: "1st" }, { place: "2nd" }, { place: "3rd" }],
  },

  // ── Event details ──────────────────────────────────────────────────────────
  details: {
    heading: "Event details",
    // Shown as a prominent banner — date & venue are still being locked in.
    notice: "Date & venue to be announced soon.",
    items: [
      {
        icon: "calendar",
        label: "When",
        // ✏️ Update the date here once it's finalised.
        value: "Late July 2026",
        note: "Exact date to be confirmed",
      },
      {
        icon: "pin",
        label: "Venue",
        value: "Colombo",
        note: "Hatch, Orion City or Campus. Still to be confirmed",
      },
      {
        icon: "clock",
        label: "Duration",
        value: "One full day",
        note: "Morning brief to evening demos",
      },
      {
        icon: "users",
        label: "Participants",
        value: "80 curated builders",
        note: "University students & early-career builders",
      },
      {
        icon: "team",
        label: "Team size",
        value: "3–4 members",
        note: "Come as a team or get matched",
      },
      {
        icon: "school",
        label: "Who's invited",
        value: "Sri Lanka's top campuses",
        note: "Moratuwa · UCSC · IIT · SLIIT · NSBM",
      },
    ],
  },

  // ── Who's behind CloudHack ──────────────────────────────────────────────────
  hosts: {
    heading: "Who's behind CloudHack",
    items: [
      {
        name: "Ether Labs",
        role: "AI Partner",
        blurb:
          "A Colombo-based company that builds AI agents and workflow " +
          "automation for startups and growing businesses. They bring the AI " +
          "tooling, mentorship and judging to the event.",
        email: "sharu@etherlabs.lk",
        website: "etherlabs.lk",
        href: "https://etherlabs.lk",
      },
      {
        name: "Convoy Tech",
        role: "Tech Partner",
        blurb:
          "The tech and infrastructure partner behind the event. Teams use " +
          "their platform to build and run their solutions on the day.",
        email: "krishakary2j@gmail.com",
        website: "convoy-tech.com",
        href: "https://convoy-tech.com",
      },
    ],
  },

  // ── Why participate ─────────────────────────────────────────────────────────
  whyParticipate: {
    heading: "Why participate",
    items: [
      {
        title: "Solve real problems",
        body:
          "Work on actual business problems set by sponsor companies, not made-up briefs.",
      },
      {
        title: "Show what you can build",
        body: "You're judged on what you build in a day, not how you interview.",
      },
      {
        title: "Connect & collaborate",
        body: "Meet other young builders from across the country in one room.",
      },
      {
        title: "Be part of it",
        body: "Help grow Sri Lanka's tech community.",
      },
    ],
  },

  // ── For sponsors ────────────────────────────────────────────────────────────
  forSponsors: {
    heading: "For sponsors",
    body:
      "You bring a real problem from your business. You leave with working " +
      "solutions, plus the people who built them.",
    // Comparison rows; each tier carries a value for every row key. Booleans
    // render as ✓ / —; strings render as text.
    rows: [
      { key: "slots", label: "Slots" },
      { key: "contribution", label: "Contribution (LKR)" },
      { key: "ownTrack", label: "Own a problem track" },
      { key: "judging", label: "Judging panel seat" },
      { key: "cvAccess", label: "CV access" },
      { key: "recruiting", label: "Recruiting table" },
    ],
    tiers: [
      {
        name: "Title",
        highlight: true,
        values: {
          slots: "1 (exclusive)",
          contribution: "500,000",
          ownTrack: true,
          judging: true,
          cvAccess: "All",
          recruiting: true,
        },
      },
      {
        name: "Track Partner",
        highlight: false,
        values: {
          slots: "Up to 5",
          contribution: "150,000",
          ownTrack: true,
          judging: true,
          cvAccess: true,
          recruiting: true,
        },
      },
      {
        name: "Community",
        highlight: false,
        values: {
          slots: "Open",
          contribution: "50,000",
          ownTrack: false,
          judging: false,
          cvAccess: false,
          recruiting: false,
        },
      },
    ],
    footnote:
      "In-kind support (cloud credits, prizes, venue, food) counts toward a tier.",
    ctaLabel: "Interested in sponsoring? Get in touch",
    ctaHref: "mailto:sharu@etherlabs.lk",
  },

  // ── Sponsors (logo grid) ────────────────────────────────────────────────────
  sponsors: {
    heading: "Sponsors",
    intro: "Made possible by our partners.",
    carouselLabel: "Made possible by our partners",
    // ✏️ Placeholder sponsor line-up. Add a `logo` image path per entry once
    //    sponsors are confirmed — the carousel falls back to a wordmark plate
    //    until then.
    pending: "Full sponsor line-up to be announced.",
    logos: [
      { name: "NIMBUS", tier: "Title", logo: "" },
      { name: "VERTEX AI", tier: "Track Partner", logo: "" },
      { name: "BYTEFORGE", tier: "Track Partner", logo: "" },
      { name: "HELIX CLOUD", tier: "Track Partner", logo: "" },
      { name: "QUANTA", tier: "Community", logo: "" },
      { name: "NOVA STACK", tier: "Community", logo: "" },
      { name: "ORBITAL", tier: "Community", logo: "" },
      { name: "CIPHERWORKS", tier: "Community", logo: "" },
    ],
    tiers: [
      { name: "Title", blurb: "Headline billing, keynote slot, first pick of talent." },
      { name: "Track Partner", blurb: "Own a problem track, set the brief, judge the teams." },
      { name: "Community", blurb: "Support the event with mentorship, prizes or in-kind help." },
    ],
    ctaLabel: "Become a sponsor",
    ctaHref: "/signup#sponsor",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────────
  faq: {
    heading: "FAQ",
    items: [
      {
        q: "Who can participate?",
        a:
          "CloudHack is for university students and early-career builders from " +
          "across Sri Lanka, including Moratuwa, UCSC, IIT, SLIIT, NSBM and " +
          "others. We select 80 people for the event.",
      },
      {
        q: "How do I register?",
        a:
          "Click any “Sign Up” button on this page to open the registration " +
          "form. Tell us about you and your team, and we'll follow up with next steps.",
      },
      {
        q: "Do I need to come with a team, or can I be matched?",
        a:
          "Teams are 3–4 people. Come with your own team, or register solo and " +
          "we'll match you with others before the day.",
      },
      {
        q: "What should I bring on the day?",
        a:
          "Your laptop, charger, and whatever you work best with. We'll sort " +
          "out food and the venue. Just come ready to build.",
      },
      {
        q: "Is there a registration fee?",
        a: "No. It's free for the builders we select.",
      },
      {
        q: "What do I need to build?",
        a:
          "Pick one of the sponsor tracks (Automation, Web Applications or SME " +
          "Software) and build a working prototype with AI tools by the evening " +
          "demo.",
      },
      {
        q: "When and where exactly is the event?",
        a:
          "Late July 2026, in Colombo. We're still confirming the exact date " +
          "and venue. Register and we'll send you the details first.",
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────────
  contact: {
    title: "Contact Us",
    description:
      "Questions or partnership ideas are welcome. Send us a message and the " +
      "CloudHack team will get back to you.",
    phone: "+94 74 221 6040",
    email: "sharu@etherlabs.lk",
    web: { label: "etherlabs.lk", url: "https://etherlabs.lk" },
  },

  // ── Footer / contacts ────────────────────────────────────────────────────────
  footer: {
    partners: [
      {
        name: "Ether Labs",
        role: "AI Partner",
        website: "etherlabs.lk",
        websiteHref: "https://etherlabs.lk",
        email: "sharu@etherlabs.lk",
        phone: "+94 74 221 6040",
      },
      {
        name: "Convoy Tech",
        role: "Tech Partner",
        website: "convoy-tech.com",
        websiteHref: "https://convoy-tech.com",
        email: "krishakary2j@gmail.com",
        phone: "",
      },
    ],
    // ✏️ Add real social URLs once confirmed.
    socials: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
    tagline:
      "CloudHack 2026. Co-hosted by Ether Labs and Convoy Tech. Made for Sri " +
      "Lanka's young builders.",
    copyright: "CloudHack 2026 · Co-hosted by Ether Labs & Convoy Tech",
  },

  // ── Signup page ──────────────────────────────────────────────────────────────
  signup: {
    title: "Register a team for CloudHack 2026",
    subtitle:
      "Teams of 3–4 builders. Add your captain's details below and we'll follow up with next steps.",
    universities: ["Moratuwa", "UCSC", "IIT", "SLIIT", "NSBM", "Other"],
    roles: ["Developer", "AI Builder", "Designer", "Other"],
    sponsorEnquiries: {
      heading: "Sponsor enquiries",
      name: "Sharukesh Seker",
      role: "Founder",
      email: "sharu@etherlabs.lk",
      phone: "+94 74 221 6040",
    },
  },
} as const;

export type Site = typeof site;
