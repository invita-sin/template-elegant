"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import type { EventDetail } from "../types/config";

function EventCard({
  detail,
  label,
  index,
}: {
  detail: EventDetail;
  label: string;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`rounded-lg border border-gold/20 bg-white/80 p-8 shadow-sm backdrop-blur transition-all duration-700 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <p className="font-accent mb-2 text-xs tracking-[0.2em] text-gold uppercase">
        {label}
      </p>
      <h3 className="font-heading mb-4 text-2xl text-charcoal">{detail.title}</h3>
      <div className="space-y-2 font-body text-sm text-charcoal/70">
        <p className="flex items-center gap-2">
          <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {new Date(detail.date).toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p className="flex items-center gap-2">
          <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {detail.time}
        </p>
        <p className="flex items-center gap-2">
          <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {detail.location}
        </p>
      </div>
      <p className="font-body mt-4 text-xs text-charcoal/50">{detail.address}</p>
    </div>
  );
}

interface EventProps {
  akad: EventDetail;
  reception: EventDetail;
}

export default function Event({ akad, reception }: EventProps) {
  return (
    <section id="event" className="bg-ivory px-6 py-24 md:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="font-accent mb-2 text-xs tracking-[0.3em] text-gold uppercase">
            Event
          </p>
          <h2 className="font-heading text-4xl text-charcoal md:text-5xl">
            Acara
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <EventCard detail={akad} label="Akad Nikah" index={0} />
          <EventCard detail={reception} label="Resepsi" index={1} />
        </div>
      </div>
    </section>
  );
}
