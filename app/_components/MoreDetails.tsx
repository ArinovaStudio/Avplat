"use client";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function MoreDetails() {
  const ref = useRef(null);
  const [isColorApplied, setIsColorApplied] = useState(false);
  const wrapperRef = useRef(null);

  const clampMap: Record<number, number> = {
    1: 100,
    2: 150,
    3: 200,
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "+=1200",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        '[id^="up"]',
        {
          y: (i, el) => {
            const num = Number(el.id.split("-")[1]);
            return -(clampMap[num] ?? 50);
          },
          stagger: 0.1,
          ease: "none",
        },
        0
      );

      tl.to(
        '[id^="down"]',
        {
          y: (i, el) => {
            const num = Number(el.id.split("-")[1]);
            return clampMap[num] ?? 50;
          },
          stagger: 0.1,
          ease: "none",
        },
        0
      );
    }, ref); // scope to ref
    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      end: "bottom top",
      onEnter: () => {
        setIsColorApplied(true);
        document.documentElement.style.setProperty(
          "--background",
          "oklch(0.9379 0.0423 74.15)"
        );
      },
      onLeave: () => {
        setIsColorApplied(false);
        document.documentElement.style.setProperty(
          "--background",
          "oklch(0.1149 0 0)"
        );
      },
      onEnterBack: () => {
        setIsColorApplied(true);
        document.documentElement.style.setProperty(
          "--background",
          "oklch(0.9379 0.0423 74.15)"
        );
      },
      onLeaveBack: () => {
        setIsColorApplied(false);
        document.documentElement.style.setProperty(
          "--background",
          "oklch(0.1149 0 0)"
        );
      },
    });
    ScrollTrigger.refresh();

    return () => {
      ctx?.revert();
    };
  }, []);
  const mp: any = {
    1: 8,
    2: 5,
    3: 1,
  };
  return (
<div
  ref={wrapperRef}
  id="education"
  className="relative md:pl-15 bg-background transition-colors duration-500 w-full overflow-hidden" // Added overflow-hidden to prevent horizontal scroll on mobile
>
  <div
    ref={ref}
    className="h-screen relative flex justify-center items-center w-full"
  >
    <h6 className="absolute z-[20] text-[var(--destructive)] text-2xl md:text-5xl font-extrabold">
      You can call me
    </h6>

    {/* UP layers */}
    {[1, 2, 3].map((n) => (
      <span
        key={`up-${n}`}
        id={`up-${n}`}
        className={`absolute text-center text-6xl sm:text-8xl md:text-[17rem] font-bold uppercase leading-[0.8] bg-background inline-block ${
          isColorApplied ? "text-white!" : ""
        }`}
        style={{ zIndex: mp[n] }}
      >
        professor
      </span>
    ))}

    {/* DOWN layers */}
    {[1, 2, 3].map((n) => (
      <span
        key={`down-${n}`}
        id={`down-${n}`}
        className={`absolute text-center text-6xl sm:text-8xl md:text-[17rem] font-bold uppercase bg-background leading-[0.8] inline-block ${
          isColorApplied ? "text-white!" : ""
        }`}
        style={{ zIndex: mp[n] }}
      >
        professor
      </span>
    ))}

    {/* CENTER — always on top */}
    <span
      className={`layer absolute text-center text-6xl sm:text-8xl md:text-[17rem] font-bold uppercase leading-none inline-block bg-background ${
        isColorApplied ? "text-white!" : ""
      } z-[10]`}
    >
      professor
    </span>
  </div>

  <div className="flex min-h-screen relative mt-34 md:mt-30 w-full">
    {/* 🔥 Changed to flex-col on mobile, flex-row on desktop */}
    <div className="flex flex-col md:flex-row w-full gap-10 md:gap-0">
      
      {/* Image container: Gave it a set height on mobile so 'fill' works, min-h-full on desktop */}
      <div className="md:h-[50vh] md:h-auto md:min-h-full w-full">
        <div className="h-full max-md:min-h-[500px] w-[90%] mx-auto md:w-[90%] relative">
          <span className="absolute -mt-6 capitalize font-bold text-[var(--destructive-secondary)]">
            professor of ux
          </span>
          <Image
            fill
            alt={"Loading..."}
            src={"/example.jpg"}
            className="object-cover max-md:h-full" // Added object-cover to ensure image scales nicely
          />
          
          {/* Text overlap: Re-positioned and resized for mobile, preserved for desktop */}
          <h3 className="left-2 md:left-[80%] text-[var(--destructive)] leading-[0.9] top-[-15%] md:top-[-10%] z-[99] max-md:hidden md:absolute text-4xl sm:text-5xl md:text-7xl font-extrabold w-[90%] md:w-2xl">
            Educating the Next Generation of Design Rebels & Changemakers.
          </h3>
        </div>
      </div>

      {/* Text block: Removed min-w-lg on mobile, preserved on desktop */}
      <div className="relative w-full md:min-h-full md:min-w-lg px-5 md:px-0 pb-10 md:pb-0">
        <div className="md:absolute md:right-5 md:bottom-5 grid gap-3 mt-10 md:mt-0">
          <p
            className={`w-full md:max-w-sm text-lg md:text-2xl text-foreground ${
              isColorApplied ? "text-[var(--destructive)]!" : ""
            }`}
          >
            The design world needs more than great portfolios—it needs
            fearless leaders who aren't afraid to push boundaries and
            challenge the status quo.
          </p>
          <Link
            className={`text-lg md:text-xl font-bold underline ${
              isColorApplied ? "text-[var(--destructive)]!" : ""
            }`}
            href={"#"}
          >
            My services↗
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
