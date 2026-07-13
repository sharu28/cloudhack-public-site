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
    startISO: "2026-08-16T09:00:00+05:30",
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
    partnerHref: "/partners",
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
      "business problems set by sponsor companies. Born from a simple belief - " +
      "Sri Lanka has exceptional tech talent that deserves a stage - CloudHack " +
      "isn't just a hackathon. It's the beginning of a movement. A community " +
      "where students and professionals collaborate, grow, and put Sri Lanka's " +
      "tech scene on the map.",
    // Short pull-quote for the visual side of the section.
    pullQuote: "Not just a hackathon. The beginning of a movement.",
  },

  // ── Themes / Tracks ────────────────────────────────────────────────────────
  //  These map to sponsor problem tracks - each Track Partner owns one. Kept
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
      "The problem briefs - set by our sponsor companies - drop on the day. The specifics are under wraps for now.",
    status: "Coming soon",
    note: "The challenge briefs will be revealed closer to the event. Watch this space.",
  },

  // ── Prizes ───────────────────────────────────────────────────────────────────
  prizes: {
    heading: "Prizes",
    intro:
      "There's more than bragging rights on the line - the top three teams take home cash prizes.",
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
    notice: "Venue confirmed: SLIIT - Curtin Campus.",
    essentials: [
      {
        icon: "calendar",
        label: "When",
        value: "16 August 2026",
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
    ],
    groups: [
      {
        title: "Who should apply",
        items: [
          {
            label: "Eligibility",
            value: "Students & early-career builders",
            note:
              "Open to builders in Sri Lanka across technical and product roles.",
          },
          {
            label: "Teams",
            value: "Solo, partial, or full",
            note: "Final event teams will be 3–4 members.",
          },
          {
            label: "Capacity",
            value: "80 curated builders",
            note: "Selected from university and early-career applicants.",
          },
        ],
      },
      {
        title: "Build setup",
        ctaLabel: "How Convoy Cloud works",
        ctaHref: "/convoy-cloud",
        items: [
          {
            label: "AI model",
            value: "Kimi 2.6 endpoint",
            note: "Provided through Convoy Cloud.",
          },
          {
            label: "Tokens",
            value: "Unlimited for teams",
            note: "No personal API tokens needed.",
          },
          {
            label: "Deployment",
            value: "Convoy Cloud",
            note: "Final apps run there for demos and judging.",
          },
        ],
      },
    ],
  },

  // ── Venue ────────────────────────────────────────────────────────────────
  //  ✏️ `mapQuery` drives the embedded Google Map - refine it (or swap in a
  //  full address) once the exact building/hall is confirmed.
  venue: {
    heading: "The venue",
    intro:
      "Hosted at SLIIT – Curtin Campus in Colombo, our Venue Partner for CloudHack 2026.",
    name: "SLIIT – Curtin Campus",
    city: "Colombo, Sri Lanka",
    mapQuery: "SLIIT Curtin Campus Colombo",
    notes: [
      { title: "Doors open 08:30", body: "Check-in closes at kickoff - arrive early to settle in." },
      { title: "What to bring", body: "Laptop, charger, and whatever you build best with. Food, WiFi and power are sorted." },
      { title: "Getting there", body: "Exact hall, entrance, parking, and arrival instructions will be emailed to confirmed participants." },
    ],
  },

  cloudPlatform: {
    heading: "Cloud platform",
    intro:
      "Every final app runs on Convoy Cloud, our Cloud Platform Partner, giving judges a live, shared platform for review.",
    ctaLabel: "What is Convoy Cloud?",
    ctaHref: "/convoy-cloud",
    externalLabel: "Visit Convoy Tech",
    externalHref: "https://convoy-tech.com",
    items: [
      {
        title: "Submit a live demo link",
        body:
          "Teams include a working Convoy Cloud URL with their repo and short presentation or demo video.",
      },
      {
        title: "In-person workshop",
        body:
          "A hands-on session two weeks ahead of CloudHack walks teams through the platform, deployment flow, environment variables, and demo setup.",
      },
    ],
  },

  // Participant-facing agenda, distilled from the day-of runbook.
  schedule: {
    heading: "Run of day",
    intro:
      "One day, morning brief to evening demos. Here's how Sunday 16 August plays out.",
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

  // Judges/mentors panel isn't confirmed yet - rendered as a one-line
  // footnote under Hosts (see components/sections/Hosts.tsx) rather than a
  // standalone section of placeholder cards.
  judges: {
    heading: "Judges & mentors",
    intro:
      "Industry engineers and founders who set the briefs, mentor teams through the day, and judge the final demos.",
    pending: "The full panel is being confirmed. Announcing soon.",
  },

  // ── Judging & rules ─────────────────────────────────────────────────────────
  //  ✏️ The detailed scoring criteria aren't locked yet, so only the ground
  //  rules are public. Once the judging sheet is final, add the criteria here
  //  and surface them in components/sections/Rules.tsx.
  rules: {
    heading: "Judging & rules",
    intro:
      "Every team demos to the full judging panel and is scored on the same sheet. The detailed criteria are revealed at kickoff - here are the ground rules to plan around.",
    criteriaNote:
      "Full judging criteria will be shared at kickoff on the day.",
    rulesHeading: "Ground rules",
    items: [
      "Teams are 3–4 people. Every member must be registered.",
      "All project code is written on the day. Open-source libraries, frameworks and AI tools (including the provided Kimi 2.6 endpoint) are fair game.",
      "Each team builds against one sponsor track brief, chosen after the morning briefings.",
      "Apps must run on Convoy Cloud, our Cloud Platform Partner, for final demos and judging.",
      "Final submissions must include a working demo, a GitHub/repo link, and a short presentation or demo video. Submission links close before final demos.",
      "Judges' decisions are final.",
    ],
  },

  // ── Community ───────────────────────────────────────────────────────────────
  //  ✏️ Drop the real WhatsApp invite URL into `href` - the button renders as
  //  "link coming soon" until it starts with http.
  community: {
    heading: "Join the community",
    body:
      "The CloudHack WhatsApp community is where announcements drop first - and where solo builders find teammates before the day.",
    ctaLabel: "Join the WhatsApp community",
    pendingLabel: "WhatsApp community link coming soon",
    href: "https://chat.whatsapp.com/KND60dRYwZz8GE3YU9NH9U",
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
          "Build against actual business challenges set by sponsor companies - not made-up briefs.",
      },
      {
        title: "Showcase your talent",
        body: "Get your skills in front of sponsor companies through a real, working project - not an interview.",
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

  // ── Partners teaser (homepage) ──────────────────────────────────────────────
  //  A compact, honest pointer to /partners - the homepage no longer carries
  //  the full sponsorship pricing table inside the participant funnel.
  partnersTeaser: {
    eyebrow: "Partnerships",
    heading: "Set a real problem. Meet the builders.",
    body: "Sponsor tracks, judging seats and recruiting access are open - full tiers and contribution levels live on the partnership page.",
    ctaLabel: "View partnership tiers",
    ctaHref: "/partners",
  },

  // ── For sponsors ────────────────────────────────────────────────────────────
  forSponsors: {
    heading: "For sponsors",
    body:
      "You set a real problem from your business. You walk away with working " +
      "solutions - and the people who built them.",
    // Comparison rows; each tier carries a value for every row key. Booleans
    // render as ✓ / -; strings render as text.
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

  // ── Sponsors (confirmed partners) ───────────────────────────────────────────
  //  ✏️ Only real, confirmed partners belong in `logos` - silence over
  //  placeholder theater (see /partners, which shows this list honestly
  //  instead of a marquee padded out with synthetic "coming soon" names).
  sponsors: {
    heading: "Sponsors",
    intro: "Made possible by our incredible partners.",
    pending: "Full sponsor line-up to be announced.",
    logos: [{ name: "SLIIT", tier: "Venue Partner", logo: "", confirmed: true }],
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────────
  faq: {
    heading: "FAQ",
    items: [
      {
        q: "Who can participate?",
        a:
          "CloudHack is open to university students and early-career builders in Sri Lanka. " +
          "Teams can include developers, AI builders, designers, product thinkers, or anyone " +
          "who can help ship a working prototype in one day.",
      },
      {
        q: "How do I register?",
        a:
          "Hit any “Sign Up” button on this page to open the registration " +
          "form. Tell us about you and your team, and we'll be in touch with next steps.",
      },
      {
        q: "Can I register solo or with a partial team?",
        a:
          "You can register solo, with a partial team, or as a full team. Full event " +
          "teams will be 3–4 members; solo and partial applicants can use the WhatsApp " +
          "community to find teammates before selection.",
      },
      {
        q: "Do I need to register every team member now?",
        a:
          "For now, only the captain needs to register. We'll collect full member " +
          "details from shortlisted teams.",
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
          "Pick one of the sponsor problem tracks - Automation, Web Applications " +
          "or SME Software - and ship a working prototype using AI tools by the " +
          "evening demo. Final submissions must include a working demo, a GitHub/repo " +
          "link, and a short presentation or demo video.",
      },
      {
        q: "What is Convoy Cloud?",
        a:
          "Convoy Cloud is CloudHack's Cloud Platform Partner. Teams will use it " +
          "to deploy final apps for demos and judging, with an in-person platform " +
          "workshop planned two weeks ahead of the hackathon.",
        href: "/convoy-cloud",
        linkLabel: "Learn about Convoy Cloud",
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
          "16 August 2026, at SLIIT - Curtin Campus in Colombo. Register and " +
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
      "CloudHack 2026 - Co-hosted by Ether Labs & Convoy Tech. Building Sri " +
      "Lanka's Tech Future, One Hack at a Time.",
    copyright: "CloudHack 2026 · Co-hosted by Ether Labs & Convoy Tech",
  },

  // ── Signup page ──────────────────────────────────────────────────────────────
  signup: {
    title: "Register a team for CloudHack 2026",
    subtitle:
      "You can register solo, with a partial team, or as a full team. Full event teams will be 3–4 members; only the captain needs to submit this form for now.",
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

  convoyCloudPage: {
    title: "What is Convoy Cloud?",
    subtitle:
      "Convoy Cloud is CloudHack's Cloud Platform Partner. Every team will deploy its final app on the platform so demos are live, reviewable, and consistent for judges.",
    externalLabel: "Visit Convoy Tech",
    externalHref: "https://convoy-tech.com",
    workshop:
      "An in-person Convoy Cloud workshop is planned for Sunday 2 August 2026, two weeks ahead of CloudHack. Final time and location will be shared with confirmed participants through email and WhatsApp.",
    steps: [
      {
        label: "Workshop",
        title: "Learn the platform",
        body: "Selected teams attend the in-person Convoy Cloud workshop and get comfortable with the deployment workflow ahead of event day.",
      },
      {
        label: "Build",
        title: "Ship locally first",
        body: "Teams build their prototype during CloudHack using their preferred framework, repo, and local development setup.",
      },
      {
        label: "Deploy",
        title: "Publish on Convoy Cloud",
        body: "Teams deploy the app, test the live URL, and keep it ready for judges when submissions close.",
      },
      {
        label: "Submit",
        title: "Share the demo package",
        body: "Final submissions include the Convoy Cloud URL, GitHub/repo link, and a short presentation or demo video.",
      },
    ],
    sections: [
      {
        title: "Why CloudHack uses it",
        body:
          "Hackathon demos are easier to judge when they are deployed in one reliable place. Convoy Cloud gives teams a shared deployment path, gives judges live URLs to test, and helps avoid laptop-only demos or last-minute hosting issues.",
      },
      {
        title: "How it works for teams",
        body:
          "Teams build locally during the event, then publish their frontend, backend, or full-stack app to Convoy Cloud for submission. Your final package should include the deployed URL, a GitHub/repo link, and a short presentation or demo video.",
      },
      {
        title: "What the workshop covers",
        body:
          "The workshop will cover account setup, project deployment, environment variables, repo structure, live URLs, troubleshooting, and what judges expect to see in a final deployed demo.",
      },
      {
        title: "What to prepare",
        body:
          "Bring a laptop, make sure your GitHub account is ready, and be comfortable running a basic web app locally. Keep secrets out of your repo and be ready to document any environment variables your project needs.",
      },
    ],
    faq: [
      {
        q: "Do I need Convoy Cloud experience to apply?",
        a: "No. The workshop is designed to get selected teams comfortable with the platform ahead of the hackathon.",
      },
      {
        q: "Can we use another hosting provider?",
        a: "For final CloudHack judging, apps need to be deployed on Convoy Cloud. You can still use familiar tools while building locally.",
      },
      {
        q: "What if my app needs a backend or database?",
        a: "Bring your expected stack and environment-variable needs to the workshop. The Convoy Cloud team will explain the supported deployment path and help teams plan a demo-safe setup.",
      },
    ],
  },
} as const;

export type Site = typeof site;
