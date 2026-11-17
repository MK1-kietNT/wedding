"use client";

import { useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";
import { RECEPTION_DETAILS } from "@/data/wedding";
import { FloralCornerArt, ScrollReveal } from "@/components/song-hy/motifs";

const VENUE_TABS = [
  {
    id: "groom",
    label: "Nhà Trai",
    venueName: RECEPTION_DETAILS.venueName,
    venueAddress: RECEPTION_DETAILS.venueAddress,
    mapsUrl: RECEPTION_DETAILS.mapsUrl,
    mapsEmbedQuery: RECEPTION_DETAILS.mapsEmbedQuery,
  },
  {
    id: "bride",
    label: "Nhà Gái",
    venueName: "Tư Gia Nhà Gái",
    venueAddress: "Xóm Long Bình, Nam Đàn, Nghệ An",
    mapsUrl: "https://maps.app.goo.gl/TRHkUPFAdXNQFTuu6",
    mapsEmbedQuery: "Xóm Long Bình, Nam Đàn, Nghệ An",
  },
] as const;

export function SongHyVenue() {
  const [activeTab, setActiveTab] = useState<"groom" | "bride">("groom");

  const currentVenue =
    VENUE_TABS.find((v) => v.id === activeTab) ?? VENUE_TABS[0];

  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    currentVenue.mapsEmbedQuery
  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="relative overflow-hidden px-5 py-10 text-center md:px-10">
      <FloralCornerArt position="top-left" />
      <FloralCornerArt position="top-right" />

      <ScrollReveal className="relative z-10 mx-auto max-w-[460px]">
        <h3 className="font-serif text-lg font-bold uppercase tracking-[0.06em] text-[#ffe8a4] md:text-xl">
          Tiệc Cưới Sẽ Tổ Chức Tại
        </h3>

        {/* Nhà Trai / Nhà Gái Switcher */}
        <div className="mx-auto mt-4 inline-grid grid-cols-2 gap-1.5 rounded-full border border-[#ffe8a4]/35 bg-[#5e0404]/70 p-1">
          {VENUE_TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  isActive
                    ? "bg-[#ffe8a4] text-[#7a0808] shadow-sm"
                    : "text-[#ffe8a4]/85 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-4 space-y-1 text-white">
          <p className="text-base font-semibold">{currentVenue.venueName}</p>
          <p className="text-xs text-[#fdf9ec]/85 md:text-sm">
            {currentVenue.venueAddress}
          </p>
        </div>

        <div className="mt-5 overflow-hidden rounded-xl border border-[#ffe8a4]/40 bg-[#5e0404] shadow-lg">
          <iframe
            title={`Bản đồ ${currentVenue.venueName}`}
            src={embedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-52 w-full border-0"
          />
        </div>

        <a
          href={currentVenue.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffe8a4] underline underline-offset-4 transition hover:text-white"
        >
          <MapPin className="h-3.5 w-3.5" />
          Chỉ đường ({currentVenue.label})
          <ExternalLink className="h-3 w-3" />
        </a>
      </ScrollReveal>
    </section>
  );
}
