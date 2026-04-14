"use client";
import { AvanttFont } from "@/assets/fonts";
import LineRevealOnScroll from "@/components/LineReveal";
import { useEffect, useRef } from "react";
import {CONTENT} from "@/lib/content";
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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const images = useRef<HTMLImageElement[]>([]);
  useEffect(() => {
    const frameCount = 82;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `/frames/frame_${i.toString().padStart(4, "0")}.jpg`;

      // draw first frame once loaded
      if (i === 1) {
        img.onload = () => {
          const canvas = canvasRef.current;
          if (!canvas) return;

          const context = canvas.getContext("2d");
          if (!context) return;

          canvas.width = canvas.clientWidth;
          canvas.height = canvas.clientHeight;

          context.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
      }

      images.current.push(img);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const frameCount = 82;

    const render = (index: number) => {
      const img = images.current[index];
      if (!img) return;

      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight * 2;

      const progress = scrollTop / maxScroll;

      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(progress * frameCount)
      );

      render(frameIndex);
    };

    // ✅ SHOW FIRST FRAME IMMEDIATELY
    render(0);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const LINES = CONTENT.horizontalScroll.section1.lines;
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
        {
          LINES.map((line,idx)=><h1 key={idx} className="line">{line}</h1>)
        }
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
        {
          LINES.map((line,idx)=><LineRevealOnScroll loaded={loaded} key={idx} text={line} />)
        }
      </div>
      {/* <motion.video
        ref={videoRef}
        src="/video2.mp4"
        muted
        initial={{ opacity: 0, x: 500 }}
        animate={loaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 500 }}
        playsInline
        autoPlay
        controls={false}
        className="h-full right-0 md:absolute md:w-[50%] -z-[0] object-cover"
      /> */}
      {/* <canvas className="w-full h-screen" id="frame">
        <img src="./assets/frames/frame_0001" alt="" />
      </canvas> */}

      {/* <div className="w-[50%] h-full bg-amber-400">
        <img src="/frames/frame_0001.jpg" alt="hello" className="h-full right-0 md:absolute md:w-[50%] -z-[0] object-cover"/>
      </div> */}

      <canvas
        ref={canvasRef}
        className="h-full right-0 md:absolute md:w-[50%] -z-[0] object-cover"
      />
    </div>
  );
}
