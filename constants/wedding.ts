import type { NavItem } from "@/types/wedding";

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: "invitation", label: "Invitation", href: "#invitation" },
  { id: "story", label: "Our Story", href: "#story" },
  { id: "gallery", label: "Gallery", href: "#gallery" },
  { id: "events", label: "Ceremonies", href: "#events" },
  { id: "gift", label: "Gift", href: "#gift" },
  { id: "rsvp", label: "RSVP", href: "#rsvp" },
  { id: "wishes", label: "Wishes", href: "#wishes" },
];

export const SECTION_IDS = [
  "hero",
  "invitation",
  "story",
  "gallery",
  "events",
  "countdown",
  "gift",
  "rsvp",
  "wishes",
] as const;

export const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

export const MUSIC_STORAGE_KEY = "wedding-editorial-music-state";

