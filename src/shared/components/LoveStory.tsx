"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import type { LoveStory as LoveStoryType } from "../types/config";

function TimelineItem({
  story,
  index,
}: {
  story: LoveStoryType;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative flex flex-col gap-2 pl-8 pb-12 transition-all duration-700 ${
        isVisible
          ? "translate-x-0 opacity-100"
          : "translate-x-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <span className="absolute left-0 top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-gold bg-ivory">
        <span className="h-2 w-2 rounded-full bg-gold" />
      </span>
      <span className="font-accent text-xs tracking-wider text-gold uppercase">
        {story.date}
      </span>
      <h3 className="font-heading text-xl text-charcoal">{story.title}</h3>
      <p className="font-body text-sm leading-relaxed text-charcoal/60">
        {story.description}
      </p>
    </div>
  );
}

interface LoveStoryProps {
  stories: LoveStoryType[];
}

export default function LoveStory({ stories }: LoveStoryProps) {
  return (
    <section id="lovestory" className="bg-ivory px-6 py-24 md:px-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-16 text-center">
          <p className="font-accent mb-2 text-xs tracking-[0.3em] text-gold uppercase">
            Love Story
          </p>
          <h2 className="font-heading text-4xl text-charcoal md:text-5xl">
            Kisah Kami
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
        </div>
        <div className="relative border-l-2 border-gold/20">
          {stories.map((story, i) => (
            <TimelineItem key={i} story={story} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
