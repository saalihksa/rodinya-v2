"use client";

import { CoverImage } from "@/components/ui/CoverImage";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { products } from "@/lib/data";
import { paths } from "@/lib/paths";

export default function CartPage() {
  const { lines, setQty, remove, total } = useCart();

  return (
    <section className="bg-navy px-4 py-14 md:px-10 md:py-24 lg:px-16">
      <h1 className="text-center font-[family-name:var(--font-display)] text-[28px] uppercase tracking-[0.12em] md:text-[42px] md:tracking-[0.2em]">
        Sepet
      </h1>
      {lines.length === 0 ? (
        <p className="mt-12 text-center text-muted">Sepetiniz boş.</p>
      ) : (
        <div className="mx-auto mt-14 max-w-3xl space-y-8">
          {lines.map((line) => {
            const product = products.find((p) => p.slug === line.slug);
            if (!product) return null;
            return (
              <div key={line.slug} className="flex flex-wrap items-center gap-4 border-b border-gold/15 pb-6 sm:flex-nowrap sm:gap-5">
                <div className="relative h-24 w-24 overflow-hidden">
                  <CoverImage src={product.image} alt={product.title} fill />
                </div>
                <div className="flex-1">
                  <p className="font-[family-name:var(--font-display)] uppercase tracking-[0.12em]">
                    {product.title}
                  </p>
                  <p className="mt-1 text-muted">₺{product.price}</p>
                </div>
                <input
                  type="number"
                  min={1}
                  value={line.qty}
                  onChange={(e) => setQty(line.slug, Number(e.target.value))}
                  className="field !h-11 !w-16 !px-0 text-center"
                />
                <button type="button" onClick={() => remove(line.slug)} className="min-h-11 text-sm font-semibold text-muted">
                  Kaldır
                </button>
              </div>
            );
          })}
          <p className="text-right font-[family-name:var(--font-display)] text-[20px]">
            Toplam ₺{total}
          </p>
          <div className="flex justify-stretch sm:justify-end">
            <Link href={paths.checkout} className="gold-btn w-full sm:w-auto">
              Ödeme
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
