import Image from "next/image";
import { Product } from "@/data/products";
import { categoryLabel } from "@/lib/format";

// Tonal background rotated per product so the grid feels intentional before real photos land.
const TONES = ["var(--surface-high)", "var(--primary-container)", "var(--secondary-container)", "var(--tertiary-container)"];

function toneFor(id: string): string {
  let sum = 0;
  for (let i = 0; i < id.length; i++) sum += id.charCodeAt(i);
  return TONES[sum % TONES.length];
}

export function ProductImage({ product, priority = false }: { product: Product; priority?: boolean }) {
  const hasPhoto = product.images.length > 0;

  if (hasPhoto) {
    return (
      <Image
        src={product.images[0]}
        alt={product.name}
        fill
        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-emphasized group-hover:scale-[1.04]"
        priority={priority}
      />
    );
  }

  // Placeholder de marque — remplacé automatiquement dès qu'une image est ajoutée.
  return (
    <div
      className="absolute inset-0 grid place-items-center overflow-hidden"
      style={{ background: toneFor(product.id) }}
      aria-label={`${product.name} — visuel à venir`}
    >
      <Image
        src="/picto-blue.png"
        alt=""
        width={240}
        height={320}
        aria-hidden
        className="h-[58%] w-auto opacity-[0.16] transition-transform duration-500 ease-emphasized group-hover:scale-[1.06]"
      />
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
        <span className="rounded-full bg-surface-lowest/80 px-3 py-1 text-[0.7rem] font-semibold text-on-surface-variant backdrop-blur">
          {categoryLabel(product.category)}
        </span>
        <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-on-surface-variant/70">
          Visuel à venir
        </span>
      </div>
    </div>
  );
}
