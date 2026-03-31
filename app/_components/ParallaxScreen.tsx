"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import useGsap from "@/components/useGSAP";
import { AvanttFont } from "@/assets/fonts";
import Image from "next/image";
const images = [
  {
    id: 1,
    src: "/example.jpg",
    speed: 0.3,
    position: "top-[8%] left-[2%] sm:top-[10%] sm:left-5",
  },
  {
    id: 2,
    src: "/example.jpg",
    speed: 0.6,
    position: "top-[18%] right-[2%] sm:top-[30%] sm:right-5",
  },
  {
    id: 3,
    src: "/example.jpg",
    speed: 1,
    position: "top-[100%] left-[2%] sm:top-[60%] sm:left-5",
  },
  {
    id: 4,
    src: "/example.jpg",
    speed: 0.8,
    position: "top-[100%] right-[2%] sm:bottom-[20%] sm:right-5",
  },
];
export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { gsap, ScrollTrigger } = useGsap();
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ctx: gsap.Context;

    // ✅ Small defer to wait for dynamic components to paint
    const timeout = setTimeout(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width:768px)", () => {
        ctx = gsap.context(() => {
          // ✅ Scope query to container, not whole document
          const items = gsap.utils.toArray<HTMLElement>(
            ".parallax-item",
            container
          );

          if (items.length === 0) return; // ✅ guard

          items.forEach((item) => {
            const speed = Number(item.dataset.speed || 0.5);

            gsap.fromTo(
              item,
              { y: 0 },
              {
                y: () => -(window.innerHeight * speed),
                ease: "none",
                scrollTrigger: {
                  trigger: container,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                  invalidateOnRefresh: true, // ✅ recalculates on resize/reflow
                },
              }
            );
          });

          ScrollTrigger.refresh(); // ✅ recalculate all positions after mount
        }, container);
      });
    }, 100); // small delay for dynamic imports to settle
    return () => {
      clearTimeout(timeout);
      ctx?.revert(); // ✅ clean gsap.context instead of manual kill loop
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="about"
      className="relative max-w-5xl  
      mx-auto md:pl-15 py-12 bg-black"
    >
      <div
        className={`uppercase relative text-center text-destructive text-[clamp(4rem,10vw,14rem)] leading-[0.8] grid font-extrabold ${AvanttFont.className}`}
      >
        <span>over</span>
        <span>20 years</span>
        <span>helping</span>
        <span>startups</span>
        <span>disrupt</span>
        <span>markets &</span>
        <span>fortune</span>
        <span>500s</span>
        <span>innovate</span>
        <span>at scale</span>

        {/* 🔥 PARALLAX IMAGES */}
        {images.map((img) => (
          <div
            key={img.id}
            // 🔥 FIX: Added a space before hover:scale-110
            className={`group parallax-item absolute ${img.position} w-[70px] h-[70px] sm:w-[110px] sm:h-[110px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] hover:scale-110 transition-all duration-500`}
          >
            <Image
              data-speed={img.speed}
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
  );
}
