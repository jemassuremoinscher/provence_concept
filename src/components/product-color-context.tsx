"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { Product } from "@/data/products";

type Ctx = {
  color: string;
  setColor: (name: string) => void;
};

const ProductColorContext = createContext<Ctx | null>(null);

export function ProductColorProvider({
  product,
  children,
}: {
  product: Product;
  children: ReactNode;
}) {
  const [color, setColor] = useState(product.colors[0]?.name ?? "—");
  return (
    <ProductColorContext.Provider value={{ color, setColor }}>
      {children}
    </ProductColorContext.Provider>
  );
}

export function useProductColor() {
  const ctx = useContext(ProductColorContext);
  if (!ctx) {
    throw new Error("useProductColor doit être utilisé dans un ProductColorProvider");
  }
  return ctx;
}
