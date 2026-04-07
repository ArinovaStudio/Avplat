"use client";
import { AvanttFont } from "@/assets/fonts";
import React, { useEffect, useState } from "react";

export default function MobileLoader({ loaded,progress }: { loaded: boolean; progress: number }) {
  return (
    !loaded && (
      <div className="min-h-[105vh] bg-background fixed top-0 w-full flex justify-center z-[9999] items-center">
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="relative h-25 w-35 flex items-center justify-center">
            <span className="text-4xl md:text-5xl font-extrabold font-streach tracking-tight">
              {progress}%
            </span>
          </div>

          {/* <span className={`uppercase bg-orange-500 text-5xl text-gray-500 bg-clip-text font-extrabold ${syne.className}`}>Loading</span> */}
          <div className="flex flex-col items-center gap-2 w-[220px]">
            {/* TEXT ROW */}
            <div className="flex w-full justify-center items-end">
              <h1
                className={`uppercase text-4xl text-center font-extrabold ${AvanttFont.className}`}
              >
                Loading
              </h1>
            </div>

            {/* PROGRESS BAR */}
            <div className="w-full h-[6px] bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-foreground transition-all duration-200 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}
