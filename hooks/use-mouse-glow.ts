"use client";

import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
  isActive: boolean;
}

export function useMouseGlow() {
  const [position, setPosition] = useState<MousePosition>({
    x: -500,
    y: -500,
    isActive: false,
  });

  useEffect(() => {
    const isDesktopPointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!isDesktopPointer || prefersReducedMotion) return;

    const handleMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
        isActive: true,
      });
    };

    const handleLeave = () => {
      setPosition((prev) => ({ ...prev, isActive: false }));
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return position;
}

