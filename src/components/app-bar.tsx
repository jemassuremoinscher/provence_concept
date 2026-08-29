"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "./cart/cart-context";
import { MobileNav } from "./mobile-nav";

export const NAV = [
  { href: "/boutique", label: "Boutique" },
  { href: "/boutique?collection=cuisine", label: "Cuisine" },
  { href: "/boutique?collection=italiana", label: "Dolce Vita" },
  { href: "/journal", label: "Journal" },
  { href: "/a-propos", label: "À propos" },
  { href: "/mammouth-group", label: "Groupe" },
];

export function AppBar() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const { count, setOpen } = useCart();
  const pathname = usePathname();

  useEffect(() => setNavOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ease-emphasized ${
          scrolled ? "bg-surface-lowest/85 shadow-e1 backdrop-blur-xl" : "bg-background/70 backdrop-blur-md"
        }`}
      >
        <div className="shell flex h-16 items-center justify-between gap-4 sm:h-[72px]">
          <Link href="/" aria-label="Provence Concept — accueil" className="state -ml-1 flex items-center rounded-md px-1 py-1">
            <Image src="/logo-blue.png" alt="Provence Concept" width={460} height={96} className="h-6 w-auto sm:h-7" priority />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="state rounded-full px-4 py-2 text-[0.92rem] font-semibold text-on-surface-variant hover:text-on-surface"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setOpen(true)}
              aria-label={`Panier, ${count} article${count > 1 ? "s" : ""}`}
              className="state relative grid h-11 w-11 place-items-center rounded-full text-on-surface"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 7h12l-1 12H7L6 7zM9 7a3 3 0 016 0" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {count > 0 && (
                <span className="absolute right-1.5 top-1.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-tertiary px-1 text-[0.62rem] font-bold text-on-tertiary">
                  {count}
                </span>
              )}
            </button>

            <button
              onClick={() => setNavOpen(true)}
              aria-label="Ouvrir le menu"
              className="state grid h-11 w-11 place-items-center rounded-full text-on-surface lg:hidden"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={navOpen} onClose={() => setNavOpen(false)} />
    </>
  );
}
