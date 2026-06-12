"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ClosingProps {
  message: string;
  groomName: string;
  brideName: string;
}

export default function Closing({ message, groomName, brideName }: ClosingProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="closing"
      className="relative flex min-h-screen items-center justify-center bg-ivory px-6 py-24 md:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-2xl text-center transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="font-accent mb-4 text-xs tracking-[0.3em] text-gold uppercase">
          Terima Kasih
        </p>
        <h2 className="font-heading mb-8 text-4xl text-charcoal md:text-5xl">
          {message}
        </h2>
        <div className="mx-auto mb-8 h-px w-24 bg-gold" />
        <p className="font-heading text-2xl text-charcoal md:text-3xl">
          {groomName} & {brideName}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <span className="font-body text-xs tracking-widest text-charcoal/40 uppercase">
            #PernikahanKami
          </span>
        </div>
      </div>
    </section>
  );
}
