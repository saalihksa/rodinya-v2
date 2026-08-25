"use client";

import { Reveal } from "../motion/Reveal";
import { TitleOrnament } from "./Ornament";

export function SectionTitle({
  overline,
  title,
  align = "center",
  as = "h2",
  size = "lg",
}: {
  overline: string;
  title: string;
  align?: "center" | "left";
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "lg" | "md";
}) {
  const Heading = as;
  const script = size === "lg" ? "text-[18px] md:text-[24px]" : "text-[16px] md:text-[20px]";
  const heading =
    size === "lg"
      ? "text-[22px] font-semibold leading-[1.2] tracking-[0.05em] md:text-[40px] md:tracking-[0.08em]"
      : "text-[18px] font-semibold leading-tight tracking-[0.08em] md:text-[22px]";
  return (
    <Reveal variant="fadeUp" className={align === "center" ? "text-center" : "text-left"}>
      <p className={`px-1 font-[family-name:var(--font-script)] font-semibold leading-snug text-sunflower-brown ${script}`}>
        {overline}
      </p>
      <div
        className={`mt-3 items-center gap-2 md:gap-3 ${
          align === "center"
            ? "grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]"
            : "flex justify-start"
        }`}
      >
        {align === "center" ? (
          <>
            <span className="hidden justify-self-end sm:block">
              <TitleOrnament animate />
            </span>
            <Heading className={`max-w-full text-balance text-center font-[family-name:var(--font-display)] font-semibold uppercase break-words text-ink ${heading}`}>
              {title}
            </Heading>
            <span className="hidden justify-self-start sm:block">
              <TitleOrnament animate />
            </span>
          </>
        ) : (
          <>
            <span className="hidden sm:block">
              <TitleOrnament animate />
            </span>
            <Heading className={`max-w-full font-[family-name:var(--font-display)] font-semibold uppercase break-words text-ink ${heading}`}>
              {title}
            </Heading>
          </>
        )}
      </div>
    </Reveal>
  );
}
