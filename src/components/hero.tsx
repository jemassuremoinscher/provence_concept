import Image from "next/image";
import { LinkButton } from "./ui/button";
import { SELLABLE_COUNT } from "@/data/products";

export function Hero() {
  return (
    <section className="shell pt-6 sm:pt-8">
      <div className="relative overflow-hidden rounded-2xl bg-brand px-6 py-12 text-white sm:rounded-3xl sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        {/* decorative expressive blob */}
        <div
          aria-hidden
          className="pc-blob absolute -right-24 -top-24 h-[420px] w-[420px] bg-white/10 blur-[2px]"
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-xl">
            <span className="eyebrow text-white/80">Imaginé en Provence</span>
            <h1 className="display-lg mt-4 text-white">
              Le Sud,
              <br />à porter.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/90">
              Des t-shirts blancs brodés, signés des spécialités niçoises et provençales.
              Barbajuans, socca, pan bagnat : le bon goût du Sud se porte aussi.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <LinkButton href="/boutique" size="lg" className="bg-white text-primary hover:bg-white">
                Voir la collection
              </LinkButton>
              <LinkButton
                href="/a-propos"
                size="lg"
                variant="text"
                className="text-white"
              >
                Notre histoire →
              </LinkButton>
            </div>
            <p className="mt-6 text-sm text-white/70">
              {SELLABLE_COUNT} pièces · Tailles S à XXL · Édition continue
            </p>
          </div>

          <div className="relative hidden justify-self-center lg:flex">
            <div className="pc-float">
              <Image
                src="/picto-white.png"
                alt="L'esprit Provence Concept"
                width={420}
                height={560}
                className="h-[360px] w-auto drop-shadow-[0_24px_48px_rgba(0,0,0,0.25)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
