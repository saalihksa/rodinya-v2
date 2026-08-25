"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { CoverImage } from "../ui/CoverImage";
import { ImageOrnament } from "../ui/Ornament";

const ornamentPos =
  "top-0 right-0 h-[82%] w-[82%] origin-top-right translate-x-[16%] -translate-y-[16%]";

export function FramedPhoto({
  src,
  alt,
  variant,
  overlay,
  aspect = "square",
}: {
  src: string;
  alt: string;
  variant: "diamond" | "hex" | "iso";
  pad?: "left" | "right" | "center";
  overlay?: ReactNode;
  aspect?: "square" | "portrait";
  sizes?: string;
}) {
  return (
    <div className="w-full min-w-0 px-[16%] pt-[16%]">
      <div className="relative w-full">
        <ImageOrnament variant={variant} className={`z-0 ${ornamentPos}`} />
        <div
          className={`relative z-10 w-full overflow-hidden ${
            aspect === "portrait" ? "aspect-[3/4]" : "aspect-square"
          }`}
        >
          <CoverImage src={src} alt={alt} fill />
          {overlay}
        </div>
      </div>
    </div>
  );
}
