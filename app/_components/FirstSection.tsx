"use client";
import { AvanttFont } from "@/assets/fonts";
import { DESIGN_BY } from "@/lib/constants";
import { useEffect, useRef } from "react";
export default function FirstSection({
  ref,
  innerRef,
}: {
  ref: any;
  innerRef: any;
}) {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current as any;
    if (!video) return;

    const handleScroll = () => {
      if (!video.duration) return;

      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollFraction = scrollTop / scrollHeight;

      // map scroll to video duration
      video.currentTime = scrollFraction * video.duration;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [videoRef.current]);
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
        duration-300
        py-5
        relative
        h-full
        flex flex-col
        text-center 
        max-w-screen
        ${AvanttFont.className}`}
      >
        <span className="line top-text text-xs sm:text-sm mt-2 sm:mt-5 w-full capitalize text-[var(--foreground)]">
          Design by {DESIGN_BY}
        </span>
        <h1 className="line">A smarter</h1>

        <div className="flex">
          <span
            className={`text-xs left-text hidden sm:text-sm mt-2 sm:mt-5 md:max-w-[180px] capitalize text-[var(--foreground)]`}
          >
            Design by {DESIGN_BY}
          </span>

          <span className="line text-[var(--destructive)]">way</span>
        </div>

        <h2 className="line">to fly</h2>
        <h2 className="line">private</h2>

        <div className="reveal-it hidden mt-8 flex max-md:justify-center items-center gap-2 px-1">
          <span className="uppercase text-white font-bold text-xs md:text-sm">
            Scroll to discover
          </span>
          <div className="h-[2px] overflow-hidden w-[60px] md:w-[100px] animate-progress" />
        </div>
      </div>
      <video
        ref={videoRef}
        src="/hero-video.mp4"
        muted
        playsInline
        controls={false}
        className="h-full right-0 absolute w-[50%] -z-[0] object-fill"
      />
    </div>
  );
}
