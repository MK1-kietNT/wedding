export interface ParentNames {
  father: string;
  mother: string;
}

export interface CoupleProfile {
  bride: {
    firstName: string;
    fullName: string;
    parents: ParentNames;
    role: string;
  };
  groom: {
    firstName: string;
    fullName: string;
    parents: ParentNames;
    role: string;
  };
  monogram: string;
  weddingDateISO: string;
  weddingDateDisplay: string;
  weddingDayOfWeek: string;
  locationSummary: string;
  heroQuote: string;
  heroImage: string;
}

export interface ConciseCeremony {
  id: "thanh-hon" | "vu-quy" | "than-mat";
  title: string;
  time: string;
  dayOfWeek: string;
  day: string;
  month: string;
  year: string;
  lunarDate: string;
  venue?: string;
  mapsUrl?: string;
}

export interface ReceptionDetails {
  time: string;
  dayOfWeek: string;
  day: string;
  month: string;
  year: string;
  lunarDate: string;
  welcomeTime: string;
  partyTime: string;
  venueName: string;
  venueAddress: string;
  mapsUrl: string;
  mapsEmbedQuery: string;
  calendarTitle: string;
  calendarStartISO: string;
  calendarEndISO: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export interface WeddingEvent {
  id: "bride" | "groom";
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl: string;
  dressCode: string;
}

export interface GiftAccount {
  id: "bride" | "groom";
  label: string;
  recipientName: string;
  bankName: string;
  accountNumber: string;
  qrImage: string;
  note: string;
}

export interface GuestWish {
  id: string;
  name: string;
  relation: string;
  message: string;
  attendance: "attending" | "declining";
  createdAt: string;
}

export interface MusicTrack {
  title: string;
  artist: string;
  src: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
