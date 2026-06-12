"use client";

import { useCountdown } from "../hooks/useCountdown";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface CountdownProps {
  targetDate: string;
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-heading text-4xl text-gold md:text-5xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="font-accent mt-1 text-xs tracking-wider text-charcoal/60 uppercase">
        {label}
      </span>
    </div>
  );
}

export default function Countdown({ targetDate }: CountdownProps) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="countdown" className="bg-champagne px-6 py-24 md:px-12">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="font-accent mb-2 text-xs tracking-[0.3em] text-gold uppercase">
          Countdown
        </p>
        <h2 className="font-heading mb-8 text-4xl text-charcoal md:text-5xl">
          Menuju Hari Bahagia
        </h2>
        <div className="flex justify-center gap-8 md:gap-12">
          <CountdownBox value={days} label="Hari" />
          <span className="font-heading self-start pt-2 text-3xl text-gold/40">
            :
          </span>
          <CountdownBox value={hours} label="Jam" />
          <span className="font-heading self-start pt-2 text-3xl text-gold/40">
            :
          </span>
          <CountdownBox value={minutes} label="Menit" />
          <span className="font-heading self-start pt-2 text-3xl text-gold/40">
            :
          </span>
          <CountdownBox value={seconds} label="Detik" />
        </div>
      </div>
    </section>
  );
}
