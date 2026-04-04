"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react"; 
import { DESIGN_BY } from "@/lib/constants";
import VideoDialog from "@/components/VideoPlayer";
export default function SecondSection() { 
  return (
    <section className="md:w-screen h-full w-full bg-black text-white px-4 md:px-12 pb-10">
      <div className="max-w-7xl mx-auto flex flex-col justify-between items-center md:h-full mx-auto gap-10 md:gap-0">

        {/* MAIN HEADING */}
        <div className="text-left relative">
          
          <span className="
            static md:absolute 
            block mb-4 md:mb-0
            md:top-3 
            text-xs md:text-sm 
            w-auto md:w-md 
            font-medium text-[var(--anothersecondary)] 
            uppercase tracking-wide
          ">
            <p>Same passion.</p>
            <p>New mission.</p>
          </span>

          <h1 className="
            flex 
            indent-0 md:indent-40 
            text-[clamp(1.8rem,4vw,3rem)] 
            font-extrabold leading-[1.05] 
            text-[var(--foreground)]
            max-md:text-center
            md:max-w-6xl
            max-md:text-left
          ">
            AvPlat Charters offers effortless access to private jets and helicopters through our digital charter platform. With 15+ years of industry experience, we manage everything from aircraft selection to flight operations, so you can focus on your journey.
          </h1>
        </div>

        {/* BOTTOM SECTION */}
        <div className="
         w-full
          max-md:flex-col-reverse
          flex flex-col md:flex-row 
          items-start md:items-end 
          justify-between 
          gap-10
        ">

          {/* LEFT: SHOWREEL */}
          <div className="flex max-md:w-full max-md:justify-between items-center gap-4">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-orange-400 flex items-center justify-center text-black font-bold text-[10px] md:text-xs">
              SELECTED
              <br />
              WORKS
            </div>

            <div className="flex flex-col gap-3 md:gap-5">
              <div>
                <p className="text-[10px] md:text-xs text-neutral-400 uppercase">
                  Showreel
                </p>
                <p className="text-sm md:text-base font-semibold">
                  Design by {DESIGN_BY}
                </p>
              </div>
              <VideoDialog>
              <Button 
                size="icon"
                variant="outline"
                className="rounded-full border-neutral-700 w-8 h-8 md:w-10 md:h-10"
              >
                <Play size={12} />
              </Button>
              </VideoDialog>
            </div>
          </div>

          {/* RIGHT: TEXT BLOCKS */}
          <div className="
            flex flex-col md:flex-row 
            gap-6 md:gap-12 
            max-w-full md:max-w-md 
            text-sm md:text-md 
            text-[var(--foreground)] 
            leading-relaxed
            max-md:text-justify
          ">
            <p>
              My focus has shifted from client projects to coaching exceptional
              designers who are ready to lead, innovate, and create meaningful
              change.
            </p>

            <p>
              My mission is to help create the next generation of design leaders
              who think differently, challenge boldly, and create with purpose.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}