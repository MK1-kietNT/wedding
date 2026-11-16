"use client";

import { ExternalLink, MapPin } from "lucide-react";
import { RECEPTION_DETAILS } from "@/data/wedding";
import { FloralCornerArt, ScrollReveal } from "@/components/song-hy/motifs";

export function SongHyVenue() {
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    RECEPTION_DETAILS.mapsEmbedQuery
  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="relative overflow-hidden px-5 py-10 text-center md:px-10">
      <FloralCornerArt position="top-left" />
      <FloralCornerArt position="top-right" />

      <ScrollReveal className="relative z-10 mx-auto max-w-[460px]">
        <h3 className="font-serif text-lg font-bold uppercase tracking-[0.06em] text-[#ffe8a4] md:text-xl">
          Tiệc Cưới Sẽ Tổ Chức Tại
        </h3>

        <div className="mt-3 space-y-1 text-white">
          <p className="text-base font-semibold">{RECEPTION_DETAILS.venueName}</p>
          <p className="text-xs text-[#fdf9ec]/85 md:text-sm">
            {RECEPTION_DETAILS.venueAddress}
          </p>
        </div>

        <div className="mt-5 overflow-hidden rounded-xl border border-[#ffe8a4]/40 bg-[#5e0404] shadow-lg">
          <iframe
            title="Bản đồ địa điểm tổ chức tiệc cưới"
            src={embedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-52 w-full border-0"
          />
        </div>

        <a
          href={RECEPTION_DETAILS.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffe8a4] underline underline-offset-4 transition hover:text-white"
        >
          <MapPin className="h-3.5 w-3.5" />
          Chỉ đường
          <ExternalLink className="h-3 w-3" />
        </a>
      </ScrollReveal>
    </section>
  );
}
