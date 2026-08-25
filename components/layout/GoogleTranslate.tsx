"use client";

import { useEffect } from "react";
import { syncGoogleLocale } from "@/lib/i18n";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          elementId: string,
        ) => void;
      };
    };
  }
}

function initWidget() {
  if (!window.google?.translate) return;
  const host = document.getElementById("google_translate_element");
  if (!host || host.dataset.ready === "1") return;
  host.dataset.ready = "1";
  new window.google.translate.TranslateElement(
    {
      pageLanguage: "tr",
      includedLanguages: "ar,en,de,fr,tr",
      autoDisplay: false,
    },
    "google_translate_element",
  );
  window.setTimeout(syncGoogleLocale, 400);
}

export function GoogleTranslate() {
  useEffect(() => {
    window.googleTranslateElementInit = initWidget;

    const existing = document.getElementById("google-translate-script");
    if (existing) {
      initWidget();
      return;
    }

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
  }, []);

  return <div id="google_translate_element" aria-hidden />;
}
