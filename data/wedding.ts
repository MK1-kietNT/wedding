import type {
  CoupleProfile,
  GalleryPhoto,
  GiftAccount,
  GuestWish,
  InvitationContent,
  LoveStoryMilestone,
  MusicTrack,
  WeddingEvent,
} from "@/types/wedding";

export const COUPLE_PROFILE: CoupleProfile = {
  bride: {
    firstName: "Camille",
    fullName: "Camille Linh Nguyen",
    parents: "Daughter of Mr. Minh Nguyen & Mrs. Thanh Tran",
    role: "The Bride",
  },
  groom: {
    firstName: "Julian",
    fullName: "Julian Hoang Pham",
    parents: "Son of Mr. Duc Pham & Mrs. Huong Le",
    role: "The Groom",
  },
  monogram: "C & J",
  weddingDateISO: "2027-06-12T17:30:00+07:00",
  weddingDateDisplay: "June 12, 2027",
  weddingDayOfWeek: "Saturday",
  locationSummary: "Villa Éclat · Saigon",
  heroQuote: "In every quiet morning and every distant horizon, we found home in one another.",
  heroImage: "/images/hero.jpg",
  storyCoverImage: "/images/story-cover.jpg",
};

export const INVITATION_CONTENT: InvitationContent = {
  eyebrow: "The Celebration",
  heading: "Together with our families, we joyfully invite you to share in the beginning of our forever.",
  paragraphs: [
    "What began as an unhurried conversation over late-afternoon coffee has grown into a life shaped by patience, laughter, and quiet devotion.",
    "It would mean the world to us to have our dearest family and friends gathered in one room as we exchange our vows and celebrate under candlelight.",
  ],
  signature: "With love & gratitude, Camille & Julian",
};

export const LOVE_STORY_MILESTONES: LoveStoryMilestone[] = [
  {
    id: "first-met",
    phase: "Chapter I",
    date: "October 2022",
    title: "First Met",
    description:
      "An autumn exhibition opening in District 1 where we reached for the same architecture monograph and ended up talking until the gallery lights dimmed.",
    location: "Saigon",
  },
  {
    id: "dating",
    phase: "Chapter II",
    date: "Spring 2023",
    title: "Dating",
    description:
      "Sunday morning markets, rainy evening drives along the coast, and discovering that the simplest days together were always our favorite.",
    location: "Da Lat & Saigon",
  },
  {
    id: "proposal",
    phase: "Chapter III",
    date: "November 2025",
    title: "The Proposal",
    description:
      "At dusk overlooking a quiet hillside vineyard, with a handwritten letter and a timeless question answered before it was even finished.",
    location: "Tuscany",
  },
  {
    id: "wedding",
    phase: "Chapter IV",
    date: "June 2027",
    title: "The Wedding",
    description:
      "Surrounded by the people who shaped our lives, we step into marriage with calm hearts and endless gratitude.",
    location: "Villa Éclat, Saigon",
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "photo-1",
    src: "/images/gallery-1.jpg",
    alt: "Camille and Julian holding hands with wedding bouquet",
    caption: "Quiet Promises",
    aspect: "portrait",
    width: 900,
    height: 1200,
  },
  {
    id: "photo-2",
    src: "/images/gallery-2.jpg",
    alt: "Minimalist candlelit reception table with burgundy florals",
    caption: "Evening Table",
    aspect: "landscape",
    width: 1200,
    height: 900,
  },
  {
    id: "photo-3",
    src: "/images/gallery-3.jpg",
    alt: "Bride portrait in natural morning window light",
    caption: "Morning Light",
    aspect: "portrait",
    width: 900,
    height: 1200,
  },
  {
    id: "photo-4",
    src: "/images/gallery-4.jpg",
    alt: "Groom adjusting cufflinks before the ceremony",
    caption: "Before the Vows",
    aspect: "portrait",
    width: 900,
    height: 1200,
  },
  {
    id: "photo-5",
    src: "/images/gallery-5.jpg",
    alt: "Couple silhouette in golden hour courtyard",
    caption: "Golden Hour",
    aspect: "landscape",
    width: 1200,
    height: 900,
  },
  {
    id: "photo-6",
    src: "/images/gallery-6.jpg",
    alt: "Editorial wedding stationery with burgundy wax seal",
    caption: "The Seal",
    aspect: "portrait",
    width: 900,
    height: 1200,
  },
];

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: "bride",
    title: "Bride's Family Ceremony",
    subtitle: "Lễ Vu Quy · Morning Tea Ceremony",
    date: "Saturday, June 12, 2027",
    time: "09:00 AM – 11:30 AM",
    venue: "The Nguyen Residence",
    address: "248 Pasteur Street, District 3, Ho Chi Minh City",
    mapsUrl: "https://maps.google.com/?q=248+Pasteur+District+3+Ho+Chi+Minh+City",
    dressCode: "Ivory, Champagne, or Soft Charcoal",
  },
  {
    id: "groom",
    title: "Groom's Reception & Vows",
    subtitle: "Lễ Thành Hôn · Candlelight Dinner",
    date: "Saturday, June 12, 2027",
    time: "05:30 PM – 10:00 PM",
    venue: "Villa Éclat Conservatory",
    address: "18 Thao Dien Boulevard, Thu Duc City, Ho Chi Minh City",
    mapsUrl: "https://maps.google.com/?q=18+Thao+Dien+Ho+Chi+Minh+City",
    dressCode: "Black Tie Optional · Burgundy & Ivory",
  },
];

export const GIFT_ACCOUNTS: GiftAccount[] = [
  {
    id: "bride",
    label: "Bride's Registry",
    recipientName: "Camille Linh Nguyen",
    bankName: "Atelier Private Bank (Mock)",
    accountNumber: "0192 8400 2027",
    qrImage: "/images/qr-bride.svg",
    note: "Your presence is the greatest gift. For those who wish to send a blessing from afar.",
  },
  {
    id: "groom",
    label: "Groom's Registry",
    recipientName: "Julian Hoang Pham",
    bankName: "Meridian Commercial Bank (Mock)",
    accountNumber: "8804 1206 2027",
    qrImage: "/images/qr-groom.svg",
    note: "Thank you for celebrating this milestone and supporting our next chapter together.",
  },
];

export const INITIAL_GUEST_WISHES: GuestWish[] = [
  {
    id: "wish-1",
    name: "Elena Tran",
    relation: "Bride's Sister",
    message:
      "Watching you both grow together has been the purest joy. Wishing you a lifetime of calm mornings and endless laughter.",
    attendance: "attending",
    createdAt: "2026-11-10",
  },
  {
    id: "wish-2",
    name: "Marcus & Claire",
    relation: "University Friends",
    message:
      "From late-night studio critiques to Tuscany and now Saigon — we wouldn't miss this evening for the world.",
    attendance: "attending",
    createdAt: "2026-11-11",
  },
  {
    id: "wish-3",
    name: "Dr. Khanh Le",
    relation: "Family Mentor",
    message:
      "May your home always be filled with warmth, mutual respect, and quiet grace. Congratulations to both families.",
    attendance: "attending",
    createdAt: "2026-11-11",
  },
  {
    id: "wish-4",
    name: "Sophia Vu",
    relation: "Colleague & Friend",
    message:
      "Sending all my love from Paris. Counting down the days until we raise a glass under the conservatory lights!",
    attendance: "attending",
    createdAt: "2026-11-12",
  },
  {
    id: "wish-5",
    name: "Daniel Nguyen",
    relation: "Groom's Cousin",
    message:
      "Two remarkable people building one timeless story. Wishing Camille and Julian a marriage as radiant as this celebration.",
    attendance: "attending",
    createdAt: "2026-11-12",
  },
];

export const MUSIC_TRACK: MusicTrack = {
  title: "Clair de Lune (Editorial Arrangement)",
  artist: "Camille & Julian · Wedding Prelude",
  src: "/music/wedding.mp3",
};
