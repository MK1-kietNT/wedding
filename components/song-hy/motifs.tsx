"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SongHyEmblemProps {
  variant?: "red" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SongHyEmblem({
  variant = "red",
  size = "md",
  className = "",
}: SongHyEmblemProps) {
  const sizeClasses = {
    sm: "h-9 w-9 text-base",
    md: "h-12 w-12 text-xl",
    lg: "h-16 w-16 text-3xl",
  }[size];

  const colorClasses =
    variant === "red"
      ? "bg-[#990000] text-[#ffe8a4] border border-[#e8c987]/60 shadow-sm"
      : "bg-gradient-to-br from-[#ffe8a4] to-[#f5d076] text-[#7a0808] shadow-[0_0_24px_rgba(255,232,164,0.45)]";

  return (
    <span
      aria-hidden="true"
      className={`inline-flex select-none items-center justify-center rounded-full font-serif font-bold leading-none ${sizeClasses} ${colorClasses} ${className}`}
    >
      囍
    </span>
  );
}

interface SongHyPanelProps {
  children: ReactNode;
  className?: string;
  showBottomEmblem?: boolean;
}

/**
 * Signature Song Hỷ V2 Đỏ cream panel with notched top corners,
 * thin gold double-border feel, and tapered bottom tip with 囍 emblem.
 */
export function SongHyPanel({
  children,
  className = "",
  showBottomEmblem = true,
}: SongHyPanelProps) {
  return (
    <div className={`relative mx-3 md:mx-8 ${className}`}>
      {/* Main cream card */}
      <div className="relative rounded-t-2xl rounded-b-[28px] border-[1.5px] border-[#e8c987] bg-[#fdf9ec] px-3.5 pb-10 pt-8 text-[#990000] shadow-[0_14px_34px_rgba(35,0,0,0.28)] sm:px-6 md:px-10 md:pb-12 md:pt-10">
        {/* Inner delicate gold hairline */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-[6px] rounded-t-xl rounded-b-[22px] border border-[#e8c987]/55"
        />

        {/* Corner decorative notches */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-[#c79e4f]/70"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r-2 border-t-2 border-[#c79e4f]/70"
        />

        <div className="relative z-10">{children}</div>

        {showBottomEmblem && (
          <div className="relative z-10 mt-7 flex flex-col items-center">
            <div className="mb-3 h-px w-24 bg-[#e8c987]" />
            <SongHyEmblem variant="red" size="sm" />
          </div>
        )}
      </div>
    </div>
  );
}

export function FloralCornerArt({
  position = "top-left",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const posClasses = {
    "top-left": "left-0 top-0",
    "top-right": "right-0 top-0 -scale-x-100",
    "bottom-left": "bottom-0 left-0 -scale-y-100",
    "bottom-right": "bottom-0 right-0 -scale-x-100 -scale-y-100",
  }[position];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 120"
      className={`pointer-events-none absolute h-24 w-24 text-[#ffe8a4]/20 md:h-32 md:w-32 ${posClasses}`}
      fill="none"
    >
      <path
        d="M8 8 C35 10, 58 26, 68 54 C42 48, 22 34, 8 8 Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M12 36 C32 34, 48 44, 56 64 C36 62, 20 52, 12 36 Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M36 10 C42 28, 56 42, 78 48 C68 28, 54 16, 36 10 Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="20" cy="20" r="3" fill="currentColor" />
    </svg>
  );
}

export function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const PETALS = [
  { left: "8%", duration: "11s", delay: "0s", size: "h-2 w-2" },
  { left: "22%", duration: "14s", delay: "2.5s", size: "h-1.5 w-1.5" },
  { left: "38%", duration: "12s", delay: "1s", size: "h-2.5 w-2.5" },
  { left: "56%", duration: "15s", delay: "3.5s", size: "h-1.5 w-1.5" },
  { left: "74%", duration: "13s", delay: "0.5s", size: "h-2 w-2" },
  { left: "89%", duration: "11.5s", delay: "4s", size: "h-2 w-2" },
];

export function FloatingPetals() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
    >
      {PETALS.map((petal, idx) => (
        <span
          key={idx}
          style={{
            left: petal.left,
            animationDuration: petal.duration,
            animationDelay: petal.delay,
          }}
          className={`animate-petal-drift absolute -top-6 rounded-full bg-gradient-to-br from-[#ffe8a4]/80 to-[#f5d076]/30 shadow-[0_0_8px_rgba(255,232,164,0.45)] ${petal.size}`}
        />
      ))}
    </div>
  );
}

export function SeigaihaFooterPattern() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-20 overflow-hidden opacity-25"
    >
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="seigaiha-gold"
            width="48"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke="#ffe8a4"
              strokeWidth="1"
            />
            <circle
              cx="24"
              cy="24"
              r="15"
              fill="none"
              stroke="#ffe8a4"
              strokeWidth="0.9"
            />
            <circle
              cx="24"
              cy="24"
              r="8"
              fill="none"
              stroke="#ffe8a4"
              strokeWidth="0.8"
            />
            <circle
              cx="0"
              cy="24"
              r="22"
              fill="none"
              stroke="#ffe8a4"
              strokeWidth="1"
            />
            <circle
              cx="48"
              cy="24"
              r="22"
              fill="none"
              stroke="#ffe8a4"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#seigaiha-gold)" />
      </svg>
    </div>
  );
}
