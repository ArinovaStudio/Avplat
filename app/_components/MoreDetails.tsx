"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function MoreDetails() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "+=500",
          scrub: true, // important for scroll sync
          pin: true,
        },
      });

      // UP elements → move upward
      tl.to(
        '[id^="up"]',
        {
          top: "-1px", // move up
          stagger: 0.2, // one by one
          ease: "none",
        },
        0
      );

      // DOWN elements → move downward
      tl.to(
        '[id^="down"]',
        {
          bottom: "1px", // move down
          stagger: 0.2,
          ease: "none",
        },
        0
      );
    }, ref);

    return () => ctx.revert();
  }, []);
  return (
    <div className="min-h-screen w-full">
      <div
        ref={ref}
        className="h-screen relative overflow-hidden flex justify-center items-center mb-20 w-full"
      >
        <span
          id={"up-1"}
          className="absolute text-center text-[17rem] font-bold uppercase leading-none inline-block bg-background"
        >
          professor
        </span>
        <span
          id={"up-2"}
          className="absolute text-center text-[17rem] font-bold uppercase leading-none inline-block bg-background"
        >
          professor
        </span>
        <span
          id={"up-3"}
          className="absolute text-center text-[17rem] font-bold uppercase leading-none inline-block bg-background"
        >
          professor
        </span>
        <span className="absolute text-center text-[17rem] font-bold uppercase leading-none inline-block bg-background">
          professor
        </span>
        <span
          id={"down-1"}
          className="absolute text-center text-[17rem] font-bold uppercase leading-none inline-block bg-background"
        >
          professor
        </span>
        <span
          id={"down-2"}
          className="absolute text-center text-[17rem] font-bold uppercase leading-none inline-block bg-background"
        >
          professor
        </span>
        <span
          id={"down-3"}
          className="absolute text-center text-[17rem] font-bold uppercase leading-none inline-block bg-background"
        >
          professor
        </span>
      </div>
      <div className="flex min-h-screen w-full">
        <div className="flex w-full">
          <div className="min-h-full w-full">
            <div className="h-full mx-auto md:w-[90%] relative">
              <span className="absolute -mt-6 capitalize font-bold text-[var(--destructive-secondary)]">
                professor of ux
              </span>
              <Image fill alt={"Loading..."} src={"/example.jpg"} />
              <h3 className="left-[80%] text-[var(--destructive)] leading-[0.9] top-[-10%] z-[99] absolute text-7xl font-extrabold w-2xl">
                Educating the Next Generation of Design Rebels & Changemakers.
              </h3>
            </div>
          </div>
          <div className="relative min-h-full min-w-lg">
            <div className="absolute right-5 bottom-5 grid gap-3">
              <p className="max-w-sm text-2xl text-foreground">
                The design world needs more than great portfolios—it needs
                fearless leaders who aren't afraid to push boundaries and
                challenge the status quo.
              </p>
              <Link className="text-xl font-bold underline" href={"#"}>
                My services↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
