"use client";

import { CoverImage } from "@/components/ui/CoverImage";
import { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { images } from "@/lib/images";

type IsoInstance = {
  destroy: () => void;
  arrange: (opts: { filter: string }) => void;
};

const filters = [
  { key: "*", label: "Tümü" },
  { key: "food", label: "Yemek" },
  { key: "space", label: "Mekân" },
  { key: "dessert", label: "Tatlı" },
];

export function MasonryGallery() {
  const root = useRef<HTMLDivElement>(null);
  const iso = useRef<IsoInstance | null>(null);
  const [active, setActive] = useState("*");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!root.current) return;
    const grid = root.current;
    let cancelled = false;

    const setup = async () => {
      const [{ default: imagesLoaded }, { default: IsotopeCtor }] = await Promise.all([
        import("imagesloaded"),
        import("isotope-layout"),
      ]);
      if (cancelled || !root.current) return;
      const imgLoad = imagesLoaded(grid);
      const onAlways = () => {
        if (cancelled) return;
        iso.current = new IsotopeCtor(grid, {
          itemSelector: ".isotope-item",
          masonry: { gutter: 16 },
        });
      };
      imgLoad.on("always", onAlways);
    };

    void setup();
    return () => {
      cancelled = true;
      iso.current?.destroy();
      iso.current = null;
    };
  }, []);

  const applyFilter = (key: string) => {
    setActive(key);
    iso.current?.arrange({ filter: key === "*" ? "*" : `.${key}` });
  };

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-x-5 gap-y-3 md:mb-10 md:gap-6">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => applyFilter(f.key)}
            className={`min-h-11 font-[family-name:var(--font-nav)] text-[14px] font-bold uppercase tracking-[0.12em] ${
              active === f.key ? "text-gold" : "text-gold/50"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div ref={root} className="mx-auto max-w-6xl">
        {images.gallery.map((item, i) => (
          <button
            key={item.src}
            type="button"
            className={`isotope-item ${item.cat} mb-4 overflow-hidden`}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <span className="relative block aspect-[4/5]">
              <CoverImage src={item.src} alt={item.cat} fill className="transition duration-500 hover:scale-105" />
            </span>
          </button>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.gallery.map((g) => ({ src: g.src }))}
      />
    </div>
  );
}
