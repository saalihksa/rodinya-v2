"use client";

import { motion } from "framer-motion";
import { CoverImage } from "@/components/ui/CoverImage";

export function PageHero({ title, image }: { title: string; image: string }) {
  return (
    <section className="page-hero">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <CoverImage src={image} alt={title} fill priority />
      </motion.div>
      <motion.h1
        className="relative z-10 px-1 text-center font-[family-name:var(--font-display)] text-[clamp(1.7rem,7vw,56px)] font-semibold uppercase leading-[1.15] tracking-[0.06em] text-[#faf6f0] md:tracking-[0.08em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h1>
    </section>
  );
}
