import Link from "next/link";
import type { Metadata } from "next";
import { ARTICLES } from "@/data/journal";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Journal — spécialités niçoises & provençales",
  description:
    "Socca, pan bagnat, ratatouille : le journal de Provence Concept raconte les spécialités du Sud qui inspirent nos t-shirts brodés. Recettes, origines, idées cadeaux.",
  alternates: { canonical: "/journal" },
  openGraph: {
    title: "Journal · Provence Concept",
    description: "Les spécialités niçoises et provençales qui inspirent nos t-shirts brodés.",
    images: ["/picto-blue.png"],
  },
};

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

export default function JournalPage() {
  const articles = [...ARTICLES].sort((a, b) => b.datePublished.localeCompare(a.datePublished));

  return (
    <section className="shell pt-10">
      <header className="max-w-2xl">
        <span className="eyebrow text-primary">Le journal</span>
        <h1 className="display-md mt-2 text-on-surface">Le Sud, à lire.</h1>
        <p className="mt-3 text-on-surface-variant">
          Les spécialités niçoises et provençales qui inspirent nos broderies — leur histoire,
          leur recette, et pourquoi elles méritent un t-shirt.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-10 min-[420px]:grid-cols-2 lg:grid-cols-3">
        {articles.map((a, i) => (
          <Reveal key={a.slug} delay={(i % 3) * 0.05}>
            <article className="group flex h-full flex-col">
              <Link
                href={`/journal/${a.slug}`}
                className="state flex h-full flex-col rounded-xl border border-outline-variant bg-surface-lowest p-6 transition-shadow duration-300 ease-emphasized hover:shadow-e2"
              >
                <span className="eyebrow text-primary">{a.question}</span>
                <h2 className="title-lg mt-3 text-on-surface">{a.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-on-surface-variant">{a.excerpt}</p>
                <span className="mt-5 text-xs text-on-surface-variant">
                  {fmtDate(a.datePublished)} · {a.readingMinutes} min de lecture
                </span>
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
