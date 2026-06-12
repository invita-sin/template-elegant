"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import type { Person } from "../types/config";

interface CoupleProps {
  bride: Person;
  groom: Person;
}

function PersonCard({ person, label }: { person: Person; label: string }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="mb-4 h-48 w-48 overflow-hidden rounded-full border-4 border-gold/30 bg-champagne md:h-64 md:w-64">
        {person.image ? (
          <img
            src={person.image}
            alt={person.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-heading text-5xl text-gold/40">
            {person.name.charAt(0)}
          </div>
        )}
      </div>
      <p className="font-accent mb-1 text-xs tracking-[0.2em] text-gold uppercase">
        {label}
      </p>
      <h3 className="font-heading text-2xl text-charcoal">{person.fullName}</h3>
      <p className="font-body mt-2 max-w-xs text-center text-sm text-charcoal/60">
        {person.parent}
      </p>
    </div>
  );
}

export default function Couple({ bride, groom }: CoupleProps) {
  return (
    <section id="couple" className="bg-elegant-bg px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="font-accent mb-2 text-xs tracking-[0.3em] text-gold uppercase">
            Bride & Groom
          </p>
          <h2 className="font-heading text-4xl text-charcoal md:text-5xl">
            Pasangan Kami
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
        </div>
        <div className="flex flex-col items-center gap-16 md:flex-row md:justify-center md:gap-24">
          <PersonCard person={groom} label="Groom" />
          <div className="flex-shrink-0">
            <span className="font-heading text-4xl text-gold">&</span>
          </div>
          <PersonCard person={bride} label="Bride" />
        </div>
      </div>
    </section>
  );
}
