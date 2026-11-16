"use client";

import { motion } from "framer-motion";
import { ScrollReveal, SeigaihaFooterPattern } from "@/components/song-hy/motifs";

interface SongHyGiftProps {
  onOpenGift: () => void;
}

export function SongHyGift({ onOpenGift }: SongHyGiftProps) {
  return (
    <>
      {/* Hộp Quà Mừng */}
      <section className="px-5 py-10 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-xl font-bold uppercase tracking-[0.06em] text-[#ffe8a4] md:text-2xl">
            Hộp Quà Mừng
          </h2>

          <div className="mt-6 flex flex-col items-center">
            <motion.button
              type="button"
              onClick={onOpenGift}
              aria-label="Mở hộp mừng cưới"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="animate-float-slow group relative flex h-36 w-52 items-center justify-center"
            >
              {/* Back Lì Xì Envelope */}
              <div className="absolute -translate-x-5 -rotate-12 rounded-xl border border-[#ffe8a4]/70 bg-gradient-to-b from-[#a80f0f] to-[#7a0808] p-4 shadow-lg transition-transform duration-300 group-hover:-translate-x-7 group-hover:-rotate-[16deg]">
                <div className="flex h-20 w-14 items-center justify-center rounded-lg border border-[#ffe8a4]/50">
                  <span className="font-serif text-2xl font-bold text-[#ffe8a4]">
                    囍
                  </span>
                </div>
              </div>

              {/* Front Cream-and-Red Lì Xì Envelope */}
              <div className="relative z-10 translate-x-5 rotate-6 rounded-xl border-2 border-[#e8c987] bg-[#fdf9ec] p-3.5 shadow-xl transition-transform duration-300 group-hover:translate-x-7 group-hover:rotate-[10deg]">
                <div className="flex h-20 w-14 flex-col items-center justify-center rounded-lg border border-[#990000]/30 bg-[#990000]">
                  <span className="font-serif text-2xl font-bold text-[#ffe8a4]">
                    囍
                  </span>
                </div>
              </div>
            </motion.button>

            <p className="mt-3 text-xs font-medium tracking-wider text-[#ffe8a4]/85">
              Nhấn để mở
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Footer with Seigaiha golden wave pattern */}
      <footer className="relative overflow-hidden px-5 pb-16 pt-8 text-center">
        <SeigaihaFooterPattern />
        <p className="relative z-10 mx-auto max-w-sm text-xs leading-relaxed text-[#fdf9ec]/95 md:text-sm">
          Sự hiện diện của quý khách là niềm vinh hạnh của gia đình chúng tôi!
        </p>
      </footer>
    </>
  );
}
