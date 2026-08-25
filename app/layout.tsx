import type { Metadata } from "next";
import { Afacad, Barlow_Condensed, Cinzel, Noto_Naskh_Arabic } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { GoogleTranslate } from "@/components/layout/GoogleTranslate";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

const notoNaskh = Noto_Naskh_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export const metadata: Metadata = {
  title: {
    default: "Rodinya Galata – Kafe & Tatlı",
    template: "%s – Rodinya Galata",
  },
  description:
    "Galata Kulesi yakınında kahve, brunch ve tatlı — Her gün 07:00–02:00. Büyük Hendek Cd. No:4-B, Beyoğlu.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${cinzel.variable} ${afacad.variable} ${barlow.variable} ${notoNaskh.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-navy font-medium text-ink">
        <SiteShell>{children}</SiteShell>
        <GoogleTranslate />
      </body>
    </html>
  );
}
