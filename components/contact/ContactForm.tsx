"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input required placeholder="Adınız" className="field" />
      <input required type="email" placeholder="E-posta" className="field" />
      <input placeholder="Telefon" className="field" />
      <textarea required rows={7} placeholder="Mesajınız" className="field" />
      <button type="submit" className="gold-btn mx-auto mt-2 w-full sm:w-auto">
        Gönder
      </button>
      {sent ? (
        <p className="text-center text-[14px] text-gold">Teşekkürler. Mesajınız alındı.</p>
      ) : null}
    </form>
  );
}
