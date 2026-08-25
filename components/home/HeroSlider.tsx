"use client";

import { motion } from "framer-motion";
import { CoverImage } from "../ui/CoverImage";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "@/lib/images";

function Chevron({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg width="14" height="28" viewBox="0 0 14 28" fill="none" aria-hidden>
      <path
        d={dir === "next" ? "M1 1l12 13L1 27" : "M13 1L1 14l12 13"}
        stroke="#d4a017"
        strokeWidth="1"
      />
    </svg>
  );
}

export function HeroSlider() {
  return (
    <section className="relative h-[calc(100svh-4.75rem)] min-h-[420px] overflow-hidden bg-navy xl:h-svh">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={1200}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        className="hero-swiper h-full w-full"
      >
        {images.hero.map((src, i) => (
          <SwiperSlide key={src}>
            {({ isActive }) => (
              <div className="relative h-[calc(100svh-4.75rem)] min-h-[420px] w-full overflow-hidden xl:h-svh">
                <motion.div
                  key={isActive ? `${src}-in` : `${src}-out`}
                  className="absolute inset-0 origin-center"
                  initial={{ scale: 1 }}
                  animate={{ scale: isActive ? 1.08 : 1 }}
                  transition={
                    isActive
                      ? { duration: 5.5, ease: "linear" }
                      : { duration: 0 }
                  }
                >
                  <CoverImage
                    src={src}
                    alt="Rodinya Galata"
                    fill
                    priority={i === 0}
                    className="object-[center_center]"
                  />
                </motion.div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 px-4 text-center md:px-6">
        <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-[clamp(1.7rem,8vw,64px)] font-semibold uppercase leading-[1.12] tracking-[0.04em] text-[#faf6f0] md:tracking-[0.06em]">
          Galata&apos;da kahve ve tatlı
        </h1>
        <p className="mt-4 max-w-[560px] text-[15px] leading-7 text-white/90 md:mt-5 md:text-[18px]">
          Büyük Hendek Caddesi No:4-B, Şahkulu. Her gün 07:00 – 02:00.
        </p>
      </div>
      <button type="button" aria-label="Önceki slayt" className="hero-nav hero-prev left-4 z-20 md:left-5">
        <Chevron dir="prev" />
      </button>
      <button type="button" aria-label="Sonraki slayt" className="hero-nav hero-next right-3 z-20 lg:right-5">
        <Chevron dir="next" />
      </button>
    </section>
  );
}
