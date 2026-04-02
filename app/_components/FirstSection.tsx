"use client";
import React, { useState } from "react";
import { AvanttFont } from "@/assets/fonts";
import { motion } from "framer-motion";
export default function FirstSection({ ref, loaded }: { ref: any; loaded: boolean }) {
  const [triggerDisappear, setTextDisappear] = useState(false);
  const [triggerStart, setTextStart] = useState(false);
  return (
    <div
      ref={ref}
      id="intro"
      className="pb-3 flex flex-col w-full justify-between 
      bg-background
      md:h-screen
      px-4 md:px-0   
      max-w-screen
      "
    >
      <motion.div
        transition={{ duration: 0.5 }}
        initial={{translateX: "10%"}}
        animate={
          triggerDisappear ? {translateX: 0}:{translateX: "20%"}
        }
        className={`text-[var(--destructive)] font-[700] font-['avantt'] 
        text-[3.5rem] sm:text-[4rem] md:text-[11.5rem] 
        font-[900] leading-[0.9] uppercase
        items-start
        transition-all 
        duration-300
        flex flex-col
        text-center 
        ${AvanttFont.className}`}
      >
        <motion.span
          initial={{ y: 800,x: -300 }}
          animate={
            loaded ? (triggerStart ? { y: -300 } : { y: 0 }) : { y: 800 }
          }
          transition={{ duration: 1, delay: 0 }}
          className="text-xs sm:text-sm mt-2 sm:mt-5 w-full capitalize text-[var(--foreground)]"
        >
          Design mentorship by Won J. You
        </motion.span>
        <motion.h1
          initial={{ y: 800 }}
          animate={loaded ? { y: 0 } : { y: 800 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Educator
        </motion.h1>

        <div className="flex flex-col sm:flex-row sm:items-start gap-2">
          <motion.span
            initial={{ x: -600 }}
            animate={triggerDisappear ? { x: 0 } : { x: -600}}
            transition={{ duration: 0.5 }}
            className={`text-xs sm:text-sm mt-2 sm:mt-5 md:max-w-[180px] capitalize text-[var(--foreground)] ${triggerDisappear ? "block":"hidden"}`}
          >
            Design mentorship by Won J. You
          </motion.span>

          <motion.span
            initial={{ y: 800 }}
            animate={loaded ? { y: 0 } : { y: 800 }}
            transition={{ duration: 1, delay: 3 }}
            className="text-[var(--destructive)]"
          >
            coach
          </motion.span>
        </div>

        <motion.h2
          initial={{ y: 800 }}
          animate={loaded ? { y: 0 } : { y: 800 }}
          transition={{ duration: 1, delay: 4 }}
          onAnimationComplete={() => {
            if (loaded) {
              setTextStart(true);
            }
          }}
        >
          Mentor
        </motion.h2>
        <motion.h2
          initial={{ y: 800 }}
          animate={loaded ? { y: 0 } : { y: 800 }}
          transition={{ duration: 1, delay: 5 }}
          onAnimationComplete={() => {
            if (loaded) {
              setTextDisappear(true);
            }
          }}
        >
          consultant
        </motion.h2>
        <div className="flex max-md:justify-center items-center gap-2 mt-6 md:mt-3 px-1">
          <span className="uppercase text-white font-bold text-xs md:text-sm">
            Scroll to discover
          </span>
          <div className="h-[2px] w-[60px] md:w-[100px] animate-progress" />
        </div>
      </motion.div>
    </div>
  );
}
