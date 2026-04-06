"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { DESIGN_BY } from "@/lib/constants";
import VideoDialog from "@/components/VideoPlayer";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
export default function SecondSection() {
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section className="md:w-screen h-full w-full bg-black text-white px-4 md:px-12 pb-10">
      <div className="max-w-7xl py-5 mx-auto flex flex-col justify-between items-center md:h-full mx-auto gap-10 md:gap-0">
        {/* MAIN HEADING */}
        <div className="text-left relative">
          <span
            className="
            static md:absolute 
            block mb-4 md:mb-0
            md:top-3 
            text-xs md:text-sm 
            w-auto md:w-md 
            font-medium text-[var(--anothersecondary)] 
            uppercase tracking-wide
          "
          >
            <p>Same passion.</p>
            <p>New mission.</p>
          </span>

          <h1
            className="
            flex 
            indent-0 md:indent-40 
            text-[clamp(1.8rem,4vw,3rem)] 
            font-extrabold leading-[1.05] 
            text-[var(--foreground)]
            max-md:text-center
            md:max-w-6xl
            max-md:text-left
          "
          >
            AvPlat Charters offers effortless access to private jets and
            helicopters through our digital charter platform. With 15+ years of
            industry experience, we manage everything from aircraft selection to
            flight operations, so you can focus on your journey.
          </h1>
        </div>

        {/* BOTTOM SECTION */}
        <div
          className="
         w-full
          max-md:flex-col-reverse
          flex flex-col md:flex-row
          max-md:flex-wrap 
          items-start md:items-end 
          justify-between 
          gap-10
        "
        >
          {/* RIGHT: TEXT BLOCKS */}
          <div
            className="
            flex flex-col md:flex-row 
            gap-6 md:gap-6 
            md:max-w-full
            w-full 
            text-sm md:text-md 
            text-[var(--foreground)] 
            leading-relaxed
            max-md:text-justify
          "
          >
            <div className="flex max-md:w-full max-md:justify-between items-center gap-4">
              <motion.div
                layoutId="video-expand-magic" // Matches the ID below
                onClick={() => setExpanded(true)}
                className="w-16 h-16 relative md:w-24 md:h-24 bg-orange-400 flex items-center justify-center text-black font-bold text-[10px] md:text-xs cursor-pointer overflow-hidden"
              >
                <Image
                  src={"/video-thumbnail.png"}
                  className="object-cover"
                  alt={"Logo"}
                  fill
                />
              </motion.div>

              {/* 2. The Expanded View (Portaled directly to the <body>, escaping GSAP) */}
              {mounted &&
                createPortal(
                  <AnimatePresence>
                    {expanded && (
                      <div className="fixed inset-0 z-[999] flex items-center justify-center">
                        {/* Background Dark Overlay */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onClick={() => setExpanded(false)}
                          className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                        />

                        {/* The Expanded Image using Flexbox to perfectly center it */}
                        <motion.div
                          layoutId="video-expand-magic" // Matches the ID above
                          className="max-md:h-[40vh] relative w-[80vw] h-[80vh] bg-orange-400 rounded-2xl overflow-hidden z-10 shadow-2xl"
                        >
                          <Image
                            src={"/video-thumbnail.png"}
                            className="object-cover"
                            alt={"Logo"}
                            fill
                          />
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>,
                  document.body
                )}

              <div className="flex flex-col gap-3 md:gap-5">
                <div>
                  <p className="text-[10px] md:text-xs text-neutral-400 uppercase">
                    Tutorial
                  </p>
                  <p className="text-sm md:text-base font-semibold">
                    {DESIGN_BY}
                  </p>
                </div>
                <VideoDialog
                  url={
                    "https://www.youtube.com/embed/IlbOpSccI_E?autoplay=1&controls=1&modestbranding=1&rel=0"
                  }
                  setExpanded={setExpanded}
                >
                  <Button
                    size="icon"
                    onClick={() => {
                      setExpanded(true);
                    }}
                    variant="outline"
                    className="rounded-full border-neutral-700 w-8 h-8 md:w-10 md:h-10"
                  >
                    <Play size={12} />
                  </Button>
                </VideoDialog>
              </div>
            </div>
            <div className="flex max-md:w-full max-md:justify-between items-center gap-4">
              <motion.div
                layoutId="video-expand-magic-1" // Matches the ID below
                onClick={() => setExpanded1(true)}
                className="w-16 h-16 relative md:w-24 md:h-24 bg-orange-400 flex items-center justify-center text-black font-bold text-[10px] md:text-xs cursor-pointer overflow-hidden"
              >
                <Image
                  src={"/video-thumbnail.png"}
                  className="object-cover"
                  alt={"Logo"}
                  fill
                />
              </motion.div>

              {/* 2. The Expanded View (Portaled directly to the <body>, escaping GSAP) */}
              {mounted &&
                createPortal(
                  <AnimatePresence>
                    {expanded1 && (
                      <div className="fixed inset-0 z-[999] flex items-center justify-center">
                        {/* Background Dark Overlay */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onClick={() => setExpanded1(false)}
                          className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                        />

                        {/* The Expanded Image using Flexbox to perfectly center it */}
                        <motion.div
                          layoutId="video-expand-magic-1" // Matches the ID above
                          className="max-md:h-[40vh] relative w-[80vw] h-[80vh] bg-orange-400 rounded-2xl overflow-hidden z-10 shadow-2xl"
                        >
                          <Image
                            src={"/video-thumbnail.png"}
                            className="object-cover"
                            alt={"Logo"}
                            fill
                          />
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>,
                  document.body
                )}

              <div className="flex flex-col gap-3 md:gap-5">
                <div>
                  <p className="text-[10px] md:text-xs text-neutral-400 uppercase">
                    Tutorial
                  </p>
                  <p className="text-sm md:text-base max-w-[140px] md:max-w-[100px] font-semibold">
                    How to Get Trip Cost Estimate and Activate Trip
                  </p>
                </div>
                <VideoDialog
                  url={
                    "https://www.youtube.com/embed/z1oJA1bsF6Y?si=azNfAkFaGVD5WwlG&autoplay=1&controls=1&modestbranding=1&rel=0"
                  }
                  setExpanded={setExpanded1}
                >
                  <Button
                    size="icon"
                    onClick={() => {
                      setExpanded1(true);
                    }}
                    variant="outline"
                    className="rounded-full border-neutral-700 w-8 h-8 md:w-10 md:h-10"
                  >
                    <Play size={12} />
                  </Button>
                </VideoDialog>
              </div>
            </div>
            <div className="flex max-md:w-full max-md:justify-between items-center gap-4">
              <motion.div
                layoutId="video-expand-magic-2" // Matches the ID below
                onClick={() => setExpanded2(true)}
                className="w-16 h-16 relative md:w-24 md:h-24 bg-orange-400 flex items-center justify-center text-black font-bold text-[10px] md:text-xs cursor-pointer overflow-hidden"
              >
                <Image
                  src={"/video-thumbnail.png"}
                  className="object-cover"
                  alt={"Logo"}
                  fill
                />
              </motion.div>

              {/* 2. The Expanded View (Portaled directly to the <body>, escaping GSAP) */}
              {mounted &&
                createPortal(
                  <AnimatePresence>
                    {expanded2 && (
                      <div className="fixed inset-0 z-[999] flex items-center justify-center">
                        {/* Background Dark Overlay */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onClick={() => setExpanded2(false)}
                          className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                        />

                        {/* The Expanded Image using Flexbox to perfectly center it */}
                        <motion.div
                          layoutId="video-expand-magic-2" // Matches the ID above
                          className="max-md:h-[40vh] relative w-[80vw] h-[80vh] bg-orange-400 rounded-2xl overflow-hidden z-10 shadow-2xl"
                        >
                          <Image
                            src={"/video-thumbnail.png"}
                            className="object-cover"
                            alt={"Logo"}
                            fill
                          />
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>,
                  document.body
                )}

              <div className="flex flex-col gap-3 md:gap-5">
                <div>
                  <p className="text-[10px] md:text-xs text-neutral-400 uppercase">
                    Tutorial
                  </p>
                  <p className="text-sm md:text-base max-w-[140px] md:max-w-[100px] font-semibold">
                     How to Setup Multi-Location Rate cards
                  </p>
                </div>
                <VideoDialog
                  url={
                    "https://www.youtube.com/embed/JPFWQ74BeGc?si=BQM9_x1f4YqIBZ3a&autoplay=1&controls=1&modestbranding=1&rel=0"
                  }
                  setExpanded={setExpanded2}
                >
                  <Button
                    size="icon"
                    onClick={() => {
                      setExpanded2(true);
                    }}
                    variant="outline"
                    className="rounded-full border-neutral-700 w-8 h-8 md:w-10 md:h-10"
                  >
                    <Play size={12} />
                  </Button>
                </VideoDialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
