"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { navItems } from "@/lib/data";
import { Logo } from "../ui/Logo";
import { LanguageSwitch } from "./LanguageSwitch";

export function MobileHeader() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  const menu = (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex h-[100dvh] w-full flex-col overflow-y-auto overscroll-contain bg-navy px-5 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex items-center justify-between">
            <Logo compact />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-12 w-12 items-center justify-center text-2xl text-gold"
              aria-label="Kapat"
            >
              ✕
            </button>
          </div>
            <nav className="flex min-h-0 flex-1 flex-col items-center justify-center gap-6 py-6">
            {navItems.map((item) => {
              const active = pathname === item.href || item.children?.some((c) => c.href === pathname);
              return (
                <div key={item.label} className="text-center">
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                    className={`nav-link inline-block font-[family-name:var(--font-nav)] text-[22px] font-bold uppercase tracking-[0.08em] text-ink sm:text-[26px] ${
                      active ? "is-active" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="mt-3 flex flex-col items-center gap-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="text-[16px] font-bold uppercase tracking-[0.08em] text-ink/70"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
            <Link href="/contact" onClick={() => setOpen(false)} className="gold-btn mt-4 w-full max-w-xs">
              İletişim
            </Link>
            <div className="mt-6 border-t border-steel/30 pt-5">
              <p className="mb-2 text-center text-[12px] font-semibold uppercase tracking-[0.16em] text-mink">
                Dil
              </p>
              <LanguageSwitch />
            </div>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-gold/15 bg-navy px-4 py-2 pt-[max(0.5rem,env(safe-area-inset-top))] xl:hidden">
      <Logo compact />
      <button
        type="button"
        aria-label="Menüyü aç"
        onClick={() => setOpen(true)}
        className="flex h-12 w-12 flex-col items-center justify-center gap-1.5"
      >
        <span className="h-[2px] w-6 bg-ink" />
        <span className="h-[2px] w-6 bg-ink" />
        <span className="h-[2px] w-4 bg-ink" />
      </button>
      {mounted ? createPortal(menu, document.body) : null}
    </header>
  );
}
