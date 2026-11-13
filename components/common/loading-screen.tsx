"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { COUPLE_PROFILE } from "@/data/wedding";
import { EDITORIAL_EASE } from "@/constants/wedding";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 1150);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-label="Loading wedding invitation"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.75, ease: EDITORIAL_EASE }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EDITORIAL_EASE }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-ivory-pure">
              <span className="font-editorial text-2xl tracking-widest text-burgundy">
                {COUPLE_PROFILE.monogram}
              </span>
            </div>
            <p className="mt-6 text-[10px] uppercase tracking-wideEditorial text-charcoal-muted">
              {COUPLE_PROFILE.weddingDateDisplay}
            </p>
            <div className="mt-4 h-px w-32 overflow-hidden bg-burgundy/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.0, ease: EDITORIAL_EASE }}
                className="h-full w-full bg-gradient-to-r from-burgundy via-gold to-burgundy"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

