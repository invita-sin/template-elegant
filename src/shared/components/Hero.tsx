"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface HeroProps {
  groomName: string;
  brideName: string;
  date: string;
}

export default function Hero({ groomName, brideName, date }: HeroProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ivory"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
      <div
        ref={ref}
        className={`relative z-10 text-center transition-all duration-1000 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <p className="font-accent mb-4 text-sm tracking-[0.3em] text-gold uppercase">
          We Are Getting Married
        </p>
        <h2 className="font-heading text-5xl text-charcoal md:text-7xl">
          {groomName}
          <span className="mx-4 font-heading text-3xl text-gold md:text-4xl">
            &
          </span>
          {brideName}
        </h2>
        <div className="mx-auto mt-6 h-px w-24 bg-gold" />
        <p className="font-body mt-6 text-lg text-charcoal/60">
          {new Date(date).toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </section>
  );
}
