import type { Metadata } from "next";
import { MasonryGallery } from "@/components/gallery/MasonryGallery";
import { PageHero } from "@/components/layout/PageHero";
import { images } from "@/lib/images";

export const metadata: Metadata = { title: "Portfolyo" };

export default function PortfolioPage() {
  return (
    <>
      <PageHero title="Portfolyo" image={images.portfolioHero} />
      <section className="bg-navy px-4 py-14 md:px-10 md:py-24 lg:px-16">
        <MasonryGallery />
      </section>
    </>
  );
}
