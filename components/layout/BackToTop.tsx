"use client";

export function BackToTop() {
  return (
    <button
      type="button"
      aria-label="Yukarı çık"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-gold/70 bg-navy/80 text-gold backdrop-blur-sm transition-colors hover:bg-gold/10 bottom-[max(1rem,env(safe-area-inset-bottom))] md:bottom-7 md:right-7 md:h-11 md:w-11"
    >
      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden>
        <path d="M1 7l6-6 6 6" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </button>
  );
}
