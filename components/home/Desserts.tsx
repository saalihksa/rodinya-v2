import { images } from "@/lib/images";
import { FramedPhoto } from "./FramedPhoto";
import { SectionTitle } from "../ui/SectionTitle";

const desserts = [
  {
    name: "Antep fıstıklı Sebastian",
    image: images.plated[0],
    body: "San Sebastian, Antep fıstığı ile",
    variant: "diamond" as const,
  },
  {
    name: "Osco",
    image: images.plated[1],
    body: "Çikolata, çilek, fıstık",
    variant: "hex" as const,
  },
  {
    name: "Rodinya Profiterol",
    image: images.plated[2],
    body: "Çikolata, kadayıf, fıstık",
    variant: "iso" as const,
  },
] as const;

export function Desserts() {
  return (
    <section className="bg-navy px-4 pb-14 md:px-10 md:pb-24 lg:px-16">
      <div className="mx-auto max-w-[1180px]">
        <SectionTitle overline="Tatlılar" title="San Sebastian, Osco, profiterol" />
        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 md:mt-20 md:grid-cols-3 md:grid-rows-[auto_auto_auto_auto_auto] md:gap-y-0">
          {desserts.map((item) => (
            <article
              key={item.name}
              className="grid grid-cols-1 justify-items-center text-center md:row-span-5 md:grid-rows-subgrid"
            >
              <FramedPhoto src={item.image} alt={item.name} variant={item.variant} pad="center" />
              <p className="pt-7 italic leading-none text-sunflower">tatlı</p>
              <h3 className="flex items-center justify-center px-2 pt-2 font-[family-name:var(--font-display)] text-[17px] uppercase leading-snug tracking-[0.1em] text-ink">
                {item.name}
              </h3>
              <span className="mt-3 block h-px w-16 shrink-0 bg-sunflower" aria-hidden />
              <p className="px-2 pt-3 text-[14px] leading-6 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
