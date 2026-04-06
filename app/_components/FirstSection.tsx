"use client";
import { AvanttFont } from "@/assets/fonts";
import LineRevealOnScroll from "@/components/LineReveal";
import { DESIGN_BY } from "@/lib/constants";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
export default function FirstSection({
  ref,
  innerRef,
  loaded,
  progress,
}: {
  ref: any;
  innerRef: any;
  loaded: boolean;
  progress: number;
}) {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current! as HTMLVideoElement;
    if (!video) return;

    const handleScroll = () => {
      if (!video.duration) return;

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      // 🔥 adjust these
      const start = windowHeight * 0.5; // animation starts later
      const end = windowHeight * 2; // animation finishes later

      const progress = (scrollTop - start) / (end - start);

      // clamp between 0 → 1
      const clamped = Math.min(Math.max(progress, 0), 1);

      video.currentTime = clamped * video.duration;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      ref={ref}
      id="intro"
      className="pb-3 flex max-md:flex-col w-full
       bg-background
      relative
      md:h-screen
      px-4 md:px-0   
      max-w-[130vw]
      "
    >
      <div
        ref={innerRef}
        className={`flex-1 z-[1] text-[var(--destructive)] font-[700] font-['avantt'] 
        text-[3.5rem] sm:text-[4rem] md:text-[12rem] 
        font-[800] leading-[0.8] uppercase
        transition-all 
        md:pl-5
        duration-300
        py-5
        relative
        max-md:hidden
        h-full
        flex flex-col
        text-center 
        max-w-screen
        ${AvanttFont.className}`}
      >
        <span className="line top-text text-xs sm:text-sm mt-2 sm:mt-5 w-full capitalize text-[var(--foreground)]">
          {/* Design by {DESIGN_BY} */}
        </span>
        <h1 className="line">A smarter</h1>

        <div className="flex">
          <span
            className={`text-xs left-text hidden sm:text-sm mt-2 sm:mt-5 max-w-[180px] capitalize text-[var(--foreground)]`}
          ></span>

          <span className="line text-[var(--destructive)]">way</span>
        </div>

        <h2 className="line">to Book</h2>
        <h2 className="line">private</h2>

        {/* <div className="reveal-it hidden mt-8 flex max-md:justify-center items-center gap-2 px-1">
          <span className="uppercase text-white font-bold text-xs md:text-sm">
            Scroll to discover
          </span>
          <div className="h-[2px] overflow-hidden w-[60px] md:w-[100px] animate-progress" />
        </div> */}
        <div className="reveal-it hidden mt-8 flex max-md:justify-center items-center gap-2 px-1">
          <span className="uppercase text-white font-bold text-xs md:text-sm">
            {loaded ? "Scroll to discover" : "Loading"}
          </span>

          <div className="h-[2px] overflow-hidden w-[60px] md:w-[100px]  relative">
            {loaded ? (
              // original animation after loaded
              <div className="h-[2px] overflow-hidden w-[60px] md:w-[100px] animate-progress" />
            ) : (
              // progress bar while loading
              <div className="bg-zinc-700 w-full h-full">
                <div
                  className="absolute inset-0 bg-white transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`md:hidden text-[var(--destructive)] text-left ${AvanttFont.className} font-extrabold uppercase text-7xl`}
      >
        <LineRevealOnScroll loaded={loaded} text={"A smarter"} />
        <LineRevealOnScroll loaded={loaded} text={"way"} />
        <LineRevealOnScroll loaded={loaded} text={"to fly"} />
        <LineRevealOnScroll loaded={loaded} text={"private"} />
      </div>
      <motion.video
        ref={videoRef}
        src="/video2.mp4"
        muted
        initial={{ opacity: 0, x: 500 }}
        animate={loaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 500 }}
        playsInline
        controls={false}
        className="h-full right-0 md:absolute md:w-[50%] -z-[0] object-cover"
      />
    </div>
  );
}
