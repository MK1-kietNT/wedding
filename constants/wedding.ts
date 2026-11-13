import type { NavItem } from "@/types/wedding";

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: "invitation", label: "Lời Mời", href: "#invitation" },
  { id: "story", label: "Chuyện Tình", href: "#story" },
  { id: "gallery", label: "Album Ảnh", href: "#gallery" },
  { id: "events", label: "Lịch Trình", href: "#events" },
  { id: "gift", label: "Mừng Cưới", href: "#gift" },
  { id: "rsvp", label: "Xác Nhận", href: "#rsvp" },
  { id: "wishes", label: "Lời Chúc", href: "#wishes" },
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
