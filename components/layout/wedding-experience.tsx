"use client";

import { useState } from "react";
import { MUSIC_TRACK } from "@/data/wedding";
import { SECTION_IDS } from "@/constants/wedding";
import type { GuestWish } from "@/types/wedding";
import { useLenis } from "@/hooks/use-lenis";
import { useActiveSection } from "@/hooks/use-active-section";
import { useMusicPlayer } from "@/hooks/use-music-player";
import { LoadingScreen } from "@/components/common/loading-screen";
import { ScrollProgress } from "@/components/common/scroll-progress";
import { MouseFollowLight } from "@/components/common/mouse-follow-light";
import { MusicPlayer } from "@/components/common/music-player";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/sections/hero-section";
import { InvitationSection } from "@/sections/invitation-section";
import { LoveStorySection } from "@/sections/love-story-section";
import { GallerySection } from "@/sections/gallery-section";
import { EventsSection } from "@/sections/events-section";
import { CountdownSection } from "@/sections/countdown-section";
import { GiftSection } from "@/sections/gift-section";
import { RsvpSection } from "@/sections/rsvp-section";
import { WishesSection } from "@/sections/wishes-section";

interface WeddingExperienceProps {
  initialWishes: GuestWish[];
}

export function WeddingExperience({ initialWishes }: WeddingExperienceProps) {
  const { scrollTo } = useLenis();
  const activeSection = useActiveSection(SECTION_IDS);
  const music = useMusicPlayer(MUSIC_TRACK.src);
  const [wishes, setWishes] = useState<GuestWish[]>(initialWishes);

  const handleOpenInvitation = () => {
    void music.play();
    scrollTo("#invitation");
  };

  const handleWishSubmitted = (newWish: GuestWish) => {
    setWishes((prev) => [newWish, ...prev]);
  };

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <MouseFollowLight />
      <Navbar activeSection={activeSection} onNavigate={scrollTo} />

      <main className="relative">
        <HeroSection onOpenInvitation={handleOpenInvitation} />
        <InvitationSection />
        <LoveStorySection />
        <GallerySection />
        <EventsSection />
        <CountdownSection />
        <GiftSection />
        <RsvpSection onWishSubmitted={handleWishSubmitted} />
        <WishesSection wishes={wishes} />
      </main>

      <Footer />

      <MusicPlayer
        isPlaying={music.isPlaying}
        volume={music.volume}
        currentTime={music.currentTime}
        duration={music.duration}
        onTogglePlay={music.togglePlay}
        onVolumeChange={music.setVolume}
        onSeek={music.seek}
      />
    </>
  );
}
