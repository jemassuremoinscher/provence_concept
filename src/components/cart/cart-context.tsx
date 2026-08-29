"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState } from "react";
import { Product } from "@/data/products";

export type CartLine = {
  id: string;
  slug: string;
  name: string;
  price: number | null;
  size: string;
  color: string;
  qty: number;
};

type State = { lines: CartLine[] };
type Action =
  | { type: "add"; line: CartLine }
  | { type: "remove"; key: string }
  | { type: "qty"; key: string; qty: number }
  | { type: "hydrate"; lines: CartLine[] }
  | { type: "clear" };

const lineKey = (l: Pick<CartLine, "id" | "size" | "color">) => `${l.id}__${l.size}__${l.color}`;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "hydrate":
      return { lines: action.lines };
    case "add": {
      const key = lineKey(action.line);
      const existing = state.lines.find((l) => lineKey(l) === key);
      if (existing) {
        return {
          lines: state.lines.map((l) => (lineKey(l) === key ? { ...l, qty: l.qty + action.line.qty } : l)),
        };
      }
      return { lines: [...state.lines, action.line] };
    }
    case "remove":
      return { lines: state.lines.filter((l) => lineKey(l) !== action.key) };
    case "qty":
      // Descendre à 0 retire la ligne : le bouton « − » sur une quantité de 1
      // doit supprimer, sinon il ne fait rien et l'utilisateur est bloqué.
      return {
        lines: state.lines
          .map((l) => (lineKey(l) === action.key ? { ...l, qty: action.qty } : l))
          .filter((l) => l.qty > 0),
      };
    case "clear":
      return { lines: [] };
    default:
      return state;
  }
}

type CartCtx = {
  lines: CartLine[];
  count: number;
  subtotal: number | null; // null si au moins un prix n'est pas encore fixé
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (product: Product, opts?: { size?: string; color?: string; qty?: number }) => void;
  remove: (key: string) => void;
  setQty: (key: string, qty: number) => void;
  clear: () => void;
  keyOf: (l: Pick<CartLine, "id" | "size" | "color">) => string;
};

const Ctx = createContext<CartCtx | null>(null);
const STORAGE = "pc_cart_v1";

// `localStorage` est modifiable par l'utilisateur et survit aux changements de
// format : on ne fait confiance à aucune ligne dont la forme n'est pas vérifiée.
function isCartLine(v: unknown): v is CartLine {
  if (typeof v !== "object" || v === null) return false;
  const l = v as Record<string, unknown>;
  return (
    typeof l.id === "string" &&
    typeof l.slug === "string" &&
    typeof l.name === "string" &&
    (typeof l.price === "number" || l.price === null) &&
    typeof l.size === "string" &&
    typeof l.color === "string" &&
    typeof l.qty === "number" &&
    Number.isFinite(l.qty) &&
    l.qty > 0
  );
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { lines: [] });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          dispatch({ type: "hydrate", lines: parsed.filter(isCartLine) });
        }
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE, JSON.stringify(state.lines));
    } catch {}
  }, [state.lines]);

  const add: CartCtx["add"] = useCallback((product, opts) => {
    dispatch({
      type: "add",
      line: {
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        size: opts?.size ?? product.sizes[0],
        color: opts?.color ?? product.colors[0]?.name ?? "—",
        qty: opts?.qty ?? 1,
      },
    });
    setOpen(true);
  }, []);

  const value = useMemo<CartCtx>(() => {
    const count = state.lines.reduce((n, l) => n + l.qty, 0);
    const anyUnpriced = state.lines.some((l) => l.price === null);
    const subtotal = anyUnpriced
      ? null
      : state.lines.reduce((s, l) => s + (l.price ?? 0) * l.qty, 0);
    return {
      lines: state.lines,
      count,
      subtotal,
      open,
      setOpen,
      add,
      remove: (key) => dispatch({ type: "remove", key }),
      setQty: (key, qty) => dispatch({ type: "qty", key, qty }),
      clear: () => dispatch({ type: "clear" }),
      keyOf: lineKey,
    };
  }, [state.lines, open, add]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
