import Link from "next/link";
import { seasonalCards } from "@/lib/data";
import { siteContact } from "@/lib/contact";
import { Reveal } from "../motion/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { FramedPhoto } from "./FramedPhoto";

const variants = ["diamond", "hex", "iso"] as const;

export function Seasonal() {
  return (
    <section className="bg-navy px-4 pb-14 md:px-10 md:pb-24 lg:px-16">
      <div className="mx-auto max-w-[1180px]">
        <SectionTitle overline="Menüden" title="Kahve, brunch, tatlı" />
        <Reveal className="mt-10 md:mt-16">
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3 md:grid-rows-[auto_auto_auto_auto_auto] md:gap-y-0">
            {seasonalCards.map((card, index) => (
              <article
                key={card.title}
                className="grid grid-cols-1 justify-items-center text-center md:row-span-5 md:grid-rows-subgrid"
              >
                <FramedPhoto
                  src={card.image}
                  alt={card.title}
                  variant={variants[index] ?? "diamond"}
                  pad="center"
                  aspect="portrait"
                />
                <p className="pt-7 italic leading-none text-sunflower">{card.eyebrow}</p>
                <h3 className="flex items-center justify-center px-2 pt-2 font-[family-name:var(--font-display)] text-[22px] uppercase leading-snug tracking-[0.1em] text-gold">
                  {card.title}
                </h3>
                <p className="px-2 pt-3 text-[15px] leading-7 text-muted">{card.body}</p>
                <Link
                  href={siteContact.menuPath}
                  className="pt-5 font-[family-name:var(--font-nav)] text-[13px] font-semibold uppercase tracking-[0.12em] text-ink underline underline-offset-4"
                >
                  Menüyü gör
                </Link>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
