"use client";

import { useState } from "react";
import Image from "next/image";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { CONTENT } from "@/lib/content";
export default function Brands({ brandsRef }: { brandsRef: any }) {
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: brandsRef,
    offset: ["start end", "end start"],
  });
  const section = CONTENT.verticalScroll.section5;
  const IMAGES = section.IMAGES;
  useMotionValueEvent(scrollYProgress, "change", (v: number) => {
    const newIndex = Math.floor(v * IMAGES.length);
    setIndex(Math.min(newIndex, IMAGES.length - 1));
  });
  return (
    <div
      ref={brandsRef}
      className="md:pl-15  w-full md:min-h-screen bg-background text-white"
    >
      {/* <div className="flex flex-col lg:flex-row px-4 sm:px-6 mx-auto">
        <div className="w-full lg:w-1/2 py-10 lg:py-20">
          <div className="lg:sticky mt-80 lg:top-1/2 lg:-translate-y-1/2 max-md:text-center text-[clamp(1.8rem,4vw,2.5rem)] text-[var(--destructive-secondary)] font-bold">
            A Trusted Legacy. Reimagined for Modern Aviation.
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col py-1 lg:py-20 relative">
          <div className="hidden z-[200] sm:block absolute right-5 lg:right-10 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[240px] lg:h-[240px] sticky top-0">
            <Image
              src={IMAGES[index].src}
              alt="brand"
              fill
              className="object-cover mt-30 rounded-xl preview-img"
            />
          </div>

          <div className="item font-extrabold text-[clamp(1rem,4vw,4.5rem)] text-foreground leading-[1]  sm:py-8">
            AvPlat Charters was built on a simple promise to transform how
            private aviation is experienced and delivered. Backed by deep
            industry knowledge and shaped by innovation, we bring together years
            of operational expertise with a digital-first approach to private
            charter and flight fulfilment. Rooted in aviation heritage and
            driven by technology, AvPlat Charters evolves with the changing
            needs of aircraft operators, service providers, and charter clients
            — setting new benchmarks for efficiency, transparency, and
            reliability in private aviation.
          </div>
        </div>
      </div> */}

      <div className="flex flex-col lg:flex-row px-4 sm:px-6 mx-auto">
        <div className="w-full lg:w-[40%] py-10 lg:py-20">
          <div className="lg:sticky md:mt-80 lg:top-1/2 lg:-translate-y-1/2 max-md:text-center text-[clamp(1.8rem,4vw,2.5rem)] text-[var(--destructive-secondary)] font-bold">
            {section.leftHeading}
          </div>

          <div className="hidden z-[200] sm:block absolute right-5 lg:right-10 w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] lg:w-[320px] lg:h-[320px] sticky top-0">
            <Image
              src={IMAGES[index].src}
              alt="brand"
              fill
              className="object-cover mt-30 rounded-xl preview-img"
            />
          </div>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col py-1 lg:py-20 relative">
          {/* <div className="hidden z-[200] sm:block absolute right-5 lg:right-10 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[240px] lg:h-[240px] sticky top-0">
      <Image
        src={IMAGES[index].src}
        alt="brand"
        fill
        className="object-cover mt-30 rounded-xl preview-img"
      />
    </div> */}
          <div className="item font-bold text-[clamp(1.5rem,4vw,4rem)] text-foreground leading-[1] uppercase sm:py-8">
            {section.rightText}
          </div>
        </div>
      </div>

      {/* <div className="text-center text-[var(--destructive-secondary)] cursor-pointer pb-6 capitalize font-bold underline text-sm sm:text-base mt-20! lg:mt-0">
        see past clients list ↗
      </div> */}
    </div>
  );
}
