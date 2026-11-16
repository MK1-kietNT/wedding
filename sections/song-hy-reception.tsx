"use client";

import { useEffect, useState } from "react";
import { CalendarPlus, Heart } from "lucide-react";
import { COUPLE_PROFILE, RECEPTION_DETAILS } from "@/data/wedding";
import { ScrollReveal, SongHyPanel } from "@/components/song-hy/motifs";

interface SongHyReceptionProps {
  onOpenRsvp: () => void;
}

const WEEKDAYS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

/**
 * December 2026: Dec 1, 2026 is Tuesday (index 1 in Monday-first week).
 * Total days = 31. Wedding day = 24.
 */
function getDecember2026Cells(): Array<number | null> {
  const leadingBlanks = 1; // Monday is empty, Tuesday is Dec 1
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  return [...Array(leadingBlanks).fill(null), ...days];
}

function formatCountdown(targetISO: string): string {
  const diff = new Date(targetISO).getTime() - Date.now();
  if (diff <= 0) {
    return "0 ngày 0 giờ 0 phút 0 giây";
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
}

export function SongHyReception({ onOpenRsvp }: SongHyReceptionProps) {
  const [countdownText, setCountdownText] = useState<string>("");

  useEffect(() => {
    setCountdownText(formatCountdown(COUPLE_PROFILE.weddingDateISO));
    const timer = setInterval(() => {
      setCountdownText(formatCountdown(COUPLE_PROFILE.weddingDateISO));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const cells = getDecember2026Cells();

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    RECEPTION_DETAILS.calendarTitle
  )}&dates=${RECEPTION_DETAILS.calendarStartISO}/${RECEPTION_DETAILS.calendarEndISO}&location=${encodeURIComponent(
    RECEPTION_DETAILS.venueName
  )}`;

  return (
    <section className="py-4">
      <ScrollReveal>
        <SongHyPanel>
        <div className="text-center">
          <h2 className="font-serif text-xl font-bold uppercase tracking-[0.04em] text-[#990000] md:text-2xl">
            Thông Tin Tiệc Cưới
          </h2>

          <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#990000]/85">
            Tiệc cưới sẽ diễn ra vào lúc:
          </p>

          {/* Date Block */}
          <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#990000]">
            Giờ {RECEPTION_DETAILS.time} &nbsp;|&nbsp;{" "}
            {RECEPTION_DETAILS.dayOfWeek}
          </p>

          <div className="mt-2.5 flex items-center justify-center gap-4">
            <span className="font-serif text-4xl font-bold leading-none text-[#990000] md:text-5xl">
              {RECEPTION_DETAILS.day}
            </span>
            <span className="h-10 w-px bg-[#990000]/35" />
            <div className="text-left text-xs font-bold uppercase leading-tight tracking-wider text-[#990000] md:text-sm">
              <span className="block">Tháng {RECEPTION_DETAILS.month}</span>
              <span className="block">{RECEPTION_DETAILS.year}</span>
            </div>
          </div>

          <p className="mt-2 text-[11px] italic text-[#990000]/80 md:text-xs">
            {RECEPTION_DETAILS.lunarDate}
          </p>

          {/* 2-Column Mini Time Summary: ĐÓN KHÁCH | KHAI TIỆC */}
          <div className="mx-auto mt-5 grid max-w-xs grid-cols-2 divide-x divide-[#e8c987] rounded-xl border border-[#e8c987] bg-[#fffdf7]/90 py-3">
            <div className="px-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#990000]/80">
                Đón khách
              </p>
              <p className="mt-1 font-serif text-lg font-bold text-[#990000]">
                {RECEPTION_DETAILS.welcomeTime}
              </p>
            </div>
            <div className="px-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#990000]/80">
                Khai tiệc
              </p>
              <p className="mt-1 font-serif text-lg font-bold text-[#990000]">
                {RECEPTION_DETAILS.partyTime}
              </p>
            </div>
          </div>

          {/* Countdown */}
          <div className="mt-7">
            <h3 className="font-serif text-lg font-bold uppercase tracking-[0.04em] text-[#990000] md:text-xl">
              Cùng Đếm Ngược
            </h3>
            <p className="mt-2 min-h-[24px] font-serif text-sm font-bold text-[#990000] md:text-base">
              {countdownText || "Đang tính thời gian..."}
            </p>
          </div>

          {/* Mini Calendar: Tháng 12 / 2026 */}
          <div className="mx-auto mt-6 max-w-[320px] rounded-xl border border-[#e8c987] bg-white/80 p-4 shadow-sm">
            <p className="font-script text-2xl text-[#990000]">
              Tháng 12 / 2026
            </p>

            <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[11px] font-bold text-[#990000]/80">
              {WEEKDAYS.map((day) => (
                <div key={day} className="py-1">
                  {day}
                </div>
              ))}
            </div>

            <div className="mt-1 grid grid-cols-7 gap-1 text-center text-xs">
              {cells.map((day, idx) => {
                if (day === null) {
                  return <div key={`blank-${idx}`} className="h-8" />;
                }

                const isReceptionDay = day === 24;
                const isVuQuyDay = day === 20;

                return (
                  <div
                    key={day}
                    className="relative flex h-8 items-center justify-center"
                  >
                    {isReceptionDay ? (
                      <>
                        <Heart className="animate-heartbeat h-7 w-7 fill-[#990000] text-[#990000]" />
                        <span className="absolute text-[11px] font-bold text-white">
                          {day}
                        </span>
                      </>
                    ) : isVuQuyDay ? (
                      <span
                        title="Lễ Vu Quy"
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-[#990000] font-semibold text-[#990000]"
                      >
                        {day}
                      </span>
                    ) : (
                      <span className="font-medium text-[#990000]/85">
                        {day}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Add to Calendar + RSVP CTA */}
          <div className="mt-5 flex flex-col items-center gap-3.5">
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#990000] underline underline-offset-4 transition hover:opacity-75"
            >
              <CalendarPlus className="h-3.5 w-3.5" />
              Thêm vào lịch
            </a>

            <button
              type="button"
              onClick={onOpenRsvp}
              className="relative overflow-hidden rounded-full bg-[#990000] px-8 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:scale-[1.03] hover:bg-[#7a0808] active:scale-[0.98]"
            >
              <span
                aria-hidden="true"
                className="animate-shimmer pointer-events-none absolute inset-y-0 w-10 bg-white/25 blur-[2px]"
              />
              <span className="relative z-10">Xác nhận tham dự</span>
            </button>
          </div>
        </div>
      </SongHyPanel>
      </ScrollReveal>
    </section>
  );
}
