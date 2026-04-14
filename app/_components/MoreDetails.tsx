"use client";
import Image from "next/image";
import LineRevealOnScroll from "@/components/LineReveal";
import { CONTENT } from "@/lib/content";

export default function MoreDetails({
  educationRef: ref,
  educationWrapperRef,
}: {
  educationRef: any;
  educationWrapperRef: any;
}) {
  const mp: Record<number, number> = { 1: 8, 2: 5, 3: 1 };
  const section1 = CONTENT.verticalScroll.section7.part1;
  const section2 = CONTENT.verticalScroll.section7.part2;
  return (
    <div
      ref={educationWrapperRef}
      id="education"
      className="relative z-10 md:pl-15 bg-background transition-colors duration-500 w-full"
    >
      <div ref={ref} className="h-screen relative w-full">
        {/* ── Strict Clipping Boundary (GSAP ignores this) ──────── */}
        {/* clip-path: inset(0) guarantees nothing will EVER render outside this div */}
        <div
          className="absolute inset-0 w-full h-full flex justify-center items-center"
          style={{ clipPath: "inset(0 0 0 0)" }}
        >
          <h6 className="absolute z-[20] text-[var(--destructive)] text-2xl md:text-5xl font-extrabold">
            {section1.front_heading}
          </h6>

          {[1, 2, 3].map((n) => (
            <span
              key={`up-${n}`}
              data-type="up"
              data-index={n}
              className="anim-text absolute tracking-widest text-center text-6xl sm:text-8xl md:text-[17rem] font-bold uppercase leading-[0.8] bg-background inline-block transition-colors duration-500"
              style={{ zIndex: mp[n] }}
            >
              {section1.heading_behind}
            </span>
          ))}

          {[1, 2, 3].map((n) => (
            <span
              key={`down-${n}`}
              data-type="down"
              data-index={n}
              className="anim-text absolute tracking-widest text-center text-6xl sm:text-8xl md:text-[17rem] font-bold uppercase bg-background leading-[0.8] inline-block transition-colors duration-500"
              style={{ zIndex: mp[n] }}
            >
              {section1.heading_behind}
            </span>
          ))}

          <span className="anim-text absolute tracking-widest text-center text-6xl sm:text-8xl md:text-[17rem] font-bold uppercase leading-none inline-block bg-background z-[10] transition-colors duration-500">
            {section1.heading_behind}
          </span>
        </div>
      </div>

      {/* ── Content below the pin ────────────────────────────────── */}
      <div className="flex min-h-screen relative mt-34 md:mt-40 w-full">
        <div className="grid md:grid-cols-[60%_40%] w-full gap-10 md:gap-0">
          <div className="md:h-auto md:min-h-full w-full">
            <div className="h-full max-md:min-h-[500px] w-[90%] mx-auto relative">
              {/* <span className="absolute -mt-6 capitalize font-bold text-[var(--destructive-secondary)]">
                professor of ux
              </span> */}
              <div className="max-md:relative max-md:h-[420px]">
                <Image
                  fill
                  alt="Professor of UX"
                  src={section2.image}
                  className="object-cover"
                />
              </div>
              <h3 className="left-2 max-md:mt-5 md:left-[80%] text-[var(--destructive)] leading-[0.9] md:top-[-10%] md:top-[-10%] z-[99] md:absolute text-4xl sm:text-5xl md:text-[5rem] w-full font-extrabold">
                <div className="max-md:hidden">
                  <LineRevealOnScroll text={section2.base_heading} />
                </div>

                <div className="md:hidden">
                  <LineRevealOnScroll text={section2.mobile_base_heading} />
                </div>
              </h3>
            </div>
          </div>

          <div className="relative w-full md:min-h-full md:min-w-lg px-5 md:px-0 pb-10 md:pb-0">
            <div className="md:absolute  md:bottom-5 grid gap-3 mt-10 md:mt-0">
              <p className="bottom-text w-full md:max-w-5/6 text-lg md:text-2xl text-foreground transition-colors duration-500">
                <LineRevealOnScroll text={section2.content} />
              </p>
              {/* <Link
                className="bottom-text text-lg md:text-xl font-bold underline transition-colors duration-500"
                href="#"
              >
                My services↗
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
