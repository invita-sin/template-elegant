"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import type { Bank } from "../types/config";

interface GiftProps {
  bank: Bank[];
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

export default function Gift({ bank }: GiftProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gift" className="bg-ivory px-6 py-24 md:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="font-accent mb-2 text-xs tracking-[0.3em] text-gold uppercase">
            Wedding Gift
          </p>
          <h2 className="font-heading text-4xl text-charcoal md:text-5xl">
            Hadiah Pernikahan
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          <p className="font-body mt-4 text-sm text-charcoal/60">
            Doa restu Anda sudah menjadi hadiah terbaik. Jika ingin memberi tanda
            kasih, dapat melalui:
          </p>
        </div>
        <div
          ref={ref}
          className={`grid gap-6 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {bank.map((b, i) => (
            <div
              key={i}
              className="rounded-lg border border-gold/20 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-accent text-xs tracking-wider text-gold uppercase">
                    {b.name}
                  </p>
                  <p className="font-heading mt-1 text-lg text-charcoal">
                    {b.accountNumber}
                  </p>
                  <p className="font-body text-sm text-charcoal/60">
                    a.n. {b.accountName}
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(b.accountNumber)}
                  className="rounded-full border border-gold px-4 py-2 font-accent text-xs tracking-wider text-gold transition-colors hover:bg-gold hover:text-white"
                >
                  Salin
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
