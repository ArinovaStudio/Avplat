"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "@/lib/gsapConfig";
import LineRevealOnScroll from "@/components/LineReveal";

export default function MoreDetails({
  educationRef: ref,
  educationWrapperRef,
}: {
  educationRef: any;
  educationWrapperRef: any;
}) {
  const mp: Record<number, number> = { 1: 8, 2: 5, 3: 1 };

  return (
    <div
      ref={educationWrapperRef}
      id="education"
      className="relative z-10 md:pl-15 bg-background transition-colors duration-500 w-full"
    >
      {/* ── Pinned Container (GSAP touches this) ──────────────── */}
      <div ref={ref} className="h-screen relative w-full">
        {/* ── Strict Clipping Boundary (GSAP ignores this) ──────── */}
        {/* clip-path: inset(0) guarantees nothing will EVER render outside this div */}
        <div
          className="absolute inset-0 w-full h-full flex justify-center items-center"
          style={{ clipPath: "inset(0 0 0 0)" }}
        >
          <h6 className="absolute z-[20] text-[var(--destructive)] text-2xl md:text-5xl font-extrabold">
            You can call me
          </h6>

          {[1, 2, 3].map((n) => (
            <span
              key={`up-${n}`}
              data-type="up"
              data-index={n}
              className="anim-text absolute text-center text-6xl sm:text-8xl md:text-[17rem] font-bold uppercase leading-[0.8] bg-background inline-block transition-colors duration-500"
              style={{ zIndex: mp[n] }}
            >
              professor
            </span>
          ))}

          {[1, 2, 3].map((n) => (
            <span
              key={`down-${n}`}
              data-type="down"
              data-index={n}
              className="anim-text absolute text-center text-6xl sm:text-8xl md:text-[17rem] font-bold uppercase bg-background leading-[0.8] inline-block transition-colors duration-500"
              style={{ zIndex: mp[n] }}
            >
              professor
            </span>
          ))}

          <span className="anim-text absolute text-center text-6xl sm:text-8xl md:text-[17rem] font-bold uppercase leading-none inline-block bg-background z-[10] transition-colors duration-500">
            professor
          </span>
        </div>
      </div>

      {/* ── Content below the pin ────────────────────────────────── */}
      <div className="flex min-h-screen relative mt-34 md:mt-40 w-full">
        <div className="flex flex-col md:flex-row w-full gap-10 md:gap-0">
          <div className="md:h-auto md:min-h-full w-full">
            <div className="h-full max-md:min-h-[500px] w-[90%] mx-auto md:w-[90%] relative">
              <span className="absolute -mt-6 capitalize font-bold text-[var(--destructive-secondary)]">
                professor of ux
              </span>
              <Image
                fill
                alt="Professor of UX"
                src="/example.jpg"
                className="object-cover"
              />
              <h3 className="left-2 md:left-[80%] text-[var(--destructive)] leading-[0.9] top-[-15%] md:top-[-10%] z-[99] max-md:hidden md:absolute text-4xl sm:text-5xl md:text-[5rem] w-full font-extrabold">
                <LineRevealOnScroll
                  text={`Educating the 
                Next Generation 
                of Design Rebels 
                & Changemakers.`}
                />
              </h3>
            </div>
          </div>

          <div className="relative w-full md:min-h-full md:min-w-lg px-5 md:px-0 pb-10 md:pb-0">
            <div className="md:absolute md:right-5 md:bottom-5 grid gap-3 mt-10 md:mt-0">
              <p className="bottom-text w-full md:max-w-sm text-lg md:text-2xl text-foreground transition-colors duration-500">
                <LineRevealOnScroll
                  text={`
                The design world needs more than great portfolios—it needs
                fearless leaders who aren't afraid to push boundaries and
                challenge the status quo.`}
                />
              </p>
              <Link
                className="bottom-text text-lg md:text-xl font-bold underline transition-colors duration-500"
                href="#"
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
