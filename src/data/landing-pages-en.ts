// English mirror of landing-pages.ts: same six pages, written for English-language searches
// ("videographer paris", "wedding videographer paris", ...). `id` is the French slug each page
// mirrors, so the language switcher and hreflang can pair them. Same facts as the French
// pages: Sony FX3, DJI Mavic 3 Classic (registered UAS operator), 4K, one point of contact,
// quote on request, reply within 24 h.
import type { LandingPage } from "./landing-pages";

export const landingPagesEn: LandingPage[] = [
  {
    slug: "videographer-paris",
    id: "videaste-paris",
    label: "Videographer in Paris",
    title: "Freelance Videographer in Paris | Quentin Moulédous",
    description:
      "Quentin Moulédous, freelance videographer in Paris: events, corporate films, weddings, real estate. Shot in 4K, one point of contact, quote within 24 hours.",
    eyebrow: "Videographer · Paris",
    h1: "Freelance videographer in Paris",
    intro:
      "I'm Quentin Moulédous, an independent videographer and director based in Paris. I film for companies, institutions, brands and private clients: events, corporate films, weddings, real estate and documentary stories. You deal with one person, from the first conversation to the final delivery, and I shoot in 4K with my own equipment.",
    serviceType: "Videographer",
    sections: [
      {
        h2: "An independent videographer, from first conversation to delivery",
        paragraphs: [
          "A videographer is the person who films, but also the person who understands what you want to say. That is always where I start: who is the film for, where will it be shown, and what should it make the viewer feel or do? Those three questions shape the framing, the pace and the length far more than the choice of camera.",
          "Working alone or with a small crew, I keep control of the whole chain: location scouting, shooting, editing, colour grading and sound. There is no intermediary to convince, no account manager relaying your requests, and no agency margin built into the quote. Depending on the size of the shoot, I bring in a trusted camera operator, sound recordist or editor, so the team fits each project and is never fixed.",
        ],
      },
      {
        h2: "The films I make in Paris",
        paragraphs: [
          "Every type of film calls for a different approach. Here is what I do most often, with a dedicated page for each.",
        ],
        items: [
          {
            h3: "Event videography",
            text: "Conferences, launches, evenings, ceremonies: a punchy aftermovie or full coverage, delivered quickly. I filmed, for example, the reception for the 35th anniversary of Armenian independence at the Embassy of Armenia in France.",
            href: "/en/event-videographer-paris/",
          },
          {
            h3: "Corporate films",
            text: "A presentation of your company, a leadership portrait, a client testimonial or content for your channels: footage that faithfully represents your identity.",
            href: "/en/corporate-video-paris/",
          },
          {
            h3: "Wedding films",
            text: "A wedding only happens once. I stay unobtrusive all day to capture emotions as they happen.",
            href: "/en/wedding-videographer-paris/",
          },
          {
            h3: "Real estate and architecture",
            text: "A filmed walkthrough, aerial drone shots and detail shots for a listing, a developer or an architect.",
            href: "/en/real-estate-architecture-video-paris/",
          },
          {
            h3: "Documentary, fiction and interviews",
            text: "Stories built from real people and situations, or staged from a script: directing in the full sense of the word.",
            href: "/en/film-director-paris/",
          },
        ],
      },
      {
        h2: "What a shoot with me looks like",
        items: [
          {
            h3: "A first conversation",
            text: "You send me a few lines about your project through the quote form or by email. I reply within 24 hours, we talk it through, and I give you a clear proposal: what is included, the schedule, the budget.",
          },
          {
            h3: "Preparation",
            text: "We settle the message, the tone and the delivery formats. For an unusual location, an outdoor shoot or one with technical constraints, I scout beforehand to anticipate the light, the sound and the logistics.",
          },
          {
            h3: "The shoot",
            text: "I adapt to the scale of the project: an agile solo shoot or a small crew, always with my own professional equipment. For a simple shoot, I can usually step in within 48 hours.",
          },
          {
            h3: "Editing and delivery",
            text: "I take care of pacing, colour grading and sound, with clear rounds of feedback until you approve. I then deliver the film in the formats you need: 16:9 for web and YouTube, vertical and square for social media.",
          },
        ],
      },
      {
        h2: "Equipment and image: everything is shot in 4K",
        paragraphs: [
          "I film with a Sony FX3 cinema camera, and I put real work into framing, lighting and colour grading rather than settling for simple coverage. For aerial footage, I am a registered UAS operator and a remote pilot in the open category (A1/A3), and I fly a DJI Mavic 3 Classic, provided the area is cleared for flight. Sound is recorded with dedicated equipment, because beautiful images with poor sound can't be rescued in the edit.",
          "The music I use is licensed or royalty-free, so your film can be published without trouble, including on platforms that filter copyrighted music. If your project isn't public yet, I can sign a non-disclosure agreement before we start.",
        ],
      },
      {
        h2: "A videographer in Paris, Île-de-France and across France",
        paragraphs: [
          "I'm based in Paris and work throughout the city, from business districts like La Défense to event venues in the centre, and across Île-de-France: Boulogne-Billancourt, Saint-Denis, Versailles, Pantin, Roissy. For larger projects I also travel within France and abroad. Wherever your shoot is, talk to me about it.",
        ],
      },
      {
        h2: "How to choose the right videographer",
        paragraphs: [
          "Before comparing prices, watch complete films, not only excerpts: is the image consistent from shot to shot, does the pace hold to the end, and does the film look like what you have in mind? A videographer who has already shot a project close to yours, in format or in tone, will spare you unpleasant surprises.",
          "Then ask practical questions. Who does the editing? How many rounds of feedback are included? Which formats are delivered? Is the music royalty-free? How long are the raw files kept? A serious quote answers all of this before the shoot, not after.",
        ],
      },
      {
        h2: "Freelance videographer or agency: what's the difference?",
        paragraphs: [
          "An agency has real strengths: a large team, heavy equipment, projects on a very large scale. It also has a cost, with intermediaries between you and the person filming. A freelance videographer gives you a single point of contact, genuine flexibility on schedule and budget, and the certainty that the person who understands your project is the one who shoots and edits it. For most corporate, event, wedding and real estate films, it is the most direct solution. And if your project needs more hands, I put together the right team.",
        ],
      },
    ],
    faq: [
      {
        question: "How much does a videographer in Paris cost?",
        answer:
          "It depends on the length of the shoot, the location, how many people are needed and the amount of editing. I don't set a price in advance: everything is done by quote, with no obligation. Send me the outline of your project and I'll reply within 24 hours with a tailored proposal.",
      },
      {
        question: "How quickly can a videographer step in?",
        answer:
          "For a simple shoot, I can usually step in within 48 hours. For a larger project, such as a documentary or an event with several speakers, it is better to allow a few weeks of preparation.",
      },
      {
        question: "Can you film with a drone in Paris?",
        answer:
          "Yes, I'm a registered UAS operator and a remote pilot in the open category (A1/A3), and I film with a DJI Mavic 3 Classic. A large part of Paris is subject to flight restrictions: I check the zone before every flight and only offer aerial footage when it is permitted.",
      },
      {
        question: "Which video formats do you deliver?",
        answer:
          "Depending on how you'll use it: 16:9 for web and YouTube, vertical 9:16 for Stories, Reels and TikTok, and square for the Instagram feed. Each version is edited for its format, not just cropped.",
      },
      {
        question: "Can I see examples before committing?",
        answer:
          "Of course. You can browse my films on the \"My work\" page, and depending on your project I can also show you more targeted examples during our first conversation.",
      },
    ],
    related: ["video-evenementielle-paris", "video-entreprise-paris", "videaste-mariage-paris", "video-immobilier-architecture-paris", "realisateur-paris", "aftermovie-paris", "captation-conference-paris", "captation-concert-paris", "film-institutionnel-paris", "video-drone-paris", "cadreur-paris", "production-video-paris", "tarifs-video-paris", "video-recrutement-paris", "video-restaurant-paris", "video-lancement-produit-paris"],
  },

  {
    slug: "film-director-paris",
    id: "realisateur-paris",
    label: "Film director in Paris",
    title: "Film Director in Paris: Documentary and Fiction",
    description:
      "Independent film director in Paris, Quentin Moulédous directs documentaries, fiction, interviews and brand films. From writing to editing, shot in 4K.",
    eyebrow: "Director · Paris",
    h1: "Film director in Paris: documentary, fiction and brand films",
    intro:
      "I direct films that tell something: a documentary about real people, a fiction scene, a portrait, a brand film conceived as a story. I'm Quentin Moulédous, an independent director based in Paris, and I write, shoot and edit my own films, usually with a small crew.",
    serviceType: "Film director",
    sections: [
      {
        h2: "An independent director: writing, shooting and editing",
        paragraphs: [
          "Directing is the sum of the decisions that give a film a point of view: what you show, what you leave out of frame, the moment you cut. I handle the writing, the staging, the image and the edit, which lets me keep a coherent vision from beginning to end.",
          "Genre matters less than you might think. Whether it's a documentary, a fiction film or a brand film, I first look to build a real bond with the people I film, so as to convey emotion more directly than a shoot run from a distance ever could.",
        ],
      },
      {
        h2: "What I direct",
        items: [
          {
            h3: "Documentaries",
            text: "Films built from real people and situations. You have to know how to stay discreet, work with the available light and remain ready for the unexpected. I adapt to each person's way of speaking so that it rings true.",
          },
          {
            h3: "Fiction",
            text: "Written and staged scenes, from short films to brand fiction. Writing, shot breakdown and working with actors matter as much as the image: every framing choice has to tell something.",
          },
          {
            h3: "Interviews and portraits",
            text: "An interview is its own craft: putting the person at ease, capturing an honest voice, then editing without ever betraying what they meant to say. A leadership portrait, a testimonial, residents speaking: the aim is the same.",
            href: "/en/corporate-video-paris/",
          },
          {
            h3: "Brand films and advertising",
            text: "A short, punchy film built to grab attention within seconds: spots for sport, fashion or lifestyle brands, for social media as well as your campaigns.",
          },
        ],
      },
      {
        h2: "My approach to directing",
        items: [
          {
            h3: "I enter your world",
            text: "Before writing or shooting anything, I take the time to understand what you are really trying to say, and who you want to reach.",
          },
          {
            h3: "We build the vision together",
            text: "I consult you. What you want and what you need shapes the film as much as my own eye: nothing is delivered from a distance.",
          },
          {
            h3: "I stay with it, start to finish",
            text: "You don't change contact between the first pitch and delivery. I stay with the project to the end so that the film remains true to what we agreed.",
          },
        ],
      },
      {
        h2: "A small-crew production",
        paragraphs: [
          "I work with a small crew and my own equipment: a Sony FX3 cinema camera shooting in 4K, a DJI Mavic 3 Classic drone for permitted aerial shots, and careful sound recording. Depending on the film, I bring in a trusted camera operator, sound recordist or editor. This way of working keeps costs reasonable and leaves room for spontaneity, which matters enormously in both documentary and fiction.",
          "Everything stays under your control: rounds of feedback are built into the edit until you approve, the music is licensed or royalty-free, and I can sign a non-disclosure agreement if your project isn't public yet.",
        ],
      },
      {
        h2: "A director in Paris, available across France",
        paragraphs: [
          "I'm based in Paris and shoot throughout Île-de-France. I also travel within France and abroad when the project calls for it. A documentary is prepared well in advance, especially when you need to earn the trust of the people you film, so I take the time needed for scouting and for first conversations.",
        ],
      },
      {
        h2: "How to choose a director for your project",
        paragraphs: [
          "Look at the way they tell a story, more than at the technical quality of the images. A good director knows why they keep one shot and cut another. Ask how they see your project before even discussing the budget: the answer says a lot about how they work.",
          "Also check that the person who answers you will be the one directing. On a short film, that is the best guarantee of coherence. That is what I offer, with a single point of contact from start to finish.",
        ],
      },
    ],
    faq: [
      {
        question: "What's the difference between a videographer and a director?",
        answer:
          "A videographer films and edits, often from a precise brief. A director also brings a point of view: they write or structure the story, direct the people on camera and decide the final form of the film. I do both, depending on what your project needs.",
      },
      {
        question: "Do you make documentaries on commission?",
        answer:
          "Yes. A documentary is built with you: we define the subject, the people to film and the tone, then I prepare the shoot with scouting and early conversations. For this kind of project, allow a few weeks of preparation.",
      },
      {
        question: "Can you write the script?",
        answer:
          "Yes, I'm also a screenwriter. For a short fiction or a brand film, I write and plan the shots myself, based on what you want to convey.",
      },
      {
        question: "How much does it cost to direct a film?",
        answer:
          "It all depends on the length, the number of shooting days, the crew needed and the post-production. I work by quote, with no obligation: describe your project and I'll reply within 24 hours with a tailored proposal.",
      },
      {
        question: "Who owns the rights to the films?",
        answer:
          "The terms of use of the film (where and how you may broadcast it) are set out in the quote, before the shoot, so that you know exactly how you can use it.",
      },
    ],
    related: ["videaste-paris", "video-entreprise-paris", "video-evenementielle-paris", "production-video-paris", "film-institutionnel-paris"],
  },

  {
    slug: "event-videographer-paris",
    id: "video-evenementielle-paris",
    label: "Event videography",
    title: "Event Videographer in Paris: Aftermovie and Coverage",
    description:
      "Event videographer in Paris: aftermovies and full coverage of conferences, evenings and launches, delivered quickly. Quentin Moulédous shoots in 4K, quote within 24 hours.",
    eyebrow: "Events · Paris",
    h1: "Event videographer in Paris: aftermovies and full coverage",
    intro:
      "An event lasts a few hours and can't be replayed. I'm Quentin Moulédous, a videographer in Paris: I capture the key moments of your conferences, launches, evenings and ceremonies, and I deliver an aftermovie or full coverage quickly that brings the essentials back to life, for those who were there and for those who weren't.",
    serviceType: "Event videographer",
    sections: [
      {
        h2: "Aftermovie, full coverage, short formats: which film for your event?",
        paragraphs: [
          "Before the shoot, we decide together what the film has to do: make people want to come to the next edition, thank the participants, feed your social media, keep a record of the talks. That choice determines everything else.",
        ],
        items: [
          {
            h3: "The aftermovie",
            text: "A short, punchy film, typically 1 to 3 minutes, that captures the atmosphere, the faces and the highlights. It is the ideal format for social media and for promoting the next edition.",
          },
          {
            h3: "Full coverage",
            text: "A conference, a round table, a talk or a speech filmed in full, with clean sound. It is used to broadcast the event afterwards or keep it as an archive.",
          },
          {
            h3: "Teasers and short formats",
            text: "A few vertical seconds for Instagram, TikTok or LinkedIn, edited to catch the eye from the very first second, during or just after the event.",
          },
        ],
      },
      {
        h2: "Events I've filmed",
        paragraphs: [
          "I filmed the reception for the 35th anniversary of Armenian independence at the Embassy of Armenia in France: an evening in sumptuous salons, with speeches, a choir and guests, where you have to be everywhere without ever getting in the way. I also filmed Grégoire Jokic's concert at Point Éphémère, where the coloured lights keep changing and the image has to follow the rhythm of the music. You can watch these films on the \"My work\" page.",
        ],
      },
      {
        h2: "How I film an event",
        items: [
          {
            h3: "Scouting before the day",
            text: "When possible, I visit the venue before the event to check the light, where to position myself and the sound constraints. That is what prevents surprises on the day.",
          },
          {
            h3: "Discreet, but everywhere",
            text: "I move around with light equipment so as not to disturb your guests or speakers. No intrusive lighting, no large crew taking over the room, unless the format of the event calls for it.",
          },
          {
            h3: "The right moments, not just the beautiful ones",
            text: "A glance, a laugh, an exchange in a corridor: it is often these details that make a good aftermovie. I pay as much attention to the people as to the programme.",
          },
          {
            h3: "Fast delivery",
            text: "An event loses value as time passes. I can deliver a quick first edit for your social media first, then the full version, in the formats you need.",
          },
        ],
      },
      {
        h2: "The kinds of events I film in Paris",
        paragraphs: [
          "Conferences and seminars, product launches, corporate and institutional evenings, award ceremonies, ceremonies, concerts and music nights, trade shows, diplomatic receptions. Every venue has its own constraints: a mansion, a concert hall, a company headquarters or a park are not filmed the same way. I adapt, with light equipment and a Sony FX3 camera able to shoot in low light, which is common at events.",
          "I shoot in 4K, with careful sound recording, and, if you wish and where the area allows, aerial drone footage for outdoor events.",
        ],
      },
      {
        h2: "An event videographer in Paris and Île-de-France",
        paragraphs: [
          "I'm based in Paris and work in every arrondissement, as well as in La Défense, Boulogne-Billancourt, Saint-Denis, Versailles, Pantin, Roissy and elsewhere in Île-de-France. For an event elsewhere in France or abroad, I also travel.",
        ],
      },
      {
        h2: "How to prepare the filming of your event",
        paragraphs: [
          "For the film to live up to the event, tell me as early as possible the exact times, the programme, the moments not to miss and the important people to film. If speakers need to give image consent, it is better to arrange this beforehand, for example in the invitation or at the entrance.",
          "For a simple event, I can usually step in within 48 hours. For a larger event, with several rooms or several speakers, allow a few weeks of preparation.",
        ],
      },
    ],
    faq: [
      {
        question: "How much does an event videographer in Paris cost?",
        answer:
          "The price depends on how long I'm present, how many angles or rooms to cover, the crew needed and the type of film delivered (aftermovie, full coverage, short formats). Everything is done by quote: describe your event and I'll reply within 24 hours.",
      },
      {
        question: "What is the ideal length for an aftermovie?",
        answer:
          "Between 1 and 3 minutes in general, to hold attention. If you need several uses, I can deliver a short version for social media and a longer one for your website.",
      },
      {
        question: "How soon after the event do you deliver the film?",
        answer:
          "I can quickly deliver a first edit for social media, then the full version a little later. The exact timing depends on the length of the event and the complexity of the edit, and we set it together before the shoot.",
      },
      {
        question: "Can you film several rooms or speakers at the same time?",
        answer:
          "To cover several places at once, I bring in an additional camera operator. The team adjusts to the scale of the event, and the quote states what is planned.",
      },
      {
        question: "Do guests need to be told they'll be filmed?",
        answer:
          "It is good practice, in particular to respect image rights. A mention in the invitation or at the entrance is generally enough. I can advise you on the wording before the event.",
      },
    ],
    related: ["videaste-paris", "video-entreprise-paris", "realisateur-paris", "aftermovie-paris", "captation-conference-paris", "captation-concert-paris", "video-drone-paris", "preparer-tournage-evenement", "video-lancement-produit-paris", "video-restaurant-paris"],
  },

  {
    slug: "corporate-video-paris",
    id: "video-entreprise-paris",
    label: "Corporate films",
    title: "Corporate Video in Paris, Freelance Videographer",
    description:
      "Corporate video in Paris: company presentation, leadership portrait, testimonial, interview and social content. Freelance videographer, a single point of contact.",
    eyebrow: "Corporate · Paris",
    h1: "Corporate video in Paris: a freelance videographer for your brand",
    intro:
      "A corporate video doesn't just show: it has to make your business understandable, credible and human in a few minutes. I'm Quentin Moulédous, a freelance videographer in Paris, and I support companies from concept to delivery, for films that faithfully represent your identity.",
    serviceType: "Corporate video",
    sections: [
      {
        h2: "Which corporate film for which goal?",
        paragraphs: [
          "Before choosing a format, you need to know what the film should achieve: recruit, reassure a client, present an offer, animate a community, tell the company's story. These are the formats I make most often.",
        ],
        items: [
          {
            h3: "Company presentation film",
            text: "Who you are, what you do and why people can trust you, in 1 to 2 minutes. It finds its place on your website's home page, in your sales proposals or on LinkedIn.",
          },
          {
            h3: "Leadership or employee portrait",
            text: "A person on camera, in their environment, talking about their work and their convictions. This format humanises the company and works very well for recruitment.",
          },
          {
            h3: "Client testimonial",
            text: "Nothing reassures like a satisfied client speaking in their own words. I put the person at ease so as to get an honest voice.",
          },
          {
            h3: "Brand content and social media",
            text: "Series of short videos, behind the scenes, product presentations: vertical, square or horizontal formats, edited for the rhythm of each platform.",
          },
        ],
      },
      {
        h2: "The interview: a craft of its own",
        paragraphs: [
          "Interviewing means putting the person at ease, asking the question that opens up the right answer and knowing how to wait for the silence. I take care of the framing, lighting and sound so that the person looks their best, then I edit without ever betraying what they meant to say. An interview is generally shot in two to three hours, set-up included: short enough not to disrupt your working day.",
          "For people who aren't comfortable on camera, it is no obstacle: we start by chatting, we let the camera settle in, and most of the time the person forgets they're being filmed after a few minutes.",
        ],
      },
      {
        h2: "From strategy to delivery",
        items: [
          {
            h3: "Strategy",
            text: "I take the time to understand your project and your goals: what you want to say, and to whom. This conversation sets the direction for everything that follows.",
          },
          {
            h3: "Pre-production",
            text: "We define the message and the objectives together. I write the outline, scout the locations if needed and prepare the right team.",
          },
          {
            h3: "Production",
            text: "On the day, I adapt to your project: a solo shoot or a small crew, with my own 4K equipment and careful sound recording.",
          },
          {
            h3: "Post-production",
            text: "Pacing, colour grading and sound, with clear rounds of feedback until approval. Delivery in the formats that serve you: 16:9, vertical, square.",
          },
        ],
      },
      {
        h2: "A shoot that respects your daily routine",
        paragraphs: [
          "Shooting at your premises shouldn't block your business. I prepare the shoot with you to limit disruption: adapted hours, rooms scouted in advance, colleagues informed. I move around with light equipment, and with a Sony FX3 camera that is happy with simple lighting.",
          "If your project involves sensitive information or isn't public yet, I can sign a non-disclosure agreement before we start. The music used is licensed or royalty-free, so the film can be published anywhere without copyright worries.",
        ],
      },
      {
        h2: "A freelance corporate videographer in Paris and Île-de-France",
        paragraphs: [
          "I'm based in Paris and shoot in companies across the city, from La Défense to Boulogne-Billancourt, Saint-Denis or Pantin, as well as in Île-de-France and further afield if the project requires. I have notably worked for the Embassy of Armenia in France, whose film you can see on the \"My work\" page.",
        ],
      },
      {
        h2: "Why choose a freelance videographer rather than an agency?",
        paragraphs: [
          "You deal with only one person, from the first conversation to delivery. No project manager relaying your requests, no agency margin in the quote, and real flexibility: I adapt to your schedule and your budget, project by project. And because I control the whole chain, from shooting to the final edit, I can hold the same standard at every stage.",
        ],
      },
    ],
    faq: [
      {
        question: "How much does a corporate video cost in Paris?",
        answer:
          "The price depends on the length of the film, the number of shooting days, the crew needed and the editing. I work by quote, with no obligation and no admin fees: send me the outline of your project and I'll reply within 24 hours.",
      },
      {
        question: "How long does it take to make a corporate video?",
        answer:
          "A simple shoot can be organised within 48 hours. For a more ambitious film, allow a few weeks between preparation, shooting and editing. We set a realistic schedule together, upfront.",
      },
      {
        question: "Do I need to provide a script or a text?",
        answer:
          "No, it isn't necessary. I can write the outline and the interview questions from what you want to say. If you already have a brief, a text or references, they are an excellent starting point.",
      },
      {
        question: "Are the videos adapted for social media?",
        answer:
          "Yes. I deliver versions dedicated to each platform: 16:9 for YouTube and your website, vertical 9:16 for Reels, TikTok and Stories, square for the Instagram feed. Each version is designed for its framing and its rhythm.",
      },
      {
        question: "What if I want to change the video after delivery?",
        answer:
          "Rounds of feedback are built in before final delivery to adjust the edit to your comments. After delivery, changes remain possible: we discuss them depending on the scale of the change.",
      },
    ],
    related: ["videaste-paris", "video-evenementielle-paris", "realisateur-paris", "film-institutionnel-paris", "combien-coute-film-entreprise-paris", "duree-ideale-video-entreprise", "tarifs-video-paris", "video-recrutement-paris", "video-lancement-produit-paris"],
  },

  {
    slug: "wedding-videographer-paris",
    id: "videaste-mariage-paris",
    label: "Wedding videographer",
    title: "Wedding Videographer in Paris, Wedding Films | Spotlight Studio",
    description:
      "Wedding videographer in Paris: a discreet, sincere film of your day, shot in 4K, with a single point of contact. Quentin Moulédous, quote within 24 hours.",
    eyebrow: "Wedding · Paris",
    h1: "Wedding videographer in Paris: a sincere film of your day",
    intro:
      "A wedding only happens once. I'm Quentin Moulédous, a videographer in Paris, and I film your day discreetly to keep emotions as they happen: the exchanged glance, the speech that catches in the throat, the first dance. A film to watch again in ten years, rather than a string of posed shots.",
    serviceType: "Wedding videographer",
    sections: [
      {
        h2: "A discreet approach, close to the emotions",
        paragraphs: [
          "The best of a wedding is the moments nobody staged: a burst of laughter backstage, a hand squeezing a parent's, a look that says everything. To capture them, I stay unobtrusive all day. I don't direct your guests and I don't interrupt the ceremony: I observe, I frame, and I let the day unfold.",
          "I work alone or with a second camera operator, depending on the size of the wedding and the number of venues. Either way, you deal with one point of contact, from the first conversation to the delivery of the film.",
        ],
      },
      {
        h2: "How a filmed wedding day unfolds",
        items: [
          {
            h3: "The preparations",
            text: "Dressing, hair, last gestures: a calm moment where emotions come to the surface. This is often where the most beautiful images hide, before the day speeds up.",
          },
          {
            h3: "The ceremony",
            text: "Civil, religious or secular: the vows, the exchange of rings, the looks across the room. I film with careful sound recording so that the words stay audible, and the silences too.",
          },
          {
            h3: "The cocktail and the reception",
            text: "The speeches, the surprises, the laughter, the room coming alive. I pay attention to details: the decor, the hands, the children, the grandparents.",
          },
          {
            h3: "The evening",
            text: "The first dance, the dance floor, the end of the night. In low light, my Sony FX3 cinema camera keeps the image clean and natural, with no intrusive lighting.",
          },
        ],
      },
      {
        h2: "What your wedding film contains",
        paragraphs: [
          "The format is decided with you, depending on what you want to keep. It can be a short, punchy film summarising the day, a longer film following the timeline, or a combination of both. The edit is accompanied by licensed or royalty-free music that we choose together so that it suits your story.",
          "I take care over the colour grading for a warm, natural image, and over the sound, because the voices of the people you love matter as much as the images. Rounds of feedback are built in before final delivery to adjust the edit to your comments.",
        ],
      },
      {
        h2: "Aerial drone shots, if the venue allows",
        paragraphs: [
          "For a wedding at a château, an estate or an outdoor venue, aerial shots can give the film more scale. I'm a registered UAS operator and a remote pilot in the open category (A1/A3), and I fly a DJI Mavic 3 Classic, only when the area is cleared for flight and it doesn't disturb the ceremony or the guests. In Paris itself, a large part of the territory is subject to restrictions: I check the zone before offering you any aerial images.",
        ],
      },
      {
        h2: "A wedding videographer in Paris and across France",
        paragraphs: [
          "I'm based in Paris and film weddings in Île-de-France, in reception halls, estates and ceremony venues around Paris. I also travel within France, and abroad for a more distant destination. Tell me about the venue, the date and the number of guests, and I'll let you know whether I'm available.",
        ],
      },
      {
        h2: "How to choose your wedding videographer",
        paragraphs: [
          "Watch real, complete wedding films, not only a trailer: does the pace hold, is the emotion sincere, is the sound clean? Meet or call the videographer before signing: you'll spend a whole day with them, and getting along matters a great deal. Finally, ask what is included: time on site, number of films delivered, rounds of feedback in the edit, delivery time, music.",
          "A good videographer is as discreet as they are effective: you should feel them there when you need them, and forget them the rest of the time.",
        ],
      },
    ],
    faq: [
      {
        question: "How much does a wedding videographer cost in Paris?",
        answer:
          "The price depends on how long I'm present, the number of venues, a possible second camera operator and the film or films delivered. I work by quote, with no obligation: tell me about your wedding and I'll reply within 24 hours with a tailored proposal.",
      },
      {
        question: "How long does the shoot last?",
        answer:
          "A wedding often takes a full day. Before the day, we decide together which moments to cover: preparations, ceremony, cocktail, evening. It isn't always necessary to film everything.",
      },
      {
        question: "Can you film in low light?",
        answer:
          "Yes. My Sony FX3 camera is designed to work in low light, which is common in the evening or in ceremony venues. The image stays clean and natural, without needing intrusive lighting.",
      },
      {
        question: "Can we have a short film for social media?",
        answer:
          "Yes, I can edit a short version, in vertical or square format, in addition to the main film. We talk about it before the shoot so that the edit is designed for the right formats.",
      },
      {
        question: "When should I book my videographer?",
        answer:
          "As soon as your date and venue are set: weddings are planned in advance and the most popular dates go quickly. Write to me as soon as you have these details so I can confirm my availability.",
      },
    ],
    related: ["videaste-paris", "video-evenementielle-paris", "realisateur-paris", "combien-coute-videaste-mariage-paris", "video-drone-paris"],
  },

  {
    slug: "real-estate-architecture-video-paris",
    id: "video-immobilier-architecture-paris",
    label: "Real estate and architecture",
    title: "Real Estate and Architecture Video in Paris, Drone",
    description:
      "Real estate and architecture videographer in Paris: filmed walkthroughs, aerial drone shots and detail shots for listings, developers and architects. Shot in 4K.",
    eyebrow: "Real estate & architecture · Paris",
    h1: "Real estate and architecture videographer in Paris, with drone footage",
    intro:
      "A place is understood at a glance when the image is sharp, well exposed and well framed. I'm Quentin Moulédous, a videographer in Paris: I film properties, new developments and architects' projects with images that let the place speak for itself, from the guided walkthrough to aerial drone shots.",
    serviceType: "Real estate and architecture videographer",
    sections: [
      {
        h2: "Images that make a place readable at a glance",
        paragraphs: [
          "In real estate as in architecture, the image has to answer a simple question: what does this place really look like? A badly filmed place looks smaller, darker or plainer than it is. I take care of exposure, sharpness and framing so that the volumes, the natural light and the materials are readable from the very first seconds.",
          "I film in 4K with a Sony FX3 cinema camera, which handles the contrast between an interior room and the light outside very well. These conditions are common in real estate, and they are manageable with good equipment and a little preparation.",
        ],
      },
      {
        h2: "What I film",
        items: [
          {
            h3: "The filmed walkthrough",
            text: "A fluid route through the property, from the entrance to the main rooms, with steady camera movement. Ideal for a listing, an agency website or a remote presentation.",
          },
          {
            h3: "Aerial drone shots",
            text: "Façades, roofs, the surroundings, the neighbourhood: shots that place the property in its context and show its scale. I'm a registered UAS operator and a remote pilot in the open category (A1/A3), and I fly a DJI Mavic 3 Classic, provided the area is cleared for flight.",
          },
          {
            h3: "Detail shots",
            text: "A moulding, a fireplace, a material, a view from the window: the details that give the place character and avoid the generic tour.",
          },
          {
            h3: "New developments and architects' projects",
            text: "For a developer, a presentation film or a construction progress film. For an architect, a film that shows the project as they conceived it, respecting their intention and their lines.",
          },
        ],
      },
      {
        h2: "Drones in Paris: what you need to know",
        paragraphs: [
          "A large part of Paris is subject to drone flight restrictions. Before any aerial shooting, I check the zone and the applicable regulations, and I only offer aerial shots when they are permitted. If they aren't, I can use other solutions: shots from the ground, from a roof terrace or a window, which already give a good idea of the place.",
          "Around Paris and in Île-de-France, constraints vary by location: I simply tell you what is possible during preparation, without promising anything I couldn't deliver.",
        ],
      },
      {
        h2: "A simple, quick shoot",
        items: [
          {
            h3: "Preparation",
            text: "We agree on the property to film, the tone you want and the essential shots. If the place is occupied, we choose a moment when it is tidy and well lit.",
          },
          {
            h3: "Shooting",
            text: "I travel alone, with light equipment. The duration depends on the size of the property and the number of rooms. For a simple shoot, I can usually step in within 48 hours.",
          },
          {
            h3: "Editing and delivery",
            text: "A careful edit, natural colour grading and licensed or royalty-free music. Delivery in the formats you need: horizontal for listings and your website, vertical for social media.",
          },
        ],
      },
      {
        h2: "Who is it for?",
        paragraphs: [
          "Estate agencies, owners selling or renting, developers and builders, architects and interior designers, hotels and event venues, property hunters. If you want to show a place and photos are no longer enough, video brings what they lack: the volume, the circulation, the light that changes through the day.",
        ],
      },
      {
        h2: "A real estate videographer in Paris and Île-de-France",
        paragraphs: [
          "I'm based in Paris and film in every arrondissement and across Île-de-France: La Défense, Boulogne-Billancourt, Saint-Denis, Versailles, Pantin. I also travel within France for larger projects, such as a new development or a hotel.",
        ],
      },
    ],
    faq: [
      {
        question: "How much does a real estate video cost in Paris?",
        answer:
          "It depends on the size of the property, the number of shots you want, whether aerial shots are included and the editing. I work by quote, with no obligation: send me a few details about the property and I'll reply within 24 hours.",
      },
      {
        question: "What is the ideal length for a walkthrough video?",
        answer:
          "Between 1 and 2 minutes for a standard listing, to hold attention. A presentation film for a development or an architect's project can be longer, up to 3 minutes or more depending on the subject.",
      },
      {
        question: "Can you film by drone in central Paris?",
        answer:
          "A large part of Paris is subject to flight restrictions. I always check the zone before offering aerial shots, and I only make them when they are permitted. When that isn't possible, other solutions exist, such as shots from a roof or a window.",
      },
      {
        question: "Should the property be empty or furnished?",
        answer:
          "Both work, as long as the place is tidy, clean and well lit on the day of the shoot. I can give you a few simple tips beforehand so that the property looks its best.",
      },
      {
        question: "Do you also provide vertical videos for social media?",
        answer:
          "Yes. In addition to the horizontal version for the listing, I can edit a vertical 9:16 version for Instagram, TikTok or Facebook, edited for that format rather than simply cropped.",
      },
    ],
    related: ["videaste-paris", "video-entreprise-paris", "video-evenementielle-paris", "video-drone-paris", "tarifs-video-paris"],
  },
];
