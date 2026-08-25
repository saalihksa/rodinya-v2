"use client";

import { CoverImage } from "../ui/CoverImage";
import Link from "next/link";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "@/lib/data";
import { images } from "@/lib/images";
import { Reveal } from "../motion/Reveal";
import { SectionTitle } from "../ui/SectionTitle";

export function Testimonials() {
  return (
    <section className="bg-navy">
      <div className="grid lg:grid-cols-2">
        <Reveal variant="fromLeft" className="relative min-h-[280px] overflow-hidden md:min-h-[520px] lg:min-h-[680px]">
          <CoverImage
            src={images.couple}
            alt="Rodinya Galata girişi"
            fill
            className="transition duration-[1200ms] hover:scale-105"
          />
        </Reveal>
        <div className="flex min-h-0 flex-col items-center justify-center bg-navy px-4 py-14 text-center md:min-h-[520px] md:px-8 md:py-20 lg:min-h-[680px] lg:px-20">
          <SectionTitle overline="Galata’da" title="Kafe & Tatlı" />
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-[440px] text-[15px] leading-8 text-mink">
              Büyük Hendek Caddesi No:4-B, Şahkulu. Kahve, brunch ve tatlı aynı mekânda. Kahvaltı her
              gün 07:00 – 14:00. Kafe 07:00 – 02:00 açık.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <Link href="/about" className="gold-btn mt-12">
              Hakkımızda
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="relative bg-navy px-4 py-14 md:px-10 md:py-24 lg:px-16">
        <Reveal className="mx-auto max-w-[820px]">
          <Swiper
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            navigation
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<button type="button" class="${className} testimonial-num">${index + 1}</button>`,
            }}
            loop
            speed={700}
            autoplay={{ delay: 5000 }}
            className="testimonial-swiper"
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <blockquote className="px-10 pb-6 text-center sm:px-16">
                  <div className="mb-6 font-[family-name:var(--font-display)] text-[56px] leading-none text-sunflower">
                    ”
                  </div>
                  <p className="font-[family-name:var(--font-body)] text-[17px] font-normal leading-[1.75] tracking-[0.01em] text-ink sm:text-[20px]">
                    {item.quote}
                  </p>
                  <footer className="mt-12">
                    <cite className="not-italic font-[family-name:var(--font-display)] text-[15px] uppercase tracking-[0.2em] text-gold">
                      {item.name}
                    </cite>
                    <p className="mt-2 text-[15px] text-mink">{item.role}</p>
                  </footer>
                </blockquote>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
