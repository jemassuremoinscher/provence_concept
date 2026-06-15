"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { NAV } from "./app-bar";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-on-surface/40 backdrop-blur-[2px] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />
          <motion.nav
            aria-label="Menu"
            className="fixed inset-x-0 top-0 z-50 rounded-b-2xl bg-surface-lowest px-5 pb-6 pt-4 shadow-e4 lg:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 360, damping: 36 }}
          >
            <div className="flex h-12 items-center justify-between">
              <Image src="/logo-blue.png" alt="Provence Concept" width={460} height={96} className="h-6 w-auto" />
              <button onClick={onClose} aria-label="Fermer le menu" className="state grid h-11 w-11 place-items-center rounded-full text-on-surface-variant">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <ul className="mt-2 space-y-1">
              {NAV.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="state flex items-center justify-between rounded-lg px-4 py-3.5 text-lg font-semibold text-on-surface"
                  >
                    {item.label}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-on-surface-variant" aria-hidden>
                      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
