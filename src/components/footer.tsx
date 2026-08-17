import Link from "next/link";
import Image from "next/image";
import { NewsletterForm } from "./newsletter-form";

type FooterLink = { href: string; label: string; external?: boolean };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Boutique",
    links: [
      { href: "/boutique?cat=t-shirts", label: "T-shirts" },
      { href: "/boutique?cat=sweatshirts", label: "Sweatshirts" },
      { href: "/boutique?cat=polos", label: "Polos (bientôt)" },
      { href: "/boutique", label: "Toute la collection" },
    ],
  },
  {
    title: "Aide",
    links: [
      { href: "/a-propos", label: "À propos" },
      { href: "/journal", label: "Journal" },
      { href: "/cgv#livraison", label: "Livraison & retours" },
      { href: "mailto:contact@provence-concept.fr", label: "Contact", external: true },
    ],
  },
  {
    title: "Légal",
    links: [
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/cgv", label: "CGV" },
      { href: "/confidentialite", label: "Confidentialité" },
      { href: "/cookies", label: "Cookies" },
    ],
  },
  {
    title: "Groupe",
    links: [
      { href: "/mammouth-group", label: "Mammouth Group" },
      { href: "https://www.mammouth-ai.com", label: "Mammouth AI", external: true },
      { href: "https://www.jemassuremoinscher.fr", label: "jemassuremoinscher.fr", external: true },
      { href: "https://www.mayocreche.fr", label: "Mayo Crèche", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-brand text-white">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <Image src="/logo-white.png" alt="Provence Concept" width={520} height={108} className="h-8 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/85">
            Vêtements imaginés en Provence. Coupe nette, matières qui durent, esprit méditerranéen.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.instagram.com/provenceconcept"
              target="_blank"
              rel="noopener noreferrer me"
              aria-label="Provence Concept sur Instagram"
              className="state grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white hover:bg-white/10"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/provenceconcept"
              target="_blank"
              rel="noopener noreferrer me"
              aria-label="Provence Concept sur LinkedIn"
              className="state grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white hover:bg-white/10"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="8" cy="8.5" r="1.15" fill="currentColor" />
                <path d="M8 11.5v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M12 17.5v-3.5a2 2 0 0 1 4 0v3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M12 17.5v-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </a>
          </div>
          <div className="mt-6">
            <p className="text-sm font-semibold text-white">Les sweats &amp; polos arrivent.</p>
            <p className="mb-3 mt-1 text-sm text-white/80">Laissez votre e-mail, on vous prévient.</p>
            <NewsletterForm tone="dark" />
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="eyebrow text-white/70">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a href={l.href} className="text-sm text-white/90 transition-colors hover:text-white">
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} className="text-sm text-white/90 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/20">
        <div className="shell flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/75 sm:flex-row">
          <p>© {new Date().getFullYear()} Provence Concept. Tous droits réservés.</p>
          <p>Conçu en Provence · Expédié depuis la France</p>
        </div>
      </div>
    </footer>
  );
}
