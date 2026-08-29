import Link from "next/link";
import Image from "next/image";
import { Category, productsByCategory } from "@/data/products";

const COPY: Record<Category, { title: string; sub: string }> = {
  "t-shirts": { title: "T-shirts", sub: "Le quotidien, en mieux" },
  sweatshirts: { title: "Sweatshirts", sub: "Pour les jours de mistral" },
  polos: { title: "Polos", sub: "La nouveauté qui arrive" },
};

const TONE: Record<Category, string> = {
  "t-shirts": "bg-primary-container text-on-primary-container",
  sweatshirts: "bg-secondary-container text-on-secondary-container",
  polos: "bg-tertiary-container text-on-tertiary-container",
};

export function CategoryCard({ category }: { category: Category }) {
  const items = productsByCategory(category);
  const comingSoon = items.every((p) => p.comingSoon);
  const { title, sub } = COPY[category];

  return (
    <Link
      href={`/boutique?cat=${category}`}
      className={`state group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-xl p-6 transition-shadow duration-300 ease-emphasized hover:shadow-e3 ${TONE[category]}`}
    >
      <Image
        src="/picto-blue.png"
        alt=""
        width={180}
        height={240}
        aria-hidden
        className="pointer-events-none absolute -bottom-6 -right-4 h-[150px] w-auto opacity-15 transition-transform duration-500 ease-emphasized group-hover:scale-110"
      />
      <div className="relative">
        {comingSoon && (
          <span className="mb-2 inline-block rounded-full bg-on-surface/85 px-2.5 py-0.5 label-md font-bold uppercase tracking-wide text-surface-lowest">
            Bientôt
          </span>
        )}
        <h3 className="title-lg text-2xl">{title}</h3>
        <p className="mt-1 text-sm opacity-80">{sub}</p>
      </div>
      <span className="relative inline-flex items-center gap-1.5 text-sm font-semibold">
        {comingSoon ? "Être prévenu" : "Découvrir"}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 ease-emphasized group-hover:translate-x-1" aria-hidden>
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
