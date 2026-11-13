"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloralAccentProps {
  className?: string;
  variant?: "light" | "burgundy";
}

export function FloralAccent({
  className,
  variant = "burgundy",
}: FloralAccentProps) {
  const strokeClass =
    variant === "light" ? "stroke-ivory/35" : "stroke-burgundy/20";

  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 120 120"
      fill="none"
      className={cn("pointer-events-none select-none", className)}
      animate={{
        y: [0, -8, 0],
        rotate: [0, 1.8, 0],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path
        d="M60 105C60 76 62 48 82 22"
        className={strokeClass}
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M62 72C48 64 38 52 34 38C48 40 58 50 62 72Z"
        className={strokeClass}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M65 54C78 48 90 42 98 30C84 30 72 38 65 54Z"
        className={strokeClass}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <circle
        cx="84"
        cy="20"
        r="3"
        className={variant === "light" ? "fill-gold/50" : "fill-gold/60"}
      />
    </motion.svg>
  );
}

