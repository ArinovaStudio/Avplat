"use client";

import { AvanttFont } from "@/assets/fonts";
import Image from "next/image";
import { IMAGES } from "@/assets/additionalinfo";

export default function ParallaxSection({
  aboutRef: containerRef,
}: {
  aboutRef: any;
}) {
  return (
    <div ref={containerRef} className="w-full overflow-hidden mt-[300px]">
      <div className="relative max-w-5xl mx-auto md:pl-15 py-12 bg-black">
        <div
          className={`uppercase relative text-center text-destructive text-[clamp(4rem,10vw,15rem)] leading-[0.8] grid font-extrabold ${AvanttFont.className}`}
        >
         AvPlat Charters offers effortless access to private jets and helicopters through our digital charter platform. With 15+ years of industry experience, we manage everything from aircraft selection to flight operations, so you can focus on your journey.

          {IMAGES.map((img) => (
            <div
              key={img.id}
              data-speed={img.speed}
              className={`group z-[100] parallax-item absolute ${img.position} w-[70px] h-[70px] sm:w-[110px] sm:h-[110px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] hover:scale-110 transition-all duration-500`}
            >
              <Image
                src={img.src}
                alt="img"
                fill
                className="object-cover transition-all duration-500 group-hover:mix-blend-difference"
              />
            </div>
          ))}
        </div>
        <div className="font-bold text-center underline cursor-pointer mt-5 text-xl text-[var(--destructive-secondary)]">
          My Story ↗
        </div>
      </div>
    </div>
  );
}
