"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AvanttFont } from "@/assets/fonts";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
const images = [
  {
    id: 1,
    src: "/example.jpg",
    speed: 0.3,
    position: "top-[10%] left-5",
  },
  {
    id: 2,
    src: "/example.jpg",
    speed: 0.6,
    position: "top-[30%] right-5",
  },
  {
    id: 3,
    src: "/example.jpg",
    speed: 1,
    position: "top-[60%] left-5",
  },
  {
    id: 4,
    src: "/example.jpg",
    speed: 0.8,
    position: "bottom-[20%] right-5",
  },
];
export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = gsap.utils.toArray<HTMLElement>(".parallax-item");

    items.forEach((item) => {
      const speed = Number(item.dataset.speed || 0.5);

      gsap.to(item, {
        y: () => -(window.innerHeight * speed) + 1000, // 👈 moves UP on scroll down
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true, // 🔥 THIS makes it follow scroll both directions
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative md:min-h-[200vh] w-full overflow-hidden py-12 bg-black"
    >
      <div
        className={`max-w-5xl mx-auto uppercase relative text-center text-destructive text-[14rem] leading-[0.8] grid font-extrabold ${AvanttFont.className}`}
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
            className={`group absolute ${img.position} w-50 h-50 hover:h-60 hover:w-60 transition-all duration-500`}
          >
            <Image
              data-speed={img.speed}
              src={img.src}
              alt="img"
              fill
              className="parallax-item object-cover group-hover:mix-blend-screen"
            />
          </div>
        ))}

      </div>
        <div className="font-bold text-center underline cursor-pointer mt-5 text-xl text-[var(--destructive-secondary)]">My Story ↗</div>
    </div>
  );
}
