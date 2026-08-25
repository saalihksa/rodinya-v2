"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { products } from "./data";

type Line = { slug: string; qty: number };

type CartContextValue = {
  lines: Line[];
  add: (slug: string) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  count: number;
  total: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);

  const value = useMemo(() => {
    const add = (slug: string) => {
      setLines((prev) => {
        const found = prev.find((l) => l.slug === slug);
        if (found) return prev.map((l) => (l.slug === slug ? { ...l, qty: l.qty + 1 } : l));
        return [...prev, { slug, qty: 1 }];
      });
    };
    const remove = (slug: string) => setLines((prev) => prev.filter((l) => l.slug !== slug));
    const setQty = (slug: string, qty: number) =>
      setLines((prev) => prev.map((l) => (l.slug === slug ? { ...l, qty: Math.max(1, qty) } : l)));
    const count = lines.reduce((s, l) => s + l.qty, 0);
    const total = lines.reduce((s, l) => {
      const p = products.find((x) => x.slug === l.slug);
      return s + (p ? p.price * l.qty : 0);
    }, 0);
    return { lines, add, remove, setQty, count, total };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
