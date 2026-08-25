import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { DarkMap } from "@/components/ui/DarkMap";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { siteContact } from "@/lib/contact";
import { images } from "@/lib/images";

export const metadata: Metadata = { title: "İletişim" };

const details = [
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
    title: "Instagram",
    lines: [siteContact.instagramHandle],
    href: siteContact.instagram,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero title="İletişim" image={images.contactHero} />
      <DarkMap className="h-[260px] md:h-[480px] lg:h-[560px]" />
      <section className="bg-navy px-4 py-14 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:pt-6 lg:text-left">
            <SectionTitle overline="Rodinya Galata" title="İletişim" align="left" />
            <p className="mt-10 text-[16px] font-medium leading-8 tracking-normal text-ink">
              {siteContact.address.street}
              <br />
              {siteContact.address.district}
              <br />
              <a href={`tel:${siteContact.phone}`} className="underline-offset-4 hover:underline">
                {siteContact.phoneDisplay}
              </a>
            </p>
            <p className="mt-8 text-[16px] font-medium leading-8 tracking-normal text-ink">
              <span className="text-gold">Çalışma saatleri:</span>
              <br />
              {siteContact.hours.dailyLabel}
              <br />
              {siteContact.hours.brunchLabel}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a href={`tel:${siteContact.phone}`} className="gold-btn">
                Ara
              </a>
              <Link
                href={siteContact.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="gold-btn"
              >
                Yol tarifi
              </Link>
            </div>
          </div>
          <div>
            <div className="grid gap-8 border border-steel/35 px-5 py-8 sm:grid-cols-2 sm:px-8 sm:py-10">
              {details.map((item) => {
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
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
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
            </div>
            <SocialIcons className="mt-10" />
          </div>
        </div>
      </section>
    </>
  );
}
