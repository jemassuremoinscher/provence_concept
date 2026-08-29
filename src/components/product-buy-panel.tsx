"use client";

import { useState } from "react";
import { useProductColor } from "./product-color-context";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Button } from "./ui/button";
import { useCart } from "./cart/cart-context";

export function ProductBuyPanel({ product }: { product: Product }) {
  const { add } = useCart();
  const [size, setSize] = useState(product.sizes[0]);
  const { color, setColor } = useProductColor();
  const disabled = !!product.comingSoon;

  return (
    <div>
      <div className="flex items-baseline gap-3">
        <span className="price text-2xl text-on-surface">{formatPrice(product.price)}</span>
        {product.price === null && !disabled && (
          <span className="text-sm text-on-surface-variant">tarif en cours de finalisation</span>
        )}
      </div>

      {/* Couleur */}
      <div className="mt-7">
        <div className="mb-2.5 flex items-center justify-between">
          <span className="text-sm font-semibold text-on-surface">Coloris</span>
          <span className="text-sm text-on-surface-variant">{color}</span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {product.colors.map((c) => {
            const active = c.name === color;
            return (
              <button
                key={c.hex}
                onClick={() => setColor(c.name)}
                aria-label={c.name}
                aria-pressed={active}
                className={`grid h-10 w-10 place-items-center rounded-full transition-all duration-200 ease-emphasized ${
                  active ? "ring-2 ring-primary ring-offset-2 ring-offset-surface" : "ring-1 ring-outline-variant"
                }`}
              >
                <span className="h-7 w-7 rounded-full ring-1 ring-black/10" style={{ background: c.hex }} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Taille */}
      <div className="mt-7">
        <div className="mb-2.5 flex items-center justify-between">
          <span className="text-sm font-semibold text-on-surface">Taille</span>
          <button className="text-sm font-semibold text-primary state rounded-sm px-1">Guide des tailles</button>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s) => {
            const active = s === size;
            return (
              <button
                key={s}
                onClick={() => setSize(s)}
                aria-pressed={active}
                className={`state h-11 min-w-[3rem] rounded-full px-4 text-sm font-semibold transition-colors duration-200 ${
                  active
                    ? "bg-primary text-on-primary"
                    : "border border-outline-variant text-on-surface hover:border-outline"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-9 flex gap-3">
        <Button
          size="lg"
          variant="filled"
          className="flex-1"
          disabled={disabled}
          onClick={() => add(product, { size, color })}
        >
          {disabled ? "Bientôt disponible" : "Ajouter au panier"}
        </Button>
      </div>

      {disabled && (
        <p className="mt-3 text-sm text-on-surface-variant">
          Ce modèle arrive prochainement. Inscrivez-vous à la newsletter pour être prévenu·e du lancement.
        </p>
      )}
    </div>
  );
}
