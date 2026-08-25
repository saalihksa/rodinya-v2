export const locales = [
  { id: "tr", code: "TR", name: "Türkçe" },
  { id: "en", code: "EN", name: "English" },
  { id: "de", code: "DE", name: "Deutsch" },
  { id: "fr", code: "FR", name: "Français" },
  { id: "ar", code: "AR", name: "العربية" },
] as const;

export type Locale = (typeof locales)[number]["id"];

export const LOCALE_STORAGE_KEY = "rodinya-locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return locales.some((item) => item.id === value);
}

export function readStoredLocale(): Locale {
  if (typeof document === "undefined") return "tr";

  const cookie = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  if (cookie) {
    const parts = decodeURIComponent(cookie[1]).split("/");
    const lang = parts[2] || parts[1];
    if (isLocale(lang) && lang !== "tr") return lang;
  }

  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    /* ignore */
  }

  return "tr";
}

function writeGoogTransCookie(locale: Locale) {
  const expireClear = "Thu, 01 Jan 1970 00:00:00 GMT";
  const host = window.location.hostname;
  const domains =
    host === "localhost" || host.endsWith(".localhost")
      ? [""]
      : ["", host, `.${host}`];

  for (const domain of domains) {
    const domainPart = domain ? `; domain=${domain}` : "";
    if (locale === "tr") {
      document.cookie = `googtrans=; path=/${domainPart}; expires=${expireClear}; SameSite=Lax`;
    } else {
      document.cookie = `googtrans=/tr/${locale}; path=/${domainPart}; SameSite=Lax`;
    }
  }
}

function findCombo() {
  return document.querySelector<HTMLSelectElement>(".goog-te-combo");
}

function comboHasValue(select: HTMLSelectElement, value: string) {
  return Array.from(select.options).some((option) => option.value === value);
}

function fireComboChange(select: HTMLSelectElement, value: string) {
  if (value && !comboHasValue(select, value)) return false;

  select.value = value;

  const htmlEvent = document.createEvent("HTMLEvents");
  htmlEvent.initEvent("change", true, true);
  select.dispatchEvent(htmlEvent);
  select.dispatchEvent(new Event("change", { bubbles: true }));

  const handler = select.onchange;
  if (typeof handler === "function") {
    handler.call(select, htmlEvent);
  }

  return true;
}

export function applyGoogleLocale(locale: Locale) {
  writeGoogTransCookie(locale);

  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    /* ignore */
  }

  window.location.reload();
}

export function syncGoogleLocale() {
  const locale = readStoredLocale();
  document.documentElement.lang = locale;
  document.documentElement.classList.toggle("locale-ar", locale === "ar");

  if (locale === "tr") return;

  let tries = 0;
  const tick = window.setInterval(() => {
    tries += 1;
    const select = findCombo();
    const ready = select && comboHasValue(select, locale);

    if (ready && select) {
      window.clearInterval(tick);
      if (select.value !== locale) fireComboChange(select, locale);
      return;
    }

    if (tries > 50) window.clearInterval(tick);
  }, 120);
}
