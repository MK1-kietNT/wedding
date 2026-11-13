"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { COUPLE_PROFILE } from "@/data/wedding";
import { EDITORIAL_EASE } from "@/constants/wedding";
import { BlurFade } from "@/components/common/reveal";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetISO: string): TimeLeft {
  const diff = Math.max(0, new Date(targetISO).getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  const formatted = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center rounded-2xl border border-gold/20 bg-burgundy-light/30 px-4 py-6 backdrop-blur-sm sm:px-6 sm:py-8">
      <div className="relative h-12 overflow-hidden sm:h-16">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={formatted}
            initial={{ y: 18, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -18, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.45, ease: EDITORIAL_EASE }}
            className="block font-editorial text-4xl font-normal tabular-nums text-ivory sm:text-6xl"
          >
            {formatted}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-2 text-[10px] uppercase tracking-wideEditorial text-gold-soft">
        {label}
      </span>
    </div>
  );
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(COUPLE_PROFILE.weddingDateISO)
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft(COUPLE_PROFILE.weddingDateISO));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="countdown"
      className="section-padding relative overflow-hidden bg-burgundy text-ivory"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(199,169,107,0.12),transparent_60%)]"
      />
      <div className="editorial-container relative z-10 text-center">
        <BlurFade>
          <p className="text-[11px] uppercase tracking-wideEditorial text-gold-soft">
            Counting Every Moment
          </p>
          <h2 className="mt-4 font-editorial text-display-lg font-normal text-ivory">
            Until We Say I Do
          </h2>
          <p className="mt-3 text-xs uppercase tracking-editorial text-ivory/75">
            {COUPLE_PROFILE.weddingDateDisplay} · {COUPLE_PROFILE.locationSummary}
          </p>
        </BlurFade>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          <CountdownUnit value={timeLeft.days} label="Days" />
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <CountdownUnit value={timeLeft.minutes} label="Minutes" />
          <CountdownUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
}

