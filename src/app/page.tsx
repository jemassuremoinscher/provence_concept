import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ProductCard } from "@/components/product-card";
import { EditorialProductCard } from "@/components/editorial-product-card";
import { Hero } from "@/components/hero";
import { COLLECTIONS, getProductsByCollection } from "@/data/products";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Collections ── */}
      <div id="collections" className="shell mt-20 space-y-20">
        {COLLECTIONS.map((col) => {
          // Home : une rangée pleine (4 colonnes) par collection.
          // La liste complète est sur /boutique via « Tout voir → ».
          const items = getProductsByCollection(col.id).slice(0, 4);
          // Grille éditoriale asymétrique réservée aux collections dont les 4
          // premiers produits sont réellement vendables (photo + prix) — pas
          // un id de collection en dur, pour rester correct si le catalogue
          // évolue. Les collections encore comingSoon gardent la grille
          // classique en repli.
          const isEditorial = items.length === 4 && items.every((p) => !p.comingSoon);
          return (
            <section key={col.id}>
              {/* En-tête collection */}
              <div className="flex items-end justify-between border-b border-outline-variant pb-4 mb-8">
                <div>
                  <span
                    className="eyebrow"
                    style={{ color: col.color }}
                  >
                    Collection
                  </span>
                  <h2 className="mt-1 font-serif text-3xl font-normal text-on-surface">
                    {col.label}
                  </h2>
                  <p className="mt-1 text-sm text-on-surface-variant">
                    {col.tagline}
                  </p>
                </div>
                <Link
                  href={`/boutique?collection=${col.id}`}
                  className="state shrink-0 rounded-full border border-outline px-4 py-2 text-xs font-medium text-on-surface-variant hover:text-on-surface"
                >
                  Tout voir →
                </Link>
              </div>

              {/* Grille produits */}
              {isEditorial ? (
                // Bento asymétrique : 1 grand format (2 rangées) + 2 normaux
                // + 1 large (2 colonnes) sur 3 colonnes / 2 rangées. En
                // colonne unique sous sm, comme le hero — même logique de
                // repli mobile.
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:grid-rows-2 sm:gap-5">
                  <Reveal className="sm:col-span-1 sm:row-span-2 sm:h-full">
                    <EditorialProductCard
                      product={items[0]}
                      priority
                      className="aspect-[4/5] sm:aspect-auto sm:h-full"
                    />
                  </Reveal>
                  <Reveal delay={0.05} className="sm:h-full">
                    <EditorialProductCard
                      product={items[1]}
                      priority
                      className="aspect-[4/5] sm:aspect-auto sm:h-full"
                    />
                  </Reveal>
                  <Reveal delay={0.1} className="sm:h-full">
                    <EditorialProductCard
                      product={items[2]}
                      className="aspect-[4/5] sm:aspect-auto sm:h-full"
                    />
                  </Reveal>
                  <Reveal delay={0.15} className="sm:col-span-2 sm:h-full">
                    <EditorialProductCard
                      product={items[3]}
                      className="aspect-[4/5] sm:aspect-auto sm:h-full"
                    />
                  </Reveal>
                </div>
              ) : items.length > 0 ? (
                <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
                  {items.map((product, i) => (
                    <Reveal key={product.id} delay={(i % 4) * 0.05}>
                      <ProductCard product={product} priority={i < 4} />
                    </Reveal>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-outline-variant bg-surface-low py-16 text-center">
                  <p className="text-sm font-medium text-on-surface">
                    Bientôt disponible.
                  </p>
                  <p className="mt-1 text-xs text-on-surface-variant">
                    Inscrivez-vous pour être prévenu en avant-première.
                  </p>
                </div>
              )}

              {/* À venir dans cette collection */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Polos", "Sweatshirts", "Accessoires"].map((coming) => (
                  <span
                    key={coming}
                    className="rounded-full border border-outline-variant px-3 py-1 text-xs text-on-surface-variant"
                  >
                    {coming} — bientôt
                  </span>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* ── Bande fondateur ── */}
      <div className="founder-band mt-20">
        <div className="shell grid gap-6 py-10 sm:grid-cols-[3px_1fr_1fr] sm:gap-8 sm:py-12">
          <div className="hidden sm:block rounded-full bg-primary" />
          <blockquote className="font-serif text-lg font-normal italic leading-relaxed text-on-surface sm:text-xl">
            "Il y a des soirs à Dubaï où ce qui manque, c'est une socca
            brûlante et le bruit du marché de Nice."
          </blockquote>
          <div className="flex flex-col justify-center gap-4">
            <p className="text-sm leading-relaxed text-on-surface-variant">
              Provence Concept est né d'un Niçois expatrié — des racines au
              Cours Saleya, l'envie de porter quelque chose qui dit d'où l'on
              vient. Pas floqué. Brodé.
            </p>
            <Link
              href="/a-propos"
              className="text-sm font-semibold text-primary hover:underline w-fit"
            >
              Lire notre histoire →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Teaser formats à venir ── */}
      <div className="shell mt-16 mb-20">
        <div className="rounded-2xl bg-surface-low p-8 sm:p-10">
          <span className="eyebrow text-primary">Bientôt</span>
          <h3 className="mt-2 font-serif text-2xl font-normal text-on-surface">
            Polos, sweatshirts & accessoires.
          </h3>
          <p className="mt-2 text-sm text-on-surface-variant max-w-md">
            Les deux collections — Cuisine et Italiana — s'enrichissent de nouveaux formats. Laissez votre e-mail pour être prévenu.
          </p>
        </div>
      </div>
    </>
  );
}
