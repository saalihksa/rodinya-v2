"use client";

import { useEffect, useState } from "react";
import { applyGoogleLocale, locales, readStoredLocale, type Locale } from "@/lib/i18n";

export function LanguageSwitch() {
  const [locale, setLocale] = useState<Locale>("tr");

  useEffect(() => {
    setLocale(readStoredLocale());
  }, []);

  return (
    <div
      className="notranslate flex flex-wrap items-center justify-center gap-0.5"
      translate="no"
      role="group"
      aria-label="Dil"
    >
      {locales.map((item) => {
        const active = item.id === locale;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              if (item.id === locale) return;
              setLocale(item.id);
              applyGoogleLocale(item.id);
            }}
            className={`min-h-10 min-w-9 px-1.5 font-[family-name:var(--font-nav)] text-[13px] font-bold uppercase tracking-[0.08em] outline-none transition xl:text-[14px] ${
              active
                ? "text-sunflower-brown underline decoration-sunflower underline-offset-4"
                : "text-mink hover:text-sunflower-brown"
            }`}
          >
            {item.code}
          </button>
        );
      })}
    </div>
  );
}
