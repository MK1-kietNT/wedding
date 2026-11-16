"use client";

import { CEREMONY_BLOCKS, COUPLE_PROFILE } from "@/data/wedding";
import { ScrollReveal, SongHyPanel } from "@/components/song-hy/motifs";

export function SongHyCeremony() {
  return (
    <section className="py-4">
      <ScrollReveal>
        <SongHyPanel>
        <h2 className="text-center font-serif text-xl font-bold uppercase tracking-[0.04em] text-[#990000] md:text-2xl">
          Thông Tin Lễ Cưới
        </h2>

        {/* 2-Column Parents Grid */}
        <div className="mt-6 grid grid-cols-2 divide-x divide-[#e8c987] text-center">
          <div className="px-2">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#990000]/75">
              Nhà Trai
            </p>
            <p className="mt-1.5 text-xs font-semibold text-[#990000] md:text-sm">
              {COUPLE_PROFILE.groom.parents.father}
            </p>
            <p className="mt-0.5 text-xs font-semibold text-[#990000] md:text-sm">
              {COUPLE_PROFILE.groom.parents.mother}
            </p>
          </div>

          <div className="px-2">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#990000]/75">
              Nhà Gái
            </p>
            <p className="mt-1.5 text-xs font-semibold text-[#990000] md:text-sm">
              {COUPLE_PROFILE.bride.parents.father}
            </p>
            <p className="mt-0.5 text-xs font-semibold text-[#990000] md:text-sm">
              {COUPLE_PROFILE.bride.parents.mother}
            </p>
          </div>
        </div>

        {/* Announcement Eyebrow */}
        <p className="mx-auto mt-6 max-w-md text-center text-[11px] font-semibold uppercase leading-relaxed tracking-wider text-[#990000]/90 md:text-xs">
          Hai gia đình trân trọng báo tin lễ thành hôn của hai con chúng tôi
        </p>

        {/* Couple Names in Carattere Script */}
        <div className="mt-4 text-center">
          <h3 className="font-script text-[34px] leading-[1.15] text-[#990000] sm:text-[40px] md:text-[50px]">
            {COUPLE_PROFILE.groom.fullName}
          </h3>
          <p className="font-script text-2xl leading-none text-[#990000]/80 md:text-3xl">
            &amp;
          </p>
          <h3 className="font-script text-[34px] leading-[1.15] text-[#990000] sm:text-[40px] md:text-[50px]">
            {COUPLE_PROFILE.bride.fullName}
          </h3>
        </div>

        {/* Two Concise Stacked Ceremony Blocks */}
        <div className="mt-7 space-y-6">
          {CEREMONY_BLOCKS.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-[#e8c987]/80 bg-[#fffdf7]/80 px-4 py-4 text-center"
            >
              <p className="font-serif text-base font-bold uppercase tracking-wider text-[#990000] md:text-lg">
                {item.title}
              </p>

              <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-[#990000]/85">
                Vào lúc {item.time} &nbsp;|&nbsp; {item.dayOfWeek}
              </p>

              <div className="mt-2.5 flex items-center justify-center gap-4">
                <span className="font-serif text-4xl font-bold leading-none text-[#990000] md:text-5xl">
                  {item.day}
                </span>
                <span className="h-10 w-px bg-[#990000]/35" />
                <div className="text-left text-xs font-bold uppercase leading-tight tracking-wider text-[#990000] md:text-sm">
                  <span className="block">Tháng {item.month}</span>
                  <span className="block">{item.year}</span>
                </div>
              </div>

              <p className="mt-2 text-[11px] italic text-[#990000]/80 md:text-xs">
                {item.lunarDate}
              </p>
            </div>
          ))}
        </div>
      </SongHyPanel>
      </ScrollReveal>
    </section>
  );
}
