"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { ProductImage } from "./product-image";
import { useCart } from "./cart/cart-context";
import { Badge } from "./badge";

export function EditorialProductCard({
  product,
  className = "",
  priority = false,
}: {
  product: Product;
  className?: string;
  priority?: boolean;
}) {
  const { add } = useCart();
  const [step, setStep] = useState<"idle" | "picking" | "added">("idle");
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (step !== "picking") return;
    function onClickOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setStep("idle");
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [step]);

  function handleAddClick() {
    if (step === "idle") setStep("picking");
  }

  function handleSizePick(size: string) {
    add(product, { size, color: product.colors[0]?.name });
    setStep("added");
    setTimeout(() => setStep("idle"), 1200);
  }

  return (
    <article className={`group relative min-h-[220px] overflow-hidden rounded-[20px] bg-surface-lowest ${className}`}>
      {/* Photo — cible de clic principale, en absolute pour ne pas englober les éléments interactifs */}
      <Link
        href={`/produit/${product.slug}`}
        className="absolute inset-0 z-0"
        aria-label={product.name}
      >
        <ProductImage product={product} priority={priority} />
      </Link>

      {/* Dégradé — décoratif, ne doit jamais intercepter les clics */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-hero-deep/90 via-hero-deep/25 to-transparent" />

      {/* Badge — décoratif, au-dessus du dégradé */}
      {(product.badge || product.comingSoon) && (
        <div className="pointer-events-none absolute left-4 top-4 z-20">
          {product.comingSoon ? (
            <Badge variant="soon">Bientôt</Badge>
          ) : (
            <Badge variant="accent">{product.badge}</Badge>
          )}
        </div>
      )}

      {/* Infos superposées — au-dessus du dégradé, interactives sélectivement */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-5" ref={wrapRef}>
        <Link
          href={`/produit/${product.slug}`}
          className="pointer-events-auto title-sm block text-white hover:underline"
        >
          {product.name}
        </Link>
        <p className="pointer-events-none mt-1 body-sm text-white/70">
          {product.tagline}
        </p>

        <div className="mt-3 flex items-center justify-between gap-2">
          {product.price != null ? (
            <span className="pointer-events-none body-lg font-semibold text-white">
              {formatPrice(product.price)}
            </span>
          ) : (
            <span className="pointer-events-none body-sm text-white/70">Prix à venir</span>
          )}

          {!product.comingSoon && product.price != null && (
            <button
              onClick={handleAddClick}
              className={`pointer-events-auto state h-8 rounded-full px-4 label-lg font-semibold transition-colors ${
                step === "added"
                  ? "bg-green-600 text-white"
                  : "bg-white text-hero-deep"
              }`}
              aria-label={
                step === "picking"
                  ? "Choisir une taille"
                  : `Ajouter ${product.name} au panier`
              }
            >
              {step === "added" ? "Ajouté ✓" : "Ajouter"}
            </button>
          )}
        </div>

        {step === "picking" && (
          <div className="pointer-events-auto mt-2 flex flex-wrap gap-1.5">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizePick(size)}
                className="state h-8 min-w-[36px] rounded-lg bg-white/95 px-2 label-md font-medium text-hero-deep transition-colors hover:bg-white"
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
