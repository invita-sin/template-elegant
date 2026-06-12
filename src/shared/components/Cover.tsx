"use client";

import { useState } from "react";

interface CoverProps {
  groomName: string;
  brideName: string;
  guestName?: string;
}

export default function Cover({ groomName, brideName, guestName }: CoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  function handleOpen() {
    setFadeOut(true);
    setTimeout(() => setIsOpen(true), 800);
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  }

  if (isOpen) return null;

  return (
    <section
      id="cover"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-ivory transition-opacity duration-800 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="mb-6 text-center">
        <p className="font-accent text-sm tracking-[0.3em] text-gold uppercase">
          The Wedding of
        </p>
      </div>
      <h1 className="font-heading text-4xl tracking-wide text-charcoal md:text-6xl">
        {groomName}
      </h1>
      <div className="my-4 flex items-center gap-4">
        <span className="h-px w-16 bg-gold" />
        <span className="font-heading text-2xl text-gold">&</span>
        <span className="h-px w-16 bg-gold" />
      </div>
      <h1 className="font-heading text-4xl tracking-wide text-charcoal md:text-6xl">
        {brideName}
      </h1>
      {guestName && (
        <p className="mt-8 font-body text-sm text-charcoal/70">
          Kepada Yth. <span className="font-semibold text-gold">{guestName}</span>
        </p>
      )}
      <button
        onClick={handleOpen}
        className="mt-10 rounded-full bg-gold px-10 py-3 font-accent text-sm tracking-wider text-white transition-all hover:bg-gold-dark hover:shadow-lg"
      >
        Buka Undangan
      </button>
    </section>
  );
}
