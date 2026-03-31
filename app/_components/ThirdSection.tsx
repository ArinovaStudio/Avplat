"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

export default function ThirdSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<SVGSVGElement | null>(null);
  return (
    <div
      ref={ref}
      id="mentorship"
      className="
        relative 
        w-full 
        max-md:w-screen
        h-screen
      "
    >

      <svg
        ref={textRef}
        className="
          absolute inset-0 
          min-w-full   // 👈 allow scroll room on mobile
          w-max 
          h-full 
          z-10
        "
      >
        <defs>
          <mask id="text-mask">
            <rect width="100%" height="100%" fill="white" />
            <text
              x="0%"
              id="text-to-be-scaled"
              y="50%"
              textAnchor="start"
              dy=".35em"
              fontSize="120"
              className="md:[font-size:800px]"
              fontWeight="900"
              fill="black"
            >
              MEET WON
            </text>
          </mask>
        </defs>

        <rect width="100%" height="100%" fill="black" mask="url(#text-mask)" />
      </svg>
    </div>
  );
}