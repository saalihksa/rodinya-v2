import { Reveal } from "../motion/Reveal";

export function HomeQuote() {
  return (
    <section className="bg-navy px-4 py-14 md:px-10 md:py-24 lg:px-16">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="font-[family-name:var(--font-display)] text-[56px] leading-none text-sunflower">“</p>
        <blockquote className="mt-4 text-[19px] leading-8 text-ink md:text-[28px] md:leading-10">
          Büyük Hendek’te kahve, brunch ve pasta
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="h-px w-8 bg-gold" />
          <p className="font-[family-name:var(--font-nav)] text-[14px] font-semibold uppercase tracking-[0.14em] text-ink">
            Rodinya Galata
          </p>
        </div>
      </Reveal>
    </section>
  );
}
