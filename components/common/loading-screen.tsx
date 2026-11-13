"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { COUPLE_PROFILE } from "@/data/wedding";
import { EDITORIAL_EASE } from "@/constants/wedding";

type CurtainPhase = "closed" | "opening" | "done";

const CURTAIN_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export function LoadingScreen() {
  const [phase, setPhase] = useState<CurtainPhase>("closed");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const openDelay = shouldReduceMotion ? 350 : 850;
    const doneDelay = shouldReduceMotion ? 900 : 2350;

    const openTimer = window.setTimeout(() => setPhase("opening"), openDelay);
    const doneTimer = window.setTimeout(() => setPhase("done"), doneDelay);

    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(doneTimer);
    };
  }, [shouldReduceMotion]);

  if (phase === "done") {
    return null;
  }

  const isOpening = phase === "opening";
  const curtainDuration = shouldReduceMotion ? 0.45 : 1.45;

  return (
    <div
      aria-label="Đang mở màn thiệp mời cưới"
      aria-hidden={isOpening}
      className={`fixed inset-0 z-[100] overflow-hidden ${
        isOpening ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      {/* Left Burgundy Curtain */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: isOpening ? "-102%" : "0%" }}
        transition={{ duration: curtainDuration, ease: CURTAIN_EASE }}
        className="absolute inset-y-0 left-0 w-1/2 overflow-hidden border-r border-gold/45 bg-gradient-to-br from-burgundy-deep via-burgundy to-burgundy-light shadow-[12px_0_40px_rgba(20,2,5,0.45)]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 36px, rgba(0,0,0,0.16) 36px, rgba(0,0,0,0.16) 54px, transparent 54px, transparent 88px)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(199,169,107,0.14),transparent_60%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-6 right-3 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent"
        />
      </motion.div>

      {/* Right Burgundy Curtain */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: isOpening ? "102%" : "0%" }}
        transition={{ duration: curtainDuration, ease: CURTAIN_EASE }}
        className="absolute inset-y-0 right-0 w-1/2 overflow-hidden border-l border-gold/45 bg-gradient-to-bl from-burgundy-deep via-burgundy to-burgundy-light shadow-[-12px_0_40px_rgba(20,2,5,0.45)]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(0,0,0,0.16) 0px, rgba(0,0,0,0.16) 18px, transparent 18px, transparent 52px, rgba(255,255,255,0.04) 52px, rgba(255,255,255,0.04) 54px, transparent 54px, transparent 88px)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(199,169,107,0.14),transparent_60%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-6 left-3 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent"
        />
      </motion.div>

      {/* Center Monogram Seal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={
          isOpening
            ? { opacity: 0, scale: 0.9, filter: "blur(4px)" }
            : { opacity: 1, scale: 1, filter: "blur(0px)" }
        }
        transition={{
          duration: isOpening ? 0.45 : 0.65,
          ease: EDITORIAL_EASE,
        }}
        className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center"
      >
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-gold/60 bg-burgundy-deep/90 shadow-[0_0_45px_rgba(199,169,107,0.22)] backdrop-blur-sm">
          <div className="absolute inset-1.5 rounded-full border border-gold/30" />
          <span className="font-serif text-2xl tracking-[0.22em] text-gold-soft">
            {COUPLE_PROFILE.monogram}
          </span>
        </div>

        <p className="mt-6 text-[11px] uppercase tracking-[0.34em] text-gold-soft/90">
          Thiệp Mời Thành Hôn
        </p>
        <p className="mt-2 font-serif text-base tracking-[0.22em] text-ivory/85">
          {COUPLE_PROFILE.weddingDateDisplay}
        </p>

        <div className="mt-5 h-px w-36 overflow-hidden bg-gold/20">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: shouldReduceMotion ? 0.25 : 0.75, ease: EDITORIAL_EASE }}
            className="h-full w-full bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </div>
      </motion.div>
    </div>
  );
}

