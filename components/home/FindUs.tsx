import Image from "next/image";
import { siteContact } from "@/lib/contact";
import { images } from "@/lib/images";
import { Reveal } from "../motion/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { SocialIcons } from "../ui/SocialIcons";

export function FindUs() {
  return (
    <section className="grid overflow-hidden bg-navy lg:min-h-[740px] lg:grid-cols-2">
      <div className="relative min-h-[260px] bg-steel md:min-h-[380px] lg:min-h-[740px]">
        <iframe
          title="Rodinya Galata konumu"
          className="absolute inset-0 h-full w-full border-0 grayscale contrast-[1.08] brightness-[0.92] saturate-[0.35]"
          src={`https://maps.google.com/maps?q=${siteContact.mapsQuery}&z=16&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <Image src={images.pin} alt="" width={28} height={40} className="h-12 w-auto drop-shadow-lg" />
        </div>
      </div>
      <div className="flex items-center justify-center bg-navy px-4 py-14 md:px-8 md:py-20 lg:px-16">
        <Reveal variant="fadeUp" className="w-full max-w-[440px] text-center">
          <SectionTitle overline="Rodinya Galata" title="Bizi bulun" />
          <p className="mt-10 break-words text-[15px] font-medium leading-7 tracking-normal text-ink md:text-[16px] md:leading-8">
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
            {siteContact.hours.daysLabel}: {siteContact.hours.timeRange}
            <br />
            {siteContact.hours.brunchLabel}
          </p>
          <SocialIcons className="mt-10" />
        </Reveal>
      </div>
    </section>
  );
}
