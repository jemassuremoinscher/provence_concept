export type Category = "t-shirts" | "sweatshirts" | "polos";
export type Collection = "cuisine" | "italiana";

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number | null;
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  category: Category;
  collection: Collection;
  badge?: string;
  comingSoon?: boolean;
  details: string[];
};

const SIZES = ["S", "M", "L", "XL", "XXL"];
const BLANC = { name: "Blanc", hex: "#f4f3ee" };

// Détails communs à la collection t-shirts (modifiable produit par produit).
const TEE_DETAILS = [
  "Coton peigné 180 g/m²",
  "Broderie poitrine",
  "Col rond renforcé",
  "Coupe droite régulière",
];

export const PRODUCTS: Product[] = [
  {
    id: "socca-lover",
    slug: "socca-lover",
    name: "Socca Lover",
    tagline: "Pois chiche, croustillant, pur Nice.",
    description:
      "La socca, cette galette de pois chiche dorée qu'on mange brûlante sur le Cours Saleya. Pour les vrais amoureux du Vieux-Nice : socca lover, brodé vert.",
    price: 34.90,
    images: ["/products/socca-lover-1.jpg", "/products/socca-lover-2.jpg"],
    sizes: SIZES,
    colors: [BLANC],
    category: "t-shirts",
    collection: "cuisine",
    badge: "Nouveau",
    details: TEE_DETAILS,
  },
  {
    id: "pan-bagnat",
    slug: "pan-bagnat",
    name: "Pan bagnat",
    tagline: "La salade niçoise qui tient dans un pain.",
    description:
      "Pan bagnat — pas pain bagnat. Du niçois : pain baigné. Tomates, œuf dur, anchois, olives, huile d'olive. Pas de mayonnaise.",
    price: 34.90,
    images: ["/products/pan-bagnat-1.jpg", "/products/pan-bagnat-2.jpg"],
    sizes: SIZES,
    colors: [BLANC],
    category: "t-shirts",
    collection: "cuisine",
    badge: "Nouveau",
    details: TEE_DETAILS,
  },
  {
    id: "ratatouille-nicoise",
    slug: "ratatouille-nicoise",
    name: "Ratatouille niçoise",
    tagline: "Le mijoté du Sud, fil rouge et vert.",
    description:
      "Courgette, aubergine, tomate, poivron — chaque légume cuit séparément, puis réuni. La vraie ratatouille niçoise prend son temps.",
    price: 34.90,
    images: ["/products/ratatouille-nicoise-1.jpg", "/products/ratatouille-nicoise-2.jpg"],
    sizes: SIZES,
    colors: [BLANC],
    category: "t-shirts",
    collection: "cuisine",
    details: TEE_DETAILS,
  },
  {
    id: "barbajuans",
    slug: "barbajuans",
    name: "Barbajuans",
    tagline: "Le chausson niçois, brodé sur le cœur.",
    description:
      "Pâte fine, ricotta, blettes, friture dorée. Le barbajuan se mange chaud, les doigts gras, à l'apéro. Pas avec des couverts.",
    price: 34.90,
    images: ["/products/barbajuans-1.jpg", "/products/barbajuans-2.jpg"],
    sizes: SIZES,
    colors: [BLANC],
    category: "t-shirts",
    collection: "cuisine",
    details: TEE_DETAILS,
  },
  {
    id: "petits-farcis",
    slug: "petits-farcis",
    name: "Petits farcis",
    tagline: "Tomates, courgettes, oignons farcis.",
    description:
      "Les légumes du marché, évidés et garnis, confits au four jusqu'à caramélisation. Le plat du dimanche niçois.",
    price: 34.90,
    images: ["/products/petits-farcis-1.jpg", "/products/petits-farcis-2.jpg"],
    sizes: SIZES,
    colors: [BLANC],
    category: "t-shirts",
    collection: "cuisine",
    details: TEE_DETAILS,
  },
  {
    id: "caviar-daubergine",
    slug: "caviar-daubergine",
    name: "Caviar d’aubergine",
    tagline: "L’apéro provençal, version coton.",
    description:
      "Aubergines grillées, ail, huile d'olive, citron. Froid, sur du pain grillé, les jours où il fait trop chaud pour cuisiner autre chose.",
    price: 34.90,
    images: ["/products/caviar-daubergine-1.jpg", "/products/caviar-daubergine-2.jpg"],
    sizes: SIZES,
    colors: [BLANC],
    category: "t-shirts",
    collection: "cuisine",
    details: TEE_DETAILS,
  },
  {
    id: "tomates-provencale",
    slug: "tomates-provencale",
    name: "Tomates à la provençale",
    tagline: "Le réflexe d’été, fil rouge.",
    description:
      "Tomates mûres, ail, persil, chapelure, huile d'olive. Cinq minutes de préparation, un résultat qui sent le Sud.",
    price: 34.90,
    images: ["/products/tomates-provencale-1.jpg", "/products/tomates-provencale-2.jpg"],
    sizes: SIZES,
    colors: [BLANC],
    category: "t-shirts",
    collection: "cuisine",
    details: TEE_DETAILS,
  },
  {
    id: "chi-va-piano",
    slug: "chi-va-piano",
    name: "Chi va piano…",
    tagline: "Chi va piano, non ha la Porsche.",
    description:
      "L’adage revisité : celui qui y va doucement n’a pas la Porsche. Un clin d’œil brodé pour ceux qui assument d’aller vite.",
    price: 34.90,
    images: ["/products/chi-va-piano-1.jpg"],
    sizes: SIZES,
    colors: [BLANC],
    category: "t-shirts",
    collection: "italiana",
    badge: "Nouveau",
    details: TEE_DETAILS,
  },
];

export const CATEGORIES: { id: Category; label: string; comingSoon?: boolean }[] = [
  { id: "t-shirts", label: "T-shirts" },
  { id: "sweatshirts", label: "Sweatshirts", comingSoon: true },
  { id: "polos", label: "Polos", comingSoon: true },
];

export const COLLECTIONS: { id: Collection; label: string; tagline: string; color: string }[] = [
  {
    id: "cuisine",
    label: "Cuisine",
    tagline: "Les spécialités niçoises et provençales brodées sur coton blanc.",
    color: "#15639E",
  },
  {
    id: "italiana",
    label: "Italiana",
    tagline: "L’Italie en une phrase. Brodée.",
    color: "#C4603A",
  },
];

export const SELLABLE_COUNT = PRODUCTS.filter((p) => !p.comingSoon).length;

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsByCategory(cat: Category): Product[] {
  return PRODUCTS.filter((p) => p.category === cat);
}

export function getProductsByCollection(collection: Collection): Product[] {
  return PRODUCTS.filter((p) => p.collection === collection && !p.comingSoon);
}
