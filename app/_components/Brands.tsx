"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import { BRANDS } from "@/assets/additionalinfo";
export default function Brands({ brandsRef }: { brandsRef: any }) {
  const [activeImage, setActiveImage] = useState("/example.jpg");

  return (
    <div
      ref={brandsRef}
      className="md:pl-15 w-full min-h-screen bg-background text-white"
    >
      {/* CONTAINER */}
      <div className="flex flex-col lg:flex-row items-start px-4 sm:px-6 mx-auto">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 lg:h-screen lg:sticky top-0 flex items-center justify-start py-10 lg:py-0">
          <div className="max-md:text-center text-[clamp(1.8rem,4vw,2.5rem)] text-[var(--destructive-secondary)] font-bold">
            Brand experience
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/2 flex flex-col py-1 lg:py-20 relative">
          {/* ✅ Sticky preview image (hidden on mobile) */}
          <div className="hidden z-[200] sm:block absolute right-5 lg:right-10 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[240px] lg:h-[240px] sticky top-32">
            <Image
              src={activeImage}
              alt="brand"
              fill
              className="object-cover rounded-xl preview-img"
            />
          </div>

          {/* LIST */}
          {BRANDS.map(({ name, image }, index) => (
            <div
              key={index}
              data-image={image}
              className="item font-extrabold text-[clamp(1rem,6vw,4.7rem)] text-foreground md:leading-[0.3] sm:py-8"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER LINK */}
      <div className="text-center text-[var(--destructive-secondary)] cursor-pointer pb-6 capitalize font-bold underline text-sm sm:text-base">
        see past clients list ↗
      </div>
    </div>
  );
}
