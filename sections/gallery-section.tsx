"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Expand } from "lucide-react";
import { GALLERY_PHOTOS } from "@/data/wedding";
import { BlurFade, SectionHeader } from "@/components/common/reveal";
import { cn } from "@/lib/utils";
import "yet-another-react-lightbox/styles.css";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});

export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  const slides = GALLERY_PHOTOS.map((photo) => ({
    src: photo.src,
    alt: photo.alt,
    width: photo.width,
    height: photo.height,
  }));

  return (
    <section id="gallery" className="section-padding bg-ivory">
      <div className="editorial-container">
        <SectionHeader
          eyebrow="Album Ảnh Cưới"
          title="Khoảnh Khắc Lưu Giữ"
          subtitle="Những khung hình dịu dàng trước ngày trọng đại. Nhấn vào từng ảnh để xem toàn màn hình."
        />

        <div className="mt-14 columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
          {GALLERY_PHOTOS.map((photo, index) => (
            <BlurFade
              key={photo.id}
              delay={index * 0.08}
              className="break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                aria-label={`Mở ảnh ${photo.caption} toàn màn hình`}
                className="group relative block w-full overflow-hidden rounded-2xl border border-burgundy/10 bg-ivory-pure text-left transition-all duration-500 ease-editorial hover:-translate-y-1 hover:border-gold/50"
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden",
                    photo.aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
                  )}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-burgundy-deep/0 transition-colors duration-500 group-hover:bg-burgundy-deep/20" />
                  <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ivory/85 text-burgundy opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <Expand className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="font-editorial text-lg text-burgundy">
                    {photo.caption}
                  </span>
                  <span className="text-[10px] uppercase tracking-editorial text-charcoal-subtle">
                    0{index + 1}
                  </span>
                </div>
              </button>
            </BlurFade>
          ))}
        </div>
      </div>

      {lightboxIndex >= 0 && (
        <Lightbox
          open={lightboxIndex >= 0}
          index={lightboxIndex}
          close={() => setLightboxIndex(-1)}
          slides={slides}
        />
      )}
    </section>
  );
}

