"use client";
import { AvanttFont } from "@/assets/fonts";
import LineRevealOnScroll from "@/components/LineReveal";
import { useEffect, useRef, useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalImages = 159;
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const currentScrollY = window.scrollY;

      // Compare current position to the last known position
      if (currentScrollY > lastScrollY.current) {
        // Scrolling DOWN -> Increment image
        setCurrentIndex((prev) => Math.min(totalImages, prev + 1));
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling UP -> Decrement image
        setCurrentIndex((prev) => Math.max(1, prev - 1));
      }

      // Update the stored scroll position for the next scroll event
      lastScrollY.current = currentScrollY;
    };

    // Set the initial scroll position when the component mounts
    lastScrollY.current = window.scrollY;

    window.addEventListener("scroll", handleScroll, { passive: true });

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
      <motion.div
        initial={{ opacity: 1, x: 500 }}
        animate={loaded ? { opacity: 1, x: 0 } : { opacity: 1, x: 500 }}
      >
        <img
          src={`/hero-photos/${currentIndex}.jpg`}
          className="h-full right-0 md:absolute md:w-[50%] -z-[0] object-cover"
        />
      </motion.div>
    </div>
  );
}
