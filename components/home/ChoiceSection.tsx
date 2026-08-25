"use client";

import Link from "next/link";
import { siteContact } from "@/lib/contact";
import { choiceMenu } from "@/lib/data";
import { images } from "@/lib/images";
import { Reveal } from "../motion/Reveal";
import { MenuList } from "../ui/MenuList";
import { SectionTitle } from "../ui/SectionTitle";
import { FramedPhoto } from "./FramedPhoto";

export function ChoiceSection() {
  return (
    <section className="bg-navy px-4 pb-8 pt-14 md:px-10 md:pt-24 lg:px-16">
      <div className="mx-auto max-w-[1180px]">
        <SectionTitle overline="İmza tatlılar" title="SEÇTİKLERİMİZ" as="h1" />

        <div className="mt-20 grid items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <Reveal variant="fadeUp">
            <MenuList overline="Tatlı" heading="Tatlılar" items={choiceMenu} />
          </Reveal>
          <FramedPhoto src={images.plated[0]} alt="Antep fıstıklı Sebastian" variant="diamond" pad="right" />

          <div className="lg:order-none">
            <FramedPhoto src={images.plated[1]} alt="Osco" variant="hex" pad="left" />
          </div>
          <Reveal variant="fadeUp">
            <MenuList overline="Tatlı" heading="Tatlılar" items={choiceMenu} />
          </Reveal>

          <Reveal variant="fadeUp">
            <MenuList overline="Tatlı" heading="Tatlılar" items={choiceMenu} />
          </Reveal>
          <FramedPhoto src={images.plated[2]} alt="Rodinya Profiterol" variant="iso" pad="right" />
        </div>

        <Reveal className="mt-20 flex justify-center">
          <Link href={siteContact.menuPath} className="gold-btn">
            Menüyü gör
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
