"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { ProductImage } from "./product-image";
import { Badge } from "./badge";
import { useCart } from "./cart/cart-context";

// Fond de card unique pour toute la grille. Les teintes dérivées de
// `colors[0].hex` produisaient 31 pastels différents et cassaient l'homogénéité.
const CARD_BG = "#F3F1FA";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const { add } = useCart();
  const soldOut = product.comingSoon;

  const [step, setStep] = useState<"idle" | "picking" | "added">("idle");
  const wrapRef = useRef<HTMLDivElement>(null);

  /* Ferme le sélecteur si clic en dehors */
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
    // La card n'affiche qu'un coloris (`images[0]`, soit `colors[0]`) : on le passe
    // explicitement pour que l'ajout ne dépende jamais du repli silencieux de `add`.
    add(product, { size, color: product.colors[0]?.name });
    setStep("added");
    setTimeout(() => setStep("idle"), 1200);
  }

  return (
    <article className="group relative flex flex-col">
      {/* Image */}
      <Link
        href={`/produit/${product.slug}`}
        className="relative block aspect-[4/5] w-full overflow-hidden rounded-xl shadow-e1 transition-shadow duration-300 ease-emphasized hover:shadow-e2"
        style={{ background: CARD_BG }}
      >
        <ProductImage product={product} priority={priority} />
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
      </Link>

      {/* Infos */}
      <div className="mt-3 flex flex-col gap-1 px-1" ref={wrapRef}>
        <Link
          href={`/produit/${product.slug}`}
          className="card-name-serif body-lg text-on-surface transition-colors hover:text-primary"
        >
          {product.name}
        </Link>

        <p className="text-sm leading-snug text-on-surface-variant">
          {product.tagline}
        </p>

        <div className="mt-2 flex items-center justify-between gap-2">
          {product.price != null ? (
            <span className="body-lg font-semibold text-on-surface">
              {formatPrice(product.price)}
            </span>
          ) : (
            <span className="text-sm text-on-surface-variant">Prix à venir</span>
          )}

          {!soldOut && product.price != null && (
            <button
              onClick={handleAddClick}
              className={`state h-8 rounded-full px-4 text-xs font-semibold transition-colors ${
                step === "added"
                  ? "bg-green-600 text-white"
                  : "bg-primary text-on-primary"
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

        {/* Sélecteur de taille inline */}
        {step === "picking" && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizePick(size)}
                className="state h-8 min-w-[36px] rounded-lg border border-outline-variant bg-surface-lowest px-2 text-xs font-medium text-on-surface transition-colors hover:border-primary hover:text-primary"
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
