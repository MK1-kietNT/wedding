"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { COUPLE_PROFILE } from "@/data/wedding";

export function SongHyHero() {
  return (
    <section className="relative overflow-hidden bg-[#8b0c0c] pb-8">
      {/* Bottom-left & bottom-right translucent 囍 watermarks on red backdrop */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 left-2 select-none font-serif text-[105px] font-bold leading-none text-[#5e0404]/55 md:left-6 md:text-[140px]"
      >
        囍
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 right-2 select-none font-serif text-[105px] font-bold leading-none text-[#5e0404]/55 md:right-6 md:text-[140px]"
      >
        囍
      </span>

      {/* Centered Cream "Liễn" Banner with Curved Pointed Bottom */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-[86%] max-w-[540px]"
      >
        {/* Main cream body */}
        <div className="relative overflow-hidden bg-[#faf6ea] px-4 pb-8 pt-7 text-[#990000] md:px-10 md:pt-9">
          {/* Subtle cream Song Hỷ watermark background */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-8 top-4 select-none font-serif text-[170px] font-bold leading-none text-[#e8dec3]/45"
          >
            囍
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 top-10 select-none font-serif text-[180px] font-bold leading-none text-[#e8dec3]/40"
          >
            囍
          </span>

          {/* Top 3-column header: Chú Rể | 囍 | Cô Dâu */}
          <div className="relative z-10 grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-center">
            <div>
              <p className="text-[11px] font-medium tracking-wide text-[#990000]/80 md:text-xs">
                {COUPLE_PROFILE.groom.role}
              </p>
              <p className="mt-1 font-serif text-[13px] font-bold uppercase leading-snug tracking-wide text-[#990000] sm:text-sm md:text-base">
                {COUPLE_PROFILE.groom.fullName}
              </p>
            </div>

            <motion.div
              initial={{ scale: 0.6, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mx-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#990000]/25 bg-[#990000]/5 font-serif text-2xl font-bold leading-none text-[#990000]"
            >
              囍
            </motion.div>

            <div>
              <p className="text-[11px] font-medium tracking-wide text-[#990000]/80 md:text-xs">
                {COUPLE_PROFILE.bride.role}
              </p>
              <p className="mt-1 font-serif text-[13px] font-bold uppercase leading-snug tracking-wide text-[#990000] sm:text-sm md:text-base">
                {COUPLE_PROFILE.bride.fullName}
              </p>
            </div>
          </div>

          {/* Scalloped / Notched-Corner Hero Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto mt-6 w-full max-w-[330px] md:max-w-[370px]"
          >
            {/* Outer scalloped notched-corner frame */}
            <div
              className="relative aspect-[3/4] w-full overflow-hidden border-[1.5px] border-[#990000]/75 bg-[#faf6ea] shadow-md"
              style={{
                borderRadius: "28px",
              }}
            >
              <Image
                src={COUPLE_PROFILE.heroImage}
                alt={`${COUPLE_PROFILE.groom.fullName} & ${COUPLE_PROFILE.bride.fullName}`}
                fill
                priority
                quality={100}
                unoptimized
                sizes="(max-width: 768px) 92vw, 420px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Curved Pointed Bottom ("Liễn") SVG Tip + Gold Border */}
        <svg
          viewBox="0 0 400 72"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="block h-12 w-full md:h-16"
        >
          <path
            d="M0,0 L400,0 C370,36 250,40 200,70 C150,40 30,36 0,0 Z"
            fill="#faf6ea"
          />
          <path
            d="M0,0 C30,36 150,40 200,70 C250,40 370,36 400,0"
            fill="none"
            stroke="#e8c987"
            strokeWidth="2.5"
          />
        </svg>
      </motion.div>

      {/* Left & Right outer gold wave accents flanking the pointed bottom */}
      <svg
        viewBox="0 0 800 90"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full opacity-75"
      >
        <path
          d="M0,10 C80,60 220,30 400,88 C580,30 720,60 800,10"
          fill="none"
          stroke="#e8c987"
          strokeWidth="2"
        />
      </svg>
    </section>
  );
}
