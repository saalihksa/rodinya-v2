import type { Metadata } from "next";
import { CoverImage } from "@/components/ui/CoverImage";
import { PageHero } from "@/components/layout/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images } from "@/lib/images";

export const metadata: Metadata = { title: "Mekân" };

export default function KitchenPage() {
  return (
    <>
      <PageHero title="Mekân" image={images.kitchenHero} />
      <section className="bg-navy px-4 py-14 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <SectionTitle overline="Büyük Hendek" title="Salon" />
          <p className="mt-10 text-center text-[15px] leading-8 text-mink">
            Galata’nın kalbinde, kule manzarasına yakın bir salon. Kahve, brunch ve tatlı — sabah
            kahvaltıdan gece kahvesine kadar.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {images.kitchen.map((src) => (
            <div key={src} className="relative aspect-[3/4] overflow-hidden">
              <CoverImage src={src} alt="Rodinya Galata mekân" fill />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
