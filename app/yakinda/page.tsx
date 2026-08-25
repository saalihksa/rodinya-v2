import type { Metadata } from "next";
import Link from "next/link";
import { ComingSoonCountdown } from "@/components/layout/ComingSoonCountdown";
import { Logo } from "@/components/ui/Logo";
import { siteContact } from "@/lib/contact";

export const metadata: Metadata = { title: "Yakında" };

export default function ComingSoonPage() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-16 text-center md:px-6 md:py-24">
      <Logo />
      <h1 className="mt-12 font-[family-name:var(--font-display)] text-[32px] uppercase tracking-[0.16em] text-gold md:text-[56px] md:tracking-[0.22em]">
        Yakında
      </h1>
      <ComingSoonCountdown />
      <Link href={siteContact.menuPath} className="gold-btn mt-16">
        Menüyü gör
      </Link>
    </section>
  );
}
