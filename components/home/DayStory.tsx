import { historyCards } from "@/lib/data";
import { Reveal } from "../motion/Reveal";
import { FramedPhoto } from "./FramedPhoto";

export function DayStory() {
  return (
    <section className="bg-navy px-4 py-14 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal className="mx-auto mb-14 max-w-xl text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-sunflower-brown">
            Rodinya Galata
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.7rem,3.4vw,2.4rem)] uppercase tracking-[0.08em] text-ink">
            Galata’da kahve, brunch ve tatlı
          </h2>
        </Reveal>

        <div className="relative space-y-8">
          <span
            className="pointer-events-none absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-steel/35 md:block"
            aria-hidden
          />
          {historyCards.map((card, index) => {
            const reverse = index % 2 === 1;
            return (
              <Reveal key={card.year} delay={index * 0.08}>
                <article
                  className={`grid items-start gap-6 md:grid-cols-2 md:items-center md:gap-16 ${
                    reverse ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <FramedPhoto
                    src={card.image}
                    alt={card.title}
                    variant={index === 1 ? "hex" : index === 2 ? "iso" : "diamond"}
                    pad={reverse ? "left" : "right"}
                    sizes="50vw"
                  />
                  <div className={`px-1 md:px-4 ${reverse ? "md:text-right" : ""}`}>
                    <p className="text-[13px] font-semibold tracking-[0.18em] text-sunflower">
                      {card.year}
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-[1.25rem] uppercase tracking-[0.08em] text-ink md:text-[1.45rem] md:tracking-[0.1em]">
                      {card.title}
                    </h3>
                    <p className={`mt-3 max-w-md text-[16px] leading-7 text-mink ${reverse ? "md:ml-auto" : ""}`}>
                      {card.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
