"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Category, PRODUCTS, CATEGORIES } from "@/data/products";
import { ProductCard } from "./product-card";
import { Reveal } from "./reveal";

type Filter = "all" | Category;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "Tout" },
  ...CATEGORIES.map((c) => ({ id: c.id as Filter, label: c.label })),
];

export function Catalogue({ initialCat }: { initialCat?: string }) {
  const valid = CATEGORIES.some((c) => c.id === initialCat);
  const [filter, setFilter] = useState<Filter>(valid ? (initialCat as Category) : "all");
  const router = useRouter();

  const items = filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  const onPick = (f: Filter) => {
    setFilter(f);
    const url = f === "all" ? "/boutique" : `/boutique?cat=${f}`;
    router.replace(url, { scroll: false });
  };

  return (
    <section className="shell pt-10">
      <header className="max-w-2xl">
        <span className="eyebrow text-primary">La boutique</span>
        <h1 className="display-md mt-2 text-on-surface">Toute la collection</h1>
        <p className="mt-3 text-on-surface-variant">
          T-shirts blancs brodés aux noms des spécialités du Sud. Sweats et polos en approche.
          Tailles S à XXL.
        </p>
      </header>

      {/* Filter chips */}
      <div className="mt-8 flex flex-wrap gap-2.5" role="tablist" aria-label="Filtrer par catégorie">
        {FILTERS.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              role="tab"
              aria-selected={active}
              onClick={() => onPick(f.id)}
              className={`state h-10 rounded-full px-4 text-sm font-semibold transition-colors duration-200 ${
                active
                  ? "bg-secondary-container text-on-secondary-container"
                  : "border border-outline-variant text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {active && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mr-1.5 inline-block align-[-3px]" aria-hidden>
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {f.label}
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-on-surface-variant">{items.length} pièce{items.length > 1 ? "s" : ""}</p>

      {items.length === 0 ? (
        <div className="mt-5 grid place-items-center rounded-2xl bg-surface-low px-6 py-16 text-center">
          <span className="rounded-full bg-on-surface/85 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-surface-lowest">
            Bientôt
          </span>
          <h2 className="title-lg mt-4 text-on-surface">Cette catégorie arrive bientôt.</h2>
          <p className="mt-2 max-w-sm text-sm text-on-surface-variant">
            On y travaille, dans le même esprit que les t-shirts. En attendant, la collection
            actuelle est juste là.
          </p>
          <button
            onClick={() => onPick("all")}
            className="state mt-6 h-10 rounded-full bg-secondary-container px-5 text-sm font-semibold text-on-secondary-container"
          >
            Voir toute la collection
          </button>
        </div>
      ) : (
        <div className="mt-5 grid grid-cols-1 gap-x-5 gap-y-10 min-[420px]:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.05}>
              <ProductCard product={p} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
