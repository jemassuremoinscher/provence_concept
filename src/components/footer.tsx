import Link from "next/link";
import Image from "next/image";

const COLUMNS = [
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
      { href: "#", label: "Livraison & retours" },
      { href: "#", label: "Guide des tailles" },
      { href: "#", label: "Contact" },
    ],
  },
  {
    title: "Légal",
    links: [
      { href: "#", label: "Mentions légales" },
      { href: "#", label: "CGV" },
      { href: "#", label: "Confidentialité" },
      { href: "#", label: "Cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-brand text-white">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Image src="/logo-white.png" alt="Provence Concept" width={520} height={108} className="h-8 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/85">
            Vêtements imaginés en Provence. Coupe nette, matières qui durent, esprit méditerranéen.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="eyebrow text-white/70">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/90 transition-colors hover:text-white">
                    {l.label}
                  </Link>
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
