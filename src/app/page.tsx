import Link from "next/link";
import { Hero } from "@/components/hero";
import { CategoryCard } from "@/components/category-card";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { LinkButton } from "@/components/ui/button";
import { PRODUCTS, CATEGORIES, SELLABLE_COUNT } from "@/data/products";

const VALUES = [
  {
    title: "Des matières qui tiennent",
    body: "Coton peigné 180 g/m², maille dense : on choisit l'épaisseur et la tenue avant tout.",
    icon: (
      <path d="M12 3l8 4v6c0 4.5-3.2 7.3-8 8-4.8-.7-8-3.5-8-8V7l8-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    ),
  },
  {
    title: "Une coupe nette",
    body: "Droite, régulière, pensée pour durer dans le temps et bien tomber, saison après saison.",
    icon: <path d="M4 6h16M4 12h10M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />,
  },
  {
    title: "Brodé avec soin",
    body: "Broderie poitrine réalisée avec soin. Des séries courtes, parfois numérotées.",
    icon: <path d="M5 19l7-14 7 14M8 14h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
  },
];

export default function HomePage() {
  const featured = PRODUCTS.filter((p) => !p.comingSoon).slice(0, 8);

  return (
    <>
      <Hero />

      {/* Catégories */}
      <section className="shell mt-16 sm:mt-20">
        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {CATEGORIES.map((c) => (
              <CategoryCard key={c.id} category={c.id} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* La collection */}
      <section className="shell mt-20 sm:mt-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow text-primary">La collection</span>
              <h2 className="display-md mt-2 text-on-surface">{SELLABLE_COUNT} pièces, une même envie de soleil.</h2>
            </div>
            <LinkButton href="/boutique" variant="tonal">
              Tout voir
            </LinkButton>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-10 min-[420px]:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 0.05}>
              <ProductCard product={p} priority={i < 2} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Bande fondateur ── */}
      <div className="founder-band my-0">
        <div className="shell grid gap-6 py-10 sm:grid-cols-[3px_1fr_1fr] sm:gap-8 sm:py-12">
          {/* Barre bleue verticale — visible seulement sm+ */}
          <div className="hidden sm:block rounded-full bg-primary" />

          {/* Citation */}
          <blockquote className="font-serif text-lg font-normal italic leading-relaxed text-on-surface sm:text-xl">
            "Il y a des soirs à Dubaï où ce qui manque, c'est une socca
            brûlante et le bruit du marché de Nice."
          </blockquote>

          {/* Bio courte */}
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

      {/* Valeurs — bande façon "store" */}
      <section className="shell mt-24">
        <Reveal>
          <div className="rounded-2xl bg-surface-low p-8 sm:p-12">
            <h2 className="headline max-w-2xl text-on-surface">Pensé pour durer, pas pour la saison.</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {VALUES.map((v) => (
                <div key={v.title}>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-primary-container text-on-primary-container">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                      {v.icon}
                    </svg>
                  </span>
                  <h3 className="title-lg mt-4 text-on-surface">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Teaser polos */}
      <section className="shell mt-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-tertiary-container px-6 py-12 text-on-tertiary-container sm:px-12 sm:py-16">
            <div className="relative max-w-xl">
              <span className="eyebrow opacity-70">Nouveau chapitre</span>
              <h2 className="display-md mt-3">Les polos arrivent.</h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed opacity-90">
                Après les t-shirts brodés, la maison prépare ses sweats et ses premiers polos.
                Même esprit, mêmes spécialités du Sud à porter.
              </p>
              <div className="mt-7">
                <LinkButton href="/boutique" size="lg" className="bg-on-tertiary-container text-tertiary-container">
                  Voir la collection
                </LinkButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
