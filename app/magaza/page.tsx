"use client";

import { CoverImage } from "@/components/ui/CoverImage";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { products } from "@/lib/data";
import { images } from "@/lib/images";
import { paths } from "@/lib/paths";

export default function ShopPage() {
  const { add } = useCart();

  return (
    <>
      <section className="page-hero">
        <CoverImage src={images.shopHero} alt="Dükkân" fill priority />
        <h1 className="relative z-10 px-4 text-center font-[family-name:var(--font-display)] text-[clamp(1.8rem,8vw,48px)] uppercase tracking-[0.12em] text-[#faf6f0]">
          Dükkân
        </h1>
      </section>
      <section className="bg-navy px-4 py-14 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.slug} className="group text-center">
              <Link href={paths.product(p.slug)} className="relative block aspect-square overflow-hidden">
                <CoverImage src={p.image} alt={p.title} fill className="transition duration-500 group-hover:scale-105" />
                <span className="absolute inset-x-4 bottom-4 opacity-100 sm:inset-x-8 sm:bottom-8 sm:opacity-0 sm:transition sm:group-hover:opacity-100">
                  <button
                    type="button"
                    className="gold-btn w-full bg-navy/80"
                    onClick={(e) => {
                      e.preventDefault();
                      add(p.slug);
                    }}
                  >
                    Sepete ekle
                  </button>
                </span>
              </Link>
              <h2 className="mt-5 font-[family-name:var(--font-display)] uppercase tracking-[0.14em]">
                <Link href={paths.product(p.slug)}>{p.title}</Link>
              </h2>
              <p className="mt-2 text-gold">₺{p.price}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
