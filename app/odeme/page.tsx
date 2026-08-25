"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";

export default function CheckoutPage() {
  const { total, lines } = useCart();
  const [done, setDone] = useState(false);

  return (
    <section className="bg-navy px-4 py-14 md:px-10 md:py-24 lg:px-16">
      <h1 className="text-center font-[family-name:var(--font-display)] text-[28px] uppercase tracking-[0.12em] md:text-[42px] md:tracking-[0.2em]">
        Ödeme
      </h1>
      <form
        className="mx-auto mt-14 grid max-w-xl gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
      >
        <input required placeholder="Ad soyad" className="field" />
        <input required type="email" placeholder="E-posta" className="field" />
        <input required placeholder="Adres" className="field" />
        <p className="text-muted">
          {lines.length} ürün · Toplam ₺{total}
        </p>
        <button type="submit" className="gold-btn mx-auto w-full sm:w-auto">
          Siparişi tamamla
        </button>
        {done ? <p className="text-center text-gold">Siparişiniz alındı. Teşekkürler.</p> : null}
      </form>
    </section>
  );
}
