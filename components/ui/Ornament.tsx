"use client";

import { useEffect, useRef } from "react";
import { ornaments } from "@/lib/images";

export function HeroOrnament() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={ornaments.diamond} alt="" className="absolute h-[min(72vw,560px)] w-[min(72vw,560px)] opacity-80" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={ornaments.hex} alt="" className="absolute h-[min(58vw,440px)] w-[min(58vw,440px)] opacity-75" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={ornaments.iso} alt="" className="absolute h-[min(54vw,420px)] w-[min(48vw,380px)] opacity-70" />
    </div>
  );
}

export function TitleOrnament({ animate = false }: { animate?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 41.125 9.146"
      className={`mx-auto h-[9px] w-[41px] ${animate ? "decor-draw" : ""}`}
      aria-hidden
    >
      <path fill="none" stroke="#e8b923" strokeMiterlimit={10} d="M40.881 8.576L20.562.591.244 8.576" />
      <path fill="none" stroke="#e8b923" strokeMiterlimit={10} d="M40.881.591L20.562 8.576.243.591" />
    </svg>
  );
}

export function ImageOrnament({
  variant = "diamond",
  className = "",
}: {
  variant?: "diamond" | "hex" | "iso";
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const src = ornaments[variant === "hex" ? "hex" : variant === "iso" ? "iso" : "diamond"];

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cancelled = false;
    let observer: IntersectionObserver | undefined;

    fetch(src)
      .then((res) => res.text())
      .then((markup) => {
        if (cancelled || !wrap) return;
        wrap.innerHTML = markup;
        const svg = wrap.querySelector("svg");
        if (!svg) return;

        const w = svg.getAttribute("width") || "368";
        const h = svg.getAttribute("height") || "368";
        if (!svg.getAttribute("viewBox")) {
          svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
        }
        svg.removeAttribute("width");
        svg.removeAttribute("height");
        svg.setAttribute("preserveAspectRatio", "xMaxYMin meet");
        svg.style.width = "100%";
        svg.style.height = "100%";
        svg.style.display = "block";
        svg.style.overflow = "visible";

        const paths = [...svg.querySelectorAll("path")];
        paths.forEach((path) => {
          path.setAttribute("fill", "none");
          path.setAttribute("stroke", "#c9ab81");
          path.setAttribute("stroke-width", "1.5");
          path.setAttribute("pathLength", "1");
          path.style.strokeDasharray = "1";
          path.style.strokeDashoffset = reduce ? "0" : "1";
        });

        if (reduce) {
          wrap.classList.add("is-drawn");
          return;
        }

        const start = () => {
          wrap.classList.add("is-drawn");
          paths.forEach((path) => {
            path.style.strokeDashoffset = "0";
          });
        };

        const target = wrap.parentElement ?? wrap;
        observer = new IntersectionObserver(
          ([entry]) => {
            if (!entry.isIntersecting) return;
            window.setTimeout(start, 40);
            observer?.disconnect();
          },
          { threshold: 0.05 },
        );
        observer.observe(target);
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
      observer?.disconnect();
    };
  }, [src]);

  return (
    <div
      ref={wrapRef}
      className={`image-ornament pointer-events-none absolute opacity-100 ${className}`}
      aria-hidden
    />
  );
}
