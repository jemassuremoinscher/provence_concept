"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "./cart-context";
import { formatPrice } from "@/lib/format";
import { Button } from "../ui/button";

export function CartDrawer() {
  const { open, setOpen, lines, subtotal, count, setQty, remove, keyOf } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-on-surface/40 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            role="dialog"
            aria-label="Panier"
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[440px] flex-col bg-surface-lowest shadow-e4 sm:rounded-l-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 38 }}
          >
            <header className="flex items-center justify-between px-6 pb-4 pt-6">
              <h2 className="headline text-on-surface">Panier {count > 0 && <span className="text-on-surface-variant">({count})</span>}</h2>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer le panier"
                className="state grid h-11 w-11 place-items-center rounded-full text-on-surface-variant"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </button>
            </header>

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-surface-container text-on-surface-variant">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M6 7h12l-1 12H7L6 7zM9 7a3 3 0 016 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-on-surface-variant">Votre panier est vide pour le moment.</p>
                <Button variant="tonal" onClick={() => setOpen(false)}>
                  Continuer
                </Button>
              </div>
            ) : (
              <>
                <ul className="flex-1 space-y-3 overflow-y-auto px-4 py-2">
                  {lines.map((l) => {
                    const k = keyOf(l);
                    return (
                      <li key={k} className="flex gap-3 rounded-lg bg-surface-low p-3">
                        <div className="flex-1">
                          <Link href={`/produit/${l.slug}`} onClick={() => setOpen(false)} className="title-lg text-on-surface state rounded-sm">
                            {l.name}
                          </Link>
                          <p className="text-sm text-on-surface-variant">
                            {l.size} · {l.color}
                          </p>
                          <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-surface-lowest p-1">
                            <button onClick={() => setQty(k, l.qty - 1)} aria-label="Réduire la quantité" className="state grid h-8 w-8 place-items-center rounded-full text-on-surface-variant">
                              <svg width="16" height="16" viewBox="0 0 24 24"><path d="M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
                            </button>
                            <span className="w-6 text-center text-sm font-semibold">{l.qty}</span>
                            <button onClick={() => setQty(k, l.qty + 1)} aria-label="Augmenter la quantité" className="state grid h-8 w-8 place-items-center rounded-full text-on-surface-variant">
                              <svg width="16" height="16" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <button onClick={() => remove(k)} aria-label={`Retirer ${l.name}`} className="state grid h-9 w-9 place-items-center rounded-full text-on-surface-variant">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                          </button>
                          <span className="price text-sm text-on-surface">{formatPrice(l.price)}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <footer className="space-y-3 border-t border-outline-variant px-6 py-5">
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">Sous-total</span>
                    <span className="price text-lg text-on-surface">
                      {subtotal === null ? "Tarifs en cours" : formatPrice(subtotal)}
                    </span>
                  </div>
                  {/* Honnête : le paiement n'est pas encore branché (prix & passerelle à venir). */}
                  <Button size="lg" variant="filled" disabled className="w-full">
                    Paiement bientôt disponible
                  </Button>
                  <p className="text-center text-xs text-on-surface-variant">
                    La boutique ouvre dès que les prix et le paiement sécurisé sont en place.
                  </p>
                </footer>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
