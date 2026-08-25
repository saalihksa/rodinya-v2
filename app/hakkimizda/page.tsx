import type { Metadata } from "next";
import { CoverImage } from "@/components/ui/CoverImage";
import Link from "next/link";
import { ReviewsMarquee } from "@/components/home/ReviewsMarquee";
import { PageHero } from "@/components/layout/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images } from "@/lib/images";
import { paths } from "@/lib/paths";

export const metadata: Metadata = { title: "Hakkımızda" };

export default function AboutPage() {
  return (
    <>
      <PageHero title="Hakkımızda" image={images.aboutHero} />
      <section className="bg-navy px-4 py-14 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle overline="Galata’da kahve, brunch ve tatlı" title="Hakkımızda" align="left" />
            <p className="mt-8 text-[15px] leading-8 text-mink">
              Büyük Hendek Caddesi No:4-B, Şahkulu. Kahve, brunch ve tatlı aynı mekânda. Kahvaltı her
              gün 07:00 – 14:00.
            </p>
            <p className="mt-5 text-[15px] leading-8 text-mink">
              Kafe 07:00 – 02:00 açık. Telefon: 0532 686 32 00. Instagram: @rodinyagalata.
            </p>
            <Link href={paths.contact} className="gold-btn mt-10">
              İletişim
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <CoverImage src={images.aboutSide} alt="Rodinya Galata" fill />
          </div>
        </div>
      </section>
      <ReviewsMarquee />
    </>
  );
}
