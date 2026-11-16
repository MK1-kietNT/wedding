"use client";

import { motion } from "framer-motion";
import { COUPLE_PROFILE } from "@/data/wedding";
import { SongHyEmblem } from "./motifs";

interface OpeningGateProps {
  onOpen: () => void;
}

export function OpeningGate({ onOpen }: OpeningGateProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#4d0000] px-4 py-6"
    >
      {/* Subtle scattered Song Hỷ watermarks in backdrop */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[10%] select-none font-serif text-6xl text-[#ffe8a4]/[0.06] md:text-8xl"
      >
        囍
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[12%] right-[8%] select-none font-serif text-7xl text-[#ffe8a4]/[0.06] md:text-9xl"
      >
        囍
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[15%] top-[18%] select-none font-serif text-4xl text-[#ffe8a4]/[0.04]"
      >
        囍
      </span>

      {/* Centered Envelope / Invitation Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[390px] overflow-hidden rounded-2xl border border-[#ffe8a4]/35 bg-gradient-to-b from-[#8b0909] via-[#7a0808] to-[#5e0404] px-7 py-10 text-center shadow-[0_24px_70px_rgba(0,0,0,0.55)]"
      >
        {/* Corner translucent 囍 watermarks inside card */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-3 -top-3 select-none font-serif text-7xl text-[#ffe8a4]/[0.08]"
        >
          囍
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-4 -right-3 select-none font-serif text-7xl text-[#ffe8a4]/[0.08]"
        >
          囍
        </span>

        {/* Top Circular Song Hỷ Emblem */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0, rotate: -15 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex justify-center"
        >
          <SongHyEmblem variant="gold" size="lg" className="animate-float-slow" />
        </motion.div>

        {/* Couple Names in Carattere Script */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="font-script relative z-10 mt-6 text-[42px] leading-[1.12] tracking-wide text-[#ffe8a4] drop-shadow-sm"
        >
          <span className="block">{COUPLE_PROFILE.groom.firstName}</span>
          <span className="my-0.5 block text-2xl text-[#ffe8a4]/85">&amp;</span>
          <span className="block">{COUPLE_PROFILE.bride.firstName}</span>
        </motion.h1>

        {/* Ornamental Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-10 my-5 flex items-center justify-center gap-3"
        >
          <span className="h-px w-12 bg-[#ffe8a4]/40" />
          <span className="text-xs text-[#ffe8a4]/85">❦</span>
          <span className="h-px w-12 bg-[#ffe8a4]/40" />
        </motion.div>

        {/* Date & Thân Mời */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative z-10"
        >
          <p className="text-sm font-medium tracking-[0.14em] text-[#fdf9ec]">
            {COUPLE_PROFILE.weddingDateDisplay}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#ffe8a4]/90">
            Thân Mời
          </p>
        </motion.div>

        {/* Pill CTA Button with Shimmer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.62 }}
          className="relative z-10 mt-7"
        >
          <button
            type="button"
            onClick={onOpen}
            className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#ffe8a4] to-[#f5d076] px-9 py-3 text-sm font-semibold tracking-wide text-[#7a0808] shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-transform duration-200 hover:scale-[1.04] active:scale-[0.97]"
          >
            <span
              aria-hidden="true"
              className="animate-shimmer pointer-events-none absolute inset-y-0 w-10 bg-white/45 blur-[2px]"
            />
            <span className="relative z-10">Mở thiệp</span>
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
