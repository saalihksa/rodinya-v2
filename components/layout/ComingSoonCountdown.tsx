"use client";

import { useEffect, useMemo, useState } from "react";

const target = new Date("2027-12-24T20:00:00");

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

export function ComingSoonCountdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const parts = useMemo(() => {
    const diff = Math.max(0, target.getTime() - now);
    const totalSec = Math.floor(diff / 1000);
    const months = Math.floor(totalSec / (30 * 24 * 3600));
    const days = Math.floor((totalSec % (30 * 24 * 3600)) / (24 * 3600));
    const hours = Math.floor((totalSec % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;
    return [
      { value: pad(months), label: "Ay" },
      { value: pad(days), label: "Gün" },
      { value: pad(hours), label: "Saat" },
      { value: pad(minutes), label: "Dakika" },
      { value: pad(seconds), label: "Saniye" },
    ];
  }, [now]);

  return (
    <div className="mt-10 grid w-full grid-cols-3 justify-items-center gap-3 sm:mt-14 sm:grid-cols-5 sm:gap-8">
      {parts.map((p) => (
        <div key={p.label} className="min-w-0 text-center">
          <p className="font-[family-name:var(--font-display)] text-[28px] leading-none tracking-[0.06em] text-gold md:text-[56px]">
            {p.value}
          </p>
          <p className="mt-3 text-[12px] uppercase tracking-[0.28em] text-gold/70">{p.label}</p>
        </div>
      ))}
    </div>
  );
}
