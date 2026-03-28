"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function SecondSection() {
  return (
    <section className="min-w-7xl bg-black text-white flex flex-col justify-between px-12 pb-10">
      {/* MAIN HEADING */}
      <div className="max-w-5xl text-left relative">
            <span className="absolute top-3 text-sm w-md font-medium text-[var(--anothersecondary)] uppercase tracking-wide">
            <p>Same passion.</p>
            <p>New mission.</p>
          </span>
          <h1 className="flex indent-40 text-[clamp(2rem,5.5vw,5.5rem)] font-extrabold leading-[1.05] text-[var(--foreground)]">
            After years of designing solutions for industry giants and game-
            changing startups...
          </h1>
        </div>

      {/* BOTTOM SECTION */}
      <div className="flex items-end justify-between gap-10">
        {/* LEFT: SHOWREEL */}
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 bg-orange-400 flex items-center justify-center text-black font-bold text-xs">
            SELECTED
            <br />
            WORKS
          </div>
          <div className="flex flex-col gap-5">
          <div>
            <p className="text-xs text-neutral-400 uppercase">Showreel</p>
            <p className="font-semibold">Design by Won</p>
          </div>

          <Button
            size="icon"
            variant="outline"
            className="rounded-full border-neutral-700"
          >
            <Play size={5} />
          </Button>
          </div>
        </div>

        {/* RIGHT: TEXT BLOCKS */}
        <div className="flex gap-12 max-w-md text-md text-[var(--foreground)] leading-relaxed">
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
    </section>
  );
}
