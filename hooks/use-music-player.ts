"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MUSIC_STORAGE_KEY } from "@/constants/wedding";

interface StoredMusicState {
  volume: number;
  wasPlaying: boolean;
}

export function useMusicPlayer(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [volume, setVolumeState] = useState(0.55);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = "metadata";

    try {
      const saved = localStorage.getItem(MUSIC_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<StoredMusicState>;
        if (typeof parsed.volume === "number" && parsed.volume >= 0 && parsed.volume <= 1) {
          audio.volume = parsed.volume;
          setVolumeState(parsed.volume);
        } else {
          audio.volume = 0.55;
        }
      } else {
        audio.volume = 0.55;
      }
    } catch {
      audio.volume = 0.55;
    }

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration || 0);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
      audioRef.current = null;
    };
  }, [src]);

  const persistState = useCallback((nextPlaying: boolean, nextVolume: number) => {
    try {
      const payload: StoredMusicState = {
        wasPlaying: nextPlaying,
        volume: nextVolume,
      };
      localStorage.setItem(MUSIC_STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Ignore storage errors in restricted browsing modes
    }
  }, []);

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      await audio.play();
      setIsPlaying(true);
      setHasStarted(true);
      persistState(true, audio.volume);
    } catch {
      setIsPlaying(false);
    }
  }, [persistState]);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
    persistState(false, audio.volume);
  }, [persistState]);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      void play();
    }
  }, [isPlaying, pause, play]);

  const setVolume = useCallback(
    (nextVolume: number) => {
      const clamped = Math.min(1, Math.max(0, nextVolume));
      setVolumeState(clamped);
      if (audioRef.current) {
        audioRef.current.volume = clamped;
      }
      persistState(isPlaying, clamped);
    },
    [isPlaying, persistState]
  );

  const seek = useCallback((time: number) => {
    if (!audioRef.current || !Number.isFinite(time)) return;
    audioRef.current.currentTime = Math.max(0, Math.min(time, audioRef.current.duration || time));
    setCurrentTime(audioRef.current.currentTime);
  }, []);

  return {
    isPlaying,
    hasStarted,
    volume,
    currentTime,
    duration,
    play,
    pause,
    togglePlay,
    setVolume,
    seek,
  };
}

