"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { COUPLE_PROFILE } from "@/data/wedding";
import { EDITORIAL_EASE } from "@/constants/wedding";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/common/magnetic-button";
import { FloralAccent } from "@/components/common/floral-accent";
import { LetterReveal } from "@/components/common/reveal";

interface HeroSectionProps {
  onOpenInvitation: () => void;
}

export function HeroSection({ onOpenInvitation }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-burgundy-deep text-ivory"
    >
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 -top-8 -bottom-8 will-change-transform"
      >
        <Image
          src={COUPLE_PROFILE.heroImage}
          alt={`Ảnh cưới ${COUPLE_PROFILE.bride.firstName} và ${COUPLE_PROFILE.groom.firstName}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/60 via-charcoal/35 to-burgundy-deep/80" />
      </motion.div>

      <FloralAccent
        variant="light"
        className="absolute left-4 top-24 h-24 w-24 opacity-60 sm:left-12 sm:h-32 sm:w-32"
      />
      <FloralAccent
        variant="light"
        className="absolute bottom-24 right-4 h-24 w-24 rotate-180 opacity-60 sm:right-12 sm:h-32 sm:w-32"
      />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="editorial-container relative z-10 flex flex-col items-center py-24 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EDITORIAL_EASE }}
          className="text-[11px] font-medium uppercase tracking-wideEditorial text-gold-soft"
        >
          {COUPLE_PROFILE.weddingDayOfWeek} · {COUPLE_PROFILE.weddingDateDisplay}
        </motion.p>

        <div className="mt-6 flex flex-col items-center gap-1 sm:flex-row sm:gap-5">
          <LetterReveal
            text={COUPLE_PROFILE.bride.firstName}
            as="h1"
            delay={0.45}
            className="font-editorial text-display-xl font-normal text-ivory"
          />
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.75, ease: EDITORIAL_EASE }}
            className="font-editorial text-3xl italic text-gold-soft sm:text-5xl"
          >
            &amp;
          </motion.span>
          <LetterReveal
            text={COUPLE_PROFILE.groom.firstName}
            as="span"
            delay={0.6}
            className="font-editorial text-display-xl font-normal text-ivory"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.95, ease: EDITORIAL_EASE }}
          className="mt-6 max-w-lg font-editorial text-lg italic leading-relaxed text-ivory/90 sm:text-xl"
        >
          &ldquo;{COUPLE_PROFILE.heroQuote}&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.15, ease: EDITORIAL_EASE }}
          className="mt-3 text-[11px] uppercase tracking-editorial text-ivory/75"
        >
          {COUPLE_PROFILE.locationSummary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.25, ease: EDITORIAL_EASE }}
          className="mt-10"
        >
          <MagneticButton>
            <Button
              variant="ivory"
              size="lg"
              onClick={onOpenInvitation}
              className="border border-gold/40"
            >
              <span>Mở Thiệp Mời</span>
              <ArrowDown className="h-3.5 w-3.5" />
            </Button>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

