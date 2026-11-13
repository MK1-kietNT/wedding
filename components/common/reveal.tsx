"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { EDITORIAL_EASE } from "@/constants/wedding";
import { cn } from "@/lib/utils";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export function BlurFade({
  children,
  className,
  delay = 0,
  yOffset = 22,
}: BlurFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: EDITORIAL_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface LetterRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function LetterReveal({
  text,
  className,
  delay = 0,
  as: Tag = "h2",
}: LetterRevealProps) {
  const letters = Array.from(text);

  return (
    <Tag className={cn("inline-flex flex-wrap justify-center", className)} aria-label={text}>
      {letters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          aria-hidden="true"
          initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.65,
            delay: delay + index * 0.032,
            ease: EDITORIAL_EASE,
          }}
          className={char === " " ? "w-[0.28em]" : "inline-block"}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Tag>
  );
}

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      <BlurFade>
        <p className="mb-4 text-[11px] font-medium uppercase tracking-wideEditorial text-gold-muted">
          {eyebrow}
        </p>
      </BlurFade>
      <LetterReveal
        text={title}
        as="h2"
        className="font-editorial text-display-lg font-normal text-burgundy"
      />
      {subtitle && (
        <BlurFade delay={0.18}>
          <p className="mt-5 text-sm leading-relaxed text-charcoal-muted sm:text-base">
            {subtitle}
          </p>
        </BlurFade>
      )}
    </div>
  );
}

