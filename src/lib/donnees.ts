/**
 * Contenu du site. Les textes de présentation, intitulés de projets et
 * coordonnées sont repris du site officiel de l'agence.
 */

export const SITE = {
  url: "https://atelier-architecture-moderne-v2.vercel.app",
  titre: "Atelier d'Architecture Moderne — Architecte à Dijon",
  description:
    "Agence d'architecture à Dijon : rénovation, extension, construction neuve et mise en valeur du bâti existant, en Côte-d'Or et en Bourgogne.",
} as const;

export const AGENCE = {
  nom: "Atelier d’Architecture Moderne",
  architecte: "Pauline Garnier",
  adresse: "17 rue Gustave Noblemaire",
  codePostal: "21000",
  ville: "Dijon",
  telephone: "06 31 04 55 32",
  telephoneUri: "+33631045532",
  email: "paulinegarnier21@gmail.com",
  linkedin: "http://www.linkedin.com/in/pauline-garnier-5aa9b4180",
  horaires: [
    { jour: "Lundi – vendredi", heures: "8h30 – 18h" },
    { jour: "Samedi – dimanche", heures: "Fermé" },
  ],
} as const;

/** Textes officiels de présentation de l'agence. */
export const MANIFESTE = {
  presentation:
    "Agence jeune et dynamique, portée par une vision contemporaine de l’architecture, attentive aux modes de vie actuels tout en respectant l’identité et le patrimoine de nos villes.",
  demarche:
    "Nous plaçons l’écoute et l’échange au cœur de notre démarche, afin de comprendre pleinement les attentes de nos clients et de les traduire en projets adaptés, cohérents et durables.",
} as const;

/**
 * Les quatre domaines d'intervention de l'agence, présentés comme une
 * légende de plan : l'existant se hachure, le neuf se poche.
 */
export type Intervention = {
  nom: string;
  symbole: "hachures" | "mixte" | "poche" | "pointille";
  detail: string;
};

export const INTERVENTIONS: Intervention[] = [
  {
    nom: "Rénovation",
    symbole: "hachures",
    detail:
      "Remettre le bâti à niveau — usages, lumière, performances — sans effacer ce qui fait son caractère.",
  },
  {
    nom: "Extension",
    symbole: "mixte",
    detail:
      "Agrandir en prenant appui sur l’existant : le volume neuf prolonge la maison au lieu de s’y coller.",
  },
  {
    nom: "Construction neuve",
    symbole: "poche",
    detail:
      "Des volumes simples, des matériaux francs — bois, zinc, béton — et des ouvertures généreuses.",
  },
  {
    nom: "Mise en valeur du bâti existant",
    symbole: "pointille",
    detail:
      "Révéler ce qui est déjà là : pierre, charpente, proportions — et le faire dialoguer avec l’époque.",
  },
];

export type Photo = {
  nom: string;
  alt: string;
  legende?: string;
  ratio: "paysage" | "portrait" | "carre";
};

export type Projet = {
  slug: string;
  numero: string;
  titre: string;
  lieu: string;
  nature: string;
  accroche: string;
  description: string;
  couverture: Photo;
  avantApres?: { avant: Photo; apres: Photo };
  photos: Photo[];
};

/** Variantes d'images disponibles (les autres s'arrêtent à 1200 px). */
export const AVEC_2000 = new Set([
  "bretigny-01",
  "bretigny-02",
  "bretigny-03",
  "bretigny-04",
  "chaux-01",
  "chaux-02",
  "chaux-03",
  "chaux-04",
  "chaux-avant-01",
  "chaux-avant-02",
  "chaux-avant-03",
]);

export const PROJETS: Projet[] = [
  {
    slug: "chaux",
    numero: "01",
    titre: "Reconstruction d’une maison individuelle",
    lieu: "Chaux (21)",
    nature: "Reconstruction après sinistre",
    accroche: "Reconstruire après l’incendie, sans effacer la bâtisse.",
    description:
      "À la suite d’un incendie, cette maison a été entièrement repensée et reconstruite. L’approche architecturale a consisté à conserver l’identité de la bâtisse ancienne tout en y intégrant des éléments contemporains : volumes repensés, luminosité accrue et performances énergétiques améliorées. Le projet illustre l’équilibre entre mémoire du lieu et confort de vie moderne, offrant aux habitants un nouveau cadre de vie harmonieux et pérenne.",
    couverture: {
      nom: "chaux-01",
      alt: "Façade reconstruite de la maison de Chaux, soubassement en pierre et enduit clair",
      ratio: "paysage",
    },
    avantApres: {
      avant: {
        nom: "chaux-avant-01",
        alt: "La maison de Chaux au lendemain de l’incendie, charpente et bardage calcinés",
        ratio: "paysage",
      },
      apres: {
        nom: "chaux-01",
        alt: "La même façade reconstruite, soubassement en pierre conservé et enduit clair",
        ratio: "paysage",
      },
    },
    photos: [
      {
        nom: "chaux-avant-03",
        alt: "Intérieur de la maison après l’incendie, planchers et charpente effondrés",
        legende: "Avant — planchers et charpente déposés",
        ratio: "paysage",
      },
      {
        nom: "chaux-03",
        alt: "Nouveau plancher bois posé sur les murs de pierre conservés, arc de brique préservé",
        legende: "Le plancher neuf prend appui sur les murs conservés",
        ratio: "portrait",
      },
      {
        nom: "chaux-04",
        alt: "Charpente neuve et plancher sapin du comble",
        legende: "La charpente neuve, sous bâche",
        ratio: "portrait",
      },
      {
        nom: "chaux-02",
        alt: "Pignon reconstruit de la maison de Chaux, enduit clair et pierre appareillée, vu du jardin",
        legende: "Le pignon reconstruit, côté jardin",
        ratio: "paysage",
      },
    ],
  },
  {
    slug: "fontaine-les-dijon",
    numero: "02",
    titre: "Réalisation d’une extension",
    lieu: "Fontaine-les-Dijon (21)",
    nature: "Extension à toit plat",
    accroche: "Un toit plat qui prolonge la maison vers la piscine.",
    description:
      "Cette extension à toit plat vient agrandir une maison individuelle tout en affirmant une écriture moderne et sobre. Le projet privilégie des lignes épurées et des ouvertures généreuses, apportant confort et luminosité aux espaces de vie.",
    couverture: {
      nom: "fontaine-01",
      alt: "Extension à toit plat à Fontaine-les-Dijon, larges baies vitrées ouvertes sur la terrasse et la piscine",
      ratio: "paysage",
    },
    photos: [
      {
        nom: "fontaine-01",
        alt: "Extension à toit plat, larges baies vitrées ouvertes sur la terrasse et la piscine",
        legende: "L’acrotère du toit plat prolonge la maison existante",
        ratio: "paysage",
      },
    ],
  },
  {
    slug: "bretigny",
    numero: "03",
    titre: "Construction d’un carport",
    lieu: "Bretigny (21)",
    nature: "Construction neuve",
    accroche: "Un portique de béton entre les arbres.",
    description:
      "Le projet consiste en la réalisation d’un carport pensé comme une continuité de la maison. Sa structure sobre et linéaire s’inscrit discrètement dans l’environnement et tient compte de la configuration du terrain ainsi que des éléments végétaux existants. L’ouvrage illustre une approche architecturale respectueuse du site, où fonctionnalité et intégration paysagère se conjuguent.",
    couverture: {
      nom: "bretigny-01",
      alt: "Carport de Bretigny, longue poutre béton dans le prolongement de la maison",
      ratio: "paysage",
    },
    photos: [
      {
        nom: "bretigny-04",
        alt: "La maison de Bretigny dans son parc, le carport en construction sur la droite",
        legende: "L’ouvrage s’aligne sur le pignon de la maison",
        ratio: "paysage",
      },
      {
        nom: "bretigny-01",
        alt: "Poutre béton linéaire et murs en blocs, sous les arbres du jardin",
        legende: "Une structure sobre et linéaire",
        ratio: "paysage",
      },
      {
        nom: "bretigny-02",
        alt: "Portique béton du carport, cadré entre les arbres existants",
        legende: "Le portique tient compte des végétaux existants",
        ratio: "paysage",
      },
      {
        nom: "bretigny-03",
        alt: "Le carport de Bretigny en cours de chantier",
        ratio: "paysage",
      },
    ],
  },
  {
    slug: "longvic",
    numero: "04",
    titre: "Garages",
    lieu: "Longvic (21)",
    nature: "Construction neuve",
    accroche: "Des volumes utilitaires en bac acier gris foncé.",
    description:
      "Le projet prévoit la construction de garages dans une zone industrielle de Longvic. L’écriture architecturale, volontairement sobre, repose sur des volumes simples et fonctionnels habillés d’un bardage en bac acier gris foncé. Ce choix de matériaux assure à la fois durabilité, facilité d’entretien et modernité, tout en s’intégrant de manière harmonieuse dans le contexte industriel environnant.",
    couverture: {
      nom: "longvic-01",
      alt: "Garages de Longvic, volumes simples habillés d’un bardage en bac acier gris foncé",
      ratio: "carre",
    },
    photos: [
      {
        nom: "longvic-01",
        alt: "Garages de Longvic, volumes simples en bac acier gris foncé",
        legende: "Bardage en bac acier gris foncé",
        ratio: "carre",
      },
    ],
  },
  {
    slug: "lantenay",
    numero: "05",
    titre: "Construction d’une maison",
    lieu: "Lantenay (21)",
    nature: "Construction neuve",
    accroche: "Bois, zinc et lumière traversante.",
    description:
      "La maison s’organise en volumes simples, réunis sous une toiture à deux pans en zinc à joint debout et habillés d’un bardage bois vertical. Les grandes baies ouvrent les pièces de vie sur le jardin, tandis que le garage vient prolonger l’ensemble. À l’intérieur, une écriture sobre et des matériaux naturels accompagnent la lumière.",
    couverture: {
      nom: "lantenay-01",
      alt: "Maison de Lantenay, bardage bois vertical et toiture à deux pans en zinc, ouverte sur le jardin",
      ratio: "paysage",
    },
    photos: [
      {
        nom: "lantenay-01",
        alt: "Maison de Lantenay, bardage bois vertical et toiture zinc à joint debout",
        legende: "Bardage bois vertical, toiture zinc à joint debout",
        ratio: "paysage",
      },
      {
        nom: "lantenay-02",
        alt: "Séjour de la maison de Lantenay, cuisine ouverte et baie donnant sur le jardin",
        legende: "Le séjour traversant",
        ratio: "paysage",
      },
      {
        nom: "lantenay-03",
        alt: "Chambre de la maison de Lantenay, mur béton, parquet chêne et ouverture toute hauteur",
        legende: "La chambre et son ouverture toute hauteur",
        ratio: "paysage",
      },
    ],
  },
];

export const getProjet = (slug: string) =>
  PROJETS.find((p) => p.slug === slug);

export const PORTRAIT: Photo = {
  nom: "pauline-garnier",
  alt: "Pauline Garnier, architecte fondatrice de l’Atelier d’Architecture Moderne",
  ratio: "portrait",
};
