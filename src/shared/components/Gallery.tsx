"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const { ref, isVisible } = useScrollAnimation();

  if (images.length === 0) {
    return (
      <section id="gallery" className="bg-champagne px-6 py-24 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-accent mb-2 text-xs tracking-[0.3em] text-gold uppercase">Gallery</p>
          <h2 className="font-heading text-4xl text-charcoal md:text-5xl">Galeri</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          <p className="font-body mt-8 text-charcoal/50">Foto akan segera ditambahkan</p>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="bg-champagne px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="font-accent mb-2 text-xs tracking-[0.3em] text-gold uppercase">
            Gallery
          </p>
          <h2 className="font-heading text-4xl text-charcoal md:text-5xl">
            Galeri Foto
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
        </div>
        <div
          ref={ref}
          className={`columns-1 gap-4 sm:columns-2 lg:columns-3 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="mb-4 break-inside-avoid overflow-hidden rounded-lg"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
