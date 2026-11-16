"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { GALLERY_PHOTOS } from "@/data/wedding";
import { ScrollReveal } from "@/components/song-hy/motifs";

const AUTOPLAY_INTERVAL_MS = 3000;

export function SongHyAlbum() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const total = GALLERY_PHOTOS.length;

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleSelect = (idx: number) => {
    setDirection(idx >= activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  useEffect(() => {
    if (isPaused || lightboxOpen) return;
    const timer = setInterval(() => {
      handleNext();
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [isPaused, lightboxOpen, handleNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStartX(e.touches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX !== null) {
      const endX = e.changedTouches[0]?.clientX ?? touchStartX;
      const delta = endX - touchStartX;
      if (delta > 40) handlePrev();
      else if (delta < -40) handleNext();
      setTouchStartX(null);
    }
    setIsPaused(false);
  };

  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;
  const activePhoto = GALLERY_PHOTOS[activeIndex];

  return (
    <section
      className="relative overflow-hidden py-10 text-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <ScrollReveal>
        <h2 className="font-serif text-xl font-bold uppercase tracking-[0.08em] text-[#ffe8a4] md:text-2xl">
          Album Ảnh
        </h2>
        <div className="mx-auto mt-2 h-px w-16 bg-[#ffe8a4]/45" />
      </ScrollReveal>

      {/* Coverflow Carousel */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative mx-auto mt-7 flex h-[320px] max-w-[460px] touch-pan-y items-center justify-center md:h-[400px] md:max-w-[580px]"
      >
        {/* Left Preview Card */}
        <motion.button
          key={`prev-${prevIndex}`}
          type="button"
          onClick={handlePrev}
          aria-label="Ảnh trước"
          initial={{ opacity: 0.35, x: -24, scale: 0.85 }}
          animate={{ opacity: 0.65, x: 0, scale: 0.9, rotate: -7 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-3 z-10 h-[235px] w-[155px] overflow-hidden rounded-2xl border border-[#ffe8a4]/35 shadow-xl brightness-75 transition hover:brightness-95 md:left-6 md:h-[300px] md:w-[205px]"
        >
          <Image
            src={GALLERY_PHOTOS[prevIndex].src}
            alt={GALLERY_PHOTOS[prevIndex].alt}
            fill
            quality={100}
            unoptimized
            sizes="(max-width: 768px) 45vw, 220px"
            className="object-cover"
          />
        </motion.button>

        {/* Active Center Card with Smooth Directional Slide */}
        <div className="relative z-20 h-[295px] w-[220px] md:h-[370px] md:w-[275px]">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.button
              key={activePhoto.id}
              type="button"
              onClick={() => setLightboxOpen(true)}
              aria-label={`Phóng to ${activePhoto.caption}`}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction * 55,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: direction * -55,
                scale: 0.92,
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-full w-full overflow-hidden rounded-2xl border-2 border-[#ffe8a4] bg-[#5e0404] shadow-[0_22px_55px_rgba(0,0,0,0.55)]"
            >
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                quality={100}
                unoptimized
                sizes="(max-width: 768px) 80vw, 340px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Subtle bottom gradient + caption pill */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-3 pb-3 pt-8 text-center">
                <p className="font-serif text-xs font-medium tracking-wider text-[#ffe8a4]">
                  {activePhoto.caption}
                </p>
              </div>

              {/* Expand hint icon */}
              <span
                aria-hidden="true"
                className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-[#ffe8a4] opacity-80 backdrop-blur-sm transition group-hover:opacity-100"
              >
                <Expand className="h-3.5 w-3.5" />
              </span>
            </motion.button>
          </AnimatePresence>
        </div>

        {/* Right Preview Card */}
        <motion.button
          key={`next-${nextIndex}`}
          type="button"
          onClick={handleNext}
          aria-label="Ảnh tiếp theo"
          initial={{ opacity: 0.35, x: 24, scale: 0.85 }}
          animate={{ opacity: 0.65, x: 0, scale: 0.9, rotate: 7 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-3 z-10 h-[235px] w-[155px] overflow-hidden rounded-2xl border border-[#ffe8a4]/35 shadow-xl brightness-75 transition hover:brightness-95 md:right-6 md:h-[300px] md:w-[205px]"
        >
          <Image
            src={GALLERY_PHOTOS[nextIndex].src}
            alt={GALLERY_PHOTOS[nextIndex].alt}
            fill
            quality={100}
            unoptimized
            sizes="(max-width: 768px) 45vw, 220px"
            className="object-cover"
          />
        </motion.button>

        {/* Left / Right Controls */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous photo"
          className="absolute left-2 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-[#ffe8a4]/60 bg-[#4d0000]/80 text-[#ffe8a4] shadow-md backdrop-blur-sm transition hover:scale-105 hover:bg-[#4d0000]"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next photo"
          className="absolute right-2 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-[#ffe8a4]/60 bg-[#4d0000]/80 text-[#ffe8a4] shadow-md backdrop-blur-sm transition hover:scale-105 hover:bg-[#4d0000]"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dot Indicators + Counter */}
      <div className="mt-5 flex items-center justify-center gap-2">
        {GALLERY_PHOTOS.map((photo, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={photo.id}
              type="button"
              onClick={() => handleSelect(idx)}
              aria-label={`Chọn ảnh ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-6 bg-[#ffe8a4]"
                  : "w-2 bg-[#ffe8a4]/35 hover:bg-[#ffe8a4]/65"
              }`}
            />
          );
        })}
      </div>

      <p className="mt-2 text-[11px] font-medium tracking-widest text-[#ffe8a4]/80">
        {activeIndex + 1} / {total}
      </p>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={activeIndex}
        slides={GALLERY_PHOTOS.map((photo) => ({
          src: photo.src,
          alt: photo.alt,
        }))}
        on={{
          view: ({ index }) => setActiveIndex(index),
        }}
      />
    </section>
  );
}
