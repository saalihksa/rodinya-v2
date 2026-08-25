import type { Metadata } from "next";
import { CoverImage } from "@/components/ui/CoverImage";
import { PageHero } from "@/components/layout/PageHero";
import { chefs } from "@/lib/data";
import { images } from "@/lib/images";
import { SocialIcons } from "@/components/ui/SocialIcons";

export const metadata: Metadata = { title: "Rodinya’da bir gün" };

export default function ChefsPage() {
  return (
    <>
      <PageHero title="Rodinya’da bir gün" image={images.chefsHero} />
      <section className="bg-navy px-4 py-14 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-3">
          {chefs.map((chef) => (
            <article key={chef.name} className="text-center">
              <div className="relative mx-auto aspect-[3/4] overflow-hidden">
                <CoverImage src={chef.image} alt={chef.name} fill />
              </div>
              <div className="mt-5">
                <SocialIcons />
              </div>
              <h2 className="mt-5 font-[family-name:var(--font-display)] uppercase tracking-[0.16em] text-gold">
                {chef.name}
              </h2>
              <p className="mt-1 font-[family-name:var(--font-body)] text-[15px] italic text-gold">{chef.role}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
