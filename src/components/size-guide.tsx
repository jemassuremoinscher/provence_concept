"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Category } from "@/data/products";

type Row = { size: string; chest: number; length: number };

// Mesures à plat, en centimètres. Valeurs standards du marché, non encore
// vérifiées sur les pièces cousues — à réviser dès réception des premiers lots.
const TABLES: Record<Category, Row[]> = {
  "t-shirts": [
    { size: "S", chest: 46, length: 68 },
    { size: "M", chest: 49, length: 70 },
    { size: "L", chest: 52, length: 72 },
    { size: "XL", chest: 55, length: 74 },
    { size: "XXL", chest: 58, length: 76 },
  ],
  polos: [
    { size: "S", chest: 47, length: 69 },
    { size: "M", chest: 50, length: 71 },
    { size: "L", chest: 53, length: 73 },
    { size: "XL", chest: 56, length: 75 },
    { size: "XXL", chest: 59, length: 77 },
  ],
  sweatshirts: [
    { size: "S", chest: 50, length: 66 },
    { size: "M", chest: 53, length: 68 },
    { size: "L", chest: 56, length: 70 },
    { size: "XL", chest: 59, length: 72 },
    { size: "XXL", chest: 62, length: 74 },
  ],
};

const TITLE: Record<Category, string> = {
  "t-shirts": "T-shirt",
  polos: "Polo",
  sweatshirts: "Sweat",
};

export function SizeGuide({
  category,
  open,
  onClose,
}: {
  category: Category;
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  // `onClose` est recréé à chaque rendu du parent. S'il figurait dans les
  // dépendances, l'effet rejouerait sans que `open` change : le nettoyage
  // relirait alors un `overflow` déjà à "hidden" et le restaurerait tel quel,
  // laissant la page verrouillée après fermeture. On passe par une ref.
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  /* Échap ferme, et le scroll de la page est verrouillé tant que la modale est là. */
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onCloseRef.current();
    }
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const rows = TABLES[category];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-on-surface/40 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="size-guide-title"
            className="fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[calc(100%-2rem)] max-w-[520px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl bg-surface-lowest p-6 shadow-e4 outline-none"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="size-guide-title" className="headline text-on-surface">
                  Guide des tailles
                </h2>
                <p className="mt-1 text-sm text-on-surface-variant">
                  {TITLE[category]} — mesures à plat, en centimètres.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer le guide des tailles"
                className="state grid h-11 w-11 shrink-0 place-items-center rounded-full text-on-surface-variant"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <table className="mt-5 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-outline-variant text-left text-on-surface-variant">
                  <th scope="col" className="pb-2 font-semibold">Taille</th>
                  <th scope="col" className="pb-2 font-semibold">Largeur poitrine</th>
                  <th scope="col" className="pb-2 font-semibold">Longueur</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.size} className="border-b border-outline-variant/50 last:border-0">
                    <th scope="row" className="py-2.5 text-left font-semibold text-on-surface">{r.size}</th>
                    <td className="py-2.5 text-on-surface-variant">{r.chest} cm</td>
                    <td className="py-2.5 text-on-surface-variant">{r.length} cm</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="mt-5 rounded-lg bg-surface-low p-3 text-xs leading-relaxed text-on-surface-variant">
              Mesures à plat, tolérance ±2 cm. Valeurs indicatives, non encore
              vérifiées sur les pièces cousues — elles seront ajustées dès réception
              des premiers exemplaires. En cas d'hésitation entre deux tailles, nous
              conseillons la plus grande.
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
