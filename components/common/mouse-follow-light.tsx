"use client";

import { motion } from "framer-motion";
import { useMouseGlow } from "@/hooks/use-mouse-glow";

export function MouseFollowLight() {
  const { x, y, isActive } = useMouseGlow();

  if (!isActive) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30 hidden h-80 w-80 rounded-full bg-gold/[0.06] blur-3xl lg:block"
      animate={{
        x: x - 160,
        y: y - 160,
        opacity: isActive ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 26,
        mass: 0.4,
      }}
    />
  );
}

