"use client";

import { motion } from "framer-motion";
import { EDITORIAL_EASE } from "@/constants/wedding";
import { cn } from "@/lib/utils";

interface EditorialDividerProps {
  className?: string;
}

export function EditorialDivider({ className }: EditorialDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center justify-center gap-4 py-4", className)}
    >
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: EDITORIAL_EASE }}
        className="h-px w-16 origin-right bg-gradient-to-l from-gold/60 to-transparent sm:w-28"
      />
      <motion.span
        initial={{ scale: 0, rotate: -45, opacity: 0 }}
        whileInView={{ scale: 1, rotate: 45, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2, ease: EDITORIAL_EASE }}
        className="h-1.5 w-1.5 border border-gold bg-ivory"
      />
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: EDITORIAL_EASE }}
        className="h-px w-16 origin-left bg-gradient-to-r from-gold/60 to-transparent sm:w-28"
      />
    </div>
  );
}

