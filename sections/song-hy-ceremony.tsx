"use client";

import { ExternalLink, MapPin } from "lucide-react";
import { CEREMONY_BLOCKS, COUPLE_PROFILE } from "@/data/wedding";
import { ScrollReveal, SongHyPanel } from "@/components/song-hy/motifs";
import {
  BanquetCheersIcon,
  CoupleChibiIcon,
  GroomChibiIcon,
} from "@/components/song-hy/ceremony-icons";

export function SongHyCeremony() {
  const thanhHon = CEREMONY_BLOCKS[0];
  const vuQuy = CEREMONY_BLOCKS[1];
  const thanMat = CEREMONY_BLOCKS[2];

  return (
    <section className="py-4">
      <ScrollReveal>
        <SongHyPanel>
          <h2 className="text-center font-serif text-xl font-bold uppercase tracking-[0.04em] text-[#990000] md:text-2xl">
            Thông Tin Lễ Cưới
          </h2>

          {/* 2-Column Parents Grid */}
          <div className="mt-6 grid grid-cols-2 divide-x divide-[#e8c987] text-center">
            <div className="px-1 sm:px-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#990000]/75">
                Nhà Trai
              </p>
              <p className="mt-1.5 whitespace-nowrap text-[10.5px] font-semibold tracking-tight text-[#990000] sm:text-xs sm:tracking-normal md:text-sm">
                {COUPLE_PROFILE.groom.parents.father}
              </p>
              <p className="mt-0.5 whitespace-nowrap text-[10.5px] font-semibold tracking-tight text-[#990000] sm:text-xs sm:tracking-normal md:text-sm">
                {COUPLE_PROFILE.groom.parents.mother}
              </p>
            </div>

            <div className="px-1 sm:px-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#990000]/75">
                Nhà Gái
              </p>
              <p className="mt-1.5 whitespace-nowrap text-[10.5px] font-semibold tracking-tight text-[#990000] sm:text-xs sm:tracking-normal md:text-sm">
                {COUPLE_PROFILE.bride.parents.father}
              </p>
              <p className="mt-0.5 whitespace-nowrap text-[10.5px] font-semibold tracking-tight text-[#990000] sm:text-xs sm:tracking-normal md:text-sm">
                {COUPLE_PROFILE.bride.parents.mother}
              </p>
            </div>
          </div>

          {/* Announcement Eyebrow */}
          <p className="mx-auto mt-6 max-w-md text-center text-[11px] font-semibold uppercase leading-relaxed tracking-wider text-[#990000]/90 md:text-xs">
            Hai gia đình trân trọng báo tin lễ thành hôn của hai con chúng tôi
          </p>

          {/* Couple Names in Philosopher (UTM Essendine Caps style) */}
          <div
            style={{ fontFamily: "var(--font-couple-serif), serif" }}
            className="mt-5 text-center uppercase tracking-[0.06em] text-[#990000]"
          >
            <h3 className="text-[26px] font-normal leading-[1.2] sm:text-[32px] md:text-[38px]">
              {COUPLE_PROFILE.groom.fullName}
            </h3>
            <p className="my-1 text-xl leading-none text-[#990000]/80 md:text-2xl">
              &amp;
            </p>
            <h3 className="text-[26px] font-normal leading-[1.2] sm:text-[32px] md:text-[38px]">
              {COUPLE_PROFILE.bride.fullName}
            </h3>
          </div>

          {/* Staggered Zigzag 3-Event Layout */}
          <div className="mt-8 space-y-8">
            {/* 1. LỄ THÀNH HÔN — Left text + Right Groom Icon */}
            {thanhHon && (
              <div className="flex items-center justify-between gap-2 border-b border-[#e8c987]/60 pb-6">
                <div className="min-w-0 flex-1 text-left">
                  <h4 className="font-serif text-lg font-bold uppercase tracking-wide text-[#990000] md:text-xl">
                    {thanhHon.title}
                  </h4>
                  <p className="mt-1 text-xs font-semibold text-[#990000]/90 md:text-sm">
                    {thanhHon.time} · {thanhHon.dayOfWeek}
                  </p>
                  <p className="mt-0.5 font-serif text-sm font-bold text-[#990000] md:text-base">
                    {thanhHon.day}.{thanhHon.month}.{thanhHon.year}{" "}
                    <span className="font-serif text-[11px] font-normal italic text-[#990000]/80">
                      {thanhHon.lunarDate}
                    </span>
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wide text-[#990000]">
                    Tại Tư Gia Nhà Trai
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-[#990000]/85">
                    {thanhHon.venue?.replace(/^Tại Tư Gia Nhà Trai\s*·\s*/i, "")}
                  </p>
                  {thanhHon.mapsUrl && (
                    <a
                      href={thanhHon.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2.5 inline-flex items-center gap-1 rounded-full border border-[#990000]/30 bg-white px-3 py-1 text-[11px] font-semibold text-[#990000] shadow-sm transition hover:bg-[#990000] hover:text-white"
                    >
                      <MapPin className="h-3 w-3" />
                      <span>Xem bản đồ</span>
                      <ExternalLink className="h-2.5 w-2.5 opacity-70" />
                    </a>
                  )}
                </div>

                <div className="shrink-0">
                  <GroomChibiIcon className="animate-float-slow h-32 w-24 md:h-40 md:w-28" />
                </div>
              </div>
            )}

            {/* 2. LỄ VU QUY — Left Couple Icon + Right text */}
            {vuQuy && (
              <div className="flex items-center justify-between gap-2 border-b border-[#e8c987]/60 pb-6">
                <div className="shrink-0">
                  <CoupleChibiIcon className="animate-float-slow h-32 w-28 md:h-40 md:w-36" />
                </div>

                <div className="min-w-0 flex-1 text-right">
                  <h4 className="font-serif text-lg font-bold uppercase tracking-wide text-[#990000] md:text-xl">
                    {vuQuy.title}
                  </h4>
                  <p className="mt-1 text-xs font-semibold text-[#990000]/90 md:text-sm">
                    {vuQuy.time} · {vuQuy.dayOfWeek}
                  </p>
                  <p className="mt-0.5 font-serif text-sm font-bold text-[#990000] md:text-base">
                    {vuQuy.day}.{vuQuy.month}.{vuQuy.year}{" "}
                    <span className="font-serif text-[11px] font-normal italic text-[#990000]/80">
                      {vuQuy.lunarDate}
                    </span>
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wide text-[#990000]">
                    Tại Tư Gia Nhà Gái
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-[#990000]/85">
                    {vuQuy.venue?.replace(/^Tại Tư Gia Nhà Gái\s*·\s*/i, "")}
                  </p>
                  {vuQuy.mapsUrl && (
                    <a
                      href={vuQuy.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2.5 inline-flex items-center gap-1 rounded-full border border-[#990000]/30 bg-white px-3 py-1 text-[11px] font-semibold text-[#990000] shadow-sm transition hover:bg-[#990000] hover:text-white"
                    >
                      <MapPin className="h-3 w-3" />
                      <span>Xem bản đồ</span>
                      <ExternalLink className="h-2.5 w-2.5 opacity-70" />
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* 3. BỮA CƠM THÂN MẬT — Centered */}
            {thanMat && (
              <div className="text-center">
                <BanquetCheersIcon className="mx-auto mb-1 h-11 w-14" />
                <h4 className="font-serif text-lg font-bold uppercase tracking-wide text-[#990000] md:text-xl">
                  {thanMat.title}
                </h4>
                <p className="mt-1 text-xs font-semibold text-[#990000]/90 md:text-sm">
                  {thanMat.time} · {thanMat.dayOfWeek}
                </p>
                <p className="mt-0.5 font-serif text-sm font-bold text-[#990000] md:text-base">
                  {thanMat.day}.{thanMat.month}.{thanMat.year}{" "}
                  <span className="font-serif text-[11px] font-normal italic text-[#990000]/80">
                    {thanMat.lunarDate}
                  </span>
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-[#990000]">
                  Tại Tư Gia Nhà Gái
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-[#990000]/85">
                  {thanMat.venue?.replace(/^Tại Tư Gia Nhà Gái\s*·\s*/i, "")}
                </p>
                {thanMat.mapsUrl && (
                  <a
                    href={thanMat.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-flex items-center gap-1 rounded-full border border-[#990000]/30 bg-white px-3 py-1 text-[11px] font-semibold text-[#990000] shadow-sm transition hover:bg-[#990000] hover:text-white"
                  >
                    <MapPin className="h-3 w-3" />
                    <span>Xem bản đồ</span>
                    <ExternalLink className="h-2.5 w-2.5 opacity-70" />
                  </a>
                )}
              </div>
            )}
          </div>
        </SongHyPanel>
      </ScrollReveal>
    </section>
  );
}
