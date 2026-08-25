import type { Metadata } from "next";
import { CoverImage } from "@/components/ui/CoverImage";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images } from "@/lib/images";

export const metadata: Metadata = { title: "Hikâyemiz" };

export default function ChefPage() {
  return (
    <>
      <PageHero title="Hikâyemiz" image={images.chefsHero} />
      <section className="bg-navy px-4 py-14 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionTitle overline="Rodinya Galata" title="Kafe & Tatlı" align="left" />
            <p className="mt-8 text-[15px] leading-8 text-mink">
              Büyük Hendek Caddesi No:4-B, Şahkulu. Kahve, brunch ve tatlı aynı mekânda. Kahvaltı her
              gün 07:00 – 14:00.
            </p>
            <p className="mt-5 text-[15px] leading-8 text-mink">
              Kafe 07:00 – 02:00 açık. Telefon: 0532 686 32 00. Instagram: @rodinyagalata.
            </p>
            <Link href="/kitchen" className="gold-btn mt-10">
              Mekânı gör
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <CoverImage src={images.chefPortrait} alt="Somonlu tost" fill />
          </div>
        </div>
      </section>
    </>
  );
}
