import Link from "next/link";
import { siteContact } from "@/lib/contact";
import { Reveal } from "../motion/Reveal";

const items = [
  {
    title: "Kahvaltı / Brunch",
    lines: [siteContact.hours.daysLabel, siteContact.hours.brunchRange],
  },
  {
    title: "Çalışma saatleri",
    lines: [siteContact.hours.daysLabel, siteContact.hours.timeRange],
  },
  {
    title: "Konum",
    lines: [siteContact.address.street, siteContact.address.district],
    href: siteContact.googleMapsUrl,
  },
  {
    title: "İletişim",
    lines: [siteContact.phoneDisplay, siteContact.instagramHandle],
    href: `tel:${siteContact.phone}`,
  },
];

export function HomeInfo() {
  return (
    <section className="bg-navy px-4 py-10 md:px-10 md:py-16 lg:px-16">
      <Reveal className="mx-auto grid max-w-6xl items-start gap-8 border border-steel/35 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-10 lg:py-10">
        {items.map((item) => {
          const body = (
            <>
              <h3 className="font-[family-name:var(--font-nav)] text-[13px] font-semibold uppercase tracking-[0.12em] text-sunflower-brown">
                {item.title}
              </h3>
              <div className="mt-3 space-y-1 text-[16px] font-semibold leading-6 text-ink">
                {item.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </>
          );
          if ("href" in item && item.href) {
            return (
              <Link
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                className="text-left transition hover:opacity-70"
              >
                {body}
              </Link>
            );
          }
          return (
            <div key={item.title} className="text-left">
              {body}
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
