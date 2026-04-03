"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type CursorProgressProps = {
  progress: number; // 0 → 100
};

export default function CursorLoader({ progress }: CursorProgressProps) {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<SVGCircleElement | null>(null);

  const size = 50;
  const stroke = 2;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  // 🎯 Cursor follow (optimized)
  useEffect(() => {
    if (!cursorRef.current) return;
    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;
    const offsetWidth = innerWidth * 0.1;
    const offsetHeight = innerHeight * 0.8; 
    gsap.set(cursorRef.current, {
      x: offsetWidth,
      y: offsetHeight,
    });

    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.2,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.2,
      ease: "power3.out",
    });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // 🎯 Progress animation (also optimized)
  useEffect(() => {
    if (!circleRef.current) return;

    const offset = circumference * (1 - progress / 100);

    gsap.to(circleRef.current, {
      strokeDashoffset: offset,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto", // 🔥 prevents stacking animations
    });
  }, [progress, circumference]);

  return (
    progress < 100 && (
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999]
  -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <div className="flex items-center gap-2">
          <svg width={size} height={size}>
            {/* Background */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="var(--foreground)"
              strokeWidth={stroke}
              fill="transparent"
            />

            {/* Progress */}
            <circle
              ref={circleRef}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="white"
              strokeWidth={stroke}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              strokeLinecap="round"
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          </svg>

          {/* Text OUTSIDE */}
          <span className="text-white text-xs text-[var(--foreground)] tracking-wide">
            Loading...
          </span>
        </div>
      </div>
    )
  );
}
