"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { MUSIC_TRACK } from "@/data/wedding";
import type { GuestWish } from "@/types/wedding";
import { useMusicPlayer } from "@/hooks/use-music-player";
import { OpeningGate } from "@/components/song-hy/opening-gate";
import { FloatingPetals } from "@/components/song-hy/motifs";
import { RsvpModal } from "@/components/song-hy/rsvp-modal";
import { GiftModal } from "@/components/song-hy/gift-modal";
import { SongHyHero } from "@/sections/song-hy-hero";
import { SongHyCeremony } from "@/sections/song-hy-ceremony";
import { SongHyAlbum } from "@/sections/song-hy-album";
import { SongHyReception } from "@/sections/song-hy-reception";
import { SongHyVenue } from "@/sections/song-hy-venue";
import { SongHyWishes } from "@/sections/song-hy-wishes";
import { SongHyGift } from "@/sections/song-hy-gift";

interface WeddingExperienceProps {
  initialWishes: GuestWish[];
}

export function WeddingExperience({ initialWishes }: WeddingExperienceProps) {
  const music = useMusicPlayer(MUSIC_TRACK.src);
  const [isOpened, setIsOpened] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [giftOpen, setGiftOpen] = useState(false);
  const [wishes, setWishes] = useState<GuestWish[]>(initialWishes);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    void music.play();
  };

  const handleWishSubmitted = (newWish: GuestWish) => {
    setWishes((prev) => [newWish, ...prev]);
  };

  const handleWishDeleted = (id: string) => {
    setWishes((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence>
        {!isOpened && <OpeningGate onOpen={handleOpenInvitation} />}
      </AnimatePresence>

      {isOpened && <FloatingPetals />}

      {/* Centered Song Hỷ V2 Đỏ Column */}
      <main className="mx-auto min-h-screen w-full max-w-[480px] overflow-hidden bg-[#7a0808] font-serif shadow-[0_0_50px_rgba(0,0,0,0.18)] md:max-w-[780px] md:border-x md:border-[#ffe8a4]/25">
        <SongHyHero />
        <SongHyCeremony />
        <SongHyAlbum />
        <SongHyReception onOpenRsvp={() => setRsvpOpen(true)} />
        <SongHyVenue />
        <SongHyWishes
          wishes={wishes}
          onWishSubmitted={handleWishSubmitted}
          onWishDeleted={handleWishDeleted}
        />
        <SongHyGift onOpenGift={() => setGiftOpen(true)} />
      </main>

      {/* Floating Music Toggle Button */}
      {isOpened && (
        <button
          type="button"
          onClick={music.togglePlay}
          aria-label={music.isPlaying ? "Tạm dừng nhạc" : "Phát nhạc"}
          title={music.isPlaying ? "Tạm dừng nhạc" : "Phát nhạc"}
          className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[#ffe8a4]/70 bg-[#5e0404]/90 text-[#ffe8a4] shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-[#4d0000]"
        >
          {music.isPlaying ? (
            <>
              <span
                aria-hidden="true"
                className="absolute inset-0 animate-ping rounded-full bg-[#ffe8a4]/25"
              />
              <Volume2 className="relative z-10 h-5 w-5" />
            </>
          ) : (
            <VolumeX className="h-5 w-5 opacity-75" />
          )}
        </button>
      )}

      <RsvpModal
        isOpen={rsvpOpen}
        onClose={() => setRsvpOpen(false)}
        onSubmitted={handleWishSubmitted}
      />

      <GiftModal isOpen={giftOpen} onClose={() => setGiftOpen(false)} />
    </div>
  );
}
