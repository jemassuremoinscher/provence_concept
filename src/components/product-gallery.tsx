"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/data/products";
import { ProductImage } from "./product-image";

export function ProductGallery({ product }: { product: Product }) {
  const images = product.images;
  const [active, setActive] = useState(0);

  // No real photo yet → branded placeholder.
  if (images.length === 0) {
    return (
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface-high shadow-e1">
        <ProductImage product={product} priority />
      </div>
    );
  }

  return (
    <div>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface-high shadow-e1">
        <Image
          key={images[active]}
          src={images[active]}
          alt={`${product.name} — visuel ${active + 1}`}
          fill
          sizes="(max-width:1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-3" role="group" aria-label="Autres visuels">
          {images.map((src, i) => {
            const on = i === active;
            return (
              <button
                key={src}
                onClick={() => setActive(i)}
                aria-label={`Voir le visuel ${i + 1}`}
                aria-pressed={on}
                className={`state relative aspect-square w-20 overflow-hidden rounded-xl bg-surface-high transition-shadow duration-200 ${
                  on ? "ring-2 ring-primary ring-offset-2 ring-offset-surface" : "opacity-80 hover:opacity-100"
                }`}
              >
                <Image src={src} alt="" fill sizes="80px" className="object-cover" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
