import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PRODUCTS, getProduct, getProductsByCollection } from "@/data/products";
import { categoryLabel } from "@/lib/format";
import { ProductGallery } from "@/components/product-gallery";
import { ProductBuyPanel } from "@/components/product-buy-panel";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";

const SITE_URL = "https://provence-concept.vercel.app"; // ← domaine final

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "Pièce introuvable" };
  return {
    title: `${product.name} — ${categoryLabel(product.category)} brodé, spécialité niçoise`,
    description: `${product.tagline} ${product.description}`,
    keywords: [product.name, `t-shirt brodé ${product.name}`, "spécialité niçoise", "t-shirt provençal", "made in France"],
    alternates: { canonical: `/produit/${product.slug}` },
    openGraph: {
      title: `${product.name} · Provence Concept`,
      description: product.tagline,
      images: product.images.length ? product.images : ["/picto-blue.png"],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  // Upsell : d'abord la même collection, puis le reste du catalogue en appoint.
  // Pas de filtre sur `comingSoon` — les pièces à venir portent leur badge
  // « Bientôt » et restent un levier d'anticipation.
  const sameCollection = getProductsByCollection(product.collection).filter(
    (p) => p.slug !== product.slug
  );
  const otherProducts = PRODUCTS.filter(
    (p) => p.collection !== product.collection && p.slug !== product.slug
  );
  const related = [...sameCollection, ...otherProducts].slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    sku: product.id,
    image: (product.images.length ? product.images : ["/picto-blue.png"]).map((src) => `${SITE_URL}${src}`),
    brand: { "@type": "Brand", name: "Provence Concept" },
    category: categoryLabel(product.category),
    url: `${SITE_URL}/produit/${product.slug}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: product.price ?? undefined,
      url: `${SITE_URL}/produit/${product.slug}`,
      itemCondition: "https://schema.org/NewCondition",
      availability: product.comingSoon
        ? "https://schema.org/PreOrder"
        : "https://schema.org/InStock",
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Boutique", item: `${SITE_URL}/boutique` },
      {
        "@type": "ListItem",
        position: 3,
        name: `${categoryLabel(product.category)}s`,
        item: `${SITE_URL}/boutique?cat=${product.category}`,
      },
      { "@type": "ListItem", position: 4, name: product.name, item: `${SITE_URL}/produit/${product.slug}` },
    ],
  };

  return (
    <article className="shell pt-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-on-surface-variant" aria-label="Fil d'Ariane">
        <Link href="/boutique" className="state rounded-sm hover:text-on-surface">
          Boutique
        </Link>
        <span aria-hidden>/</span>
        <Link href={`/boutique?cat=${product.category}`} className="state rounded-sm hover:text-on-surface">
          {categoryLabel(product.category)}s
        </Link>
        <span aria-hidden>/</span>
        <span className="text-on-surface">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Galerie */}
        <ProductGallery product={product} />

        {/* Infos + achat */}
        <div className="lg:pt-2">
          <span className="eyebrow text-primary">{categoryLabel(product.category)}</span>
          <h1 className="display-md mt-2 text-on-surface">{product.name}</h1>
          <p className="mt-2 text-lg text-on-surface-variant">{product.tagline}</p>

          <div className="mt-6">
            <ProductBuyPanel product={product} />
          </div>

          <hr className="my-8 border-outline-variant" />

          <div className="space-y-6">
            <div>
              <h2 className="title-lg text-on-surface">Description</h2>
              <p className="mt-2 leading-relaxed text-on-surface-variant">{product.description}</p>
            </div>
            <div>
              <h2 className="title-lg text-on-surface">Détails</h2>
              <ul className="mt-3 space-y-2">
                {product.details.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-on-surface-variant">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-primary" aria-hidden>
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-surface-low p-4 text-sm text-on-surface-variant">
              <p className="font-semibold text-on-surface">Livraison & retours</p>
              <p className="mt-1">Expédié depuis la France. Retours sous 30 jours. Détails à la mise en ligne de la boutique.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Produits liés */}
      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="headline text-on-surface">Dans le même esprit</h2>
          <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-10 min-[420px]:grid-cols-2 lg:grid-cols-4">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
