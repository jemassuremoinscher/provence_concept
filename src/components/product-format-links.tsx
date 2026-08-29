import Link from "next/link";
import { PRODUCTS, Product } from "@/data/products";

const FORMAT_LABEL: Record<Product["category"], string> = {
  "t-shirts": "T-shirt",
  polos: "Polo",
  sweatshirts: "Sweat",
};

// Lien croisé entre les formats d'un même motif (`design`). Distinct de l'upsell
// « Dans le même esprit », qui propose d'autres motifs.
export function ProductFormatLinks({ product }: { product: Product }) {
  if (!product.design) return null;

  const siblings = PRODUCTS.filter(
    (p) => p.design === product.design && p.slug !== product.slug
  );

  if (siblings.length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      <span className="w-full text-sm font-semibold text-on-surface">
        Aussi disponible en
      </span>
      {siblings.map((s) => (
        <Link
          key={s.slug}
          href={`/produit/${s.slug}`}
          className="state flex items-center gap-1.5 rounded-full border border-outline-variant px-3 py-1.5 text-sm text-on-surface hover:border-primary"
        >
          {FORMAT_LABEL[s.category]}
          {s.comingSoon && (
            <span className="text-xs text-on-surface-variant">— bientôt</span>
          )}
        </Link>
      ))}
    </div>
  );
}
