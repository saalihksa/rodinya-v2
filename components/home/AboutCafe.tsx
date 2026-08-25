import Link from "next/link";
import { CoverImage } from "../ui/CoverImage";
import { images } from "@/lib/images";
import { Reveal } from "../motion/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { FramedPhoto } from "./FramedPhoto";

export function AboutCafe() {
  return (
    <section className="bg-navy px-4 py-14 md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionTitle overline="Galata’da kafe" title="Rodinya Galata" align="left" />
          <p className="mt-8 max-w-lg text-[15px] leading-8 text-mink">
            Büyük Hendek Caddesi No:4-B, Şahkulu. Kahve, brunch ve tatlı aynı mekânda. Kahvaltı her
            gün 07:00 – 14:00.
          </p>
          <p className="mt-4 max-w-lg text-[15px] leading-8 text-mink">
            Kafe 07:00 – 02:00 açık. Telefon: 0532 686 32 00. Instagram: @rodinyagalata.
          </p>
          <Link href="/about" className="gold-btn mt-8 md:mt-10">
            Hakkımızda
          </Link>
        </Reveal>
        <div className="relative mx-auto w-full max-w-[520px] pb-10 md:pb-16">
          <FramedPhoto
            src={images.chef01}
            alt="Rodinya Galata salonu"
            variant="diamond"
            aspect="portrait"
            sizes="40vw"
          />
          <Reveal
            delay={0.12}
            className="absolute right-0 bottom-[6%] z-20 w-[48%] overflow-hidden shadow-lg"
          >
            <div className="relative aspect-[4/3]">
              <CoverImage src={images.chef02} alt="Brunch tabağı" fill />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
