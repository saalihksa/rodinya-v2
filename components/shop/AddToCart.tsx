"use client";

import { useCart } from "@/lib/cart";

export function AddToCart({ slug }: { slug: string }) {
  const { add } = useCart();
  return (
    <button type="button" className="gold-btn mt-8 w-full sm:w-auto" onClick={() => add(slug)}>
      Sepete ekle
    </button>
  );
}
