// More French search landing pages, batch B: production, pricing and guides.
// Pricing pages deliberately contain NO amounts: every project is quoted individually, so they
// explain what moves a quote and how to ask for one.
import type { LandingPage } from "./landing-pages";

export const landingPagesMoreFrB: LandingPage[] = [
  {
    slug: "production-video-paris",
    kind: "service",
    label: "Production vidéo",
    title: "Production vidéo à Paris, de l'idée à la livraison",
    description:
      "Production vidéo à Paris : stratégie, écriture, tournage, montage et livraison par un seul interlocuteur. Films d'entreprise, événements, institutions. Devis sous 24 h.",
    eyebrow: "Production vidéo · Paris",
    h1: "Production vidéo à Paris : un seul interlocuteur, de l'idée à la livraison",
    intro:
      "Produire une vidéo, c'est bien plus que tourner : c'est cadrer le projet, écrire, préparer, filmer, monter et livrer, en tenant le budget et le calendrier. Je suis Quentin Moulédous, producteur et réalisateur indépendant à Paris : je prends en charge toute la chaîne, avec mon propre matériel, et vous avez un seul interlocuteur du premier échange à la livraison.",
    serviceType: "Production vidéo",
    sections: [
      {
        h2: "Ce que recouvre une production vidéo",
        paragraphs: [
          "Une production vidéo regroupe tout ce qui permet à un film d'exister : comprendre le besoin, définir le message, écrire le déroulé, préparer le tournage, filmer, monter, étalonner, soigner le son et livrer aux bons formats. Dans une grande structure, ces étapes sont réparties entre plusieurs personnes. Ici, elles sont assurées par une seule : cela évite les pertes d'information et rend le budget plus lisible.",
          "Une précision utile : « producteur » désigne ici celui qui organise et pilote la production (préparation, budget, planning, équipe), pas celui qui finance. Je ne finance pas de films : votre projet est financé par vous, et je m'occupe de le faire exister.",
        ],
      },
      {
        h2: "Les étapes d'une production avec moi",
        items: [
          {
            h3: "Stratégie",
            text: "Avant de filmer, je prends le temps de comprendre votre projet et ses objectifs : ce que vous voulez dire, et à qui. Cet échange pose la direction de tout ce qui suit.",
          },
          {
            h3: "Pré-production",
            text: "Nous définissons ensemble le message et les objectifs. J'écris le déroulé, je repère les lieux si besoin et je prépare l'équipe adaptée à l'ampleur du tournage.",
          },
          {
            h3: "Production",
            text: "Le jour J, je m'adapte à votre projet : tournage solo agile ou petite équipe, toujours avec mon propre matériel professionnel : caméra Sony FX3 en 4K, drone DJI Mavic 3 Classic quand c'est autorisé, prise de son dédiée.",
          },
          {
            h3: "Post-production",
            text: "Je soigne le rythme, l'étalonnage et le son, avec des allers-retours clairs jusqu'à validation, puis je livre le film aux formats dont vous avez besoin : 16:9, vertical, carré.",
          },
        ],
      },
      {
        h2: "Une production à taille humaine",
        paragraphs: [
          "Je travaille seul ou en petite équipe. Selon l'ampleur du projet, je m'entoure de collaborateurs de confiance (cadreur, preneur de son, monteur) pour constituer l'équipe la plus adaptée : elle s'ajuste à chaque tournage et n'est jamais figée. Pour vous, cela signifie un devis plus lisible, une grande souplesse sur le calendrier, et la certitude que la personne qui comprend votre projet est celle qui le réalise.",
          "Quand un projet dépasse ce que je peux assurer seul, je le dis dès le départ et je compose l'équipe nécessaire, plutôt que de promettre ce que je ne pourrais pas tenir.",
        ],
      },
      {
        h2: "Quels types de productions ?",
        items: [
          {
            h3: "Films d'entreprise et institutionnels",
            text: "Présentation de société, portraits, témoignages, films pour des organisations et des institutions.",
            href: "/video-entreprise-paris/",
          },
          {
            h3: "Événements et captations",
            text: "Aftermovies, conférences, soirées, concerts et cérémonies.",
            href: "/video-evenementielle-paris/",
          },
          {
            h3: "Documentaires et fiction",
            text: "Films construits à partir de personnes et de situations réelles, ou mis en scène.",
            href: "/realisateur-paris/",
          },
          {
            h3: "Immobilier, architecture et mariages",
            text: "Films de lieux et de moments qui ne se rejouent pas, avec des images aériennes quand c'est autorisé.",
            href: "/video-immobilier-architecture-paris/",
          },
        ],
      },
      {
        h2: "Production vidéo à Paris et partout en France",
        paragraphs: [
          "Je suis basé à Paris et j'interviens dans toute l'Île-de-France, ainsi qu'en région et à l'international pour les projets plus importants. Si vous avez un projet en tête, même flou, décrivez-le-moi en quelques lignes : je vous réponds sous 24 h.",
        ],
      },
    ],
    faq: [
      {
        question: "Quelle différence entre un vidéaste et une société de production ?",
        answer:
          "Une société de production regroupe plusieurs métiers et gère des projets de grande ampleur. Un producteur-réalisateur indépendant, comme moi, assure lui-même toute la chaîne, avec un seul interlocuteur et un devis plus lisible. Pour les projets qui demandent plus de bras, je compose l'équipe nécessaire.",
      },
      {
        question: "Financez-vous des projets de films ?",
        answer:
          "Non. Je suis producteur au sens où j'organise et pilote la production de votre film (préparation, budget, planning, équipe), pas au sens où je le finance. Le financement du projet reste de votre côté.",
      },
      {
        question: "Combien coûte une production vidéo à Paris ?",
        answer:
          "Cela dépend de la durée, du nombre de jours de tournage, de l'équipe et du montage. Je travaille sur devis, sans engagement et sans frais de dossier : envoyez-moi les grandes lignes de votre projet et je vous réponds sous 24 h.",
      },
      {
        question: "Faut-il un scénario avant de vous contacter ?",
        answer:
          "Non. Une idée, un objectif ou un brief suffisent pour commencer. J'écris le déroulé avec vous à partir de ce que vous voulez dire.",
      },
      {
        question: "Que comprend le devis ?",
        answer:
          "Le cadrage et la préparation du tournage, le tournage avec mon matériel professionnel (au sol et par drone si besoin), le montage, l'étalonnage et le son, et la livraison dans les formats dont vous avez besoin.",
      },
    ],
    related: ["videaste-paris", "realisateur-paris", "tarifs-video-paris", "cadreur-paris"],
  },

  {
    slug: "tarifs-video-paris",
    kind: "guide",
    label: "Prix d'une vidéo",
    title: "Prix d'une vidéo à Paris : tarifs et devis d'un vidéaste",
    description:
      "Combien coûte une vidéo à Paris ? Ce qui fait varier le prix d'un tournage, ce que comprend un devis et comment l'obtenir sous 24 h, sans engagement.",
    eyebrow: "Tarifs · Paris",
    h1: "Prix d'une vidéo à Paris : ce qui fait varier le tarif d'un tournage",
    intro:
      "« Combien coûte une vidéo ? » est la première question de tous les clients, et la seule à laquelle on ne peut pas répondre honnêtement sans connaître le projet. Je suis Quentin Moulédous, vidéaste à Paris. Cette page explique ce qui fait varier le prix, ce que contient un devis et comment le demander. Chaque projet est chiffré individuellement : je ne publie pas de grille de tarifs.",
    serviceType: "Devis vidéo",
    sections: [
      {
        h2: "Pourquoi je ne publie pas de grille de prix",
        paragraphs: [
          "Un aftermovie d'une soirée, un film d'entreprise de deux minutes et un documentaire n'ont presque rien en commun : ni le temps de tournage, ni le matériel, ni le montage. Une grille unique serait soit trop chère pour les petits projets, soit trop optimiste pour les gros. Je préfère vous poser quelques questions et vous faire une proposition juste pour votre projet.",
        ],
      },
      {
        h2: "Les cinq éléments qui font varier le prix",
        items: [
          {
            h3: "La durée de présence sur place",
            text: "Une demi-journée, une journée entière ou plusieurs jours : c'est le premier facteur. Il comprend le temps de tournage et le temps d'installation et de repérage.",
          },
          {
            h3: "Le nombre de personnes nécessaires",
            text: "Je peux tourner seul pour beaucoup de projets. Un événement avec plusieurs salles, un tournage avec plusieurs angles ou un son complexe demandent un cadreur ou un preneur de son en plus.",
          },
          {
            h3: "Le matériel et les prises de vue spéciales",
            text: "L'image de base est tournée en 4K avec mon propre matériel. Les plans aériens au drone, un éclairage particulier ou des optiques spécifiques peuvent s'ajouter, selon ce qu'il faut pour votre film.",
          },
          {
            h3: "Le montage et le nombre de formats",
            text: "Un film de 1 minute et un film de 8 minutes, une seule version ou plusieurs formats (16:9, vertical, carré), des extraits pour les réseaux sociaux : le montage représente souvent une part importante du travail.",
          },
          {
            h3: "Les allers-retours et les délais",
            text: "Des allers-retours sont prévus avant la livraison finale. Un délai très court ou un grand nombre de relectures peuvent faire évoluer le devis.",
          },
        ],
      },
      {
        h2: "Ce que comprend un devis",
        paragraphs: [
          "Mon devis couvre le cadrage et la préparation du tournage, le tournage avec mon matériel professionnel (au sol, et par drone si besoin et si c'est autorisé), le montage, l'étalonnage et le son, puis la livraison dans les formats dont vous avez besoin. Il précise aussi le calendrier, le nombre d'allers-retours prévus et les conditions d'utilisation du film. Il est détaillé, sans engagement et sans frais de dossier.",
          "Si votre projet ne correspond pas à ce que je propose, je vous le dis simplement.",
        ],
      },
      {
        h2: "Comment obtenir un devis",
        items: [
          {
            h3: "Remplir le formulaire de devis",
            text: "Quelques questions rapides : le type de projet, les images aériennes souhaitées, le budget approximatif (des tranches sont proposées pour m'aider à calibrer la proposition), la date et le lieu.",
          },
          {
            h3: "Ou m'écrire directement",
            text: "Quelques lignes suffisent : le projet, l'usage final, la date. Je vous réponds sous 24 h.",
          },
          {
            h3: "Recevoir une proposition",
            text: "Vous recevez un devis détaillé, que nous ajustons ensemble si besoin pour le faire correspondre à votre budget.",
          },
        ],
      },
      {
        h2: "Comment garder le budget sous contrôle",
        paragraphs: [
          "Quelques choix simples réduisent le coût sans abîmer le film : regrouper plusieurs tournages sur une même journée, limiter le nombre de formats livrés, préparer vos personnes à filmer et vos lieux avant mon arrivée, et rassembler vos retours en une seule fois pour limiter les allers-retours. Si vous avez un budget précis, dites-le-moi : je peux adapter la proposition (durée, équipe, formats) pour que le film reste réaliste.",
        ],
      },
    ],
    faq: [
      {
        question: "Pourquoi n'y a-t-il pas de tarifs affichés ?",
        answer:
          "Parce que chaque projet est différent : durée, lieu, équipe, montage. Un tarif unique serait inexact pour presque tous les projets. Je préfère vous faire une proposition précise après un court échange.",
      },
      {
        question: "Le devis est-il payant ?",
        answer:
          "Non. Le devis est détaillé, sans engagement et sans frais de dossier. Si votre projet ne correspond pas à ce que je propose, je vous le dis simplement.",
      },
      {
        question: "En combien de temps recevez-vous une réponse ?",
        answer:
          "Je réponds généralement sous 24 h, avec une proposition adaptée ou quelques questions pour affiner votre projet.",
      },
      {
        question: "Puis-je adapter le devis à mon budget ?",
        answer:
          "Oui. Dites-moi votre budget dès le départ : je peux ajuster la durée, l'équipe, le nombre de formats ou le montage pour proposer un film réaliste.",
      },
    ],
    related: ["combien-coute-film-entreprise-paris", "combien-coute-videaste-mariage-paris", "production-video-paris", "videaste-paris"],
  },

  {
    slug: "combien-coute-film-entreprise-paris",
    kind: "guide",
    label: "Prix d'un film d'entreprise",
    title: "Combien coûte un film d'entreprise à Paris ? Guide",
    description:
      "Combien coûte un film d'entreprise à Paris ? Les critères qui font varier le prix, les pièges à éviter et comment obtenir un devis clair pour votre vidéo.",
    eyebrow: "Guide · Film d'entreprise",
    h1: "Combien coûte un film d'entreprise à Paris ?",
    intro:
      "Vous voulez une vidéo pour présenter votre entreprise et vous cherchez à savoir combien prévoir. Je suis Quentin Moulédous, vidéaste freelance à Paris : voici comment se construit le prix d'un film d'entreprise, ce qu'il faut regarder dans un devis et comment éviter les mauvaises surprises.",
    serviceType: "Film d'entreprise",
    sections: [
      {
        h2: "Il n'y a pas de prix unique pour un film d'entreprise",
        paragraphs: [
          "Un film de présentation de deux minutes tourné en une demi-journée dans vos bureaux n'a pas le même coût qu'un film de marque avec plusieurs lieux, des interviews et des plans aériens. Pour savoir combien prévoir, il faut d'abord répondre à quelques questions simples : à quoi sert le film, où sera-t-il diffusé, combien de temps doit-il durer, et combien de jours de tournage demande-t-il ?",
          "Je ne publie pas de tarif fixe : tout se fait sur devis. En revanche, je peux vous dire précisément ce qui fait monter ou baisser la proposition.",
        ],
      },
      {
        h2: "Ce qui compose le prix d'un film d'entreprise",
        items: [
          {
            h3: "L'écriture et la préparation",
            text: "Comprendre votre objectif, écrire le déroulé, préparer les questions d'interview, repérer les lieux. C'est un travail invisible dans le film, mais qui fait gagner du temps le jour du tournage.",
          },
          {
            h3: "Le tournage",
            text: "Le nombre de jours de présence, le nombre de lieux et de personnes à filmer, le besoin d'un cadreur ou d'un preneur de son en plus. Un film avec un seul lieu et deux interviews se tourne vite ; un film avec plusieurs sites demande davantage.",
          },
          {
            h3: "Le montage, l'étalonnage et le son",
            text: "C'est souvent la moitié du travail : tri des rushes, rythme, étalonnage, mixage, musique. Plus le film est long ou travaillé, plus cette étape compte.",
          },
          {
            h3: "Les formats de livraison",
            text: "Une version unique ou plusieurs (16:9 pour le site, vertical pour LinkedIn et Instagram, versions courtes). Chaque format est monté pour sa plateforme.",
          },
        ],
      },
      {
        h2: "Les pièges à éviter quand on compare des devis",
        paragraphs: [
          "Comparer deux devis uniquement sur le prix est trompeur. Vérifiez ce qui est inclus : qui fait le montage, combien d'allers-retours sont prévus, quels formats sont livrés, si la musique est libre de droits, combien de temps les rushes sont conservés, et les conditions d'utilisation du film (où et combien de temps vous pouvez le diffuser). Un devis très bas peut cacher des options facturées à part ; un devis plus élevé peut inclure tout cela dans un seul chiffre.",
          "Méfiez-vous aussi des promesses de livraison à la journée pour un film complexe : un bon montage prend du temps.",
        ],
      },
      {
        h2: "Comment obtenir un prix juste pour votre projet",
        items: [
          {
            h3: "Préparez un brief court",
            text: "L'objectif du film, le public, la durée souhaitée, le nombre de personnes à interviewer, les lieux, la date. Quelques lignes suffisent.",
          },
          {
            h3: "Donnez une fourchette de budget",
            text: "Même approximative, elle me permet de vous proposer un film réaliste plutôt qu'un devis hors de portée. Le formulaire de devis propose des tranches pour cela.",
          },
          {
            h3: "Demandez un devis détaillé",
            text: "Il doit préciser ce qui est inclus, le calendrier, les allers-retours et les formats. Le mien est détaillé, sans engagement et sans frais de dossier.",
          },
        ],
      },
      {
        h2: "Comment optimiser un budget limité",
        paragraphs: [
          "Si votre budget est serré, on peut concentrer le tournage sur une demi-journée, se limiter à un lieu, choisir un format plus court, réduire le nombre de versions livrées, ou utiliser des plans déjà tournés. Un bon film court vaut mieux qu'un film long dilué. Dites-moi votre budget dès le départ : je vous dirai ce qu'il permet de faire.",
        ],
      },
    ],
    faq: [
      {
        question: "Un film d'entreprise peut-il se tourner en une seule journée ?",
        answer:
          "Oui, souvent. Un film de présentation avec une ou deux interviews et quelques plans de coupe se tourne en une demi-journée à une journée. Un film plus ambitieux, avec plusieurs lieux, demande davantage.",
      },
      {
        question: "Le prix dépend-il de la durée du film ?",
        answer:
          "Oui, mais pas seulement. Un film de 90 secondes très travaillé peut demander plus de montage qu'un film plus long et plus simple. Ce qui compte, c'est le temps de tournage et de montage nécessaire.",
      },
      {
        question: "Faut-il prévoir un budget pour la musique ?",
        answer:
          "J'utilise des musiques sous licence ou libres de droits : elles sont comprises dans la prestation. Si vous avez une musique spécifique à utiliser, parlons-en dès le départ.",
      },
      {
        question: "Comment demander un devis ?",
        answer:
          "Remplissez le formulaire de devis ou écrivez-moi quelques lignes sur votre projet. Je vous réponds sous 24 h, sans engagement.",
      },
    ],
    related: ["video-entreprise-paris", "tarifs-video-paris", "duree-ideale-video-entreprise", "film-institutionnel-paris"],
  },

  {
    slug: "combien-coute-videaste-mariage-paris",
    kind: "guide",
    label: "Prix d'un vidéaste de mariage",
    title: "Combien coûte un vidéaste de mariage à Paris ? Guide",
    description:
      "Combien coûte un vidéaste de mariage à Paris ? Ce qui fait varier le prix, ce qu'il faut demander dans un devis et comment choisir sans mauvaise surprise.",
    eyebrow: "Guide · Mariage",
    h1: "Combien coûte un vidéaste de mariage à Paris ?",
    intro:
      "Vous préparez votre mariage et vous vous demandez quel budget prévoir pour le film. Je suis Quentin Moulédous, vidéaste à Paris : voici comment se construit le prix d'un film de mariage, ce qu'il faut demander dans un devis et comment choisir avec sérénité.",
    serviceType: "Vidéaste de mariage",
    sections: [
      {
        h2: "Pourquoi les prix varient autant d'un vidéaste à l'autre",
        paragraphs: [
          "Un film de mariage peut aller d'une courte vidéo de la cérémonie à un film complet de la journée, avec plusieurs cadreurs, un drone et un montage long. Le prix suit : il n'y a pas de tarif standard, et c'est pour cela que je travaille sur devis, après avoir parlé de votre journée.",
        ],
      },
      {
        h2: "Ce qui fait varier le prix d'un film de mariage",
        items: [
          {
            h3: "La durée de présence",
            text: "Cérémonie seule, cérémonie et cocktail, ou journée complète des préparatifs à la soirée : c'est le facteur principal.",
          },
          {
            h3: "Le nombre de lieux",
            text: "Mairie, église ou lieu de cérémonie laïque, salle de réception : chaque déplacement demande du temps et de la logistique.",
          },
          {
            h3: "Le nombre de cadreurs",
            text: "Je peux filmer seul ou avec un second cadreur. Un second cadreur permet de couvrir deux angles ou deux lieux en même temps, ce qui compte pour une grande cérémonie.",
          },
          {
            h3: "Les images aériennes",
            text: "Un drone peut donner de l'ampleur au film pour un mariage en domaine ou en château, à condition que la zone soit autorisée au survol.",
          },
          {
            h3: "Les films livrés",
            text: "Un film principal, une version courte pour les réseaux sociaux, un teaser de quelques secondes : chaque livrable demande du montage.",
          },
        ],
      },
      {
        h2: "Ce qu'il faut demander dans le devis",
        paragraphs: [
          "Avant de signer, vérifiez : la durée exacte de présence, ce qui est filmé (préparatifs, cérémonie, cocktail, soirée), le nombre de films livrés et leur durée, le nombre d'allers-retours au montage, le délai de livraison, l'utilisation de musique libre de droits, la présence d'un second cadreur, et les conditions d'utilisation du film. Un devis clair répond à toutes ces questions avant la date du mariage.",
        ],
      },
      {
        h2: "Comment choisir sans se tromper",
        items: [
          {
            h3: "Regardez des films complets",
            text: "Pas seulement une bande-annonce : le rythme tient-il, l'émotion est-elle sincère, le son est-il propre ?",
          },
          {
            h3: "Parlez au vidéaste",
            text: "Il sera présent toute la journée : la bonne entente compte beaucoup. Un appel ou un rendez-vous avant de signer permet de s'en rendre compte.",
          },
          {
            h3: "Réservez tôt",
            text: "Les dates les plus demandées partent vite. Écrivez-moi dès que votre date et votre lieu sont fixés pour que je vous confirme ma disponibilité.",
          },
        ],
      },
      {
        h2: "Adapter le film à votre budget",
        paragraphs: [
          "Si votre budget est limité, on peut filmer uniquement les moments essentiels (cérémonie et cocktail, par exemple), livrer un film plus court, ou se passer du drone. Un film court et sincère vaut mieux qu'un long film dilué. Dites-moi votre budget dès le début : je vous dis honnêtement ce qu'il permet de faire.",
        ],
      },
    ],
    faq: [
      {
        question: "Faut-il filmer toute la journée de mariage ?",
        answer:
          "Pas nécessairement. On choisit ensemble les moments à couvrir : préparatifs, cérémonie, cocktail, soirée. Le devis dépend de la durée de présence.",
      },
      {
        question: "Combien de temps faut-il pour recevoir le film ?",
        answer:
          "Cela dépend de la durée de la journée filmée et du film demandé. Nous fixons ensemble le délai de livraison dans le devis, avant le mariage.",
      },
      {
        question: "Peut-on changer le montage après avoir vu le film ?",
        answer:
          "Oui, des allers-retours sont prévus avant la livraison finale pour ajuster le montage à vos retours.",
      },
      {
        question: "Comment demander un devis ?",
        answer:
          "Remplissez le formulaire de devis ou écrivez-moi : date, lieu, nombre d'invités, moments à filmer. Je vous réponds sous 24 h, sans engagement.",
      },
    ],
    related: ["videaste-mariage-paris", "tarifs-video-paris", "videaste-paris", "combien-coute-film-entreprise-paris"],
  },

  {
    slug: "preparer-tournage-evenement",
    kind: "guide",
    label: "Préparer le tournage d'un événement",
    title: "Préparer le tournage de son événement : guide pratique",
    description:
      "Comment préparer le tournage vidéo de votre événement : programme, lieux, autorisations d'image, moments clés, brief au vidéaste. La liste des points à ne pas oublier.",
    eyebrow: "Guide · Événement",
    h1: "Comment préparer le tournage vidéo de votre événement ?",
    intro:
      "Un événement ne se rejoue pas : si le vidéaste n'est pas prêt, il n'y a pas de deuxième prise. Je suis Quentin Moulédous, vidéaste à Paris : voici ce qu'il faut préparer avant le jour J pour que le film soit à la hauteur de votre événement, avec une liste des points à ne pas oublier.",
    serviceType: "Vidéo événementielle",
    sections: [
      {
        h2: "Décidez d'abord ce que le film doit faire",
        paragraphs: [
          "Le film sert-il à remercier les participants, à promouvoir la prochaine édition, à garder une trace des interventions, à nourrir vos réseaux sociaux ? La réponse change tout : un aftermovie rythmé de deux minutes ne se prépare pas comme une captation intégrale de conférence. Notez en une phrase l'objectif principal et le public visé : c'est la boussole de toutes les décisions suivantes.",
        ],
      },
      {
        h2: "Les informations à transmettre au vidéaste",
        items: [
          {
            h3: "Le programme précis",
            text: "Horaires, ordre des interventions, pauses, temps forts. Surlignez les moments à ne surtout pas manquer.",
          },
          {
            h3: "Le lieu",
            text: "Adresse, plan de la salle, accès, horaires d'accès pour l'installation, emplacement de la scène. Si possible, une visite avant l'événement permet d'anticiper la lumière et le son.",
          },
          {
            h3: "Les personnes importantes",
            text: "Invités d'honneur, intervenants, organisateurs : le vidéaste doit savoir qui filmer en priorité.",
          },
          {
            h3: "Les contraintes",
            text: "Zones interdites de prise de vue, personnes qui refusent d'être filmées, règles de sécurité, demandes du lieu.",
          },
        ],
      },
      {
        h2: "L'autorisation d'image des personnes filmées",
        paragraphs: [
          "Les personnes filmées dans un événement ont des droits sur leur image. Une bonne pratique consiste à prévenir les invités qu'un vidéaste sera présent, par une mention dans l'invitation ou à l'accueil, et à prévoir un moyen simple pour les personnes qui ne souhaitent pas apparaître. Pour les intervenants, une autorisation écrite est plus prudente. Je peux vous conseiller sur la formulation avant l'événement.",
        ],
      },
      {
        h2: "Prévoir le son et la lumière",
        paragraphs: [
          "Pour un événement avec prises de parole, parlez au prestataire sonore ou au régisseur de la salle : s'il y a une sonorisation, le vidéaste peut s'y raccorder pour avoir un son propre. Pour la lumière, signalez les changements prévus (salle tamisée, projecteurs colorés, projections) : une image se prépare différemment dans une salle sombre et dans une salle lumineuse.",
        ],
      },
      {
        h2: "Le jour J : les derniers réflexes",
        items: [
          {
            h3: "Un interlocuteur unique sur place",
            text: "Désignez quelqu'un de joignable qui connaît le programme et peut répondre aux questions du vidéaste.",
          },
          {
            h3: "Prévenir les intervenants",
            text: "Dites-leur qu'ils seront filmés et à quel moment : cela évite les mauvaises surprises et les prises de parole interrompues.",
          },
          {
            h3: "Laisser le vidéaste travailler",
            text: "Un bon vidéaste est discret. Laissez-le se déplacer et capter les moments spontanés plutôt que de tout mettre en scène.",
          },
        ],
      },
      {
        h2: "Combien de temps à l'avance faut-il s'y prendre ?",
        paragraphs: [
          "Pour un événement simple, je peux généralement intervenir sous 48 heures. Pour un événement plus important, avec plusieurs salles, plusieurs intervenants ou des plans aériens, prévoyez quelques semaines : cela laisse le temps de préparer les angles, de repérer le lieu et d'obtenir d'éventuelles autorisations.",
        ],
      },
    ],
    faq: [
      {
        question: "Faut-il prévenir les invités qu'ils seront filmés ?",
        answer:
          "C'est une bonne pratique, notamment pour respecter le droit à l'image. Une mention dans l'invitation ou à l'accueil suffit généralement. Je peux vous conseiller sur la formulation.",
      },
      {
        question: "Que dois-je fournir au vidéaste avant l'événement ?",
        answer:
          "Le programme précis, l'adresse et le plan du lieu, les horaires d'accès, la liste des personnes importantes à filmer et les contraintes particulières. Plus j'en sais, mieux je prépare le tournage.",
      },
      {
        question: "Peut-on filmer une conférence avec des diapositives ?",
        answer:
          "Oui. Nous décidons à l'avance si on filme l'écran, si on intègre les supports au montage ou si on ne les montre pas. Cela se prépare mieux en amont.",
      },
      {
        question: "Comment demander un devis pour mon événement ?",
        answer:
          "Décrivez-moi votre événement : date, lieu, durée, type de film souhaité. Je vous réponds sous 24 h, sans engagement.",
      },
    ],
    related: ["video-evenementielle-paris", "aftermovie-paris", "captation-conference-paris", "tarifs-video-paris"],
  },

  {
    slug: "duree-ideale-video-entreprise",
    kind: "guide",
    label: "Durée idéale d'une vidéo d'entreprise",
    title: "Quelle durée idéale pour une vidéo d'entreprise ?",
    description:
      "Quelle durée choisir pour une vidéo d'entreprise : présentation, témoignage, réseaux sociaux, recrutement. Des repères simples pour garder l'attention.",
    eyebrow: "Guide · Format",
    h1: "Quelle est la durée idéale d'une vidéo d'entreprise ?",
    intro:
      "Trop courte, elle ne dit rien ; trop longue, personne ne la regarde jusqu'au bout. Je suis Quentin Moulédous, vidéaste à Paris : voici des repères simples pour choisir la bonne durée selon le type de vidéo, le canal de diffusion et le public visé.",
    serviceType: "Vidéo d'entreprise",
    sections: [
      {
        h2: "Il n'y a pas de durée idéale, il y a une durée adaptée",
        paragraphs: [
          "La bonne durée dépend de trois choses : ce que la vidéo doit faire, où elle sera regardée, et par qui. Une vidéo vue par un candidat motivé qui cherche à connaître l'entreprise peut durer plus longtemps qu'une vidéo vue en passant sur un fil d'actualité. Les repères ci-dessous sont des ordres de grandeur, pas des règles, mais ils évitent les erreurs les plus fréquentes.",
        ],
      },
      {
        h2: "Des repères par type de vidéo",
        items: [
          {
            h3: "Film de présentation d'entreprise : 1 à 2 minutes",
            text: "Assez long pour dire qui vous êtes, ce que vous faites et pourquoi on peut vous faire confiance, assez court pour qu'on le regarde en entier sur votre page d'accueil.",
          },
          {
            h3: "Témoignage client : 1 à 3 minutes",
            text: "Une personne qui raconte sincèrement son expérience. Moins de temps, c'est trop superficiel ; beaucoup plus, la parole se dilue.",
          },
          {
            h3: "Portrait de collaborateur ou de dirigeant : 1 à 3 minutes",
            text: "Assez de temps pour qu'une personnalité se révèle, sans perdre l'attention.",
          },
          {
            h3: "Contenus pour les réseaux sociaux : 15 à 60 secondes",
            text: "Les premières secondes décident de tout. Un format vertical, un message clair, un sous-titrage si le son est coupé.",
          },
          {
            h3: "Film de recrutement : 1 à 2 minutes",
            text: "Montrer l'ambiance, les métiers et quelques visages. Une durée plus longue est possible si le film est très concret.",
          },
          {
            h3: "Conférence ou captation intégrale : durée de l'événement",
            text: "Ici, on ne coupe pas : on propose une version intégrale et des extraits courts.",
          },
        ],
      },
      {
        h2: "Raconter l'essentiel dans les dix premières secondes",
        paragraphs: [
          "Quelle que soit la durée, l'essentiel doit apparaître tôt : qui parle, de quoi, et pourquoi on devrait continuer. Une vidéo qui commence par un long logo animé perd une partie de son public avant même de commencer. Je construis chaque film en pensant d'abord à ce moment d'accroche, puis à l'enchaînement qui donne envie de continuer.",
        ],
      },
      {
        h2: "Décliner une vidéo en plusieurs durées",
        paragraphs: [
          "Un même tournage peut donner plusieurs films : une version principale de 1 à 2 minutes pour votre site, un format court vertical de 30 secondes pour LinkedIn ou Instagram, et un extrait de 10 secondes pour une publicité. Prévoir ces déclinaisons dès le tournage évite de devoir reconstruire un film à partir de rien. Je monte chaque version pour son format et non en recadrant simplement la version principale.",
        ],
      },
      {
        h2: "Comment choisir la durée de votre vidéo ?",
        paragraphs: [
          "Écrivez en une phrase l'objectif de la vidéo, notez où elle sera diffusée et imaginez le spectateur type : où est-il, combien de temps a-t-il ? Vous avez alors la durée maximale. Le reste du travail consiste à couper tout ce qui n'est pas indispensable. Si vous hésitez, parlons-en : je vous aide à calibrer la durée avant le tournage, car c'est aussi ce qui détermine le temps de tournage et donc le budget.",
        ],
      },
    ],
    faq: [
      {
        question: "Une vidéo plus longue coûte-t-elle plus cher ?",
        answer:
          "Souvent, oui, car elle demande plus de tournage et de montage. Mais une vidéo courte très travaillée peut demander autant de montage qu'une vidéo plus longue et plus simple. Le devis dépend du temps nécessaire.",
      },
      {
        question: "Quelle durée pour une vidéo sur LinkedIn ?",
        answer:
          "Entre 15 et 60 secondes pour un contenu courant, en format vertical ou carré, avec un message clair dès les premières secondes. Un témoignage peut aller jusqu'à 2 minutes s'il est vraiment engageant.",
      },
      {
        question: "Peut-on avoir plusieurs durées à partir d'un même tournage ?",
        answer:
          "Oui, c'est même recommandé. Nous prévoyons ces déclinaisons au moment de la préparation pour que le tournage serve tous les formats.",
      },
      {
        question: "Comment demander un devis ?",
        answer:
          "Décrivez votre projet en quelques lignes : objectif, public, durée envisagée, lieu. Je vous réponds sous 24 h, sans engagement.",
      },
    ],
    related: ["video-entreprise-paris", "combien-coute-film-entreprise-paris", "tarifs-video-paris", "videaste-paris"],
  },
];
