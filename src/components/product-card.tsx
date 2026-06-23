"use client";

import Link from "next/link";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { ProductImage } from "./product-image";
import { useCart } from "./cart/cart-context";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const { add } = useCart();
  const soldOut = product.comingSoon;

  return (
    <article className="group relative flex flex-col">
      <Link
        href={`/produit/${product.slug}`}
        className="relative block aspect-[4/5] w-full overflow-hidden rounded-xl bg-surface-high shadow-e1 transition-shadow duration-300 ease-emphasized group-hover:shadow-e3"
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

      {/* Quick add — sits over the image base on hover (desktop), always visible on touch */}
      {!soldOut && (
        <button
          onClick={() => add(product)}
          aria-label={`Ajouter ${product.name} au panier`}
          className="state absolute right-3 top-[calc(80%-1.25rem)] z-10 grid h-12 w-12 translate-y-2 place-items-center rounded-full bg-surface-lowest text-primary opacity-0 shadow-e2 transition-all duration-300 ease-emphasized hover:bg-primary hover:text-on-primary group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100 max-md:translate-y-0 max-md:opacity-100"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>
      )}

      <div className="mt-3.5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="title-lg truncate text-on-surface">
            <Link href={`/produit/${product.slug}`} className="state rounded-sm">
              {product.name}
            </Link>
          </h3>
          <p className="mt-0.5 truncate text-sm text-on-surface-variant">{product.tagline}</p>
        </div>
        <div className="flex shrink-0 gap-1 pt-1">
          {product.colors.slice(0, 4).map((c) => (
            <span
              key={c.hex}
              title={c.name}
              className="h-3.5 w-3.5 rounded-full ring-1 ring-black/10"
              style={{ background: c.hex }}
            />
          ))}
        </div>
      </div>

      <p className="price mt-1.5 text-on-surface">{formatPrice(product.price)}</p>
    </article>
  );
}
