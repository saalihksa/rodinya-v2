"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { CartProvider } from "@/lib/cart";
import { BackToTop } from "./BackToTop";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileHeader } from "./MobileHeader";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <CartProvider>
      <MobileHeader />
      <Header />
      <div className="flex min-h-screen max-w-full flex-col overflow-x-clip xl:pl-[280px]">
        <main className="max-w-full flex-1 overflow-x-clip">{children}</main>
        <Footer />
      </div>
      <BackToTop />
    </CartProvider>
  );
}
