import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ARTICLES, getArticle } from "@/data/journal";
import { getProduct } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";

const SITE_URL = "https://provence-concept.vercel.app"; // ← domaine final

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticle(params.slug);
  if (!a) return { title: "Article introuvable" };
  return {
    title: a.title,
    description: a.excerpt,
    keywords: a.keywords,
    alternates: { canonical: `/journal/${a.slug}` },
    openGraph: {
      type: "article",
      title: `${a.title} · Provence Concept`,
      description: a.excerpt,
      images: ["/picto-blue.png"],
    },
  };
}

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug);
  if (!a) notFound();

  const related = a.relatedSlugs.map(getProduct).filter(Boolean).slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    inLanguage: "fr-FR",
    datePublished: a.datePublished,
    dateModified: a.dateModified,
    author: { "@type": "Organization", name: "Provence Concept" },
    publisher: {
      "@type": "Organization",
      name: "Provence Concept",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-blue.png` },
    },
    mainEntityOfPage: `${SITE_URL}/journal/${a.slug}`,
    keywords: a.keywords.join(", "),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: a.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Journal", item: `${SITE_URL}/journal` },
      { "@type": "ListItem", position: 3, name: a.title, item: `${SITE_URL}/journal/${a.slug}` },
    ],
  };

  return (
    <article className="shell pt-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="flex items-center gap-1.5 text-sm text-on-surface-variant" aria-label="Fil d'Ariane">
        <Link href="/journal" className="state rounded-sm hover:text-on-surface">Journal</Link>
        <span aria-hidden>/</span>
        <span className="text-on-surface">{a.question}</span>
      </nav>

      <header className="mt-6 max-w-3xl">
        <span className="eyebrow text-primary">{a.question}</span>
        <h1 className="display-md mt-3 text-on-surface">{a.title}</h1>
        <p className="mt-3 text-sm text-on-surface-variant">
          {fmtDate(a.datePublished)} · {a.readingMinutes} min de lecture
        </p>
        {/* Réponse directe — placée en tête pour être citée par les moteurs IA. */}
        <p className="mt-6 border-l-4 border-primary pl-5 text-lg leading-relaxed text-on-surface">
          {a.answer}
        </p>
      </header>

      <div className="mt-12 max-w-3xl space-y-10">
        {a.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="headline text-on-surface">{s.heading}</h2>
            <div className="mt-4 space-y-4">
              {s.body.map((p, i) => (
                <p key={i} className="leading-relaxed text-on-surface-variant">{p}</p>
              ))}
            </div>
          </section>
        ))}

        {/* FAQ — alignée sur le FAQPage JSON-LD */}
        <section>
          <h2 className="headline text-on-surface">Questions fréquentes</h2>
          <dl className="mt-4 space-y-5">
            {a.faq.map((f) => (
              <div key={f.q} className="rounded-lg bg-surface-low p-5">
                <dt className="title-lg text-on-surface">{f.q}</dt>
                <dd className="mt-2 leading-relaxed text-on-surface-variant">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="headline text-on-surface">À porter, justement</h2>
          <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-10 min-[420px]:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p!.id} delay={(i % 3) * 0.05}>
                <ProductCard product={p!} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
