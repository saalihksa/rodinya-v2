import type { Metadata } from "next";
import { CoverImage } from "@/components/ui/CoverImage";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/shop/AddToCart";
import { products } from "@/lib/data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  return { title: product?.title ?? "Product" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <section className="bg-navy px-4 py-14 md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden">
          <CoverImage src={product.image} alt={product.title} fill />
        </div>
        <div>
          <p className="font-[family-name:var(--font-body)] text-[15px] italic tracking-[0.08em] uppercase text-sunflower">{product.cat}</p>
          <h1 className="font-[family-name:var(--font-display)] text-[28px] uppercase tracking-[0.1em] md:text-[40px] md:tracking-[0.14em]">
            {product.title}
          </h1>
          <p className="mt-4 text-[22px]">₺{product.price}</p>
          <p className="mt-6 text-[15px] leading-8 text-muted">
            Rodinya Galata tatlılarından. Güncel fiyat ve stok için kafe veya online menüye bakın.
          </p>
          <AddToCart slug={product.slug} />
        </div>
      </div>
    </section>
  );
}
