"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Reveal } from "./reveal";
import { ProductCard } from "./product-card";
import { NewsletterForm } from "./newsletter-form";
import { PRODUCTS, CATEGORIES, COLLECTIONS } from "@/data/products";

type Props = {
  initialCat?: string;
  initialCollection?: string;
};

export function Catalogue({ initialCat, initialCollection }: Props) {
  const router = useRouter();
  const [cat, setCat] = useState(initialCat ?? "all");
  const [collection, setCollection] = useState(initialCollection ?? "all");

  // Resynchronise l'état quand l'URL change côté client (ex. clic sur un lien nav)
  // sans que le composant soit remonté.
  useEffect(() => {
    setCat(initialCat ?? "all");
    setCollection(initialCollection ?? "all");
  }, [initialCat, initialCollection]);

  const updateUrl = (nextCat: string, nextCollection: string) => {
    const params = new URLSearchParams();
    if (nextCat !== "all") params.set("cat", nextCat);
    if (nextCollection !== "all") params.set("collection", nextCollection);
    const qs = params.toString();
    router.replace(qs ? `/boutique?${qs}` : "/boutique", { scroll: false });
  };

  const pickCat = (c: string) => {
    setCat(c);
    updateUrl(c, collection);
  };

  const pickCollection = (c: string) => {
    setCollection(c);
    updateUrl(cat, c);
  };

  const filtered = PRODUCTS.filter((p) => {
    const catMatch = cat === "all" || p.category === cat;
    const colMatch = collection === "all" || p.collection === collection;
    return catMatch && colMatch;
  });

  const sellable = filtered.filter((p) => !p.comingSoon);
  const comingSoon = filtered.filter((p) => p.comingSoon);

  const showEmpty =
    sellable.length === 0 &&
    cat !== "all" &&
    ["sweatshirts", "polos"].includes(cat);

  return (
    <section className="shell pt-10">
      {/* ── Titre ── */}
      <header className="max-w-2xl">
        <span className="eyebrow text-primary">La boutique</span>
        <h1 className="display-md mt-2 text-on-surface">
          {collection !== "all"
            ? COLLECTIONS.find((c) => c.id === collection)?.label ?? "Toute la collection"
            : "Toute la collection"}
        </h1>
        <p className="mt-2 text-sm text-on-surface-variant">
          T-shirts blancs brodés aux noms des spécialités du Sud.
          Tailles S à XXL.
        </p>
      </header>

      {/* ── Filtres collection ── */}
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={() => pickCollection("all")}
          className={`state h-9 rounded-full px-4 text-sm font-medium transition-colors ${
            collection === "all"
              ? "bg-primary text-on-primary"
              : "bg-surface-low text-on-surface-variant hover:text-on-surface"
          }`}
        >
          Toutes
        </button>
        {COLLECTIONS.map((col) => (
          <button
            key={col.id}
            onClick={() => pickCollection(col.id)}
            className={`state h-9 rounded-full px-4 text-sm font-medium transition-colors ${
              collection === col.id
                ? "text-on-primary"
                : "bg-surface-low text-on-surface-variant hover:text-on-surface"
            }`}
            style={
              collection === col.id
                ? { background: col.color }
                : undefined
            }
          >
            {col.label}
          </button>
        ))}
      </div>

      {/* ── Filtres format ── */}
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          onClick={() => pickCat("all")}
          className={`state h-8 rounded-full px-3 text-xs font-medium transition-colors ${
            cat === "all"
              ? "bg-on-surface text-surface"
              : "border border-outline-variant text-on-surface-variant hover:text-on-surface"
          }`}
        >
          Tout
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => pickCat(c.id)}
            className={`state h-8 rounded-full px-3 text-xs font-medium transition-colors ${
              cat === c.id
                ? "bg-on-surface text-surface"
                : "border border-outline-variant text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* ── Compteur ── */}
      <p className="mt-6 text-sm text-on-surface-variant">
        {sellable.length} pièce{sellable.length !== 1 ? "s" : ""}
      </p>

      {/* ── Grille produits ── */}
      {showEmpty ? (
        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-outline-variant bg-surface-low py-16 text-center">
          <p className="title-lg text-on-surface">Cette catégorie arrive bientôt.</p>
          <p className="max-w-sm text-sm text-on-surface-variant">
            On y travaille. Laissez votre e-mail pour être prévenu en avant-première.
          </p>
          <div className="mt-2 w-full max-w-sm">
            <NewsletterForm />
          </div>
          <button
            onClick={() => pickCat("all")}
            className="state mt-2 rounded-full px-3 py-1 text-sm font-semibold text-primary"
          >
            Voir toute la collection
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 min-[420px]:grid-cols-2 lg:grid-cols-4">
          {sellable.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 0.05}>
              <ProductCard product={p} priority={i < 4} />
            </Reveal>
          ))}
        </div>
      )}

      {/* ── Coming soon ── */}
      {comingSoon.length > 0 && (
        <div className="mt-16">
          <span className="eyebrow text-on-surface-variant">Bientôt</span>
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
            {comingSoon.map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 0.05}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
