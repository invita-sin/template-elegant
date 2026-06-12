"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface MapsProps {
  embedUrl: string;
}

export default function Maps({ embedUrl }: MapsProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="maps" className="bg-ivory px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="font-accent mb-2 text-xs tracking-[0.3em] text-gold uppercase">
            Location
          </p>
          <h2 className="font-heading text-4xl text-charcoal md:text-5xl">
            Lokasi Acara
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
        </div>
        <div
          ref={ref}
          className={`overflow-hidden rounded-lg shadow-lg transition-all duration-700 ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <iframe
            src={embedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Location"
          />
        </div>
      </div>
    </section>
  );
}
