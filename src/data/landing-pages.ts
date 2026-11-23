// Search landing pages (French only): one page per thing people actually type into Google
// ("vidéaste paris", "vidéaste mariage paris", ...). Each carries its own, genuinely distinct
// copy so that no two pages answer the same query. Only facts already true of the studio are
// used here: Sony FX3, DJI Mavic 3 Classic (registered UAS operator), 4K, sole contact point,
// quote on request, reply within 24 h.

export interface LandingItem {
  h3: string;
  text: string;
  href?: string;
}

export interface LandingSection {
  h2: string;
  paragraphs?: string[];
  items?: LandingItem[];
}

export interface LandingFaq {
  question: string;
  answer: string;
}

export interface LandingPage {
  slug: string;
  /** French slug of the page this one mirrors; defaults to `slug` (set on English pages). */
  id?: string;
  /** "service" pages sell a prestation; "guide" pages answer a pre-purchase question (prices, formats). */
  kind?: "service" | "guide";
  /** Short label used in menus, footer and cross-links. */
  label: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  serviceType: string;
  sections: LandingSection[];
  faq: LandingFaq[];
  related: string[];
}

export const landingPages: LandingPage[] = [
  {
    slug: "videaste-paris",
    label: "Vidéaste à Paris",
    title: "Vidéaste freelance à Paris | Quentin Moulédous",
    description:
      "Quentin Moulédous, vidéaste freelance à Paris : événementiel, entreprise, mariage, immobilier. Tournage en 4K, un seul interlocuteur, devis sous 24 h.",
    eyebrow: "Vidéaste · Paris",
    h1: "Vidéaste freelance à Paris",
    intro:
      "Je suis Quentin Moulédous, vidéaste et réalisateur indépendant basé à Paris. Je filme pour les entreprises, les institutions, les marques et les particuliers : événements, films d'entreprise, mariages, immobilier et récits documentaires. Vous parlez à une seule personne, du premier échange à la livraison du film, et je tourne avec mon propre matériel en 4K.",
    serviceType: "Vidéaste",
    sections: [
      {
        h2: "Un vidéaste indépendant, du premier échange à la livraison",
        paragraphs: [
          "Un vidéaste, c'est celui qui filme, mais c'est aussi celui qui comprend ce que vous voulez dire. Je commence toujours par là : à qui s'adresse le film, où sera-t-il diffusé, et que doit-il provoquer chez celui qui le regarde ? Ces trois questions décident du cadre, du rythme et de la durée bien plus que le choix de la caméra.",
          "En travaillant seul ou en petite équipe, je garde la maîtrise de toute la chaîne : repérage, tournage, montage, étalonnage et son. Vous n'avez pas d'intermédiaire à convaincre, pas de chargé de projet qui traduit vos demandes à quelqu'un d'autre, et pas de marge d'agence répercutée sur le devis. Selon l'ampleur du tournage, je m'entoure d'un cadreur, d'un preneur de son ou d'un monteur de confiance : l'équipe s'ajuste à chaque projet, elle n'est jamais figée.",
        ],
      },
      {
        h2: "Les films que je réalise à Paris",
        paragraphs: [
          "Chaque type de film demande une approche différente. Voici ce que je fais le plus souvent, avec une page dédiée pour chacun.",
        ],
        items: [
          {
            h3: "Vidéo événementielle",
            text: "Conférences, lancements, soirées, cérémonies : un aftermovie rythmé ou une captation complète, livré rapidement. J'ai par exemple filmé la réception des 35 ans de l'indépendance arménienne à l'Ambassade d'Arménie en France.",
            href: "/video-evenementielle-paris/",
          },
          {
            h3: "Film d'entreprise",
            text: "Présentation de votre société, portrait de dirigeant, témoignage client ou contenu pour vos réseaux : des images qui représentent fidèlement votre identité.",
            href: "/video-entreprise-paris/",
          },
          {
            h3: "Film de mariage",
            text: "Un mariage ne se refait pas. Je reste discret toute la journée pour capter les émotions telles qu'elles arrivent.",
            href: "/videaste-mariage-paris/",
          },
          {
            h3: "Immobilier et architecture",
            text: "Visite filmée, plans aériens au drone et plans de détail pour une annonce, un promoteur ou un architecte.",
            href: "/video-immobilier-architecture-paris/",
          },
          {
            h3: "Documentaire, fiction et interviews",
            text: "Des récits construits à partir de personnes et de situations réelles, ou mis en scène : la réalisation au sens plein du terme.",
            href: "/realisateur-paris/",
          },
        ],
      },
      {
        h2: "Comment se passe un tournage avec moi",
        items: [
          {
            h3: "Un premier échange",
            text: "Vous m'écrivez quelques lignes sur votre projet, avec le formulaire de devis ou par e-mail. Je vous réponds sous 24 h, nous en parlons, et je vous fais une proposition claire : ce qui est inclus, le calendrier, le budget.",
          },
          {
            h3: "La préparation",
            text: "Nous fixons le message, le ton et les formats de livraison. Pour un lieu inhabituel, un extérieur ou un tournage avec contraintes techniques, je fais un repérage en amont afin d'anticiper la lumière, le son et la logistique.",
          },
          {
            h3: "Le tournage",
            text: "Je m'adapte à l'ampleur du projet : tournage solo agile ou petite équipe, toujours avec mon matériel professionnel. Pour un tournage simple, je peux généralement intervenir sous 48 heures.",
          },
          {
            h3: "Montage et livraison",
            text: "Je soigne le rythme, l'étalonnage et le son, avec des allers-retours clairs jusqu'à votre validation. Je vous livre ensuite le film dans les formats utiles : 16:9 pour le web et YouTube, vertical et carré pour les réseaux sociaux.",
          },
        ],
      },
      {
        h2: "Matériel et image : tout est tourné en 4K",
        paragraphs: [
          "Je filme avec une caméra cinéma Sony FX3, sur laquelle je soigne le cadrage, la lumière et l'étalonnage plutôt que de me contenter d'une simple captation. Pour les vues aériennes, je suis exploitant UAS enregistré et télépilote en catégorie ouverte A1/A3, et je vole avec un DJI Mavic 3 Classic, sous réserve que la zone soit autorisée au survol. Le son est enregistré avec un matériel dédié, parce qu'une belle image avec un mauvais son ne se rattrape pas au montage.",
          "Les musiques que j'utilise sont sous licence ou libres de droits, pour que votre film puisse être diffusé sans problème, y compris sur les plateformes qui filtrent la musique protégée. Si votre projet n'est pas encore public, je peux signer un accord de confidentialité avant de commencer.",
        ],
      },
      {
        h2: "Vidéaste à Paris, en Île-de-France et partout en France",
        paragraphs: [
          "Je suis basé à Paris et j'interviens dans toute la ville, des quartiers d'affaires comme La Défense aux lieux événementiels du centre, ainsi que dans toute l'Île-de-France : Boulogne-Billancourt, Saint-Denis, Versailles, Pantin, Roissy. Pour les projets plus ambitieux, je me déplace aussi en région et à l'international. Où que se trouve votre tournage, parlez-m'en.",
        ],
      },
      {
        h2: "Comment bien choisir son vidéaste ?",
        paragraphs: [
          "Avant de comparer les tarifs, regardez les films complets, pas seulement les extraits : l'image est-elle cohérente d'un plan à l'autre, le rythme tient-il jusqu'au bout, et le film ressemble-t-il à ce que vous cherchez ? Un vidéaste qui a déjà tourné un projet proche du vôtre, par le format ou par le ton, vous évitera des mauvaises surprises.",
          "Posez ensuite des questions concrètes. Qui fait le montage ? Combien d'allers-retours sont prévus ? Quels formats sont livrés ? Les musiques sont-elles libres de droits ? Combien de temps conserve-t-on les rushs ? Un devis sérieux répond à toutes ces questions avant le tournage, pas après.",
        ],
      },
      {
        h2: "Vidéaste freelance ou agence : quelle différence ?",
        paragraphs: [
          "Une agence a de vraies forces : une grande équipe, des moyens lourds, des projets à très grande échelle. Elle a aussi un coût, avec des intermédiaires entre vous et celui qui filme. Un vidéaste freelance vous donne un seul interlocuteur, une vraie souplesse sur le calendrier et le budget, et la certitude que la personne qui comprend votre projet est celle qui le tourne et le monte. Pour la plupart des films d'entreprise, d'événement, de mariage ou d'immobilier, c'est la solution la plus directe. Et si votre projet demande plus de bras, je constitue l'équipe adaptée.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien coûte un vidéaste à Paris ?",
        answer:
          "Cela dépend de la durée de tournage, du lieu, du nombre de personnes nécessaires et du travail de montage. Je ne fixe donc pas de tarif à l'avance : tout se fait sur devis, sans engagement. Envoyez-moi les grandes lignes de votre projet et je vous réponds sous 24 h avec une proposition adaptée.",
      },
      {
        question: "Dans quels délais un vidéaste peut-il intervenir ?",
        answer:
          "Pour un tournage simple, je peux généralement intervenir sous 48 heures. Pour un projet plus important, comme un documentaire ou un événement avec plusieurs intervenants, mieux vaut prévoir quelques semaines pour bien le préparer.",
      },
      {
        question: "Pouvez-vous filmer par drone à Paris ?",
        answer:
          "Oui, je suis exploitant UAS enregistré et télépilote en catégorie ouverte A1/A3, et je filme avec un DJI Mavic 3 Classic. Une grande partie de Paris est soumise à des restrictions de survol : je vérifie la zone avant chaque vol et je ne le propose que lorsque c'est autorisé.",
      },
      {
        question: "Quels formats de vidéo sont livrés ?",
        answer:
          "Selon vos usages : 16:9 pour le web et YouTube, vertical 9:16 pour les Stories, Reels et TikTok, et carré pour le fil Instagram. Chaque version est montée pour son format, pas simplement recadrée.",
      },
      {
        question: "Puis-je voir des exemples avant de m'engager ?",
        answer:
          "Bien sûr. Vous pouvez parcourir mes films sur la page « Mon travail », et selon votre projet, je peux aussi vous présenter des exemples plus ciblés lors de notre premier échange.",
      },
    ],
    related: ["video-evenementielle-paris", "video-entreprise-paris", "videaste-mariage-paris", "video-immobilier-architecture-paris", "realisateur-paris", "aftermovie-paris", "captation-conference-paris", "captation-concert-paris", "film-institutionnel-paris", "video-drone-paris", "cadreur-paris", "production-video-paris", "tarifs-video-paris"],
  },

  {
    slug: "realisateur-paris",
    label: "Réalisateur à Paris",
    title: "Réalisateur à Paris, documentaire, fiction | Spotlight Studio",
    description:
      "Réalisateur indépendant à Paris, Quentin Moulédous réalise documentaires, films de fiction, interviews et films de marque. De l'écriture au montage, en 4K.",
    eyebrow: "Réalisateur · Paris",
    h1: "Réalisateur à Paris : documentaire, fiction et films de marque",
    intro:
      "Je réalise des films qui racontent quelque chose : un documentaire sur des personnes réelles, une scène de fiction, un portrait, un film de marque pensé comme un récit. Je suis Quentin Moulédous, réalisateur indépendant basé à Paris, scénariste, chef opérateur et monteur de mes films, et je travaille volontiers en petite équipe.",
    serviceType: "Réalisateur",
    sections: [
      {
        h2: "Réalisateur indépendant : écrire, tourner et monter",
        paragraphs: [
          "La réalisation, c'est l'ensemble des décisions qui font qu'un film a un point de vue : ce qu'on montre, ce qu'on laisse hors champ, le moment où l'on coupe. Je prends en charge l'écriture, la mise en scène, l'image et le montage, ce qui me permet de garder une vision cohérente d'un bout à l'autre.",
          "Le genre change moins qu'on ne le pense. Qu'il s'agisse d'un documentaire, d'une fiction ou d'un film de marque, je cherche d'abord à créer un vrai lien avec les personnes que je filme, pour transmettre l'émotion plus directement qu'un tournage mené à distance ne le pourrait jamais.",
        ],
      },
      {
        h2: "Ce que je réalise",
        items: [
          {
            h3: "Documentaires",
            text: "Des films construits à partir de personnes et de situations réelles. Il faut savoir se faire discret, composer avec la lumière existante et rester disponible pour l'imprévu. Je m'adapte à chaque prise de parole pour qu'elle sonne juste.",
          },
          {
            h3: "Fiction",
            text: "Des scènes écrites et mises en scène, du court métrage à la fiction de marque. L'écriture, le découpage et la direction des comédiens comptent autant que l'image : chaque choix de cadre doit raconter quelque chose.",
          },
          {
            h3: "Interviews et portraits",
            text: "L'interview est un exercice à part : mettre la personne à l'aise, capter une parole sincère, puis monter sans jamais trahir ce qu'elle a voulu dire. Portrait de dirigeant, témoignage, paroles d'habitants : l'objectif est le même.",
            href: "/video-entreprise-paris/",
          },
          {
            h3: "Films de marque et publicité",
            text: "Un film court et rythmé, pensé pour capter l'attention en quelques secondes : spots pour des marques de sport, de mode ou de lifestyle, pour les réseaux comme pour vos campagnes.",
          },
        ],
      },
      {
        h2: "Mon approche de la réalisation",
        items: [
          {
            h3: "J'entre dans votre monde",
            text: "Avant d'écrire ou de tourner quoi que ce soit, je prends le temps de comprendre ce que vous cherchez vraiment à dire, et qui vous voulez atteindre.",
          },
          {
            h3: "Nous construisons la vision ensemble",
            text: "Je vous consulte. Ce que vous voulez et ce dont vous avez besoin façonne le film autant que mon propre regard : rien n'est livré à distance.",
          },
          {
            h3: "Je reste jusqu'au bout",
            text: "Vous ne changez pas d'interlocuteur entre le premier pitch et la livraison. J'accompagne le projet jusqu'à la fin pour que le film reste fidèle à ce que nous avons convenu.",
          },
        ],
      },
      {
        h2: "Une production à petite équipe",
        paragraphs: [
          "Je travaille en petite équipe, avec mon propre matériel : une caméra cinéma Sony FX3 tournant en 4K, un drone DJI Mavic 3 Classic pour les plans aériens autorisés, et un enregistrement du son soigné. Selon le film, je m'entoure d'un cadreur, d'un preneur de son ou d'un monteur de confiance. Cette façon de travailler garde les coûts raisonnables et laisse de la place à la spontanéité, ce qui compte énormément en documentaire comme en fiction.",
          "Tout reste sous votre contrôle : des allers-retours sont prévus au montage jusqu'à votre validation, les musiques utilisées sont sous licence ou libres de droits, et je peux signer un accord de confidentialité si votre projet n'est pas encore public.",
        ],
      },
      {
        h2: "Réalisateur à Paris, disponible partout en France",
        paragraphs: [
          "Je suis basé à Paris et je tourne dans toute l'Île-de-France. Je me déplace aussi en région et à l'international quand le projet le justifie. Un documentaire se prépare en amont, surtout lorsqu'il faut gagner la confiance de ceux qu'on filme : je prends donc le temps nécessaire pour les repérages et les premiers échanges.",
        ],
      },
      {
        h2: "Comment choisir un réalisateur pour son projet ?",
        paragraphs: [
          "Regardez la façon dont il raconte, plus que la qualité technique des images. Un bon réalisateur sait pourquoi il garde un plan et pourquoi il en coupe un autre. Demandez-lui comment il envisage votre projet avant même de parler de budget : sa réponse en dit long sur sa manière de travailler.",
          "Vérifiez aussi que la personne qui vous répond sera celle qui réalise : sur un film court, c'est la meilleure garantie de cohérence. C'est ce que je propose, avec un seul interlocuteur de bout en bout.",
        ],
      },
    ],
    faq: [
      {
        question: "Quelle est la différence entre un vidéaste et un réalisateur ?",
        answer:
          "Le vidéaste filme et monte, souvent à partir d'un brief précis. Le réalisateur porte en plus un point de vue : il écrit ou structure le récit, dirige les personnes filmées et décide de la forme finale du film. Je fais les deux, selon ce que demande votre projet.",
      },
      {
        question: "Réalisez-vous des films documentaires sur commande ?",
        answer:
          "Oui. Un documentaire se construit avec vous : nous définissons le sujet, les personnes à filmer et le ton, puis je prépare le tournage avec des repérages et des échanges en amont. Pour ce type de projet, prévoyez quelques semaines de préparation.",
      },
      {
        question: "Pouvez-vous écrire le scénario ?",
        answer:
          "Oui, je suis aussi scénariste. Pour une fiction courte ou un film de marque, j'écris et je découpe moi-même, en m'appuyant sur ce que vous voulez transmettre.",
      },
      {
        question: "Combien coûte la réalisation d'un film ?",
        answer:
          "Tout dépend de la durée, du nombre de jours de tournage, de l'équipe nécessaire et de la postproduction. Je travaille sur devis, sans engagement : décrivez-moi votre projet et je vous réponds sous 24 h avec une proposition adaptée.",
      },
      {
        question: "Les droits des films vous appartiennent-ils ?",
        answer:
          "Les conditions d'utilisation et de cession sont précisées dans le devis, avant le tournage, afin que vous sachiez exactement où et comment vous pourrez diffuser le film.",
      },
    ],
    related: ["videaste-paris", "video-entreprise-paris", "video-evenementielle-paris", "production-video-paris", "film-institutionnel-paris"],
  },

  {
    slug: "video-evenementielle-paris",
    label: "Vidéo événementielle",
    title: "Vidéaste événementiel à Paris : aftermovie, captation",
    description:
      "Vidéaste événementiel à Paris : aftermovie, captation de conférence, soirée ou lancement, livrés rapidement. Quentin Moulédous filme en 4K, devis sous 24 h.",
    eyebrow: "Événementiel · Paris",
    h1: "Vidéaste événementiel à Paris : aftermovie et captation",
    intro:
      "Un événement dure quelques heures et ne se rejoue pas. Je suis Quentin Moulédous, vidéaste à Paris : je capture les moments clés de vos conférences, lancements, soirées et cérémonies, et je livre rapidement un aftermovie ou une captation complète qui fait revivre l'essentiel, pour ceux qui y étaient comme pour ceux qui n'y étaient pas.",
    serviceType: "Vidéaste événementiel",
    sections: [
      {
        h2: "Aftermovie, captation, formats courts : quel film pour votre événement ?",
        paragraphs: [
          "Avant le tournage, nous décidons ensemble de ce que le film doit faire : donner envie de venir à la prochaine édition, remercier les participants, nourrir vos réseaux, garder une trace des interventions. Ce choix détermine tout le reste.",
        ],
        items: [
          {
            h3: "L'aftermovie",
            text: "Un film court et rythmé, de 1 à 3 minutes en général, qui restitue l'ambiance, les visages et les moments forts. C'est le format idéal pour les réseaux sociaux et pour promouvoir l'édition suivante.",
          },
          {
            h3: "La captation complète",
            text: "Une conférence, une table ronde, une intervention ou un discours filmés en entier, avec un son propre. Elle sert à diffuser l'événement en différé ou à le conserver comme archive.",
          },
          {
            h3: "Le teaser et les formats courts",
            text: "Quelques secondes verticales pour Instagram, TikTok ou LinkedIn, montées pour attirer l'œil dès la première seconde, pendant ou juste après l'événement.",
          },
        ],
      },
      {
        h2: "Des événements que j'ai filmés",
        paragraphs: [
          "J'ai filmé la réception des 35 ans de l'indépendance arménienne à l'Ambassade d'Arménie en France : une soirée dans des salons somptueux, avec discours, chœur et invités, où il fallait être partout sans jamais gêner. J'ai aussi filmé le concert de Grégoire Jokic au Point Éphémère, où les lumières colorées changent sans cesse et où l'image doit suivre le rythme de la musique. Vous pouvez voir ces films sur la page « Mon travail ».",
        ],
      },
      {
        h2: "Comment je filme un événement",
        items: [
          {
            h3: "Un repérage avant le jour J",
            text: "Quand c'est possible, je passe dans le lieu avant l'événement pour repérer la lumière, les endroits où me placer et les contraintes de son. C'est ce qui évite les imprévus le jour même.",
          },
          {
            h3: "Discret mais partout",
            text: "Je me déplace avec un matériel léger pour ne pas gêner vos invités ni vos intervenants. Pas de projecteurs envahissants, pas de grosse équipe qui occupe la salle, sauf si le format de l'événement le demande.",
          },
          {
            h3: "Les bons moments, pas seulement les beaux",
            text: "Un regard, un rire, un échange dans un couloir : ce sont souvent ces détails qui font un bon aftermovie. Je reste attentif aux personnes autant qu'au programme.",
          },
          {
            h3: "Une livraison rapide",
            text: "Un événement perd de sa valeur à mesure que le temps passe. Je peux livrer en priorité un premier montage rapide pour vos réseaux, puis la version complète, aux formats dont vous avez besoin.",
          },
        ],
      },
      {
        h2: "Les types d'événements que je filme à Paris",
        paragraphs: [
          "Conférences et séminaires, lancements de produit, soirées d'entreprise et d'institution, remises de prix, cérémonies, concerts et soirées musicales, salons professionnels, réceptions diplomatiques. Chaque lieu a ses contraintes : un hôtel particulier, une salle de concert, un siège d'entreprise ou un parc ne se filment pas de la même façon. Je m'adapte, avec un matériel léger et une caméra Sony FX3 capable de tourner dans des lumières faibles, ce qui est fréquent en événementiel.",
          "Je tourne en 4K, avec un enregistrement du son soigné, et, si vous le souhaitez et si la zone est autorisée, des prises de vue aériennes au drone pour les événements en extérieur.",
        ],
      },
      {
        h2: "Un vidéaste événementiel à Paris et en Île-de-France",
        paragraphs: [
          "Je suis basé à Paris et j'interviens dans tous les arrondissements, ainsi qu'à La Défense, Boulogne-Billancourt, Saint-Denis, Versailles, Pantin, Roissy et ailleurs en Île-de-France. Pour un événement en région ou à l'étranger, je me déplace également.",
        ],
      },
      {
        h2: "Comment préparer le tournage de votre événement",
        paragraphs: [
          "Pour que le film soit à la hauteur, prévenez-moi dès que possible des horaires précis, du programme, des moments à ne pas manquer et des personnes importantes à filmer. Si des intervenants ont besoin d'une autorisation d'image, mieux vaut l'organiser en amont, par exemple dans l'invitation ou à l'accueil.",
          "Pour un événement simple, je peux généralement intervenir sous 48 heures. Pour un événement plus important, avec plusieurs salles ou plusieurs intervenants, prévoyez quelques semaines de préparation.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien coûte un vidéaste pour un événement à Paris ?",
        answer:
          "Le prix dépend de la durée de présence, du nombre d'angles ou de salles à couvrir, de l'équipe nécessaire et du type de film livré (aftermovie, captation, teaser). Tout se fait sur devis : décrivez-moi votre événement et je vous réponds sous 24 h.",
      },
      {
        question: "Quelle est la durée idéale d'un aftermovie ?",
        answer:
          "Entre 1 et 3 minutes en général, pour garder l'attention. Si vous avez besoin de plusieurs usages, je peux livrer une version courte pour les réseaux sociaux et une version plus longue pour votre site.",
      },
      {
        question: "Sous quel délai recevez-vous le film après l'événement ?",
        answer:
          "Je peux livrer rapidement un premier montage destiné aux réseaux sociaux, puis la version complète un peu plus tard. Le délai exact dépend de la durée de l'événement et de la complexité du montage, et nous le fixons ensemble avant le tournage.",
      },
      {
        question: "Pouvez-vous filmer plusieurs salles ou plusieurs intervenants en même temps ?",
        answer:
          "Pour couvrir plusieurs lieux simultanément, je m'entoure d'un cadreur supplémentaire. L'équipe s'ajuste à l'ampleur de l'événement, et le devis précise ce qui est prévu.",
      },
      {
        question: "Faut-il prévenir les invités qu'ils seront filmés ?",
        answer:
          "C'est une bonne pratique, notamment pour respecter le droit à l'image. Une mention dans l'invitation ou à l'accueil suffit généralement. Je peux vous conseiller sur la formulation avant l'événement.",
      },
    ],
    related: ["videaste-paris", "video-entreprise-paris", "realisateur-paris", "aftermovie-paris", "captation-conference-paris", "captation-concert-paris", "video-drone-paris", "preparer-tournage-evenement"],
  },

  {
    slug: "video-entreprise-paris",
    label: "Film d'entreprise",
    title: "Film d'entreprise à Paris, vidéaste freelance | Spotlight",
    description:
      "Film d'entreprise à Paris : présentation de société, portrait de dirigeant, témoignage, interview et contenu réseaux. Vidéaste freelance, un seul interlocuteur.",
    eyebrow: "Entreprise · Paris",
    h1: "Film d'entreprise à Paris : un vidéaste freelance pour votre marque",
    intro:
      "Une vidéo d'entreprise ne se contente pas de montrer : elle doit rendre votre activité compréhensible, crédible et humaine en quelques minutes. Je suis Quentin Moulédous, vidéaste freelance à Paris, et j'accompagne les entreprises de la conception à la livraison, pour des films qui représentent fidèlement votre identité.",
    serviceType: "Film d'entreprise",
    sections: [
      {
        h2: "Quel film d'entreprise pour quel objectif ?",
        paragraphs: [
          "Avant de choisir un format, il faut savoir ce que le film doit obtenir : recruter, rassurer un client, présenter une offre, animer une communauté, raconter l'histoire de l'entreprise. Voici les formats que je réalise le plus souvent.",
        ],
        items: [
          {
            h3: "Film de présentation",
            text: "Qui vous êtes, ce que vous faites et pourquoi on peut vous faire confiance, en 1 à 2 minutes. Il trouve sa place sur la page d'accueil de votre site, dans vos propositions commerciales ou sur LinkedIn.",
          },
          {
            h3: "Portrait de dirigeant ou de collaborateur",
            text: "Une personne face caméra, dans son environnement, qui parle de son métier et de ses convictions. Ce format humanise l'entreprise et marche très bien pour le recrutement.",
          },
          {
            h3: "Témoignage client",
            text: "Rien ne rassure mieux qu'un client satisfait qui s'exprime avec ses propres mots. Je m'occupe de mettre la personne à l'aise pour obtenir une parole sincère.",
          },
          {
            h3: "Contenu de marque et réseaux sociaux",
            text: "Séries de vidéos courtes, coulisses, présentation de produit : des formats verticaux, carrés ou horizontaux, montés pour le rythme propre à chaque plateforme.",
          },
        ],
      },
      {
        h2: "L'interview : un exercice à part",
        paragraphs: [
          "Interviewer, c'est mettre la personne à l'aise, poser la question qui ouvre la bonne réponse et savoir attendre le silence. Je soigne le cadre, la lumière et le son pour que la personne soit à son avantage, puis je monte sans jamais trahir ce qu'elle a voulu dire. Une interview se tourne généralement en deux à trois heures, installation comprise : c'est assez court pour ne pas perturber votre journée de travail.",
          "Pour ceux qui ne sont pas à l'aise devant la caméra, ce n'est pas un obstacle : nous commençons par discuter, on laisse la caméra s'installer, et le plus souvent la personne oublie qu'elle est filmée au bout de quelques minutes.",
        ],
      },
      {
        h2: "De la stratégie à la livraison",
        items: [
          {
            h3: "Stratégie",
            text: "Je prends le temps de comprendre votre projet et vos objectifs : ce que vous voulez dire, et à qui. Cet échange pose la direction de tout ce qui suit.",
          },
          {
            h3: "Pré-production",
            text: "Nous définissons ensemble le message et les objectifs. J'écris le déroulé, je repère les lieux si besoin et je prépare l'équipe adaptée.",
          },
          {
            h3: "Production",
            text: "Le jour J, je m'adapte à votre projet : tournage solo ou petite équipe, avec mon propre matériel 4K et un enregistrement du son soigné.",
          },
          {
            h3: "Post-production",
            text: "Rythme, étalonnage et son, avec des allers-retours clairs jusqu'à validation. Livraison aux formats qui vous servent : 16:9, vertical, carré.",
          },
        ],
      },
      {
        h2: "Un tournage qui respecte votre quotidien",
        paragraphs: [
          "Tourner dans vos locaux ne doit pas bloquer l'activité. Je prépare le tournage avec vous pour limiter la gêne : horaires adaptés, pièces repérées à l'avance, collaborateurs prévenus. Je me déplace avec un matériel léger, et avec une caméra Sony FX3 qui se contente d'un éclairage simple.",
          "Si votre projet comporte des informations sensibles ou n'est pas encore public, je peux signer un accord de confidentialité avant de commencer. Les musiques utilisées sont sous licence ou libres de droits, afin que le film puisse être diffusé partout sans souci de droits d'auteur.",
        ],
      },
      {
        h2: "Vidéaste freelance pour entreprise à Paris et en Île-de-France",
        paragraphs: [
          "Je suis basé à Paris et je tourne dans les entreprises de toute la ville, de La Défense à Boulogne-Billancourt, Saint-Denis ou Pantin, ainsi qu'en Île-de-France et plus loin si le projet le demande. J'ai notamment travaillé pour l'Ambassade d'Arménie en France, dont vous pouvez voir le film sur la page « Mon travail ».",
        ],
      },
      {
        h2: "Pourquoi choisir un vidéaste freelance plutôt qu'une agence ?",
        paragraphs: [
          "Vous n'avez affaire qu'à une seule personne, du premier échange à la livraison. Pas de chargé de projet qui retransmet vos demandes, pas de marge d'agence dans le devis, et une souplesse réelle : je m'adapte à votre calendrier et à votre budget, projet par projet. Et parce que je maîtrise toute la chaîne, du tournage au montage final, je peux tenir le même niveau d'exigence à chaque étape.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien coûte un film d'entreprise à Paris ?",
        answer:
          "Le prix dépend de la durée du film, du nombre de jours de tournage, de l'équipe nécessaire et du montage. Je travaille sur devis, sans engagement et sans frais de dossier : envoyez-moi les grandes lignes de votre projet et je vous réponds sous 24 h.",
      },
      {
        question: "Combien de temps faut-il pour réaliser une vidéo d'entreprise ?",
        answer:
          "Un tournage simple peut s'organiser sous 48 heures. Pour un film plus ambitieux, il faut compter quelques semaines entre la préparation, le tournage et le montage. Nous calons un planning réaliste ensemble, en amont.",
      },
      {
        question: "Dois-je fournir un scénario ou un texte ?",
        answer:
          "Non, ce n'est pas nécessaire. Je peux écrire le déroulé et les questions d'interview à partir de ce que vous voulez dire. Si vous avez déjà un brief, un texte ou des références, c'est un excellent point de départ.",
      },
      {
        question: "Les vidéos sont-elles adaptées aux réseaux sociaux ?",
        answer:
          "Oui. Je livre des versions dédiées à chaque plateforme : 16:9 pour YouTube et le site, vertical 9:16 pour Reels, TikTok et Stories, carré pour le fil Instagram. Chaque version est pensée pour son cadrage et son rythme.",
      },
      {
        question: "Que se passe-t-il si je veux modifier la vidéo après la livraison ?",
        answer:
          "Des allers-retours sont prévus avant la livraison finale pour ajuster le montage à vos retours. Après la livraison, des modifications restent possibles : nous en parlons selon l'ampleur du changement.",
      },
    ],
    related: ["videaste-paris", "video-evenementielle-paris", "realisateur-paris", "film-institutionnel-paris", "combien-coute-film-entreprise-paris", "duree-ideale-video-entreprise", "tarifs-video-paris"],
  },

  {
    slug: "videaste-mariage-paris",
    label: "Vidéaste mariage",
    title: "Vidéaste mariage à Paris, film de mariage | Spotlight Studio",
    description:
      "Vidéaste de mariage à Paris : un film discret et sincère de votre journée, tourné en 4K, avec un seul interlocuteur. Quentin Moulédous, devis sous 24 h.",
    eyebrow: "Mariage · Paris",
    h1: "Vidéaste mariage à Paris : un film sincère de votre journée",
    intro:
      "Un mariage ne se refait pas. Je suis Quentin Moulédous, vidéaste à Paris, et je filme votre journée avec discrétion pour garder les émotions telles qu'elles arrivent : le regard échangé, le discours qui se fissure, le premier bal. Un film à revoir dans dix ans, plutôt qu'une succession de plans posés.",
    serviceType: "Vidéaste de mariage",
    sections: [
      {
        h2: "Une approche discrète, au plus près des émotions",
        paragraphs: [
          "Le plus beau d'un mariage, ce sont les instants que personne n'a mis en scène : un fou rire en coulisses, une main qui serre celle d'un parent, un regard qui dit tout. Pour les capter, je reste discret toute la journée. Je ne dirige pas vos invités et je n'interromps pas la cérémonie : j'observe, je cadre, et je laisse la journée se dérouler.",
          "Je travaille seul ou avec un second cadreur selon la taille du mariage et le nombre de lieux. Dans les deux cas, vous n'avez qu'un seul interlocuteur, de la première discussion à la livraison du film.",
        ],
      },
      {
        h2: "Déroulé d'une journée de mariage filmée",
        items: [
          {
            h3: "Les préparatifs",
            text: "Habillage, coiffure, derniers gestes : un moment calme où les émotions affleurent. C'est souvent là que se cachent les plus belles images, avant que la journée ne s'accélère.",
          },
          {
            h3: "La cérémonie",
            text: "Civile, religieuse ou laïque : les vœux, les échanges d'alliances, les regards dans l'assemblée. Je filme avec un enregistrement du son soigné pour que les paroles restent audibles et les silences aussi.",
          },
          {
            h3: "Le cocktail et la réception",
            text: "Les discours, les surprises, les rires, la salle qui s'anime. Je suis attentif aux détails : les décors, les mains, les enfants, les grands-parents.",
          },
          {
            h3: "La soirée",
            text: "Le premier bal, la piste de danse, la fin de soirée. En faible lumière, ma caméra cinéma Sony FX3 garde une image propre et naturelle, sans projecteur envahissant.",
          },
        ],
      },
      {
        h2: "Ce que contient votre film de mariage",
        paragraphs: [
          "Le format se décide avec vous, selon ce que vous voulez garder. Cela peut être un film court et rythmé qui résume la journée, un film plus long qui suit la chronologie, ou une combinaison des deux. Le montage s'accompagne d'une musique sous licence ou libre de droits, que nous choisissons ensemble pour qu'elle corresponde à votre histoire.",
          "Je soigne l'étalonnage pour une image chaleureuse et naturelle, et le son, parce que les voix des personnes que vous aimez comptent autant que les images. Des allers-retours sont prévus avant la livraison finale pour ajuster le montage à vos retours.",
        ],
      },
      {
        h2: "Des prises de vue aériennes au drone, si le lieu s'y prête",
        paragraphs: [
          "Pour un mariage dans un château, un domaine ou un lieu en extérieur, des plans aériens peuvent donner de l'ampleur au film. Je suis exploitant UAS enregistré et télépilote en catégorie ouverte A1/A3, et je vole avec un DJI Mavic 3 Classic, uniquement lorsque la zone est autorisée au survol et que cela ne gêne pas la cérémonie ni les invités. À Paris même, une grande partie du territoire est soumise à des restrictions : je vérifie la zone avant de vous proposer des images aériennes.",
        ],
      },
      {
        h2: "Vidéaste de mariage à Paris et partout en France",
        paragraphs: [
          "Je suis basé à Paris et je filme les mariages en Île-de-France, dans les salles de réception, les domaines et les lieux de cérémonie autour de Paris. Je me déplace aussi en région, et à l'international pour une destination plus lointaine. Parlez-moi du lieu, de la date et du nombre d'invités, et je vous dis si je suis disponible.",
        ],
      },
      {
        h2: "Comment choisir son vidéaste de mariage ?",
        paragraphs: [
          "Regardez de vrais films de mariage entiers, pas seulement une bande-annonce : le rythme tient-il, l'émotion est-elle sincère, le son est-il propre ? Rencontrez ou appelez le vidéaste avant de signer : vous allez passer une journée entière avec lui, la bonne entente compte beaucoup. Enfin, demandez ce qui est inclus : durée de présence, nombre de films livrés, allers-retours au montage, délai de livraison, musique.",
          "Un bon vidéaste est aussi discret qu'efficace : on doit le sentir présent quand on a besoin de lui, et l'oublier le reste du temps.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien coûte un vidéaste de mariage à Paris ?",
        answer:
          "Le prix dépend de la durée de présence, du nombre de lieux, d'un éventuel second cadreur et du ou des films livrés. Je travaille sur devis, sans engagement : parlez-moi de votre mariage et je vous réponds sous 24 h avec une proposition adaptée.",
      },
      {
        question: "Combien de temps dure le tournage ?",
        answer:
          "Un mariage prend souvent une journée complète. On définit ensemble, avant le jour J, les moments à couvrir : préparatifs, cérémonie, cocktail, soirée. Il n'est pas toujours nécessaire de tout filmer.",
      },
      {
        question: "Pouvez-vous filmer en faible lumière ?",
        answer:
          "Oui. Ma caméra Sony FX3 est conçue pour travailler dans des lumières faibles, ce qui est fréquent en soirée ou dans les lieux de cérémonie. L'image reste propre et naturelle, sans avoir besoin d'un éclairage envahissant.",
      },
      {
        question: "Peut-on avoir un film court pour les réseaux sociaux ?",
        answer:
          "Oui, je peux monter une version courte, au format vertical ou carré, en plus du film principal. Nous en parlons avant le tournage pour que le montage soit pensé pour les bons formats.",
      },
      {
        question: "Quand dois-je réserver mon vidéaste ?",
        answer:
          "Dès que votre date et votre lieu sont fixés : les mariages se préparent à l'avance et les dates les plus demandées partent vite. Écrivez-moi dès que vous avez ces éléments pour que je vous confirme ma disponibilité.",
      },
    ],
    related: ["videaste-paris", "video-evenementielle-paris", "realisateur-paris", "combien-coute-videaste-mariage-paris", "video-drone-paris"],
  },

  {
    slug: "video-immobilier-architecture-paris",
    label: "Immobilier et architecture",
    title: "Vidéo immobilière et architecture à Paris, drone",
    description:
      "Vidéaste immobilier et architecture à Paris : visite filmée, plans aériens au drone, plans de détail pour annonces, promoteurs et architectes. Tournage en 4K.",
    eyebrow: "Immobilier & architecture · Paris",
    h1: "Vidéaste immobilier et architecture à Paris, avec prises de vue au drone",
    intro:
      "Un lieu se comprend d'un coup d'œil quand l'image est nette, bien exposée et bien cadrée. Je suis Quentin Moulédous, vidéaste à Paris : je filme des biens immobiliers, des programmes neufs et des réalisations d'architectes avec des images qui laissent le lieu parler de lui-même, de la visite guidée aux plans aériens au drone.",
    serviceType: "Vidéaste immobilier et architecture",
    sections: [
      {
        h2: "Des images qui rendent un lieu lisible en un coup d'œil",
        paragraphs: [
          "Dans l'immobilier comme en architecture, l'image doit répondre à une question simple : à quoi ressemble vraiment cet endroit ? Un lieu mal filmé paraît plus petit, plus sombre ou plus banal qu'il ne l'est. Je soigne l'exposition, la netteté et le cadrage pour que les volumes, la lumière naturelle et les matériaux soient lisibles dès les premières secondes.",
          "Je filme en 4K avec une caméra cinéma Sony FX3, qui rend très bien les contrastes entre une pièce intérieure et la lumière extérieure. Ces conditions sont fréquentes en immobilier, et elles se gèrent bien avec un bon matériel et un peu de préparation.",
        ],
      },
      {
        h2: "Ce que je filme",
        items: [
          {
            h3: "La visite filmée",
            text: "Un parcours fluide dans le bien, de l'entrée aux pièces principales, avec un mouvement de caméra régulier. Idéal pour une annonce, un site d'agence ou une présentation à distance.",
          },
          {
            h3: "Les plans aériens au drone",
            text: "Les façades, les toits, l'environnement, le quartier : des plans qui situent le bien dans son contexte et en révèlent l'ampleur. Je suis exploitant UAS enregistré et télépilote en catégorie ouverte A1/A3, et je vole avec un DJI Mavic 3 Classic, sous réserve que la zone soit autorisée au survol.",
          },
          {
            h3: "Les plans de détail",
            text: "Une moulure, une cheminée, une matière, une vue depuis la fenêtre : les détails qui donnent du caractère au lieu et qui évitent la visite générique.",
          },
          {
            h3: "Les programmes neufs et réalisations d'architectes",
            text: "Pour un promoteur, un film de présentation ou de suivi de chantier. Pour un architecte, un film qui met en valeur la réalisation telle qu'il l'a pensée, en respectant son intention et ses lignes.",
          },
        ],
      },
      {
        h2: "Le drone à Paris : ce qu'il faut savoir",
        paragraphs: [
          "Une grande partie de Paris est soumise à des restrictions de survol pour les drones. Avant toute prise de vue aérienne, je vérifie la zone et la réglementation applicable, et je ne vous propose des plans aériens que lorsque c'est autorisé. Si ce n'est pas le cas, je peux recourir à d'autres solutions : plans depuis le sol, depuis un toit-terrasse ou une fenêtre, qui donnent déjà une belle idée du lieu.",
          "En périphérie et en Île-de-France, les contraintes sont variables selon les lieux : je vous dis tout simplement ce qui est possible au moment de la préparation, sans promesse que je ne pourrais pas tenir.",
        ],
      },
      {
        h2: "Un tournage simple et rapide",
        items: [
          {
            h3: "Préparation",
            text: "Nous convenons du bien à filmer, du ton souhaité et des plans indispensables. Si le lieu est occupé, nous fixons un moment où il est rangé et bien éclairé.",
          },
          {
            h3: "Tournage",
            text: "Je me déplace seul, avec un matériel léger. La durée dépend de la taille du bien et du nombre de pièces. Pour un tournage simple, je peux généralement intervenir sous 48 heures.",
          },
          {
            h3: "Montage et livraison",
            text: "Montage soigné, étalonnage naturel et musique sous licence ou libre de droits. Livraison aux formats dont vous avez besoin : horizontal pour les annonces et le site, vertical pour les réseaux sociaux.",
          },
        ],
      },
      {
        h2: "Pour qui ?",
        paragraphs: [
          "Agences immobilières, propriétaires qui mettent en vente ou en location, promoteurs et constructeurs, architectes et architectes d'intérieur, hôtels et lieux de réception, chasseurs de biens. Si vous voulez montrer un lieu et que les photos ne suffisent plus, la vidéo apporte ce qui leur manque : le volume, la circulation, la lumière qui change dans la journée.",
        ],
      },
      {
        h2: "Vidéaste immobilier à Paris et en Île-de-France",
        paragraphs: [
          "Je suis basé à Paris et je filme dans tous les arrondissements ainsi qu'en Île-de-France : La Défense, Boulogne-Billancourt, Saint-Denis, Versailles, Pantin. Je me déplace aussi en région pour des projets plus importants, comme un programme neuf ou un hôtel.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien coûte une vidéo immobilière à Paris ?",
        answer:
          "Cela dépend de la taille du bien, du nombre de plans souhaités, de la présence ou non de plans aériens et du montage. Je travaille sur devis, sans engagement : envoyez-moi quelques informations sur le bien et je vous réponds sous 24 h.",
      },
      {
        question: "Quelle est la durée idéale d'une vidéo de visite ?",
        answer:
          "Entre 1 et 2 minutes pour une annonce classique, afin de garder l'attention. Un film de présentation d'un programme ou d'une réalisation d'architecte peut être plus long, jusqu'à 3 minutes ou davantage selon le sujet.",
      },
      {
        question: "Peut-on filmer par drone dans Paris intra-muros ?",
        answer:
          "Une grande partie de Paris est soumise à des restrictions de survol. Je vérifie systématiquement la zone avant de vous proposer des plans aériens, et je ne les réalise que lorsqu'ils sont autorisés. Quand ce n'est pas possible, d'autres solutions existent, comme des plans depuis un toit ou une fenêtre.",
      },
      {
        question: "Faut-il que le bien soit vide ou meublé ?",
        answer:
          "Les deux fonctionnent, tant que le lieu est rangé, propre et bien éclairé le jour du tournage. Je peux vous donner quelques conseils simples en amont pour que le bien soit à son avantage.",
      },
      {
        question: "Fournissez-vous aussi des vidéos verticales pour les réseaux sociaux ?",
        answer:
          "Oui. En plus de la version horizontale pour l'annonce, je peux monter une version verticale 9:16 pour Instagram, TikTok ou Facebook, montée pour ce format et non simplement recadrée.",
      },
    ],
    related: ["videaste-paris", "video-entreprise-paris", "video-evenementielle-paris", "video-drone-paris", "tarifs-video-paris"],
  },
];

export function getLandingPage(slug: string): LandingPage | undefined {
  return landingPages.find((p) => p.slug === slug);
}

export const landingSlugs = landingPages.map((p) => p.slug);
