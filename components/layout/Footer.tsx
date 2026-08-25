import Image from "next/image";
import { siteContact } from "@/lib/contact";
import { images } from "@/lib/images";
import { SocialIcons } from "../ui/SocialIcons";

export function Footer() {
  return (
    <footer className="relative bg-navy px-4 py-14 md:px-6 md:py-20 lg:px-16">
      <div className="mx-auto max-w-xl text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src={images.footerLogo}
            alt="Rodinya Galata"
            width={160}
            height={94}
            className="h-16 w-auto max-w-[210px] object-contain"
          />
        </div>
        <div className="space-y-1 break-words px-1 text-[15px] font-medium leading-7 text-ink md:text-[16px] md:leading-8">
          <p>
            {siteContact.name} – {siteContact.tagline}
          </p>
          <p>{siteContact.address.full}</p>
          <p>
            {siteContact.phoneDisplay} · {siteContact.hours.dailyLabel}
          </p>
        </div>
        <SocialIcons className="mt-10" />
      </div>
    </footer>
  );
}
