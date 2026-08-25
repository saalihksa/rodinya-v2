import Link from "next/link";
import { siteContact } from "@/lib/contact";

const iconBox = "inline-flex h-6 w-6 shrink-0 items-center justify-center";

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-8 ${className}`}>
      <Link
        href={siteContact.facebook}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        className={`${iconBox} text-ink transition-opacity hover:opacity-60`}
      >
        <svg viewBox="0 0 24 24" className="block h-5 w-5" fill="none" aria-hidden>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5.2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            fill="currentColor"
            d="M13.15 17.7v-4.85h1.62l.24-1.86h-1.86V9.8c0-.54.15-.9.92-.9h.99V7.22c-.17-.02-.74-.07-1.4-.07-1.39 0-2.34.85-2.34 2.4v1.44H9.6v1.86h1.72v4.85h1.83z"
          />
        </svg>
      </Link>
      <Link
        href={siteContact.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className={`${iconBox} text-ink transition-opacity hover:opacity-60`}
      >
        <svg viewBox="0 0 24 24" className="block h-5 w-5" fill="none" aria-hidden>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5.2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.35" cy="6.65" r="1.15" fill="currentColor" />
        </svg>
      </Link>
    </div>
  );
}
