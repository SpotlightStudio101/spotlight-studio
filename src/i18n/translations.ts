export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

const en = {
  meta: {
    homeTitle: "Spotlight Studio Paris",
    homeDescription:
      "Commercial, documentary, and narrative filmmaking by Quentin Mouledous — stories brought to life, not just filmed.",
    filmsTitle: "Films — Spotlight Studio Paris",
    filmsDescription: "Commercial, documentary, and narrative work by Quentin Mouledous.",
    aboutTitle: "About — Spotlight Studio Paris",
    aboutDescription: "Filmmaker across commercial, documentary, and narrative work.",
    contactTitle: "Contact — Spotlight Studio Paris",
    contactDescription: "Book a call or send a message to talk about your project.",
    devisTitle: "Get a quote — Spotlight Studio Paris",
    devisDescription: "A few quick questions about your project, and I'll come back to you with a detailed, no-obligation quote.",
    bookCallTitle: "Book a call — Spotlight Studio Paris",
    bookCallDescription: "Pick a 30-minute slot that works for you, directly on my calendar.",
    thanksTitle: "Message sent — Spotlight Studio Paris",
    thanksDescription: "Thanks for reaching out.",
    termsTitle: "Terms of Use — Spotlight Studio Paris",
    termsDescription: "The terms that govern use of this website.",
    privacyTitle: "Privacy Policy — Spotlight Studio Paris",
    privacyDescription: "What information this site collects and how it's used.",
    commercialWorkTitle: "Commercial Work — Spotlight Studio Paris",
    commercialWorkDescription: "Commercial work by Quentin Mouledous.",
    filmsDocsTitle: "Films / Docs — Spotlight Studio Paris",
    filmsDocsDescription: "Documentary and narrative work by Quentin Mouledous.",
    filmSuffix: "Spotlight Studio Paris",
  },
  nav: {
    home: "Home",
    films: "My work",
    commercialWork: "Commercial Work",
    filmsDocs: "Films / Docs",
    about: "About",
    contact: "Contact",
    tagline: "Filmmaker — commercial, companies, architecture & real estate, events, weddings, documentary, narrative",
    email: "Email ↗",
    instagram: "Instagram ↗",
    youtube: "YouTube ↗",
    openMenu: "Open menu",
    language: "Language",
  },
  footer: {
    pagesLabel: "Pages",
    socialsLabel: "Socials",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
  },
  home: {
    heroBadge: "Filmmaker based in Paris — available across France & worldwide.",
    heroLine1: "Bringing your",
    heroLine2: "project to life",
    heroTags: "CORPORATE FILMS · EVENTS · DOCUMENTARY · COMMERCIAL",
    heroSub:
      '<strong>Some capture images. I create them.</strong><br />Films that serve your project — commercial, companies, architecture &amp; real estate, events, weddings, documentary, narrative — based in Paris, available across France and internationally, from the first conversation to the final cut.',
    bookACall: "Book a call",
    responseTime: "I reply within 24h",
    heroReelDisclaimer: "Demo reel — placeholder motion, not Quentin's work, standing in until real footage replaces it",
    rangeHeadingLine1: "My",
    rangeHeadingLine2: "work:",
    viewAllFilms: "View all films →",
    shortFormNote:
      "Also open to shorter, business-focused work — social cuts, branded content, corporate video.",
    shortFormCta: "Get in touch →",
    closingHeadline: "Have a project in mind? Let’s talk:",
    or: "or",
    getQuote: "Get a quote",
    contactCta: {
      heading: "Let's build your",
      headingAccent: "project, together.",
      firstNameLabel: "First name",
      lastNameLabel: "Last name",
      emailLabel: "Email",
      projectLabel: "Tell me about your project",
      submitButton: "Send",
      honeypot: "Don’t fill this out if you're human:",
    },
    intro: {
      heading: "Talent captures. Strategy transforms.",
      paragraphs: [
        "An independent Paris-based filmmaker, I blend <strong>cinematic craft with marketing-driven thinking</strong>.",
        "Before I even pick up a camera, I take the time to <strong>shape your project</strong> and <strong>build a strategy suited to it</strong>.",
        "I never settle for \"nice footage\": every piece of content is built as <strong>a tool serving a clear business goal</strong>, not just a polished visual.",
        "From prep to final edit, every decision serves the same throughline: <strong>strengthening your image and carrying your message</strong>.",
        'No more videos that all look the same. Time for <strong>films built to leave a mark</strong>, <strong>drive action</strong>, and deliver <strong><span class="underline-accent">results</span></strong>.',
      ],
    },
    parisCoverage: {
      heading: "Filming in Paris and across Île-de-France",
      paragraphs: [
        "I work throughout Paris — from business districts like La Défense to event venues in the city center — and across Île-de-France: Boulogne-Billancourt, Saint-Denis, Versailles, Pantin, Roissy…",
        "Corporate films, leadership interviews, events, documentary: every format has its own rhythm, and I adapt to it — with a shoot possible within 48 hours when your schedule calls for it.",
        "For bigger projects, I also travel beyond the Paris region — across France and internationally. Wherever your shoot is, feel free to get in touch.",
      ],
    },
    team: {
      heading: "Who I am",
      portraitPlaceholder: "Portrait — coming soon",
      paragraphs: [
        "Spotlight Studio is me first, Quentin Mouledous: I founded Spotlight Studio to offer a hands-on, high-craft approach to video, without the overhead of a big agency.",
        "Depending on the scale of a project, I bring in trusted collaborators — camera operators, sound recordists, editors — to build the right-sized crew. It flexes project to project; it's never fixed.",
        "One thing never changes: I stay your single point of contact, from the first conversation to final delivery. No project handed off to an anonymous account manager — you work with the same person the whole way through.",
      ],
    },
    testimonials: {
      heading: "Client reviews",
      comingSoonLabel: "Coming soon",
      comingSoonBody: "This space is reserved for real client reviews — none published yet. No fabricated quotes here, ever.",
    },
    painPoints: {
      heading: "I'm here to help you create",
      headingAccent: "films that stand out.",
      evenIfLabel: "Even if you...",
      helpLabel: "I'll help you...",
      items: [
        { group: "even", text: "aren't sure exactly what you want" },
        { group: "even", text: "have never worked with a videographer before" },
        { group: "even", text: "aren't comfortable in front of the camera" },
        { group: "help", text: "clarify your message and goals" },
        { group: "help", text: "guide you through every step" },
        { group: "help", text: "build a project that fits your budget" },
      ],
    },
    segments: {
      heading: "What I can do for you",
      imageDisclaimer: "Temporary stock photos, not Quentin's own work — swapped for real stills as projects are delivered.",
      items: [
        {
          title: "Commercial",
          body: "Brand spots — sport, fashion, lifestyle: a short, punchy film built to grab attention in seconds and drive action, on social or across your campaigns.",
        },
        {
          title: "Companies",
          body: "Corporate films, brand content, leadership portraits, or video for your channels — I work with you from concept to delivery, for videos that represent your identity accurately.",
        },
        {
          title: "Architecture & real estate",
          body: "Clean, well-lit footage that makes a space legible at a glance — walkthroughs, drone establishing shots, and detail cutaways for listings, developers, or architects who want the place to speak for itself.",
        },
        {
          title: "Events",
          body: "Conferences, launches, corporate events — I capture the key moments and deliver an aftermovie or full coverage that brings the essentials back to life, fast.",
        },
        {
          title: "Weddings",
          body: "A wedding only happens once: I stay unobtrusive all day to catch emotions as they happen — the exchanged glance, the toast that catches in the throat, the first dance — rather than a string of posed shots.",
        },
        {
          title: "Documentary & interviews",
          body: "An interview is its own craft: putting someone at ease, capturing an honest voice, and editing without ever betraying what they meant to say. It's one of my favorite grounds to work on — portraits, testimonials, on-the-ground documentary — I adapt to every voice so it rings true.",
        },
      ],
    },
    method: {
      heading: "A clear process, from first conversation to delivery.",
      steps: [
        {
          title: "Strategy",
          body: "Before anything is filmed, I take the time to understand your project and its goals — what you want to say, and to whom. That conversation sets the direction for everything that follows.",
          kit: [],
        },
        {
          title: "Pre-production",
          body: "We define the project's message and goals together. I write the outline, scout locations if needed, and prepare the right setup for the scale of the shoot.",
          kit: [],
        },
        {
          title: "Production",
          body: "On the day, I adapt to the scale of your project: an agile solo shoot or a small crew, always with my own professional equipment and a constant eye on the image.",
          kit: ["Sony FX3", "DJI Mavic 3 Classic", "Sound recording"],
        },
        {
          title: "Post-production",
          body: "I take care of pacing, color grading, and sound for a professional result, with clear back-and-forth until you're happy with it. I then deliver the film in the right formats for your needs — 16:9 for web and YouTube, vertical and square for social media.",
          kit: [],
        },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          question: "How much does a shoot cost?",
          answer:
            "Every project is different, so I don't set a fixed rate upfront — everything is quoted individually, based on your needs (length, location, crew required). Send me the outline of your project and I'll reply within 24h with a tailored proposal.",
        },
        {
          question: "How far in advance do you need to book?",
          answer:
            "For simple shoots, I can usually step in within 48 hours. For bigger projects — documentary, multi-person event coverage — it's best to plan a few weeks ahead for preparation.",
        },
        {
          question: "Do you work outside Paris?",
          answer:
            "Yes. I'm based in Paris and cover all of Île-de-France, but I also travel across France and internationally for larger projects.",
        },
        {
          question: "Do you offer drone footage?",
          answer:
            "Yes — I'm a registered UAS operator and can shoot aerial footage with a DJI Mavic 3 Classic, provided the area is cleared for flight.",
        },
        {
          question: "What formats are the videos delivered in?",
          answer:
            "Whatever fits your needs: 16:9 for web and YouTube, vertical and square for social media. We talk through this together before the shoot so the edit is built for the right formats from the start.",
        },
        {
          question: "Can I see examples of your work first?",
          answer:
            "Of course — you can browse films by category on the My Work page, and depending on your project, I can also share more targeted examples during our first conversation.",
        },
        {
          question: "Why choose an independent filmmaker over an agency?",
          answer:
            "You deal with one person, start to finish — no account manager translating your brief to a team, no agency markup baked into the quote. It also means real flexibility: I adapt to your schedule and budget, project by project.",
        },
        {
          question: "How long does a shoot take?",
          answer:
            "It depends entirely on the project: an interview might wrap in 2–3 hours, a wedding or event often runs a full day. We map out a realistic schedule together beforehand.",
        },
        {
          question: "Can I request changes after the video is delivered?",
          answer:
            "Yes — revision rounds are built in before final delivery to adjust the edit to your feedback. Once the film is delivered, further changes are still possible; we'd talk through the scope depending on what's needed.",
        },
        {
          question: "How do you adapt videos for social media (Instagram, TikTok)?",
          answer:
            "I cut dedicated versions per platform: vertical 9:16 for Stories/Reels/TikTok, square for the Instagram feed, 16:9 for YouTube and the web — each built for that format's framing and pacing, not just an automatic crop.",
        },
        {
          question: "Can you shoot in 4K?",
          answer:
            "Yes — everything is shot in 4K with the Sony FX3, as the baseline for every project, not an option. That technical standard comes with real cinematic craft behind the image — framing, lighting, color grading — rather than a plain capture: unlike many agencies that split the work across several people, I handle the whole chain myself, from the shoot to the final edit, which lets me push that level of care through every stage.",
        },
        {
          question: "What happens to my raw footage after delivery?",
          answer:
            "I keep it for a while after the film is delivered, as a safety net. If you'd like a copy or want to plan for archiving it, just let me know and we'll sort it out.",
        },
        {
          question: "Is the music in the edit royalty-free?",
          answer:
            "Yes — I only use licensed or royalty-free music, so your video can be shared without copyright issues, including on platforms that flag protected music.",
        },
        {
          question: "What's the first step to start a project with you?",
          answer:
            "A message through the contact form or a 30-minute call is enough to get started — we talk through your project and goals, and I come back with a tailored proposal.",
        },
        {
          question: "How does location scouting work for a shoot in a specific place?",
          answer:
            "For shoots that call for it — an unusual venue, technical constraints, outdoor locations — I scout the location beforehand to plan for light, sound, and logistics, so there are fewer surprises on the day.",
        },
        {
          question: "Do you keep my project confidential before it's made public?",
          answer: "Yes, no problem — I'm happy to sign an NDA if your project isn't public yet or involves sensitive information.",
        },
      ],
    },
  },
  films: {
    heading: "My work",
    shortDocsHeading: "Short docs / narrative portraits",
    commercialHeading: "Commercial work",
  },
  filmTile: {
    footageComingSoon: "Footage coming soon",
    demoClip: "Demo clip — not final",
  },
  filmDetail: {
    demoDisclaimer: "Demo motion only — not Quentin's work, standing in until a real clip replaces it",
    videoComingSoon: "Video coming soon",
    allFilms: "← All films",
  },
  stillPlate: {
    comingSoon: "Still — coming soon",
  },
  filmData: {
    genre: {
      commercial: "Commercial",
      documentary: "Documentary",
      narrative: "Narrative",
    },
    untitled: "Untitled",
    roles: {
      directedBy: "Directed by",
    },
  },
  about: {
    topHeading: "About",
    topBio:
      "Writer, director, cinematographer, and editor based in Paris — available across France and internationally, wherever a story leads. Focused on small-crew productions, short to medium length films, and branded work built on narrative first.",
    topContactCta: "Get in touch →",
    intro:
      "I make films across commercial, documentary, and narrative work — but the genre changes less than you'd think. What stays the same is the process: I build community with the people I film, and I work to convey emotion more directly than a shoot delivered at arm's length ever could.",
    portraitPlaceholder: "Portrait — coming soon",
    howIWork: "How I work",
    steps: [
      {
        title: "I enter your world",
        body: "Before anything is written or shot, I spend time understanding what you're actually trying to say — and who you're trying to reach.",
      },
      {
        title: "We build the vision together",
        body: "I take counsel with you. What you want and need shapes the film as much as my own eye does — this is never delivered at arm's length.",
      },
      {
        title: "I stay with it, start to finish",
        body: "You're not handed off between a pitch and a delivery. I accompany the project the whole way, so the film stays honest to what we agreed on.",
      },
    ],
    wantToWork: "Want to work together?",
    bookACall: "Book a call",
  },
  contact: {
    heading: "Let’s talk.",
    intro:
      "Tell me about your project — what you're making, who it's for, and what you need. Book a call or send a message, whichever's easier.",
    bookHeading: "Book a call",
    bookBody: "Grab 30 minutes directly on my calendar — good if you already know what you want to talk through.",
    bookACall: "Book a call",
    sendHeading: "Send a message",
    sendBody: "Prefer to write it out first? Tell me about the project and I'll reply by email.",
    nameLabel: "Name",
    emailLabel: "Email",
    projectTypeLabel: "Type of project",
    projectTypeOptions: ["Commercial", "Companies", "Architecture & real estate", "Events", "Weddings", "Documentary & interviews", "Other"],
    budgetLabel: "Approximate budget (optional)",
    budgetOptions: ["Not sure yet", "Under €1,000", "€1,000–3,000", "€3,000+"],
    projectLabel: "About your project",
    sendMessage: "Send message",
    sayHello: "Prefer to say hello first?",
    email: "Send an email ↗",
    instagram: "Find me on Instagram ↗",
    honeypot: "Don’t fill this out if you're human:",
  },
  bookCall: {
    heading: "Book a call.",
    intro: "Pick a 30-minute slot that works for you, directly on my calendar — good if you already know what you want to talk through.",
    altContactHeading: "Prefer to write first?",
    altContactBody: "No need to book anything — you can also just send a message.",
    altContactLink: "Go to the contact page →",
  },
  devis: {
    heading: "Get a quote.",
    intro: "A few quick questions about your project, and I'll come back to you with a detailed, no-obligation quote.",
    step1Title: "Step 1 of 3 — The project",
    step2Title: "Step 2 of 3 — Your project in detail",
    step3Title: "Step 3 of 3 — Your details",
    projectTypeLabel: "Type of project",
    projectTypeOptions: ["Corporate", "Architecture & real estate", "Events", "Wedding", "Documentary & interviews", "Other"],
    aerialLabel: "Would you like aerial footage?",
    aerialOptions: [
      { value: "Yes", hint: "Provided the area can be flown" },
      { value: "Ground only", hint: "No drone footage" },
      { value: "Not sure", hint: "I'll advise based on the location" },
    ],
    budgetLabel: "Approximate budget",
    budgetOptions: ["Not sure yet", "Under €1,000", "€1,000–3,000", "€3,000+"],
    dateLabel: "Preferred date or window (optional)",
    locationLabel: "Shoot location (optional)",
    nameLabel: "Name",
    emailLabel: "Email",
    phoneLabel: "Phone (optional)",
    detailsLabel: "Anything else to add? (optional)",
    continueButton: "Continue",
    backButton: "Back",
    submitButton: "Send my request",
    honeypot: "Don’t fill this out if you're human:",
    scopeHeading: "What the quote covers",
    scopeItems: [
      "Planning and prep for the shoot",
      "Filming with my own professional gear — ground and drone if needed",
      "Editing, color grading and sound",
      "Delivery in the formats you need",
    ],
    scopeNote: "A detailed, no-obligation quote, with no processing fee. If your project isn't a fit for what I offer, I'll say so plainly.",
    altContactHeading: "Prefer to reach me directly?",
    altContactBody: "The form isn't required — write to me directly, or use the contact page.",
    altContactLink: "Go to the contact page →",
  },
  thanks: {
    heading: "Message sent.",
    body: "Thanks for reaching out — I'll get back to you soon.",
    backHome: "← Back home",
  },
  legal: {
    termsHeading: "Terms of Use",
    termsIntro: "These terms govern your use of this website. By browsing it, you agree to them.",
    termsSections: [
      {
        title: "Content",
        body: "All films, images, and writing on this site are the work of Quentin Mouledous unless otherwise credited, and may not be reproduced without permission.",
      },
      {
        title: "Placeholder material",
        body: "Some video and imagery on this site is temporary stock footage, clearly marked, standing in until real work replaces it. It does not represent finished client work.",
      },
      {
        title: "No warranty",
        body: "This site is provided as is. While I try to keep it accurate and up to date, I make no guarantees about availability or uninterrupted access.",
      },
      {
        title: "Third-party links",
        body: "Links to Instagram, YouTube, and other outside sites are provided for convenience. I'm not responsible for their content or practices.",
      },
      {
        title: "Changes",
        body: "These terms may be updated from time to time. Continued use of the site after a change means you accept the update.",
      },
      {
        title: "Contact",
        body: "Questions about these terms can be sent through the contact page.",
      },
    ],
    privacyHeading: "Privacy Policy",
    privacyIntro: "This policy explains what information this site collects and how it's used.",
    privacySections: [
      {
        title: "What I collect",
        body: "The contact form collects your name, email address, and project details, only when you choose to submit them.",
      },
      {
        title: "How it's used",
        body: "Submissions are used solely to reply to your enquiry. I don't sell or share your information with third parties.",
      },
      {
        title: "Where it's stored",
        body: "Contact form submissions are processed through Netlify Forms, the hosting provider for this site.",
      },
      {
        title: "Cookies",
        body: "This site does not use tracking or advertising cookies. It may use minimal local storage to remember your language preference.",
      },
      {
        title: "Your rights",
        body: "You can ask at any time to see, correct, or delete any information you've submitted, by reaching out through the contact page.",
      },
      {
        title: "Changes",
        body: "This policy may be updated from time to time. The version in effect is always the one published here.",
      },
    ],
  },
};

const fr: typeof en = {
  meta: {
    homeTitle: "Spotlight Studio Paris",
    homeDescription:
      "Vidéaste à Paris — films d'entreprise, événementiel, documentaire et publicité. Des histoires dépeintes par Quentin Mouledous, pas seulement filmées.",
    filmsTitle: "Films — Spotlight Studio Paris",
    filmsDescription: "Travaux publicitaires, documentaires et narratifs de Quentin Mouledous.",
    aboutTitle: "À propos — Spotlight Studio Paris",
    aboutDescription: "Vidéaste et réalisateur, à la croisée de la publicité, du documentaire et du narratif.",
    contactTitle: "Contact — Spotlight Studio Paris",
    contactDescription: "Réservez un appel ou envoyez un message pour parler de votre projet.",
    devisTitle: "Demander un devis — Spotlight Studio Paris",
    devisDescription: "Quelques questions rapides sur votre projet, et je reviens vers vous avec un devis détaillé, sans engagement.",
    bookCallTitle: "Réserver un appel — Spotlight Studio Paris",
    bookCallDescription: "Choisissez un créneau de 30 minutes qui vous convient, directement dans mon agenda.",
    thanksTitle: "Message envoyé — Spotlight Studio Paris",
    thanksDescription: "Merci de m'avoir contacté.",
    termsTitle: "Conditions d'utilisation — Spotlight Studio Paris",
    termsDescription: "Les conditions qui régissent l'utilisation de ce site.",
    privacyTitle: "Politique de confidentialité — Spotlight Studio Paris",
    privacyDescription: "Quelles informations ce site collecte et comment elles sont utilisées.",
    commercialWorkTitle: "Travaux publicitaires — Spotlight Studio Paris",
    commercialWorkDescription: "Travaux publicitaires de Quentin Mouledous.",
    filmsDocsTitle: "Films / Documentaires — Spotlight Studio Paris",
    filmsDocsDescription: "Travaux documentaires et narratifs de Quentin Mouledous.",
    filmSuffix: "Spotlight Studio Paris",
  },
  nav: {
    home: "Accueil",
    films: "Mon travail",
    commercialWork: "Travaux publicitaires",
    filmsDocs: "Films / Documentaires",
    about: "À propos",
    contact: "Contact",
    tagline: "Vidéaste — publicité, entreprises, architecture & immobilier, événementiel, mariages, documentaire, narratif",
    email: "E-mail ↗",
    instagram: "Instagram ↗",
    youtube: "YouTube ↗",
    openMenu: "Ouvrir le menu",
    language: "Langue",
  },
  footer: {
    pagesLabel: "Pages",
    socialsLabel: "Réseaux",
    privacyPolicy: "Politique de confidentialité",
    termsOfUse: "Conditions d'utilisation",
  },
  home: {
    heroBadge: "Vidéaste basé à Paris — disponible partout en France et à l'international.",
    heroLine1: "Donnons vie",
    heroLine2: "à votre projet",
    heroTags: "FILMS D'ENTREPRISE · ÉVÉNEMENTIEL · DOCUMENTAIRE · PUBLICITÉ",
    heroSub:
      '<strong>Certains prennent des images, je les crée.</strong><br />Des films qui servent votre projet — publicité, entreprises, architecture &amp; immobilier, événementiel, mariages, documentaire, narratif — depuis Paris, disponible partout en France et à l\'international, du premier échange jusqu\'au montage final.',
    bookACall: "Réserver un appel",
    responseTime: "Réponse sous 24h",
    heroReelDisclaimer: "Bobine de démonstration — image temporaire, pas le travail de Quentin, en attendant de vraies images",
    rangeHeadingLine1: "Mon",
    rangeHeadingLine2: "travail :",
    viewAllFilms: "Voir tous les films →",
    shortFormNote:
      "Également disponible pour des projets plus courts et orientés entreprise — contenus pour les réseaux sociaux, contenu de marque, vidéo corporate.",
    shortFormCta: "Me contacter →",
    closingHeadline: "Un projet en tête ? Parlons-en :",
    or: "ou",
    getQuote: "Demander un devis",
    contactCta: {
      heading: "Construisons votre",
      headingAccent: "projet, ensemble.",
      firstNameLabel: "Prénom",
      lastNameLabel: "Nom de famille",
      emailLabel: "E-mail",
      projectLabel: "Parlez-moi de votre projet",
      submitButton: "Envoyer",
      honeypot: "Ne remplissez pas ce champ si vous êtes humain :",
    },
    intro: {
      heading: "Le talent capture. La stratégie transforme.",
      paragraphs: [
        "Vidéaste indépendant basé à Paris, je fusionne <strong>exigence cinématographique et performance marketing</strong>.",
        "Avant même d'empoigner une caméra, je prends le temps de <strong>construire votre projet</strong> et de <strong>créer une stratégie adaptée</strong>.",
        "Je ne me contente jamais de « belles images » : chaque contenu est construit comme <strong>un outil au service d'un objectif business précis</strong>, pas comme une simple prestation esthétique.",
        "De la préparation jusqu'au montage final, chaque décision sert la même ligne directrice : <strong>renforcer votre image et porter votre message</strong>.",
        'Fini les vidéos qui se ressemblent toutes. Place à des <strong>films pensés pour marquer les esprits</strong> — et pousser à <strong>l\'action</strong>, puis aux <strong><span class="underline-accent">résultats</span></strong>.',
      ],
    },
    parisCoverage: {
      heading: "Vos tournages à Paris et en Île-de-France",
      paragraphs: [
        "J'interviens dans tout Paris — des quartiers d'affaires comme La Défense aux lieux événementiels du centre — et dans toute l'Île-de-France : Boulogne-Billancourt, Saint-Denis, Versailles, Pantin, Roissy…",
        "Films d'entreprise, interviews de dirigeants, événementiel, documentaire : chaque format a ses codes, et je m'y adapte — je peux tourner sous 48 heures quand votre agenda l'exige.",
        "Pour des projets plus ambitieux, je me déplace aussi en dehors de l'Île-de-France — en région comme à l'international. Où que se trouve votre tournage, n'hésitez pas à m'en parler.",
      ],
    },
    team: {
      heading: "Qui suis-je ?",
      portraitPlaceholder: "Portrait — à venir",
      paragraphs: [
        "Spotlight Studio, c'est avant tout moi, Quentin Mouledous : j'ai fondé Spotlight Studio pour proposer une approche vidéo exigeante et artisanale, sans la lourdeur d'une grande agence.",
        "Selon l'ampleur du projet, je m'entoure de collaborateurs de confiance — cadreur, preneur de son, monteur — pour constituer l'équipe la plus adaptée. Elle s'ajuste à chaque tournage ; elle n'est jamais figée.",
        "Une chose ne change jamais : je reste votre interlocuteur unique, du premier échange à la livraison finale. Pas de dossier transmis à un chargé de compte anonyme — vous suivez le projet avec la même personne du début à la fin.",
      ],
    },
    testimonials: {
      heading: "Avis clients",
      comingSoonLabel: "Bientôt disponible",
      comingSoonBody: "Cet emplacement est réservé à de vrais avis clients — aucun n'est publié pour l'instant. Jamais de faux témoignage ici.",
    },
    painPoints: {
      heading: "Je suis là pour vous aider à créer des",
      headingAccent: "films qui marquent.",
      evenIfLabel: "Même si vous...",
      helpLabel: "Je vous aiderai à...",
      items: [
        { group: "even", text: "ne savez pas exactement ce que vous voulez" },
        { group: "even", text: "n'avez jamais travaillé avec un vidéaste" },
        { group: "even", text: "n'êtes pas à l'aise devant la caméra" },
        { group: "help", text: "clarifier votre message et vos objectifs" },
        { group: "help", text: "vous accompagner à chaque étape" },
        { group: "help", text: "construire un projet adapté à votre budget" },
      ],
    },
    segments: {
      heading: "Ce que je peux faire pour vous",
      imageDisclaimer: "Photos de stock temporaires, pas le travail de Quentin — remplacées par de vraies images au fil des projets livrés.",
      items: [
        {
          title: "Publicité",
          body: "Spots pour des marques — sport, mode, lifestyle : un film court et rythmé, pensé pour capter l'attention en quelques secondes et donner envie d'agir, sur les réseaux comme dans vos campagnes.",
        },
        {
          title: "Entreprises",
          body: "Films d'entreprise, contenu de marque, portraits de dirigeants ou vidéos pour vos réseaux — je vous accompagne de la conception à la livraison, pour des vidéos qui représentent fidèlement votre identité.",
        },
        {
          title: "Architecture & immobilier",
          body: "Des images nettes et bien exposées qui rendent un lieu lisible en un coup d'œil — visite guidée, plans aériens au drone, plans de détail pour une annonce, un promoteur ou un architecte qui veut laisser parler le lieu.",
        },
        {
          title: "Événementiel",
          body: "Conférences, lancements, événements d'entreprise : je capture chaque moment clé et je livre rapidement un aftermovie ou une captation complète qui fait revivre l'essentiel.",
        },
        {
          title: "Mariages",
          body: "Un mariage ne se refait pas : je reste discret toute la journée pour capter les émotions telles qu'elles arrivent — le regard échangé, le discours qui se fissure, le premier bal — plutôt qu'une succession de plans posés.",
        },
        {
          title: "Documentaire & interviews",
          body: "L'interview est un exercice à part : mettre la personne à l'aise, capter une parole sincère, et monter sans jamais trahir ce qu'elle a voulu dire. C'est l'un de mes terrains de prédilection, que ce soit pour un portrait, un témoignage ou un documentaire de terrain — je m'adapte à chaque prise de parole pour qu'elle sonne juste.",
        },
      ],
    },
    method: {
      heading: "Un processus clair, du premier échange à la livraison.",
      steps: [
        {
          title: "Stratégie",
          body: "Avant même de filmer, je prends le temps de comprendre votre projet et ses objectifs — ce que vous voulez dire, et à qui. Cet échange pose la direction de tout ce qui suit.",
          kit: [],
        },
        {
          title: "Pré-production",
          body: "Nous définissons ensemble le message et les objectifs du projet. J'écris le déroulé, je repère les lieux si besoin, et je prépare l'équipe adaptée à l'ampleur du tournage.",
          kit: [],
        },
        {
          title: "Production",
          body: "Le jour J, je m'adapte à l'ampleur de votre projet : tournage solo agile ou petite équipe, toujours avec mon propre matériel professionnel et une attention constante à l'image.",
          kit: ["Sony FX3", "DJI Mavic 3 Classic", "Prise de son"],
        },
        {
          title: "Post-production",
          body: "Je soigne le rythme, l'étalonnage et le son pour un résultat professionnel, avec des allers-retours clairs jusqu'à validation. Je vous livre ensuite le film aux bons formats selon vos usages — 16:9 pour le web et YouTube, vertical et carré pour les réseaux sociaux.",
          kit: [],
        },
      ],
    },
    faq: {
      heading: "Questions fréquentes",
      items: [
        {
          question: "Combien coûte un tournage ?",
          answer:
            "Chaque projet est différent, donc je ne fixe pas de tarif à l'avance — tout se fait sur devis, en fonction de vos besoins (durée, lieu, équipe nécessaire). Envoyez-moi les grandes lignes de votre projet et je vous réponds sous 24h avec une proposition adaptée.",
        },
        {
          question: "Dans quels délais pouvez-vous intervenir ?",
          answer:
            "Pour les tournages simples, je peux généralement intervenir sous 48 heures. Pour les projets plus importants — documentaire, événementiel avec plusieurs personnes — mieux vaut prévoir quelques semaines en amont pour la préparation.",
        },
        {
          question: "Travaillez-vous en dehors de Paris ?",
          answer:
            "Oui. Je suis basé à Paris et je couvre toute l'Île-de-France, mais je me déplace aussi en région et à l'international pour des projets plus importants.",
        },
        {
          question: "Proposez-vous des prises de vue par drone ?",
          answer:
            "Oui — je suis exploitant UAS enregistré et je peux réaliser des prises de vue aériennes avec un DJI Mavic 3 Classic, sous réserve que la zone soit autorisée au survol.",
        },
        {
          question: "Dans quels formats sont livrées les vidéos ?",
          answer:
            "Selon vos besoins : 16:9 pour le web et YouTube, vertical et carré pour les réseaux sociaux. On en discute ensemble avant le tournage pour que le montage soit pensé pour les bons formats dès le départ.",
        },
        {
          question: "Puis-je voir des exemples de votre travail avant de m'engager ?",
          answer:
            "Bien sûr — vous pouvez consulter mes films par catégorie sur la page « Mon travail », et selon votre projet, je peux aussi vous montrer des exemples plus ciblés lors de notre premier échange.",
        },
        {
          question: "Pourquoi choisir un vidéaste indépendant plutôt qu'une agence ?",
          answer:
            "Vous n'avez affaire qu'à une seule personne, du premier échange à la livraison — pas de chargé de projet qui traduit vos demandes à une équipe, pas de marge d'agence répercutée sur le devis. Ça veut aussi dire une vraie souplesse : je m'adapte à votre calendrier et à votre budget, projet par projet.",
        },
        {
          question: "Combien de temps dure un tournage ?",
          answer:
            "Ça dépend entièrement du projet : une interview peut se tourner en 2-3 heures, un mariage ou un événement prend souvent une journée complète. On en discute ensemble en amont pour caler un planning réaliste.",
        },
        {
          question: "Puis-je demander des modifications après la livraison de la vidéo ?",
          answer:
            "Oui, des allers-retours sont prévus avant la livraison finale pour ajuster le montage à vos retours. Une fois le film livré, des modifications restent possibles — on en parle selon l'ampleur du changement.",
        },
        {
          question: "Comment adaptez-vous mes vidéos pour les réseaux sociaux (Instagram, TikTok) ?",
          answer:
            "Je monte des versions dédiées selon la plateforme : format vertical 9:16 pour Stories/Reels/TikTok, carré pour le fil Instagram, 16:9 pour YouTube et le web — chacune pensée pour le cadrage et le rythme propres à ce format, pas juste un recadrage automatique.",
        },
        {
          question: "Pouvez-vous filmer en 4K ?",
          answer:
            "Oui — tout est tourné en 4K avec le Sony FX3, c'est la base de chaque projet, pas une option. Cette exigence technique s'accompagne d'un vrai travail cinématographique sur l'image — cadrage, lumière, étalonnage — plutôt qu'une simple captation : contrairement à beaucoup d'agences qui répartissent la prestation entre plusieurs intervenants, je maîtrise toute la chaîne moi-même, du tournage au montage final, ce qui permet de pousser ce niveau d'exigence à chaque étape.",
        },
        {
          question: "Que deviennent mes rushs (fichiers bruts) après la livraison ?",
          answer:
            "Je les conserve un certain temps après la livraison du film, par sécurité. Si vous souhaitez les récupérer ou prévoir leur archivage, dites-le-moi et on s'organise.",
        },
        {
          question: "Les musiques utilisées dans le montage sont-elles libres de droits ?",
          answer:
            "Oui, j'utilise uniquement des musiques sous licence ou libres de droits, pour que votre vidéo puisse être diffusée sans souci de droits d'auteur, y compris sur les plateformes qui filtrent la musique protégée.",
        },
        {
          question: "Quelle est la première étape pour démarrer un projet avec vous ?",
          answer:
            "Un message via le formulaire de contact ou un appel de 30 minutes suffit pour commencer : on parle de votre projet, de vos objectifs, et je reviens vers vous avec une proposition adaptée.",
        },
        {
          question: "Comment se passe le repérage avant un tournage dans un lieu spécifique ?",
          answer:
            "Pour les tournages qui l'exigent (lieu inhabituel, contraintes techniques, extérieur), je fais un repérage en amont pour anticiper la lumière, le son et la logistique — histoire d'éviter les imprévus le jour J.",
        },
        {
          question: "Assurez-vous la confidentialité de mon projet avant sa sortie publique ?",
          answer:
            "Oui, sans problème — je peux signer un accord de confidentialité (NDA) si votre projet n'est pas encore public ou contient des informations sensibles.",
        },
      ],
    },
  },
  films: {
    heading: "Mon travail",
    shortDocsHeading: "Courts documentaires / portraits narratifs",
    commercialHeading: "Travaux publicitaires",
  },
  filmTile: {
    footageComingSoon: "Images à venir",
    demoClip: "Extrait de démo — non définitif",
  },
  filmDetail: {
    demoDisclaimer:
      "Images de démonstration uniquement — pas le travail de Quentin, en attendant un vrai extrait",
    videoComingSoon: "Vidéo à venir",
    allFilms: "← Tous les films",
  },
  stillPlate: {
    comingSoon: "Image — à venir",
  },
  filmData: {
    genre: {
      commercial: "Publicité",
      documentary: "Documentaire",
      narrative: "Narratif",
    },
    untitled: "Sans titre",
    roles: {
      directedBy: "Réalisé par",
    },
  },
  about: {
    topHeading: "À propos",
    topBio:
      "Vidéaste et réalisateur — scénariste, chef opérateur et monteur basé à Paris, disponible partout en France et à l'international. Spécialisé dans les productions à petite équipe, les courts et moyens métrages, et le contenu de marque pensé comme un récit.",
    topContactCta: "Me contacter →",
    intro:
      "Je réalise des films publicitaires, documentaires et narratifs — mais le genre change moins qu'on ne le pense. Ce qui reste constant, c'est le processus : je tisse un vrai lien avec les personnes que je filme, et je cherche à transmettre l'émotion plus directement qu'un tournage mené à distance ne le pourrait jamais.",
    portraitPlaceholder: "Portrait — à venir",
    howIWork: "Ma façon de travailler",
    steps: [
      {
        title: "J'entre dans votre monde",
        body: "Avant d'écrire ou de tourner quoi que ce soit, je prends le temps de comprendre ce que vous cherchez vraiment à dire — et qui vous voulez atteindre.",
      },
      {
        title: "Nous construisons la vision ensemble",
        body: "Je vous consulte. Ce que vous voulez et ce dont vous avez besoin façonne le film autant que mon propre regard — ce n'est jamais livré à distance.",
      },
      {
        title: "Je reste jusqu'au bout",
        body: "Vous ne changez pas d'interlocuteur entre le pitch et la livraison. J'accompagne le projet tout du long, pour que le film reste fidèle à ce que nous avons convenu.",
      },
    ],
    wantToWork: "Envie de travailler ensemble ?",
    bookACall: "Réserver un appel",
  },
  contact: {
    heading: "Discutons.",
    intro:
      "Parlez-moi de votre projet — ce que vous voulez créer, pour qui, et ce dont vous avez besoin. Réservez un appel ou envoyez un message, comme vous préférez.",
    bookHeading: "Réserver un appel",
    bookBody: "Prenez 30 minutes directement dans mon agenda — idéal si vous savez déjà de quoi vous voulez parler.",
    bookACall: "Réserver un appel",
    sendHeading: "Envoyer un message",
    sendBody: "Vous préférez écrire d'abord ? Parlez-moi de votre projet, je vous répondrai par e-mail.",
    nameLabel: "Nom",
    emailLabel: "E-mail",
    projectTypeLabel: "Type de projet",
    projectTypeOptions: ["Publicité", "Entreprises", "Architecture & immobilier", "Événementiel", "Mariages", "Documentaire & interviews", "Autre"],
    budgetLabel: "Budget approximatif (facultatif)",
    budgetOptions: ["Je ne sais pas encore", "Moins de 1 000 €", "1 000 – 3 000 €", "3 000 € et plus"],
    projectLabel: "Votre projet",
    sendMessage: "Envoyer le message",
    sayHello: "Envie de dire bonjour d'abord ?",
    email: "Envoyer un e-mail ↗",
    instagram: "Retrouvez-moi sur Instagram ↗",
    honeypot: "Ne remplissez pas ce champ si vous êtes humain :",
  },
  bookCall: {
    heading: "Réserver un appel.",
    intro: "Choisissez un créneau de 30 minutes qui vous convient, directement dans mon agenda — idéal si vous savez déjà de quoi vous voulez parler.",
    altContactHeading: "Vous préférez écrire d'abord ?",
    altContactBody: "Pas besoin de réserver quoi que ce soit — vous pouvez aussi simplement envoyer un message.",
    altContactLink: "Aller à la page contact →",
  },
  devis: {
    heading: "Demander un devis.",
    intro: "Quelques questions rapides sur votre projet, et je reviens vers vous avec un devis détaillé, sans engagement.",
    step1Title: "Étape 1 sur 3 — Le projet",
    step2Title: "Étape 2 sur 3 — Votre projet en détail",
    step3Title: "Étape 3 sur 3 — Vos coordonnées",
    projectTypeLabel: "Type de projet",
    projectTypeOptions: ["Entreprise", "Architecture & immobilier", "Événementiel", "Mariage", "Documentaire & interviews", "Autre"],
    aerialLabel: "Souhaitez-vous des images aériennes ?",
    aerialOptions: [
      { value: "Oui", hint: "Sous réserve que la zone soit survolable" },
      { value: "Sol uniquement", hint: "Pas de prise de vue en drone" },
      { value: "Je ne sais pas", hint: "Je vous conseille selon le lieu" },
    ],
    budgetLabel: "Budget approximatif",
    budgetOptions: ["Je ne sais pas encore", "Moins de 1 000 €", "1 000 – 3 000 €", "3 000 € et plus"],
    dateLabel: "Date ou période souhaitée (facultatif)",
    locationLabel: "Lieu du tournage (facultatif)",
    nameLabel: "Nom",
    emailLabel: "E-mail",
    phoneLabel: "Téléphone (facultatif)",
    detailsLabel: "Autre chose à préciser ? (facultatif)",
    continueButton: "Continuer",
    backButton: "Retour",
    submitButton: "Envoyer ma demande",
    honeypot: "Ne remplissez pas ce champ si vous êtes humain :",
    scopeHeading: "Ce que couvre le devis",
    scopeItems: [
      "Cadrage et préparation du tournage",
      "Tournage avec mon propre matériel professionnel — sol et drone si besoin",
      "Montage, étalonnage et son",
      "Livraison dans les formats dont vous avez besoin",
    ],
    scopeNote: "Un devis détaillé, sans engagement et sans frais de dossier. Si votre projet ne correspond pas à ce que je propose, je vous le dis simplement.",
    altContactHeading: "Vous préférez me contacter directement ?",
    altContactBody: "Le formulaire n'a rien d'obligatoire — écrivez-moi directement, ou passez par la page de contact.",
    altContactLink: "Aller à la page contact →",
  },
  thanks: {
    heading: "Message envoyé.",
    body: "Merci de m'avoir contacté — je vous répondrai bientôt.",
    backHome: "← Retour à l'accueil",
  },
  legal: {
    termsHeading: "Conditions d'utilisation",
    termsIntro: "Ces conditions régissent votre utilisation de ce site. En le consultant, vous les acceptez.",
    termsSections: [
      {
        title: "Contenu",
        body: "Tous les films, images et textes présents sur ce site sont l'œuvre de Quentin Mouledous, sauf mention contraire, et ne peuvent être reproduits sans autorisation.",
      },
      {
        title: "Éléments provisoires",
        body: "Certaines images et vidéos du site sont des images de banque temporaires, clairement indiquées comme telles, en attendant de vraies images. Elles ne représentent pas un travail livré à un client.",
      },
      {
        title: "Aucune garantie",
        body: "Ce site est fourni tel quel. Je m'efforce de le maintenir exact et à jour, mais je ne garantis ni sa disponibilité ni un accès ininterrompu.",
      },
      {
        title: "Liens externes",
        body: "Les liens vers Instagram, YouTube et d'autres sites externes sont fournis à titre pratique. Je ne suis pas responsable de leur contenu ni de leurs pratiques.",
      },
      {
        title: "Modifications",
        body: "Ces conditions peuvent être mises à jour de temps à autre. Continuer à utiliser le site après une modification signifie que vous l'acceptez.",
      },
      {
        title: "Contact",
        body: "Toute question sur ces conditions peut être envoyée via la page de contact.",
      },
    ],
    privacyHeading: "Politique de confidentialité",
    privacyIntro: "Cette politique explique quelles informations ce site collecte et comment elles sont utilisées.",
    privacySections: [
      {
        title: "Ce que je collecte",
        body: "Le formulaire de contact collecte votre nom, votre adresse e-mail et les détails de votre projet, uniquement lorsque vous choisissez de les soumettre.",
      },
      {
        title: "Utilisation",
        body: "Les messages envoyés servent uniquement à vous répondre. Je ne vends ni ne partage vos informations avec des tiers.",
      },
      {
        title: "Où elles sont stockées",
        body: "Les envois du formulaire de contact sont traités par Netlify Forms, l'hébergeur de ce site.",
      },
      {
        title: "Cookies",
        body: "Ce site n'utilise aucun cookie de suivi ou publicitaire. Il peut utiliser un stockage local minimal pour se souvenir de votre langue préférée.",
      },
      {
        title: "Vos droits",
        body: "Vous pouvez à tout moment demander à consulter, corriger ou supprimer les informations que vous avez soumises, en me contactant via la page de contact.",
      },
      {
        title: "Modifications",
        body: "Cette politique peut être mise à jour de temps à autre. La version en vigueur est toujours celle publiée ici.",
      },
    ],
  },
};

export const translations = { en, fr };

export function getLocale(astroCurrentLocale: string | undefined): Locale {
  return astroCurrentLocale === "en" ? "en" : "fr";
}

export function useTranslations(locale: Locale) {
  return translations[locale];
}
