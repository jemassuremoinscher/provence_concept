import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mammouth Group — l'écosystème de marques",
  description:
    "Mammouth Group est un écosystème d'entreprises fondées par Paul Vuillier — de la Côte d'Azur à l'Afrique : assurance, IA, micro-crèches, coaching anglais, voitures et mode brodée.",
  alternates: { canonical: "/mammouth-group" },
};

const COMPANIES = [
  {
    name: "Provence Concept",
    url: "https://provence-concept.vercel.app",
    tagline: "Mode brodée — spécialités du Sud",
    taglineColor: "#15639E",
    description:
      "T-shirts blancs brodés aux noms des spécialités niçoises et italiennes. Séries courtes, coton peigné 180 g/m², broderie poitrine. Pour ceux qui portent le Sud dans la tête.",
    zone: "France · International",
    cta: "Voir la collection",
    icon: "🧵",
    current: true,
  },
  {
    name: "jemassuremoinscher.fr",
    url: "https://www.jemassuremoinscher.fr",
    tagline: "Comparateur d'assurances — 70+ assureurs en 2 minutes",
    taglineColor: "#C4603A",
    description:
      "Courtier indépendant immatriculé ORIAS, jemassuremoinscher.fr compare plus de 70 assureurs et 5 000 offres : auto, moto, habitation, santé, animaux, emprunteur, RC pro, multirisque, GLI. Devis gratuit, sans engagement, jusqu'à 40 % d'économies.",
    zone: "France entière",
    cta: "Comparer mon assurance",
    icon: "🛡️",
  },
  {
    name: "Mammouth AI",
    url: "https://www.mammouth-ai.com",
    tagline: "Agents IA et automatisation pour entrepreneurs",
    taglineColor: "#1C1A2E",
    description:
      "Mammouth AI conçoit des agents intelligents et workflows automatisés pour les TPE et PME : gestion des contacts, suivi administratif, rapports, e-mails, CRM. Libérer du temps en automatisant les tâches répétitives sans remplacer l'humain.",
    zone: "International · FR · EN",
    cta: "Découvrir Mammouth AI",
    icon: "🤖",
  },
  {
    name: "Mayo Crèche",
    url: "https://www.mayocreche.fr",
    tagline: "Crèches multilingues & nursery privée sur la Côte d'Azur",
    taglineColor: "#2E7D9C",
    description:
      "Mayo accueille les enfants de 3 mois à 3 ans à Nice et sur la Côte d'Azur dans un environnement bilingue français / anglais / russe. Pédagogie active, équipe diplômée, repas bio et horaires adaptés aux familles d'expatriés et de cadres.",
    zone: "Nice · Côte d'Azur (FR)",
    cta: "Visiter Mayo Crèche",
    icon: "🌱",
  },
  {
    name: "Mammouth Motors",
    url: "#",
    tagline: "Export voitures Dubai → Afrique & gardiennage collection à Nice",
    taglineColor: "#8B3A2A",
    description:
      "Mammouth Motors exporte des véhicules premium et chinois (BYD, Geely, Chery, MG, Zeekr) depuis Dubai vers le Sénégal, la Côte d'Ivoire, le Cameroun, le Nigeria et toute l'Afrique. La division Mammouth Classic propose un gardiennage sécurisé climatisé pour voitures de collection dans la Vallée du Var, à Nice.",
    zone: "Dubai 🇦🇪 · Nice 🇫🇷 · Afrique",
    cta: "Visiter Mammouth Motors",
    icon: "🚗",
  },
  {
    name: "English for Future Leaders",
    url: "https://www.myeffl.com",
    tagline: "Coaching premium d'anglais business pour dirigeants",
    taglineColor: "#1A3A6B",
    description:
      "EFFL accompagne dirigeants, entrepreneurs et cadres russophones vers la maîtrise de l'anglais des affaires : communication de leadership, négociations, présentations internationales. Plus de 500 diplômés dans 12 pays.",
    zone: "International · EN / RU",
    cta: "Découvrir EFFL",
    icon: "🎓",
  },
];

export default function MammouthGroupPage() {
  return (
    <article className="pb-20">
      {/* Hero */}
      <div className="relative overflow-hidden bg-[#0e3d6b] px-6 py-20 sm:px-12 sm:py-28">
        <div
          aria-hidden
          className="pc-blob absolute -right-24 -top-24 h-[400px] w-[400px] bg-white/10 blur-[2px]"
        />
        <div className="shell relative">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white/90"
          >
            ← Retour à l'accueil
          </Link>
          <h1 className="font-serif text-4xl font-normal text-white sm:text-5xl">
            Mammouth Group
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-light leading-relaxed text-white/65">
            Un écosystème d'entreprises fondées par Paul Vuillier — de la
            Côte d'Azur à l'Afrique, en passant par l'Europe.
          </p>
        </div>
      </div>

      {/* Grille entreprises */}
      <div className="shell mt-16">
        <h2 className="eyebrow text-primary mb-8">Nos entreprises</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {COMPANIES.map((c) => (
            <div
              key={c.name}
              className={`rounded-2xl border p-6 sm:p-8 ${
                c.current
                  ? "border-primary bg-primary-container"
                  : "border-outline-variant bg-surface-lowest"
              }`}
            >
              {/* En-tête */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-low text-2xl">
                  {c.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="card-name-serif text-on-surface">
                      {c.name}
                    </h3>
                    {c.current && (
                      <span className="rounded-full bg-primary px-2 py-0.5 text-[0.65rem] font-semibold text-on-primary">
                        Ce site
                      </span>
                    )}
                  </div>
                  <p
                    className="mt-0.5 text-sm font-medium"
                    style={{ color: c.taglineColor }}
                  >
                    {c.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
                {c.description}
              </p>

              {/* Pied */}
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-on-surface-variant">
                  ZONE D'ACTIVITÉ · {c.zone}
                </span>
                {c.url !== "#" && (
                  <a
                    href={c.url}
                    target={c.current ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {c.cta} ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
