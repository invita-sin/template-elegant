export interface Config {
  couple: Couple;
  event: Event;
  loveStory: LoveStory[];
  gallery: string[];
  gift: Gift;
  maps: Maps;
  rsvp: RSVP;
  closing: Closing;
  music: Music;
  theme: Theme;
}

export interface Couple {
  bride: Person;
  groom: Person;
  weddingDate: string;
  guestName?: string;
}

export interface Person {
  name: string;
  fullName: string;
  parent: string;
  image?: string;
  instagram?: string;
}

export interface Event {
  title: string;
  akad: EventDetail;
  reception: EventDetail;
}

export interface EventDetail {
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  mapsUrl?: string;
}

export interface LoveStory {
  title: string;
  date: string;
  description: string;
}

export interface Gift {
  bank: Bank[];
}

export interface Bank {
  name: string;
  accountNumber: string;
  accountName: string;
}

export interface Maps {
  embedUrl: string;
}

export interface RSVP {
  whatsappNumber: string;
  message: string;
}

export interface Closing {
  thankYouMessage: string;
}

export interface Music {
  src: string;
  title: string;
  artist: string;
}

export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  fontHeading: string;
  fontBody: string;
}
