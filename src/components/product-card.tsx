"use client";

import Link from "next/link";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { ProductImage } from "./product-image";
import { useCart } from "./cart/cart-context";

const CARD_TINTS: Record<string, string> = {
  "socca-lover":         "#f3f1fa",
  "pan-bagnat":          "#eff4fb",
  "ratatouille-nicoise": "#fbf0ec",
  "barbajuans":          "#fdf3e7",
  "petits-farcis":       "#f0f5ec",
  "caviar-daubergine":   "#f5f0fb",
  "tomates-provencale":  "#fdf0f0",
};

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const { add } = useCart();
  const soldOut = product.comingSoon;
  const tint = CARD_TINTS[product.slug] ?? "#f3f1fa";

  return (
    <article className="group relative flex flex-col">
      <Link
        href={`/produit/${product.slug}`}
        className="relative block aspect-[4/5] w-full overflow-hidden rounded-xl shadow-e1 transition-shadow duration-300 ease-emphasized hover:shadow-e2"
        style={{ background: tint }}
      >
        <ProductImage product={product} priority={priority} />

        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-tertiary-container px-3 py-1 text-[0.7rem] font-bold text-on-tertiary-container shadow-e1">
            {product.badge}
          </span>
        )}
        {soldOut && (
          <span className="absolute left-3 top-3 rounded-full bg-on-surface/85 px-3 py-1 text-[0.7rem] font-bold text-surface-lowest">
            Bientôt
          </span>
        )}
      </Link>

      <div className="mt-3 flex flex-col gap-1 px-1">
        <Link
          href={`/produit/${product.slug}`}
          className="card-name-serif text-[1rem] text-on-surface hover:text-primary transition-colors"
        >
          {product.name}
        </Link>

        <p className="text-sm text-on-surface-variant leading-snug">
          {product.tagline}
        </p>

        <div className="mt-2 flex items-center justify-between gap-2">
          {product.price != null ? (
            <span className="text-[0.95rem] font-semibold text-on-surface">
              {formatPrice(product.price)}
            </span>
          ) : (
            <span className="text-sm text-on-surface-variant">Prix à venir</span>
          )}

          {!soldOut && (
            <button
              onClick={() => add(product, { size: "M" })}
              aria-label={`Ajouter ${product.name} au panier`}
              className="state h-8 rounded-full bg-primary px-4 text-xs font-semibold text-on-primary"
            >
              Ajouter
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
