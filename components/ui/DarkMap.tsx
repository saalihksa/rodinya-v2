import { siteContact } from "@/lib/contact";

export function DarkMap({ className = "h-[520px]" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-steel ${className}`}>
      <iframe
        title="Rodinya Galata konumu"
        className="absolute inset-0 h-full w-full border-0 grayscale contrast-[1.08] brightness-[0.92] saturate-[0.35]"
        src={`https://maps.google.com/maps?q=${siteContact.mapsQuery}&z=16&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
