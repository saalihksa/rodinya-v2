import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { DarkMap } from "@/components/ui/DarkMap";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteContact } from "@/lib/contact";
import { images } from "@/lib/images";

export const metadata: Metadata = { title: "İletişim" };

export default function ContactPage() {
  return (
    <>
      <PageHero title="İletişim" image={images.contactHero} />
      <DarkMap className="h-[260px] md:h-[480px] lg:h-[560px]" />
      <section className="bg-navy px-4 py-14 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:pt-6 lg:text-left">
            <SectionTitle overline="Yazın bize" title="İletişim" align="left" />
            <p className="mt-10 text-[16px] font-medium leading-8 tracking-normal text-ink">
              {siteContact.address.street}
              <br />
              {siteContact.address.district}
              <br />
              <a href={`tel:${siteContact.phone}`}>{siteContact.phoneDisplay}</a>
            </p>
            <p className="mt-8 text-[16px] font-medium leading-8 tracking-normal text-ink">
              <span className="text-gold">Çalışma saatleri:</span>
              <br />
              {siteContact.hours.dailyLabel}
              <br />
              {siteContact.hours.brunchLabel}
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
