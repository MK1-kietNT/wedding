"use client";

import { Heart, Instagram, Mail, Share2 } from "lucide-react";
import { COUPLE_PROFILE } from "@/data/wedding";
import { EditorialDivider } from "@/components/common/editorial-divider";
import { BlurFade } from "@/components/common/reveal";

export function Footer() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${COUPLE_PROFILE.bride.firstName} & ${COUPLE_PROFILE.groom.firstName} Wedding`,
          text: COUPLE_PROFILE.heroQuote,
          url: window.location.href,
        });
      } catch {
        // Ignore cancelled share
      }
    }
  };

  return (
    <footer className="border-t border-burgundy/10 bg-ivory-warm/70 pb-24 pt-16 sm:pb-16">
      <div className="editorial-container text-center">
        <BlurFade>
          <p className="text-[11px] uppercase tracking-wideEditorial text-gold-muted">
            With Endless Gratitude
          </p>
          <h2 className="mt-4 font-editorial text-display-md text-burgundy">
            {COUPLE_PROFILE.bride.firstName} &amp; {COUPLE_PROFILE.groom.firstName}
          </h2>
          <p className="mt-2 text-xs uppercase tracking-editorial text-charcoal-muted">
            {COUPLE_PROFILE.weddingDateDisplay} · {COUPLE_PROFILE.locationSummary}
          </p>
        </BlurFade>

        <EditorialDivider className="my-6" />

        <BlurFade delay={0.1}>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-charcoal-muted">
            Thank you for being part of our story and for celebrating this day with us. We cannot wait to welcome you.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#rsvp"
              aria-label="Send RSVP email or note"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-burgundy/15 bg-ivory-pure text-burgundy transition-all duration-300 hover:-translate-y-0.5 hover:border-gold"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="#gallery"
              aria-label="Wedding photo journal"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-burgundy/15 bg-ivory-pure text-burgundy transition-all duration-300 hover:-translate-y-0.5 hover:border-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={handleShare}
              aria-label="Share wedding invitation"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-burgundy/15 bg-ivory-pure text-burgundy transition-all duration-300 hover:-translate-y-0.5 hover:border-gold"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-10 flex items-center justify-center gap-1.5 text-[11px] tracking-wider text-charcoal-subtle">
            <span>Crafted with</span>
            <Heart className="h-3 w-3 fill-burgundy text-burgundy" />
            <span>for {COUPLE_PROFILE.monogram}</span>
          </p>
        </BlurFade>
      </div>
    </footer>
  );
}

