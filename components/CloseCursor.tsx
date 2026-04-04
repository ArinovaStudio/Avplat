"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type CloseCursorProps = {
  active: boolean; // show only when modal is open
  onClose: () => void;
};

export default function CloseCursor({ active, onClose }: CloseCursorProps) {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cursorRef.current || !active) return;

    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.2,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.2,
      ease: "power3.out",
    });

    const move = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [active]);

  if (!active) return null;

  return (
    <div
      ref={cursorRef}
      onClick={onClose}
      className="fixed top-0 left-0 z-[999] -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
    >
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
        <span className="text-black text-xl font-bold leading-none">✕</span>
      </div>
    </div>
  );
}