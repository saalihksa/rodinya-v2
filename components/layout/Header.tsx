"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data";
import { paths } from "@/lib/paths";
import { useCart } from "@/lib/cart";
import { Logo } from "../ui/Logo";
import { LanguageSwitch } from "./LanguageSwitch";

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <aside className="header-vertical fixed left-0 top-0 z-40 hidden h-screen w-[280px] flex-col bg-navy px-8 py-12 xl:flex">
      <div className="flex justify-center pt-2">
        <Logo />
      </div>
      <nav className="flex flex-1 flex-col items-center justify-center gap-8">
        {navItems.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href ||
                pathname.startsWith(`${item.href}/`) ||
                item.children?.some((c) => pathname === c.href || pathname.startsWith(`${c.href}/`));
          return (
            <div key={item.label} className="dropdown-trigger relative">
              <Link
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className={`nav-link font-[family-name:var(--font-nav)] text-[16px] font-bold uppercase tracking-[0.14em] text-ink ${
                  active ? "is-active" : ""
                }`}
              >
                {item.label}
              </Link>
              {item.children ? (
                <div className="dropdown-panel absolute left-1/2 top-full z-50 mt-3 w-52 -translate-x-1/2 border border-gold/25 bg-navy-mid">
                  <div>
                    <div className="py-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-2 font-[family-name:var(--font-nav)] text-[14px] font-bold uppercase tracking-[0.1em] text-ink/80 transition-colors hover:text-ink"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </nav>
      <div className="flex flex-col items-center gap-5 pb-2">
        <LanguageSwitch />
        <Link href={paths.contact} className="gold-btn !min-w-0 !px-5">
          <span className="gold-btn-x tl" aria-hidden />
          <span className="gold-btn-x tr" aria-hidden />
          <span className="gold-btn-x bl" aria-hidden />
          <span className="gold-btn-x br" aria-hidden />
          İletişim
        </Link>
        {count > 0 ? (
          <Link
            href={paths.cart}
            className="font-[family-name:var(--font-nav)] text-[13px] font-semibold uppercase tracking-[0.14em] text-ink"
          >
            Sepet ({count})
          </Link>
        ) : null}
      </div>
    </aside>
  );
}
