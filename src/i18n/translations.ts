export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const en = {
  meta: {
    homeTitle: "Quentin Mouledous — Filmmaker",
    homeDescription:
      "Commercial, documentary, and narrative filmmaking by Quentin Mouledous — stories brought to life, not just filmed.",
    filmsTitle: "Films — Quentin Mouledous",
    filmsDescription: "Commercial, documentary, and narrative work by Quentin Mouledous.",
    aboutTitle: "About — Quentin Mouledous",
    aboutDescription: "Filmmaker across commercial, documentary, and narrative work.",
    contactTitle: "Contact — Quentin Mouledous",
    contactDescription: "Book a call or send a message to talk about your project.",
    thanksTitle: "Message sent — Quentin Mouledous",
    thanksDescription: "Thanks for reaching out.",
    termsTitle: "Terms of Use — Quentin Mouledous",
    termsDescription: "The terms that govern use of this website.",
    privacyTitle: "Privacy Policy — Quentin Mouledous",
    privacyDescription: "What information this site collects and how it's used.",
    commercialWorkTitle: "Commercial Work — Quentin Mouledous",
    commercialWorkDescription: "Commercial work by Quentin Mouledous.",
    filmsDocsTitle: "Films / Docs — Quentin Mouledous",
    filmsDocsDescription: "Documentary and narrative work by Quentin Mouledous.",
    filmSuffix: "Quentin Mouledous",
  },
  nav: {
    home: "Home",
    films: "My work",
    commercialWork: "Commercial Work",
    filmsDocs: "Films / Docs",
    about: "About",
    contact: "Contact",
    tagline: "Filmmaker — commercial, documentary, narrative",
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
    heroLine1: "Ready to tell",
    heroLine2: "your story?",
    heroSub:
      "Commercial, documentary, narrative — I work in small crews and stay close to the people I'm filming, from the first conversation to the final cut.",
    bookACall: "Book a call",
    scroll: "Scroll",
    heroReelDisclaimer: "Demo reel — placeholder motion, not Quentin's work, standing in until real footage replaces it",
    rangeHeadingLine1: "My",
    rangeHeadingLine2: "work:",
    viewAllFilms: "View all films →",
    shortFormNote:
      "Also open to shorter, business-focused work — social cuts, branded content, corporate video.",
    shortFormCta: "Get in touch →",
    closingHeadline: "Have a story to tell? Let’s talk:",
  },
  problemSolution: {
    kicker: "You don’t need to have worked with a filmmaker before —",
    answer: "most of the people I work with hadn’t either.",
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
      "Writer, director, cinematographer, and editor based in Paris — open to working wherever a story leads. Focused on small-crew productions, short to medium length films, and branded work built on narrative first.",
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
    projectLabel: "About your project",
    sendMessage: "Send message",
    sayHello: "Prefer to say hello first?",
    instagram: "Find me on Instagram ↗",
    honeypot: "Don’t fill this out if you're human:",
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
    homeTitle: "Quentin Mouledous — Réalisateur",
    homeDescription:
      "Réalisation publicitaire, documentaire et narrative par Quentin Mouledous — des histoires dépeintes, pas seulement filmées.",
    filmsTitle: "Films — Quentin Mouledous",
    filmsDescription: "Travaux publicitaires, documentaires et narratifs de Quentin Mouledous.",
    aboutTitle: "À propos — Quentin Mouledous",
    aboutDescription: "Réalisateur entre publicité, documentaire et narratif.",
    contactTitle: "Contact — Quentin Mouledous",
    contactDescription: "Réservez un appel ou envoyez un message pour parler de votre projet.",
    thanksTitle: "Message envoyé — Quentin Mouledous",
    thanksDescription: "Merci de m'avoir contacté.",
    termsTitle: "Conditions d'utilisation — Quentin Mouledous",
    termsDescription: "Les conditions qui régissent l'utilisation de ce site.",
    privacyTitle: "Politique de confidentialité — Quentin Mouledous",
    privacyDescription: "Quelles informations ce site collecte et comment elles sont utilisées.",
    commercialWorkTitle: "Travaux publicitaires — Quentin Mouledous",
    commercialWorkDescription: "Travaux publicitaires de Quentin Mouledous.",
    filmsDocsTitle: "Films / Documentaires — Quentin Mouledous",
    filmsDocsDescription: "Travaux documentaires et narratifs de Quentin Mouledous.",
    filmSuffix: "Quentin Mouledous",
  },
  nav: {
    home: "Accueil",
    films: "Mon travail",
    commercialWork: "Travaux publicitaires",
    filmsDocs: "Films / Documentaires",
    about: "À propos",
    contact: "Contact",
    tagline: "Réalisateur — publicité, documentaire, narratif",
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
    heroLine1: "Prêt à raconter",
    heroLine2: "votre histoire ?",
    heroSub:
      "Publicité, documentaire, narratif — je travaille en petite équipe, au plus près des gens que je filme, du premier échange jusqu'au montage final.",
    bookACall: "Réserver un appel",
    scroll: "Défiler",
    heroReelDisclaimer: "Bobine de démonstration — mouvement de remplacement, pas le travail de Quentin, en attendant de vraies images",
    rangeHeadingLine1: "Mon",
    rangeHeadingLine2: "travail :",
    viewAllFilms: "Voir tous les films →",
    shortFormNote:
      "Également disponible pour des projets plus courts et orientés entreprise — contenus pour les réseaux sociaux, contenu de marque, vidéo corporate.",
    shortFormCta: "Me contacter →",
    closingHeadline: "Une histoire à raconter ? Parlons-en :",
  },
  problemSolution: {
    kicker: "Vous n'avez pas besoin d'avoir déjà travaillé avec un réalisateur —",
    answer: "la plupart des gens avec qui je travaille non plus.",
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
      "Mouvement de démonstration uniquement — pas le travail de Quentin, en attendant un vrai extrait",
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
      "Scénariste, réalisateur, chef opérateur et monteur basé à Paris — disponible partout où une histoire l'emmène. Spécialisé dans les productions à petite équipe, les courts et moyens métrages, et le contenu de marque pensé comme un récit.",
    topContactCta: "Me contacter →",
    intro:
      "Je réalise des films publicitaires, documentaires et narratifs — mais le genre change moins qu'on ne le pense. Ce qui reste constant, c'est le processus : je crée une communauté avec les personnes que je filme, et je cherche à transmettre l'émotion plus directement qu'un tournage mené à distance ne le pourrait jamais.",
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
        body: "Vous n'êtes pas transmis entre un pitch et une livraison. J'accompagne le projet tout du long, pour que le film reste fidèle à ce que nous avons convenu.",
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
    projectLabel: "Votre projet",
    sendMessage: "Envoyer le message",
    sayHello: "Envie de dire bonjour d'abord ?",
    instagram: "Retrouvez-moi sur Instagram ↗",
    honeypot: "Ne remplissez pas ce champ si vous êtes humain :",
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
  return astroCurrentLocale === "fr" ? "fr" : "en";
}

export function useTranslations(locale: Locale) {
  return translations[locale];
}
