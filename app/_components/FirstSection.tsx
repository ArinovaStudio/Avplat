"use client";
import React, { useState } from "react";
import { AvanttFont } from "@/assets/fonts";
import { motion } from "framer-motion";
export default function FirstSection({
  ref,
  innerRef
}: {
  ref: any;
  innerRef: any
}) {
  return (
    <div
      ref={ref}
      id="intro"
      className="pb-3 flex flex-col w-full
      bg-background
      md:h-screen
      px-4 md:px-0   
      max-w-screen
      "
    >
      <div
        ref={innerRef}
        className={`flex-1 text-[var(--destructive)] font-[700] font-['avantt'] 
        text-[3.5rem] sm:text-[4rem] md:text-[12rem] 
        font-[800] leading-[0.8] uppercase
        transition-all 
        duration-300
        py-5
        h-full
        flex flex-col
        text-center 
        ${AvanttFont.className}`}
      >
        <span className="line top-text text-xs sm:text-sm mt-2 sm:mt-5 w-full capitalize text-[var(--foreground)]">
          Design mentorship by Won J. You
        </span>
        <h1 className="line">Educator</h1>

        <div className="flex">
          <span
            className={`text-xs left-text hidden sm:text-sm mt-2 sm:mt-5 md:max-w-[180px] capitalize text-[var(--foreground)]`}
          >
            Design mentorship by Won J. You
          </span>

          <span className="line text-[var(--destructive)]">coach</span>
        </div>

        <h2 className="line">Mentor</h2>
        <h2 className="line">consultant</h2>

        <div className="reveal-it hidden mt-8 flex max-md:justify-center items-center gap-2 px-1">
          <span className="uppercase text-white font-bold text-xs md:text-sm">
            Scroll to discover
          </span>
          <div className="h-[2px] overflow-hidden w-[60px] md:w-[100px] animate-progress" />
        </div>
      </div>
    </div>
  );
}
