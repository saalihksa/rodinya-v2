import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="notranslate inline-flex items-center justify-center" translate="no">
      <Image
        src={images.logoHeader}
        alt="Rodinya Galata"
        width={180}
        height={106}
        className={
          compact
            ? "h-14 w-auto max-w-[196px] object-contain object-left sm:h-[58px] sm:max-w-[210px]"
            : "h-16 w-auto max-w-[210px] object-contain"
        }
        priority
      />
    </Link>
  );
}
