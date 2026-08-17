// =============================================================================
//  PROVENCE CONCEPT — Catalogue (source unique de vérité)
//  Pour mettre à jour : changez "price" et "images" ci-dessous. Rien d'autre.
//  - price : prix en euros (number) ou null tant qu'il n'est pas fixé.
//  - images : tableau de chemins (ex. "/products/barbajuans-1.jpg" dans /public).
//             Laissez [] pour afficher le visuel de marque temporaire.
// =============================================================================

export type Category = "t-shirts" | "sweatshirts" | "polos";

export type Colorway = {
  name: string;
  hex: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number | null;
  currency: "EUR";
  colors: Colorway[];
  sizes: string[];
  badge?: "Nouveau" | "Édition limitée";
  comingSoon?: boolean;
  tagline: string;
  description: string;
  details: string[];
  images: string[];
};

export const CATEGORIES: { id: Category; label: string; comingSoon?: boolean }[] = [
  { id: "t-shirts", label: "T-shirts" },
  { id: "sweatshirts", label: "Sweatshirts", comingSoon: true },
  { id: "polos", label: "Polos", comingSoon: true },
];

const SIZES = ["S", "M", "L", "XL", "XXL"];

// Les t-shirts sont blancs ; c'est la broderie (nom de la spécialité) qui change.
const BLANC: Colorway = { name: "Blanc", hex: "#f4f3ee" };

// Détails communs à la collection t-shirts (modifiable produit par produit).
const TEE_DETAILS = [
  "Coton peigné 180 g/m²",
  "Broderie poitrine",
  "Col rond renforcé",
  "Coupe droite régulière",
];

export const PRODUCTS: Product[] = [
  {
    id: "tee-barbajuans",
    slug: "barbajuans",
    name: "Barbajuans",
    category: "t-shirts",
    price: 34.90,
    currency: "EUR",
    colors: [BLANC],
    sizes: SIZES,
    badge: "Nouveau",
    tagline: "Le chausson niçois, brodé sur le cœur.",
    description:
      "Les barbajuans, ces petits raviolis frits farcis à la blette et à la brousse qu'on grignote les doigts gras un soir d'été. Broderie discrète, juste pour ceux qui savent.",
    details: TEE_DETAILS,
    images: ["/products/barbajuans-1.jpg", "/products/barbajuans-2.jpg"],
  },
  {
    id: "tee-caviar-aubergine",
    slug: "caviar-daubergine",
    name: "Caviar d’aubergine",
    category: "t-shirts",
    price: 34.90,
    currency: "EUR",
    colors: [BLANC],
    sizes: SIZES,
    badge: "Nouveau",
    tagline: "L'apéro provençal, version coton.",
    description:
      "Aubergines fondues, ail, huile d'olive : le caviar d'aubergine, c'est le Sud qu'on tartine. Une broderie aubergine sur blanc, sobre et solaire.",
    details: TEE_DETAILS,
    images: ["/products/caviar-daubergine-1.jpg", "/products/caviar-daubergine-2.jpg"],
  },
  {
    id: "tee-pan-bagnat",
    slug: "pan-bagnat",
    name: "Pan bagnat",
    category: "t-shirts",
    price: 34.90,
    currency: "EUR",
    colors: [BLANC],
    sizes: SIZES,
    tagline: "La salade niçoise qui tient dans un pain.",
    description:
      "Thon, œuf, olives, anchois, le tout serré dans un pain rond gorgé d'huile d'olive. Le pan bagnat, c'est midi les pieds dans le sable. Broderie bleu Méditerranée.",
    details: TEE_DETAILS,
    images: ["/products/pan-bagnat-1.jpg", "/products/pan-bagnat-2.jpg"],
  },
  {
    id: "tee-petits-farcis",
    slug: "petits-farcis",
    name: "Petits farcis",
    category: "t-shirts",
    price: 34.90,
    currency: "EUR",
    colors: [BLANC],
    sizes: SIZES,
    tagline: "Tomates, courgettes, oignons : tout est farci.",
    description:
      "Les petits farcis niçois, ces légumes du soleil garnis et passés au four jusqu'à confire. Le plat du dimanche, brodé rouge et vert sur blanc.",
    details: TEE_DETAILS,
    images: ["/products/petits-farcis-1.jpg", "/products/petits-farcis-2.jpg"],
  },
  {
    id: "tee-ratatouille",
    slug: "ratatouille-nicoise",
    name: "Ratatouille niçoise",
    category: "t-shirts",
    price: 34.90,
    currency: "EUR",
    colors: [BLANC],
    sizes: SIZES,
    badge: "Édition limitée",
    tagline: "Le mijoté du Sud, fil rouge et vert.",
    description:
      "Aubergine, courgette, poivron, tomate : la ratatouille niçoise mijotée à feu doux, celle qui embaume toute la cuisine. Brodée avec gourmandise.",
    details: TEE_DETAILS,
    images: ["/products/ratatouille-nicoise-1.jpg", "/products/ratatouille-nicoise-2.jpg"],
  },
  {
    id: "tee-socca-lover",
    slug: "socca-lover",
    name: "Socca lover",
    category: "t-shirts",
    price: 34.90,
    currency: "EUR",
    colors: [BLANC],
    sizes: SIZES,
    tagline: "Pois chiche, croustillant, pur Nice.",
    description:
      "La socca, cette galette de pois chiche dorée qu'on mange brûlante sur le Cours Saleya. Pour les vrais amoureux du Vieux-Nice : socca lover, brodé vert.",
    details: TEE_DETAILS,
    images: ["/products/socca-lover-1.jpg", "/products/socca-lover-2.jpg"],
  },
  {
    id: "tee-tomates-provencale",
    slug: "tomates-provencale",
    name: "Tomates à la provençale",
    category: "t-shirts",
    price: 34.90,
    currency: "EUR",
    colors: [BLANC],
    sizes: SIZES,
    tagline: "Ail, persil, chapelure : le réflexe d'été.",
    description:
      "Des tomates coupées, garnies d'ail et de persil, dorées au four jusqu'à confire. Les tomates à la provençale, brodées rouge sur blanc.",
    details: TEE_DETAILS,
    images: ["/products/tomates-provencale-1.jpg", "/products/tomates-provencale-2.jpg"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsByCategory(cat: Category): Product[] {
  return PRODUCTS.filter((p) => p.category === cat);
}

export const SELLABLE_COUNT = PRODUCTS.filter((p) => !p.comingSoon).length;
