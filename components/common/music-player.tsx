"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Disc3, Pause, Play, Volume2, VolumeX, ChevronUp, ChevronDown } from "lucide-react";
import { MUSIC_TRACK } from "@/data/wedding";
import { EDITORIAL_EASE } from "@/constants/wedding";
import { cn } from "@/lib/utils";

interface MusicPlayerProps {
  isPlaying: boolean;
  volume: number;
  currentTime: number;
  duration: number;
  onTogglePlay: () => void;
  onVolumeChange: (volume: number) => void;
  onSeek: (time: number) => void;
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds <= 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function MusicPlayer({
  isPlaying,
  volume,
  currentTime,
  duration,
  onTogglePlay,
  onVolumeChange,
  onSeek,
}: MusicPlayerProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.aside
      aria-label="Trình phát nhạc nền"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: EDITORIAL_EASE }}
      className="fixed bottom-4 right-4 left-4 z-40 sm:left-auto sm:bottom-6 sm:right-6 sm:w-80"
    >
      <div className="glass-ivory rounded-2xl p-3 shadow-sm transition-all duration-500">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onTogglePlay}
            aria-label={isPlaying ? "Tạm dừng nhạc cưới" : "Phát nhạc cưới"}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-burgundy text-ivory transition-transform duration-300 hover:scale-105 hover:bg-burgundy-light"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4 translate-x-0.5" />
            )}
          </button>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <motion.span
                animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                transition={
                  isPlaying
                    ? { duration: 6, repeat: Infinity, ease: "linear" }
                    : { duration: 0.3 }
                }
                className="text-gold-muted"
              >
                <Disc3 className="h-3.5 w-3.5" />
              </motion.span>
              <p className="truncate text-xs font-medium text-charcoal">
                {MUSIC_TRACK.title}
              </p>
            </div>

            <div className="mt-1 flex items-center gap-2">
              <div className="flex h-3 items-end gap-0.5" aria-hidden="true">
                {[0.6, 1, 0.75].map((heightRatio, idx) => (
                  <motion.span
                    key={idx}
                    className={cn(
                      "w-0.5 rounded-full bg-burgundy/70",
                      !isPlaying && "h-1"
                    )}
                    animate={
                      isPlaying
                        ? {
                            height: ["4px", `${Math.round(heightRatio * 12)}px`, "4px"],
                          }
                        : { height: "4px" }
                    }
                    transition={
                      isPlaying
                        ? {
                            duration: 0.8 + idx * 0.18,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }
                        : { duration: 0.2 }
                    }
                  />
                ))}
              </div>
              <p className="truncate text-[11px] text-charcoal-muted">
                {isPlaying ? "Đang phát nhạc" : "Đang tạm dừng"} · {formatTime(currentTime)}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            aria-label={expanded ? "Thu gọn điều khiển nhạc" : "Mở rộng điều khiển nhạc"}
            aria-expanded={expanded}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-charcoal-muted transition-colors hover:bg-burgundy/5 hover:text-burgundy"
          >
            {expanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronUp className="h-4 w-4" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
              className="overflow-hidden"
            >
              <div className="mt-3 space-y-3 border-t border-burgundy/10 pt-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] uppercase tracking-wider text-charcoal-subtle">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                  <input
                    type="range"
                    aria-label="Tiến độ phát nhạc"
                    min={0}
                    max={duration || 30}
                    step={0.5}
                    value={currentTime}
                    onChange={(e) => onSeek(Number(e.target.value))}
                    className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-burgundy/15 accent-burgundy"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onVolumeChange(volume === 0 ? 0.55 : 0)}
                    aria-label={volume === 0 ? "Bật âm thanh" : "Tắt tiếng"}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal-muted transition-colors hover:text-burgundy"
                  >
                    {volume === 0 ? (
                      <VolumeX className="h-4 w-4" />
                    ) : (
                      <Volume2 className="h-4 w-4" />
                    )}
                  </button>
                  <input
                    type="range"
                    aria-label="Âm lượng nhạc nền"
                    min={0}
                    max={1}
                    step={0.05}
                    value={volume}
                    onChange={(e) => onVolumeChange(Number(e.target.value))}
                    className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-burgundy/15 accent-burgundy"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.aside>
  );
}

