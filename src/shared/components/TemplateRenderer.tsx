"use client";

import type { Config } from "../types/config";
import Cover from "./Cover";
import Hero from "./Hero";
import Couple from "./Couple";
import Event from "./Event";
import Countdown from "./Countdown";
import LoveStory from "./LoveStory";
import Gallery from "./Gallery";
import Maps from "./Maps";
import RSVP from "./RSVP";
import Gift from "./Gift";
import Closing from "./Closing";
import GoldParticles from "./GoldParticles";
import FloatingNav from "./FloatingNav";
import MusicPlayer from "./MusicPlayer";
import { useMusicPlayer } from "../hooks/useMusicPlayer";

interface TemplateRendererProps {
  config: Config;
}

export default function TemplateRenderer({ config }: TemplateRendererProps) {
  const { isPlaying, toggle } = useMusicPlayer(config.music.src);
  const { bride, groom } = config.couple;

  return (
    <>
      <GoldParticles />
      <MusicPlayer isPlaying={isPlaying} onToggle={toggle} />
      <FloatingNav />
      <Cover
        groomName={groom.name}
        brideName={bride.name}
        guestName={config.couple.guestName}
      />
      <Hero
        groomName={groom.name}
        brideName={bride.name}
        date={config.couple.weddingDate}
      />
      <Couple bride={bride} groom={groom} />
      <Countdown targetDate={config.couple.weddingDate} />
      <Event akad={config.event.akad} reception={config.event.reception} />
      <LoveStory stories={config.loveStory} />
      <Gallery images={config.gallery} />
      <Maps embedUrl={config.maps.embedUrl} />
      <RSVP
        whatsappNumber={config.rsvp.whatsappNumber}
        message={config.rsvp.message}
      />
      <Gift bank={config.gift.bank} />
      <Closing
        message={config.closing.thankYouMessage}
        groomName={groom.name}
        brideName={bride.name}
      />
    </>
  );
}
