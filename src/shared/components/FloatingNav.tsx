"use client";

import { useState } from "react";

const sections = [
  { id: "cover", label: "Cover" },
  { id: "hero", label: "Hero" },
  { id: "couple", label: "Couple" },
  { id: "event", label: "Event" },
  { id: "countdown", label: "Countdown" },
  { id: "lovestory", label: "Story" },
  { id: "gallery", label: "Gallery" },
  { id: "maps", label: "Maps" },
  { id: "rsvp", label: "RSVP" },
  { id: "gift", label: "Gift" },
  { id: "closing", label: "Closing" },
];

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  }

  return (
    <nav className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute bottom-16 right-0 mb-2 flex flex-col gap-1 rounded-lg bg-white/90 p-2 shadow-xl backdrop-blur">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                className="w-full rounded px-4 py-2 text-left text-sm text-charcoal transition-colors hover:bg-gold hover:text-white"
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
