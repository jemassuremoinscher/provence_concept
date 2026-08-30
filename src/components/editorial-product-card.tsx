import Link from "next/link";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { ProductImage } from "./product-image";
import { Badge } from "./badge";

// Card éditoriale pour la grille asymétrique de la home (redesign 2026) :
// grande photo, dégradé bas, infos superposées en blanc. Volontairement
// sans sélecteur de taille inline — c'est une vitrine de découverte, l'ajout
// rapide reste le rôle de `ProductCard` sur /boutique et les autres grilles.
export function EditorialProductCard({
  product,
  priority = false,
  className = "",
}: {
  product: Product;
  priority?: boolean;
  className?: string;
}) {
  const soldOut = product.comingSoon;

  return (
    <Link
      href={`/produit/${product.slug}`}
      className={`state group relative block h-full min-h-[220px] overflow-hidden rounded-2xl shadow-e1 transition-shadow duration-300 ease-emphasized hover:shadow-e3 ${className}`}
    >
      <ProductImage product={product} priority={priority} />

      {/* Dégradé bas pour la lisibilité du texte superposé */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-hero-deep/90 via-hero-deep/25 to-transparent"
      />

      {product.badge && (
        <Badge variant="accent" className="absolute left-3 top-3">
          {product.badge}
        </Badge>
      )}
      {soldOut && (
        <Badge variant="soon" className="absolute left-3 top-3">
          Bientôt
        </Badge>
      )}

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <p className="card-name-serif body-lg text-white">{product.name}</p>
        <p className="mt-0.5 text-sm text-white/70">{product.tagline}</p>
        {product.price != null && (
          <p className="body-lg mt-1.5 font-semibold text-white">
            {formatPrice(product.price)}
          </p>
        )}
      </div>
    </Link>
  );
}
