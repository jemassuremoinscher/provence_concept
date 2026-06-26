import Image from "next/image";
import type { Metadata } from "next";
import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "À propos",
  description: "Provence Concept : des vêtements imaginés dans le Sud, pensés pour durer.",
};

export default function AboutPage() {
  return (
    <div className="shell pt-10">
      <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <div className="max-w-xl">
            <span className="eyebrow text-primary">À propos</span>
            <h1 className="display-md mt-3 text-on-surface">Le Sud comme point de départ.</h1>
            <p className="mt-5 text-lg leading-relaxed text-on-surface-variant">
              Provence Concept est née d&apos;une idée simple : faire des vêtements qu&apos;on a envie de
              porter longtemps. Des coupes nettes, des matières franches, et une couleur — ce bleu
              méditerranéen qui nous suit partout.
            </p>
            <p className="mt-4 leading-relaxed text-on-surface-variant">
              On commence avec les t-shirts brodés ; les sweats et les polos arrivent. Chaque pièce
              porte le nom d&apos;une spécialité du Sud — barbajuans, socca, pan bagnat — une façon de
              garder le bon goût d&apos;ici près de soi, même loin.
            </p>
            <div className="mt-8">
              <LinkButton href="/boutique" size="lg">
                Découvrir la collection
              </LinkButton>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid place-items-center rounded-2xl bg-brand p-10">
            <Image src="/picto-white.png" alt="" width={300} height={400} className="h-64 w-auto" />
          </div>
        </Reveal>
      </section>

      <section className="mt-24 grid gap-6 sm:grid-cols-3">
        {[
          { k: "Imaginé en Provence", v: "Chaque modèle est dessiné dans le Sud, avec un nom qui raconte une recette d'ici." },
          { k: "Pensé pour durer", v: "Matières sélectionnées pour la tenue : on préfère la qualité au renouvellement permanent." },
          { k: "Séries courtes", v: "Des éditions limitées, parfois numérotées, plutôt que de grandes quantités." },
        ].map((b) => (
          <div key={b.k} className="rounded-xl bg-surface-low p-6">
            <h2 className="title-lg text-on-surface">{b.k}</h2>
            <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{b.v}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
