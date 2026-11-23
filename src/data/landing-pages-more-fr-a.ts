// More French search landing pages, batch A: prestations. Same facts-only rule as
// landing-pages.ts (Sony FX3, DJI Mavic 3 Classic, registered UAS operator, 4K, quote on
// request, reply within 24 h, ~48 h for simple shoots). No prices anywhere.
import type { LandingPage } from "./landing-pages";

export const landingPagesMoreFrA: LandingPage[] = [
  {
    slug: "captation-conference-paris",
    kind: "service",
    label: "Captation de conférence",
    title: "Captation de conférence à Paris | Vidéaste événementiel",
    description:
      "Captation de conférence, table ronde ou séminaire à Paris : image soignée, son propre, montage de l'intégrale et d'extraits pour vos réseaux. Devis sous 24 h.",
    eyebrow: "Captation · Paris",
    h1: "Captation de conférence et d'événement à Paris",
    intro:
      "Une conférence a de la valeur bien après la salle : en replay, en extraits, en archive. Je suis Quentin Moulédous, vidéaste à Paris, et je filme vos conférences, tables rondes, séminaires et prises de parole avec une image soignée et un son propre, puis je monte l'intégrale et des extraits prêts à être diffusés.",
    serviceType: "Captation de conférence",
    sections: [
      {
        h2: "Pourquoi filmer une conférence ?",
        paragraphs: [
          "Une salle contient quelques dizaines ou centaines de personnes ; une vidéo en touche beaucoup plus. Les intervenants prennent le temps de préparer ce qu'ils disent : autant que ça serve au-delà du jour J. Une captation permet de proposer un replay aux absents, de garder une trace pour vos archives, de nourrir vos réseaux sociaux avec des extraits forts et de donner envie de venir à l'édition suivante.",
          "Selon l'usage, on ne filme pas de la même façon : un replay demande un cadrage stable et lisible, des extraits pour LinkedIn demandent des moments à fort impact et des formats courts. On décide de cela ensemble avant le tournage.",
        ],
      },
      {
        h2: "Ce que comprend une captation",
        items: [
          {
            h3: "Le cadrage des intervenants",
            text: "Plans larges de la scène et de la salle, plans serrés sur les intervenants, réactions du public. Je cadre pour que la personne qui parle reste toujours lisible, même quand elle se déplace.",
          },
          {
            h3: "Le son",
            text: "Dans une conférence, le son compte plus que l'image : une voix mal captée rend la vidéo inutilisable. J'enregistre avec un matériel dédié, et je m'organise avec le régisseur ou le prestataire sonore de la salle quand il y en a un.",
          },
          {
            h3: "Le montage",
            text: "L'intégrale propre, avec un début et une fin nets, puis, si vous le souhaitez, des extraits courts : une idée forte, une citation, un échange avec la salle. Livraison aux formats utiles, 16:9 pour le web et vertical pour les réseaux.",
          },
        ],
      },
      {
        h2: "Conférences, tables rondes, séminaires, cérémonies",
        paragraphs: [
          "Je filme tous les formats de prise de parole : conférences et keynotes, tables rondes et débats, séminaires internes, remises de prix, cérémonies officielles, discours. Pour les événements avec plusieurs salles ou plusieurs intervenants en même temps, je m'entoure d'un cadreur supplémentaire : l'équipe s'ajuste à l'ampleur de l'événement et le devis précise ce qui est prévu.",
          "J'ai notamment filmé la réception des 35 ans de l'indépendance arménienne à l'Ambassade d'Arménie en France, avec ses discours et son chœur, où il fallait être partout sans jamais gêner.",
        ],
      },
      {
        h2: "Comment je prépare une captation",
        paragraphs: [
          "Dès que possible, je repère le lieu ou je récupère le plan de la salle : emplacement de la scène, éclairage, régie, accès. Je demande le programme précis, les horaires et la liste des intervenants. Si des supports (diaporama, vidéos) sont projetés, nous décidons si on les filme, si on les intègre ensuite au montage ou si on les ignore.",
          "Si votre événement n'est pas public ou contient des informations sensibles, je peux signer un accord de confidentialité avant de commencer. Pour une captation simple, je peux généralement intervenir sous 48 heures ; pour un événement plus important, mieux vaut prévoir quelques semaines.",
        ],
      },
      {
        h2: "Un vidéaste pour vos conférences à Paris et en Île-de-France",
        paragraphs: [
          "Je suis basé à Paris et j'interviens dans tous les arrondissements, à La Défense, à Boulogne-Billancourt, Saint-Denis, Versailles, Pantin ou Roissy, et dans tout le reste de la France quand l'événement l'exige. Je tourne en 4K avec une caméra Sony FX3, capable de bien tenir dans les lumières faibles des salles de conférence.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien coûte la captation d'une conférence ?",
        answer:
          "Cela dépend de la durée, du nombre d'angles ou de salles, de l'équipe nécessaire et du montage demandé (intégrale seule, extraits, formats courts). Je travaille sur devis, sans engagement : décrivez-moi votre événement et je vous réponds sous 24 h.",
      },
      {
        question: "Livrez-vous l'intégrale et des extraits ?",
        answer:
          "Oui, selon ce que vous souhaitez : l'intégrale montée proprement, et des extraits courts, au format horizontal ou vertical, pour les réseaux sociaux. Nous précisons les livrables dans le devis.",
      },
      {
        question: "Faut-il fournir un micro ou une sonorisation ?",
        answer:
          "Si la salle est équipée d'une sonorisation, je m'y raccorde en accord avec le prestataire. Sinon, j'enregistre avec mon propre matériel. Dites-moi ce qui est prévu pour que nous trouvions la meilleure solution.",
      },
      {
        question: "Pouvez-vous filmer plusieurs salles en même temps ?",
        answer:
          "Oui, en m'entourant d'un cadreur supplémentaire. L'équipe s'ajuste à l'ampleur de l'événement et le devis précise ce qui est prévu.",
      },
    ],
    related: ["video-evenementielle-paris", "aftermovie-paris", "videaste-paris", "preparer-tournage-evenement"],
  },

  {
    slug: "aftermovie-paris",
    kind: "service",
    label: "Aftermovie",
    title: "Aftermovie à Paris : film d'événement rythmé | Spotlight Studio",
    description:
      "Aftermovie à Paris : un film court et rythmé qui fait revivre votre événement, livré rapidement et aux bons formats. Quentin Moulédous, vidéaste, devis sous 24 h.",
    eyebrow: "Aftermovie · Paris",
    h1: "Aftermovie à Paris : faire revivre votre événement en quelques minutes",
    intro:
      "L'aftermovie est le film que tout le monde veut partager au lendemain d'un événement : court, rythmé, plein d'images et d'émotion. Je suis Quentin Moulédous, vidéaste à Paris, et je filme vos soirées, lancements, conférences et cérémonies pour en faire un film qui donne envie de venir la prochaine fois.",
    serviceType: "Aftermovie",
    sections: [
      {
        h2: "Qu'est-ce qu'un aftermovie ?",
        paragraphs: [
          "Un aftermovie est un film de quelques minutes qui résume un événement : l'ambiance, les visages, les moments forts, la musique. Il ne cherche pas à tout dire : il cherche à faire ressentir. C'est ce qui le distingue d'une captation, qui garde la trace complète d'une conférence ou d'une prise de parole.",
          "Il sert à remercier les participants, à promouvoir l'édition suivante, à rassurer des partenaires ou à alimenter vos réseaux sociaux. Selon l'objectif, il n'a ni le même ton, ni la même durée.",
        ],
      },
      {
        h2: "Quelle durée et quels formats ?",
        items: [
          {
            h3: "La version principale",
            text: "De 1 à 3 minutes en général : assez longue pour installer une ambiance, assez courte pour qu'on la regarde jusqu'au bout. C'est la version pour votre site, YouTube et vos mails.",
          },
          {
            h3: "Les versions verticales",
            text: "Quelques dizaines de secondes en 9:16 pour Instagram, TikTok ou LinkedIn, montées pour attirer l'œil dès la première seconde. Ce n'est pas un simple recadrage : chaque version est pensée pour son format.",
          },
          {
            h3: "Un premier montage rapide",
            text: "Un événement perd de sa valeur à mesure que le temps passe. Je peux livrer rapidement un premier montage court pour vos réseaux, puis la version complète un peu plus tard.",
          },
        ],
      },
      {
        h2: "Comment je construis un aftermovie",
        paragraphs: [
          "Tout commence par une discussion : le public visé, le ton souhaité, les moments à ne pas manquer, la musique qui vous ressemble. Sur place, je me déplace avec un matériel léger pour rester discret et capter les gestes, les regards et les rires plutôt que des poses. Je filme en 4K avec une caméra Sony FX3, qui se comporte très bien dans les lumières faibles des soirées.",
          "Au montage, je travaille le rythme sur la musique, avec un étalonnage qui donne une unité à des lieux et des lumières très différents. Les musiques que j'utilise sont sous licence ou libres de droits, pour que le film puisse être diffusé partout.",
        ],
      },
      {
        h2: "Des événements que j'ai filmés",
        paragraphs: [
          "J'ai filmé la réception des 35 ans de l'indépendance arménienne à l'Ambassade d'Arménie en France : des salons dorés, des discours, un chœur, des centaines d'invités. J'ai aussi filmé le concert de Grégoire Jokic au Point Éphémère, avec ses lumières colorées et le rythme de la musique à suivre. Ces films sont visibles sur la page « Mon travail ».",
        ],
      },
      {
        h2: "Aftermovie à Paris et partout en France",
        paragraphs: [
          "Je suis basé à Paris et je tourne dans toute la ville et en Île-de-France, ainsi qu'en région et à l'étranger pour des événements plus importants. Je peux aussi réaliser des plans aériens au drone lorsque l'événement a lieu en extérieur et que la zone est autorisée au survol.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien coûte un aftermovie ?",
        answer:
          "Le prix dépend de la durée de présence sur place, du nombre de personnes nécessaires, du montage et des formats livrés. Je travaille sur devis, sans engagement : décrivez-moi votre événement et je vous réponds sous 24 h.",
      },
      {
        question: "Combien de temps faut-il pour recevoir l'aftermovie ?",
        answer:
          "Je peux livrer rapidement un premier montage court pour les réseaux sociaux, puis la version complète un peu plus tard. Le délai exact dépend de la durée de l'événement et du nombre de formats ; nous le fixons ensemble avant le tournage.",
      },
      {
        question: "Quelle différence entre un aftermovie et une captation ?",
        answer:
          "L'aftermovie résume l'ambiance et les temps forts en quelques minutes. La captation filme en entier une conférence ou une prise de parole pour la garder en intégrale. Beaucoup d'événements ont les deux.",
      },
      {
        question: "Pouvez-vous choisir la musique ?",
        answer:
          "Oui. Nous choisissons ensemble une musique sous licence ou libre de droits qui correspond à l'ambiance de votre événement, afin que le film puisse être diffusé sans souci de droits d'auteur.",
      },
    ],
    related: ["video-evenementielle-paris", "captation-conference-paris", "captation-concert-paris", "videaste-paris"],
  },

  {
    slug: "captation-concert-paris",
    kind: "service",
    label: "Captation de concert",
    title: "Captation de concert et live à Paris | Quentin Moulédous",
    description:
      "Captation de concert, live session et soirée musicale à Paris : image cinéma en 4K, lumières maîtrisées, montage et extraits pour les réseaux. Devis sous 24 h.",
    eyebrow: "Concert · Live · Paris",
    h1: "Captation de concert et de live à Paris",
    intro:
      "Un concert se joue une fois, avec une lumière qui change à chaque seconde. Je suis Quentin Moulédous, vidéaste à Paris, et je filme les concerts, live sessions et soirées musicales avec une image cinéma en 4K, pour que le film soit à la hauteur de ce que vivent les artistes et le public.",
    serviceType: "Captation de concert",
    sections: [
      {
        h2: "Filmer la musique : un exercice à part",
        paragraphs: [
          "Un concert se filme dans des conditions difficiles : peu de lumière, des éclairages colorés qui bougent, des artistes qui se déplacent, un public dense. Pour que l'image reste belle, il faut un matériel capable de tenir en faible lumière et une vraie connaissance du rythme : couper sur le temps fort, anticiper le solo, rester sur l'émotion plutôt que sur la technique.",
          "Ma caméra Sony FX3, conçue pour travailler dans les lumières faibles, garde une image propre là où beaucoup de matériels décrochent. Je tourne en 4K, ce qui laisse de la marge au montage pour recadrer et choisir les meilleurs plans.",
        ],
      },
      {
        h2: "Un exemple : Grégoire Jokic au Point Éphémère",
        paragraphs: [
          "J'ai filmé le concert de Grégoire Jokic au Point Éphémère, à Paris. Au programme : un pianiste sous des lumières bleues et rouges, des plans serrés sur le visage et le micro, des plans en plongée sur la scène, le public en contrechamp. Vous pouvez voir ce film sur la page « Mon travail ».",
        ],
      },
      {
        h2: "Les formats que je livre",
        items: [
          {
            h3: "Le film du concert",
            text: "Un montage soigné, de quelques minutes à un set complet selon votre besoin, qui suit la musique et met l'artiste en valeur.",
          },
          {
            h3: "La live session",
            text: "Un morceau ou un set filmé dans de bonnes conditions, avec une image travaillée : parfait pour présenter un artiste à un label, à une salle ou à des organisateurs.",
          },
          {
            h3: "Les extraits pour les réseaux",
            text: "Des formats verticaux courts, montés pour accrocher dès la première seconde, pour Instagram, TikTok ou YouTube Shorts.",
          },
        ],
      },
      {
        h2: "À propos du son",
        paragraphs: [
          "Pour un concert, la meilleure qualité sonore vient en général de la console de la salle ou d'un enregistrement multipiste, et non d'un micro placé sur la caméra. Si un enregistrement existe, je peux le synchroniser avec l'image au montage ; sinon, nous voyons ensemble quelle solution est possible dans votre lieu. Dites-moi ce qui est prévu dès le début : c'est le point qui fait le plus la différence entre une belle image et un vrai film de concert.",
        ],
      },
      {
        h2: "Pour qui ?",
        paragraphs: [
          "Artistes et groupes qui veulent un film de leur concert, salles de concert et organisateurs qui veulent promouvoir leur programmation, labels et producteurs, festivals, associations culturelles. Pour plusieurs angles ou une scène de grande taille, je m'entoure d'un ou plusieurs cadreurs : l'équipe s'ajuste au projet.",
        ],
      },
      {
        h2: "Un vidéaste pour vos concerts à Paris et en Île-de-France",
        paragraphs: [
          "Je suis basé à Paris et j'interviens dans les salles de la capitale et de toute l'Île-de-France. Je me déplace aussi en région. Pour un tournage simple, je peux généralement intervenir sous 48 heures ; pour un concert important, mieux vaut me contacter quelques semaines à l'avance pour préparer ensemble les angles et les lumières.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien coûte la captation d'un concert ?",
        answer:
          "Cela dépend de la durée du concert, du nombre d'angles, de l'équipe nécessaire et du montage souhaité. Je travaille sur devis, sans engagement : décrivez-moi votre projet et je vous réponds sous 24 h.",
      },
      {
        question: "Pouvez-vous filmer dans une salle très sombre ?",
        answer:
          "Oui. Ma caméra Sony FX3 est conçue pour travailler en faible lumière. Dans une salle sombre, l'important est surtout de connaître à l'avance les lumières prévues : plus j'en sais, mieux je prépare le tournage.",
      },
      {
        question: "Qui s'occupe du son ?",
        answer:
          "Le plus souvent, on récupère un enregistrement de la console ou un multipiste, que je synchronise avec l'image au montage. Si ce n'est pas possible, nous cherchons une solution adaptée à votre lieu avant le tournage.",
      },
      {
        question: "Peut-on obtenir des extraits courts pour les réseaux sociaux ?",
        answer:
          "Oui. En plus du film principal, je peux monter des extraits verticaux courts pour Instagram, TikTok ou YouTube Shorts, pensés pour ce format.",
      },
    ],
    related: ["aftermovie-paris", "video-evenementielle-paris", "videaste-paris", "captation-conference-paris"],
  },

  {
    slug: "film-institutionnel-paris",
    kind: "service",
    label: "Film institutionnel",
    title: "Film institutionnel à Paris | Vidéaste freelance",
    description:
      "Film institutionnel à Paris : présentation d'organisation, institution, association, ambassade ou collectivité. Image sobre et précise, un seul interlocuteur.",
    eyebrow: "Institutionnel · Paris",
    h1: "Film institutionnel à Paris : présenter votre organisation avec justesse",
    intro:
      "Un film institutionnel représente une organisation devant ses publics : partenaires, citoyens, membres, financeurs. Il doit être juste, sobre et fidèle à ce que vous êtes. Je suis Quentin Moulédous, vidéaste freelance à Paris, et j'ai travaillé notamment pour l'Ambassade d'Arménie en France : je connais le sérieux et la précision que demande ce type de film.",
    serviceType: "Film institutionnel",
    sections: [
      {
        h2: "Qu'est-ce qu'un film institutionnel ?",
        paragraphs: [
          "Un film institutionnel présente une organisation, son action, ses valeurs et ses équipes. Il n'a pas le ton d'une publicité : il informe, il rassure, il construit la confiance. Il s'adresse à des publics différents (partenaires, élus, adhérents, candidats) et doit parler à chacun sans trahir l'image de l'organisation.",
        ],
      },
      {
        h2: "Pour quelles organisations ?",
        items: [
          {
            h3: "Institutions et ambassades",
            text: "Réceptions officielles, commémorations, discours, présentations d'actions : une image sobre et respectueuse du protocole, avec un montage qui reste fidèle aux intentions de l'institution.",
          },
          {
            h3: "Collectivités, associations et fondations",
            text: "Présenter une mission, rendre compte d'une action, remercier des partenaires, recruter des bénévoles ou convaincre des financeurs : des films qui donnent un visage à l'organisation.",
          },
          {
            h3: "Écoles, universités et fédérations",
            text: "Portes ouvertes, présentation d'un cursus, témoignages d'étudiants ou de membres : des films qui racontent la vie d'un lieu et d'une communauté.",
          },
          {
            h3: "Entreprises à mission et organisations professionnelles",
            text: "Présentation de la démarche, des engagements et de l'équipe, avec un ton plus institutionnel que commercial.",
          },
        ],
      },
      {
        h2: "Une façon de travailler adaptée aux institutions",
        paragraphs: [
          "Un film institutionnel suit souvent un circuit de validation : plusieurs personnes relisent, plusieurs services donnent leur avis. Je le prévois dès le départ avec des allers-retours clairs et un interlocuteur unique côté montage, pour que les retours convergent plutôt que de se contredire.",
          "Le respect des personnes filmées compte beaucoup : je reste discret pendant les événements officiels, je peux vous conseiller sur les accords d'image à prévoir, et je peux signer un accord de confidentialité si votre projet n'est pas encore public. Les musiques que j'utilise sont sous licence ou libres de droits, pour que le film puisse être diffusé partout.",
        ],
      },
      {
        h2: "Un film institutionnel, de la préparation à la livraison",
        items: [
          {
            h3: "Échange et cadrage",
            text: "Nous définissons les publics, le message et le ton, ainsi que les formats de diffusion : site, réseaux sociaux, projection en salle, rapport d'activité.",
          },
          {
            h3: "Préparation",
            text: "J'écris le déroulé et le plan de tournage, je repère les lieux si nécessaire et je prépare l'équipe adaptée à l'ampleur du projet.",
          },
          {
            h3: "Tournage et montage",
            text: "Tournage en 4K avec mon propre matériel, montage soigné, étalonnage et son, avec des allers-retours jusqu'à validation.",
          },
        ],
      },
      {
        h2: "Un vidéaste freelance pour vos films institutionnels à Paris",
        paragraphs: [
          "Je suis basé à Paris et je tourne dans toute l'Île-de-France, ainsi qu'en région et à l'étranger pour les projets plus importants. Vous pouvez voir mon film pour l'Ambassade d'Arménie en France sur la page « Mon travail ».",
        ],
      },
    ],
    faq: [
      {
        question: "Quelle différence entre film institutionnel et film d'entreprise ?",
        answer:
          "Le film d'entreprise présente souvent une activité commerciale et vise à convaincre des clients. Le film institutionnel présente une organisation, son action et ses valeurs, avec un ton plus sobre et informatif, pour des publics plus variés (partenaires, institutions, membres).",
      },
      {
        question: "Combien coûte un film institutionnel ?",
        answer:
          "Cela dépend de la durée, du nombre de jours de tournage, de l'équipe nécessaire et du montage. Je travaille sur devis, sans engagement : décrivez-moi votre projet et je vous réponds sous 24 h.",
      },
      {
        question: "Gérez-vous les validations avec plusieurs interlocuteurs ?",
        answer:
          "Oui. Je prévois un circuit de validation clair dès le départ, avec des allers-retours au montage, pour regrouper les retours de plusieurs personnes et livrer un film qui convient à tous.",
      },
      {
        question: "Pouvez-vous filmer dans plusieurs langues ?",
        answer:
          "Parlons-en dès le premier échange : la langue des prises de parole change l'organisation du tournage et du montage, et nous voyons ensemble comment la prévoir, sous-titres compris.",
      },
    ],
    related: ["video-entreprise-paris", "video-evenementielle-paris", "videaste-paris", "production-video-paris"],
  },

  {
    slug: "video-drone-paris",
    kind: "service",
    label: "Pilote de drone",
    title: "Pilote de drone à Paris : prises de vue aériennes en 4K",
    description:
      "Pilote de drone à Paris : images aériennes en 4K pour immobilier, événement, fiction, documentaire. Télépilote catégorie ouverte A1/A3, exploitant UAS enregistré.",
    eyebrow: "Drone · Paris",
    h1: "Pilote de drone à Paris : prises de vue aériennes en 4K",
    intro:
      "Une vue aérienne change la façon de comprendre un lieu : un bâtiment dans son quartier, un événement dans sa foule, une scène dans son décor. Je suis Quentin Moulédous, vidéaste à Paris, télépilote en catégorie ouverte A1/A3 et exploitant UAS enregistré. Je réalise vos prises de vue aériennes avec un DJI Mavic 3 Classic, en 4K, dans le respect de la réglementation, pour l'immobilier, les événements, la fiction, le documentaire et les films d'entreprise.",
    serviceType: "Prise de vue par drone",
    sections: [
      {
        h2: "Un pilote de drone qui est aussi vidéaste",
        paragraphs: [
          "Beaucoup de prestataires drone volent, d'autres filment ; ici, c'est la même personne. Le pilote sait ce que le montage attend : des plans qui s'enchaînent avec ceux tournés au sol, une lumière cohérente, un rythme qui sert l'histoire. Vous n'avez pas à coordonner deux intervenants, et les plans aériens sont pensés dès le départ pour s'intégrer au film plutôt que d'être ajoutés après coup.",
          "Je filme en 4K avec le DJI Mavic 3 Classic, dont l'image reste nette et stable. Les plans aériens ne remplacent pas les plans au sol : ils les complètent et donnent de l'ampleur au récit.",
        ],
      },
      {
        h2: "Télépilote en catégorie ouverte A1/A3, exploitant UAS enregistré",
        paragraphs: [
          "Je suis exploitant UAS enregistré et télépilote en catégorie ouverte, sous-catégories A1/A3. La catégorie ouverte regroupe les vols à faible risque, encadrés par des règles claires : hauteur maximale de 120 mètres, vol à vue, distance de sécurité avec les personnes non impliquées, et pas de survol de rassemblements de personnes.",
          "Cela me permet de voler en respectant le cadre légal, mais cela ne suffit pas pour voler partout : certaines zones (agglomérations denses, abords d'aéroports, sites sensibles) imposent en plus des autorisations spécifiques. C'est le cas de Paris. Je vérifie la zone avant chaque vol et je ne vous propose des plans aériens que lorsque c'est autorisé.",
        ],
      },
      {
        h2: "Les usages les plus fréquents",
        items: [
          {
            h3: "Immobilier et architecture",
            text: "Façades, toitures, environnement et quartier : des plans qui situent le bien et en montrent l'ampleur, pour une annonce, un promoteur ou un architecte.",
            href: "/video-immobilier-architecture-paris/",
          },
          {
            h3: "Événements en extérieur",
            text: "Festivals, cérémonies, inaugurations, mariages en domaine : le plan large qui donne de l'ampleur à l'événement, sans jamais survoler la foule.",
            href: "/video-evenementielle-paris/",
          },
          {
            h3: "Fiction et documentaire",
            text: "Plans d'établissement, révélations de paysage, transitions entre deux scènes : le drone ouvre des perspectives cinématographiques que le sol ne permet pas.",
            href: "/realisateur-paris/",
          },
          {
            h3: "Hôtels, lieux de réception et sites touristiques",
            text: "Présenter un lieu avec ses jardins, ses accès et son environnement, pour donner envie de venir.",
          },
          {
            h3: "Chantiers et sites d'entreprise",
            text: "Suivre l'avancement d'un chantier dans le temps, montrer un site industriel ou un campus dans son ensemble.",
          },
        ],
      },
      {
        h2: "Les plans aériens que je réalise",
        paragraphs: [
          "Selon le lieu et les autorisations, je peux réaliser plusieurs types de plans, que nous choisissons ensemble au moment de la préparation :",
        ],
        items: [
          {
            h3: "Le plan d'ensemble",
            text: "Un grand plan stable qui situe le lieu dans son environnement : le point de départ de beaucoup de films.",
          },
          {
            h3: "Le travelling avant ou arrière",
            text: "Un mouvement fluide qui avance vers un bâtiment ou s'en éloigne pour le révéler.",
          },
          {
            h3: "L'orbite",
            text: "Un mouvement circulaire autour d'un bâtiment ou d'un sujet, très utilisé en immobilier et en architecture.",
          },
          {
            h3: "Le plan de révélation",
            text: "La caméra monte ou avance pour dévoiler peu à peu un paysage ou un bâtiment derrière un obstacle.",
          },
          {
            h3: "La plongée verticale",
            text: "Une vue de dessus, graphique et très lisible, pour montrer un plan de masse, un jardin ou une organisation spatiale.",
          },
        ],
      },
      {
        h2: "Drone à Paris : ce qu'il faut savoir",
        paragraphs: [
          "À Paris intra-muros, le survol est très encadré et nécessite en général une autorisation préalable, et d'autres secteurs de l'Île-de-France ont leurs propres contraintes : zones aéroportuaires, sites sensibles, rassemblements de personnes. Ces démarches prennent du temps : plus vous me prévenez tôt, plus nous avons de marge.",
          "Si le drone n'est pas possible à l'endroit voulu, d'autres solutions existent : plans depuis un toit-terrasse, une fenêtre ou une perche, qui donnent déjà une belle idée du lieu. Je vous le dis franchement au moment de la préparation, sans promesse que je ne pourrais pas tenir.",
        ],
      },
      {
        h2: "Comment se passe une prise de vue par drone",
        items: [
          {
            h3: "Vérification de la zone",
            text: "Nous identifions le lieu et je vérifie les restrictions de vol et les autorisations nécessaires.",
          },
          {
            h3: "Préparation du vol",
            text: "Je prépare les plans souhaités, les trajectoires et les créneaux horaires (lumière, météo, présence du public).",
          },
          {
            h3: "Le vol et le tournage",
            text: "Vol en toute sécurité, avec des plans stables et propres, en veillant à ne gêner personne.",
          },
          {
            h3: "Intégration au montage",
            text: "Les plans aériens sont étalonnés pour s'accorder avec le reste du film et livrés aux formats dont vous avez besoin.",
          },
        ],
      },
      {
        h2: "Pilote de drone en Île-de-France et dans toute la France",
        paragraphs: [
          "Je suis basé à Paris et je me déplace en Île-de-France et en région avec mon matériel. Pour un projet important, par exemple un programme immobilier, un hôtel, un tournage de fiction ou un événement de grande ampleur, parlons-en suffisamment tôt pour préparer les autorisations.",
        ],
      },
    ],
    faq: [
      {
        question: "Êtes-vous habilité à piloter un drone ?",
        answer:
          "Oui. Je suis exploitant UAS enregistré et télépilote en catégorie ouverte, sous-catégories A1/A3. Pour les zones qui exigent en plus une autorisation spécifique, comme Paris, je fais les démarches avant le vol.",
      },
      {
        question: "Peut-on filmer par drone dans Paris ?",
        answer:
          "Paris intra-muros est une zone très encadrée : le survol nécessite en général une autorisation préalable. Je vérifie systématiquement la zone avant de vous proposer des plans aériens, et je ne les réalise que lorsqu'ils sont autorisés.",
      },
      {
        question: "Peut-on survoler un événement ou une foule ?",
        answer:
          "Non. En catégorie ouverte, le survol de rassemblements de personnes est interdit. Je filme les événements en extérieur depuis une position sûre, sans survoler le public, ce qui donne tout de même de beaux plans d'ensemble.",
      },
      {
        question: "Quel drone utilisez-vous ?",
        answer:
          "Un DJI Mavic 3 Classic, qui filme en 4K avec une image stable et nette.",
      },
      {
        question: "Combien coûte une prise de vue par drone ?",
        answer:
          "Cela dépend du lieu, du nombre de plans, des autorisations à obtenir et du montage. Je travaille sur devis, sans engagement : décrivez-moi votre projet et je vous réponds sous 24 h.",
      },
      {
        question: "Que se passe-t-il si la météo est mauvaise ?",
        answer:
          "Le vent fort ou la pluie peuvent empêcher de voler en sécurité. Dans ce cas, nous décalons le vol à un autre créneau. Prévoir une marge dans le calendrier évite les mauvaises surprises.",
      },
    ],
    related: ["video-immobilier-architecture-paris", "video-evenementielle-paris", "realisateur-paris", "videaste-paris", "aftermovie-paris", "cadreur-paris"],
  },

  {
    slug: "cadreur-paris",
    kind: "service",
    label: "Cadreur freelance",
    title: "Cadreur freelance à Paris : fiction, documentaire, événement",
    description:
      "Cadreur freelance à Paris pour vos tournages de fiction, documentaire, interviews, événements et captations. Caméra Sony FX3 en 4K, son soigné, drone.",
    eyebrow: "Cadreur · Paris",
    h1: "Cadreur freelance à Paris",
    intro:
      "Vous avez un tournage et vous cherchez quelqu'un derrière la caméra ? Je suis Quentin Moulédous, cadreur freelance à Paris : je viens avec ma caméra Sony FX3 en 4K et mon matériel son pour filmer vos tournages de fiction et de documentaire, vos interviews, événements, captations et reportages, en agence, en production ou en direct pour votre structure.",
    serviceType: "Cadreur",
    sections: [
      {
        h2: "Un cadreur freelance, pour qui ?",
        paragraphs: [
          "Je travaille avec des réalisateurs et des productions de fiction et de documentaire qui cherchent un cadreur disponible, avec des entreprises qui ont un projet vidéo et besoin d'un opérateur, avec des agences et des sociétés de production qui cherchent un renfort fiable pour un tournage, et avec des créateurs de contenu, des associations et des institutions qui veulent une image professionnelle sans monter une équipe. Vous gardez la main sur le projet et sur le montage si vous le souhaitez : je m'adapte à votre organisation.",
        ],
      },
      {
        h2: "Ce que je filme comme cadreur",
        items: [
          {
            h3: "Fiction",
            text: "Je suis aussi cadreur sur des tournages de fiction, aux côtés d'un réalisateur : courts métrages, fictions de marque, scènes écrites. Je suis disponible pour ces projets et je sais travailler à partir d'un découpage, d'une intention de mise en scène et d'un plan de travail.",
            href: "/realisateur-paris/",
          },
          {
            h3: "Documentaire",
            text: "Je suis également disponible comme cadreur en documentaire : savoir se faire discret, composer avec la lumière existante, rester prêt pour l'imprévu et suivre des personnes réelles dans leur quotidien.",
            href: "/realisateur-paris/",
          },
          {
            h3: "Interviews et témoignages",
            text: "Un cadre soigné, une lumière adaptée, un son propre : la base d'une bonne interview. Je mets la personne à l'aise pour obtenir une parole sincère.",
          },
          {
            h3: "Événements, conférences et captations",
            text: "Des plans stables et lisibles, y compris dans des lumières faibles, avec une grande réactivité pour ne pas rater les moments forts.",
          },
          {
            h3: "Reportages et contenus de marque",
            text: "Coulisses, présentation de produits, séries pour les réseaux sociaux, tournages sur site : un matériel léger pour filmer vite et bien.",
          },
          {
            h3: "Plans de coupe et illustrations",
            text: "Des plans soignés pour illustrer un sujet, enrichir un montage existant ou compléter un film déjà tourné.",
          },
        ],
      },
      {
        h2: "Le matériel que j'apporte",
        paragraphs: [
          "Je viens avec ma propre caméra Sony FX3, qui filme en 4K et se comporte très bien dans les lumières faibles, ainsi qu'un matériel de prise de son dédié. Pour les plans aériens, je dispose d'un drone DJI Mavic 3 Classic, que j'utilise lorsque la zone est autorisée au survol. Si vous avez besoin d'un équipement spécifique (optiques particulières, éclairage, machinerie), dites-le-moi au moment de la demande : je vous dis ce que je peux fournir et ce qu'il faudrait louer.",
        ],
      },
      {
        h2: "Comment travailler avec moi",
        items: [
          {
            h3: "Le brief",
            text: "Vous me décrivez le tournage : durée, lieu, sujet, personnes à filmer, usage final. Je vous réponds sous 24 h avec ma disponibilité et une proposition.",
          },
          {
            h3: "Le jour J",
            text: "J'arrive en avance pour installer le cadre et le son, je filme et je protège vos rushes. Pour un tournage simple, je peux généralement intervenir sous 48 heures.",
          },
          {
            h3: "La suite",
            text: "Selon votre besoin, je livre uniquement les rushes triés, ou je prends aussi en charge le montage. Vous choisissez.",
          },
        ],
      },
      {
        h2: "Cadreur à Paris, en Île-de-France et en déplacement",
        paragraphs: [
          "Je suis basé à Paris et je tourne dans toute la capitale et en Île-de-France, pour des projets de fiction comme de documentaire. Je me déplace aussi en région et à l'étranger lorsque le projet l'exige. Parlez-moi de votre tournage, même s'il est à la dernière minute : je vous dis simplement si je suis disponible.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien coûte un cadreur freelance à Paris ?",
        answer:
          "Cela dépend de la durée de tournage, du matériel nécessaire et de ce qui est inclus (rushes seuls ou montage). Je travaille sur devis, sans engagement : décrivez-moi votre projet et je vous réponds sous 24 h.",
      },
      {
        question: "Êtes-vous disponible comme cadreur pour la fiction et le documentaire ?",
        answer:
          "Oui, je suis cadreur aussi bien sur des tournages de fiction que de documentaire, et disponible pour ces projets. Décrivez-moi le film, les dates et votre réalisateur ou votre équipe : je vous réponds sous 24 h.",
      },
      {
        question: "Fournissez-vous le matériel ?",
        answer:
          "Oui, je viens avec ma caméra Sony FX3 et un matériel de prise de son. Pour un besoin spécifique, comme un éclairage particulier, nous voyons ensemble ce qui est nécessaire.",
      },
      {
        question: "Peut-on vous engager seulement pour filmer, sans le montage ?",
        answer:
          "Oui. Je peux n'assurer que le tournage et vous livrer les rushes triés, ou prendre en charge le montage en plus. C'est vous qui choisissez.",
      },
      {
        question: "Pouvez-vous intervenir à la dernière minute ?",
        answer:
          "Pour un tournage simple, je peux généralement intervenir sous 48 heures, selon ma disponibilité. N'hésitez pas à me contacter : je vous dis tout de suite si c'est possible.",
      },
    ],
    related: ["videaste-paris", "production-video-paris", "captation-conference-paris", "realisateur-paris"],
  },
];
