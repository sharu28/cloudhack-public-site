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

  // Event timing. Single source of truth for the countdown timer and sticky CTA.
  event: {
    startISO: "2026-08-09T09:00:00+05:30",
    countdownLabel: "Kickoff in",
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
      "CloudHack is a one-day hackathon where 80 of Sri Lanka's strongest " +
      "university students and early-career builders compete to solve real " +
      "business problems set by sponsor companies. Born from a simple belief — " +
      "Sri Lanka has exceptional tech talent that deserves a stage — CloudHack " +
      "isn't just a hackathon. It's the beginning of a movement. A community " +
      "where students and professionals collaborate, grow, and put Sri Lanka's " +
      "tech scene on the map.",
    // Short pull-quote for the visual side of the section.
    pullQuote: "Not just a hackathon. The beginning of a movement.",
  },

  // ── Themes / Tracks ────────────────────────────────────────────────────────
  //  These map to sponsor problem tracks — each Track Partner owns one. Kept
  //  generic (no sponsor names) until sponsors are confirmed.
  tracks: {
    heading: "The themes",
    intro:
      "Three challenge tracks, each set by a Track Partner. Pick the one that " +
      "fits your team and build against a real brief.",
    items: [
      {
        name: "Automation",
        blurb:
          "Build tools that eliminate repetitive tasks and drive efficiency.",
      },
      {
        name: "Web Applications",
        blurb: "Create impactful, user-first web experiences.",
      },
      {
        name: "SME Software",
        blurb:
          "Develop practical software solutions for small and medium enterprises in Sri Lanka.",
      },
    ],
  },

  // ── The Challenge ────────────────────────────────────────────────────────────
  challenge: {
    heading: "The Challenge",
    intro:
      "The problem briefs — set by our sponsor companies — drop on the day. The specifics are under wraps for now.",
    status: "Coming soon",
    note: "The challenge briefs will be revealed closer to the event. Watch this space.",
  },

  // ── Prizes ───────────────────────────────────────────────────────────────────
  prizes: {
    heading: "Prizes",
    intro:
      "There's more than bragging rights on the line — the top three teams take home cash prizes.",
    note: "Prize pool confirmed for the top three places.",
    items: [
      { place: "1st", amount: "LKR 50,000" },
      { place: "2nd", amount: "LKR 40,000" },
      { place: "3rd", amount: "LKR 30,000" },
    ],
  },

  // ── Event details ──────────────────────────────────────────────────────────
  details: {
    heading: "Event details",
    // Shown as a prominent banner above the logistics grid.
    notice: "Venue confirmed: SLIIT - Curtin Campus.",
    items: [
      {
        icon: "calendar",
        label: "When",
        value: "9 August 2026",
        note: "Sunday · save the date",
      },
      {
        icon: "pin",
        label: "Venue",
        value: "SLIIT - Curtin Campus",
        note: "Colombo",
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
      {
        icon: "cpu",
        label: "AI model",
        value: "Kimi 2.6 endpoint",
        note: "Provided through Convoy Cloud",
      },
      {
        icon: "key",
        label: "Tokens",
        value: "Unlimited for teams",
        note: "No personal API tokens needed",
      },
    ],
  },

  // Participant-facing agenda, distilled from the day-of runbook.
  schedule: {
    heading: "Run of day",
    intro:
      "One day, morning brief to evening demos. Here's how Sunday 9 August plays out.",
    note: "Times are provisional and may shift slightly on the day.",
    items: [
      { time: "08:30", title: "Doors open & check-in", blurb: "Grab your name tag, find your table, settle in." },
      { time: "09:00", title: "Kickoff", blurb: "Format, rules, judging criteria and how submissions work." },
      { time: "09:30", title: "Challenge briefings", blurb: "Sponsor companies walk through the real problems you'll solve." },
      { time: "10:00", title: "Hacking begins", blurb: "Pick your track and start building." },
      { time: "11:30", title: "Mentor checkpoint 1", blurb: "Sanity-check your approach with mentors before you go deep." },
      { time: "13:00", title: "Lunch", blurb: "Fuel up. Food's on us." },
      { time: "14:30", title: "Mentor checkpoint 2", blurb: "Pressure-test your demo path and scope for the final stretch." },
      { time: "16:00", title: "Submissions open", blurb: "Lock in your links, decks and demo videos." },
      { time: "17:00", title: "Final demos", blurb: "Every team presents in a fixed slot for real judges." },
      { time: "19:00", title: "Winners & closing", blurb: "Prizes, photos and what happens next." },
    ],
  },

  // Confirmed judges/mentors render as cards. Empty items render placeholders.
  judges: {
    heading: "Judges & mentors",
    intro:
      "Industry engineers and founders who set the briefs, mentor teams through the day, and judge the final demos.",
    pending: "The full panel is being confirmed. Announcing soon.",
    items: [] as { name: string; role: string; org: string; blurb?: string }[],
    placeholders: [
      { role: "Judge", hint: "Title sponsor engineering leadership" },
      { role: "Judge", hint: "Track partner product and AI" },
      { role: "Mentor", hint: "Senior engineers from sponsor teams" },
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
          "A Colombo-based AI automation company building AI agents and custom " +
          "workflow automation for startups and growing businesses. Brings the AI " +
          "tooling, mentorship and judging to the event.",
        email: "sharu@etherlabs.lk",
        website: "etherlabs.lk",
        href: "https://etherlabs.lk",
      },
      {
        name: "Convoy Tech",
        role: "Tech Partner",
        blurb:
          "The technology and infrastructure partner behind the event. Convoy " +
          "Cloud will set up the cluster and shared Kimi 2.6 inference endpoint " +
          "that teams use to build and run their solutions on the day.",
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
          "Build against actual business challenges set by sponsor companies — not made-up briefs.",
      },
      {
        title: "Showcase your talent",
        body: "Be assessed on what you ship in a day, not how you interview.",
      },
      {
        title: "Connect & collaborate",
        body: "Meet Sri Lanka's sharpest young builders in one room.",
      },
      {
        title: "Be part of the movement",
        body: "Help shape the future of Sri Lanka's tech community.",
      },
    ],
  },

  // ── For sponsors ────────────────────────────────────────────────────────────
  forSponsors: {
    heading: "For sponsors",
    body:
      "You set a real problem from your business. You walk away with working " +
      "solutions — and the people who built them.",
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
    intro: "Made possible by our incredible partners.",
    carouselLabel: "Made possible by our incredible partners",
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
      { name: "Community", blurb: "Back the ecosystem with mentorship, prizes or in-kind support." },
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
          "across Sri Lanka — Moratuwa, UCSC, IIT, SLIIT, NSBM and beyond. 80 " +
          "participants are curated for the event.",
      },
      {
        q: "How do I register?",
        a:
          "Hit any “Sign Up” button on this page to open the registration " +
          "form. Tell us about you and your team, and we'll be in touch with next steps.",
      },
      {
        q: "Do I need to come with a team, or can I be matched?",
        a:
          "Teams are 3–4 people. Come with your own crew, or register solo and " +
          "we'll help match you into a team before the day.",
      },
      {
        q: "What should I bring on the day?",
        a:
          "Your laptop, charger, and whatever you build best with. Food and the " +
          "venue are sorted, and you do not need to bring your own AI API tokens.",
      },
      {
        q: "Is there a registration fee?",
        a: "No. CloudHack is free to participate in for selected builders.",
      },
      {
        q: "What do I need to build?",
        a:
          "Pick one of the sponsor problem tracks — Automation, Web Applications " +
          "or SME Software — and ship a working prototype using AI tools by the " +
          "evening demo.",
      },
      {
        q: "Do teams need their own AI API tokens?",
        a:
          "No. We will provide teams with access to a shared Kimi 2.6 inference " +
          "endpoint, with unlimited tokens for teams during the event. Convoy " +
          "Cloud will set up the cluster on Convoy Cloud so teams can build " +
          "without using their own tokens.",
      },
      {
        q: "When and where exactly is the event?",
        a:
          "9 August 2026, at SLIIT - Curtin Campus in Colombo. Register and " +
          "we'll send you the details first.",
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────────
  contact: {
    title: "Contact Us",
    description:
      "Questions, partnership ideas, or just want to say hello? Send us a " +
      "message and the CloudHack team will get back to you.",
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
      "CloudHack 2026 — Co-hosted by Ether Labs & Convoy Tech. Building Sri " +
      "Lanka's Tech Future, One Hack at a Time.",
    copyright: "CloudHack 2026 · Co-hosted by Ether Labs & Convoy Tech",
  },

  // ── Signup page ──────────────────────────────────────────────────────────────
  signup: {
    title: "Register a team for CloudHack 2026",
    subtitle:
      "Teams of 3–4 builders. Fill in your captain's details below and we'll be in touch with next steps.",
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
