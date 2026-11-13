export interface CoupleProfile {
  bride: {
    firstName: string;
    fullName: string;
    parents: string;
    role: string;
  };
  groom: {
    firstName: string;
    fullName: string;
    parents: string;
    role: string;
  };
  monogram: string;
  weddingDateISO: string;
  weddingDateDisplay: string;
  weddingDayOfWeek: string;
  locationSummary: string;
  heroQuote: string;
  heroImage: string;
  storyCoverImage: string;
}

export interface InvitationContent {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  signature: string;
}

export interface LoveStoryMilestone {
  id: string;
  phase: string;
  date: string;
  title: string;
  description: string;
  location: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  aspect: "portrait" | "landscape";
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

