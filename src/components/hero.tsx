import Link from "next/link";
import Image from "next/image";
import { SELLABLE_COUNT } from "@/data/products";

export function Hero() {
  return (
    <section className="shell pt-6 sm:pt-8">
      {/* Hero card — deep navy, deux colonnes */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0e3d6b] px-6 py-12 sm:px-12 sm:py-16 lg:py-20">

        {/* Blob décoratif */}
        <div
          aria-hidden
          className="pc-blob absolute -right-24 -top-24 h-[420px] w-[420px] bg-white/10 blur-[2px]"
        />

        {/* Grille : texte gauche + tee droit */}
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Colonne texte */}
          <div className="max-w-xl">
            <span className="eyebrow text-white/70">
              Brodé · Séries courtes · Niçois &amp; Provençal
            </span>

            {/* H1 en Lora */}
            <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.1] text-white sm:text-5xl lg:text-[3.25rem]">
              Le Sud,{" "}
              <em className="italic text-[#7bbfed]">à porter.</em>
            </h1>

            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/60">
              Des t-shirts blancs brodés aux noms des spécialités niçoises —
              pour ceux qui savent ce qu'est un barbajuan.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/boutique"
                className="state h-11 rounded-full bg-white px-6 text-sm font-semibold text-[#0e3d6b]"
              >
                Voir la collection
              </Link>
              <Link
                href="/a-propos"
                className="state h-11 rounded-full border border-white/25 px-6 text-sm font-medium text-white/80"
              >
                Notre histoire
              </Link>
            </div>

            {/* Méta */}
            <p className="mt-6 text-xs text-white/35">
              {SELLABLE_COUNT} pièces · Tailles S à XXL · Édition continue
            </p>
          </div>

          {/* Colonne visuel — photo pan bagnat / lavande */}
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <div className="relative aspect-square w-full max-w-[360px] overflow-hidden rounded-2xl shadow-e2 ring-1 ring-white/15">
              <Image
                src="/products/pan-bagnat-2.jpg"
                alt="T-shirts brodés Provence Concept, pliés à côté d'un bouquet de lavande"
                fill
                sizes="(max-width:1024px) 0px, 360px"
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bande de confiance */}
      <div className="trust-strip mt-0 overflow-x-auto">
        <div className="flex min-w-max items-center gap-8 px-6 py-3 sm:px-12">
          {[
            "Coton peigné 180 g/m²",
            "Broderie poitrine",
            "Séries courtes",
            "Tailles S → XXL",
            "Commander par e-mail",
          ].map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 whitespace-nowrap text-xs font-medium"
              style={{ color: "var(--trust-text)" }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                style={{ background: "var(--brand)" }}
                aria-hidden
              />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
