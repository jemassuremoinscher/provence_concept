import Link from "next/link";
import Image from "next/image";
import { SELLABLE_COUNT } from "@/data/products";

const MARQUEE_ITEMS = [
  "Coton peigné 180 g/m²",
  "Broderie poitrine",
  "Séries courtes",
  "Tailles S → XXL",
  "Commander par e-mail",
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-hero-deep">
      {/* Photo plein cadre */}
      <Image
        src="/hero-mere-fils.jpg"
        alt="Une mère et son fils face à la mer, en t-shirt et sweatshirt Provence Concept brodés"
        fill
        sizes="100vw"
        // La photo est très panoramique (2,36:1) : en `cover` plein cadre sur
        // un écran portrait, moins de 20 % de sa largeur reste visible — pas
        // de recadrage qui garde la mère, le fils ET les deux broderies. En
        // `contain` sous `sm`, l'image entière reste visible (letterboxée sur
        // le fond du hero) ; au-delà, `cover` reprend pour le plein cadre.
        className="object-contain sm:object-cover"
        priority
      />

      {/* Assombrissement pour la lisibilité du texte sur la photo */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-hero-deep via-hero-deep/75 to-hero-deep/25"
      />

      {/* Blob décoratif, conservé du hero précédent */}
      <div
        aria-hidden
        className="pc-blob absolute -right-24 -top-24 h-[420px] w-[420px] bg-white/10 blur-[2px]"
      />

      {/* Contenu, ancré en bas du cadre plein écran */}
      <div className="shell relative flex flex-1 flex-col justify-end pb-16 pt-24 sm:pb-20">
        <div className="max-w-xl">
          <span className="eyebrow text-white/70">
            Brodé · Séries courtes · Niçois &amp; Provençal
          </span>

          {/* H1 en Lora, agrandi pour le format plein écran */}
          <h1 className="mt-4 font-serif text-5xl font-normal leading-[1.05] text-white sm:text-6xl lg:text-[4.5rem]">
            Le Sud,{" "}
            <em className="italic text-hero-accent">à porter.</em>
          </h1>

          <p className="body-lg mt-5 max-w-md text-white/70">
            Des t-shirts blancs brodés aux noms des spécialités niçoises —
            pour ceux qui savent ce qu'est un barbajuan.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/boutique"
              className="state inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-hero-deep"
            >
              Voir la collection
            </Link>
            <Link
              href="/a-propos"
              className="state inline-flex h-11 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-medium text-white/80"
            >
              Notre histoire
            </Link>
          </div>

          {/* Méta */}
          <p className="label-md mt-6 text-white/40">
            {SELLABLE_COUNT} pièces · Tailles S à XXL · Édition continue
          </p>
        </div>

        {/* Repère de scroll — indispensable puisque rien du catalogue n'est
            visible sans défiler sur ce hero plein écran. Lien natif vers
            #collections : fonctionne sans JS, s'appuie sur le scroll-behavior
            smooth déjà global au site. */}
        <a
          href="#collections"
          className="state pc-scroll-hint absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 rounded-full px-3 py-2 text-white/60 hover:text-white/90 sm:flex"
        >
          <span className="label-sm uppercase tracking-wide">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Mention de transparence — visuel de synthèse, pas une photo.
            Discrète mais lisible, sur toutes les tailles d'écran. */}
        <span className="absolute bottom-3 right-0 text-[10px] text-white/40">
          Visuel généré par IA
        </span>
      </div>

      {/* Marquee défilant — remplace la bande de confiance statique */}
      <div className="relative overflow-hidden border-t border-white/10 bg-hero-deep/80 backdrop-blur-sm">
        <div className="pc-marquee-track flex w-max items-center py-3">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              aria-hidden={i >= MARQUEE_ITEMS.length}
              className="label-md flex items-center gap-2 whitespace-nowrap px-6 text-white/70"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-hero-accent"
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
