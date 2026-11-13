"use client";

import type { GuestWish } from "@/types/wedding";
import { getInitials } from "@/lib/utils";
import { BlurFade, SectionHeader } from "@/components/common/reveal";

interface WishesSectionProps {
  wishes: GuestWish[];
}

function WishCard({ wish }: { wish: GuestWish }) {
  return (
    <article className="glass-ivory flex w-[300px] shrink-0 flex-col justify-between rounded-2xl p-6 transition-all duration-500 hover:border-gold/50 sm:w-[360px]">
      <p className="font-editorial text-lg italic leading-relaxed text-charcoal">
        &ldquo;{wish.message}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-burgundy/10 pt-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-burgundy text-xs font-medium tracking-wider text-ivory">
          {getInitials(wish.name)}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-burgundy">{wish.name}</p>
          <p className="truncate text-[11px] uppercase tracking-wider text-charcoal-subtle">
            {wish.relation}
          </p>
        </div>
      </div>
    </article>
  );
}

export function WishesSection({ wishes }: WishesSectionProps) {
  const marqueeItems = [...wishes, ...wishes];

  return (
    <section id="wishes" className="section-padding overflow-hidden bg-ivory">
      <div className="editorial-container">
        <SectionHeader
          eyebrow="Guestbook"
          title="Warmest Wishes"
          subtitle="Kind words and blessings from the family and friends who walk alongside us."
        />
      </div>

      <BlurFade delay={0.15} className="mt-14">
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ivory to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ivory to-transparent sm:w-28" />

          <div className="animate-wishes-marquee flex w-max gap-6 px-4">
            {marqueeItems.map((wish, idx) => (
              <WishCard key={`${wish.id}-${idx}`} wish={wish} />
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}

