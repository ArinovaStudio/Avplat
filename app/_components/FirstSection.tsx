import React from "react"; 
import { AvanttFont } from "@/assets/fonts";

export default function FirstSection() { 
  return (
    <div id="intro" className="pb-3 flex flex-col w-full justify-between 
    bg-background
      md:h-screen
      px-4 md:px-0   
      max-w-screen
      ">
      
      <div
        className={`text-[var(--destructive)] font-[700] font-['avantt'] 
        max-w-3xl 
        text-[3.5rem] sm:text-[4rem] md:text-[11rem] 
        font-[900] leading-[0.9] uppercase 
        flex flex-col md:text-left
        text-center 
        ${AvanttFont.className}`}
      >
        <h1>Educator</h1>

        <div className="flex flex-col sm:flex-row sm:items-start gap-2">
          <span className="text-xs sm:text-sm mt-2 sm:mt-5 md:max-w-[180px] capitalize text-[var(--foreground)]">
            Design mentorship by Won J. You
          </span>

          <span className="text-[var(--destructive)]">
            coach
          </span>
        </div>

        <h2>Mentor</h2>
        <h2>consultant</h2>
      </div>

      <div className="flex max-md:justify-center items-center gap-2 mt-6 md:mt-3 px-1">
        <span className="uppercase font-bold text-xs md:text-sm">
          Scroll to discover
        </span>
        <div className="h-[2px] w-[60px] md:w-[100px] animate-progress" />
      </div>
    </div>
  );
}