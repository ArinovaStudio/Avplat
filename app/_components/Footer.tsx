"use client";
import Image from "next/image";
import { AvanttFont } from "@/assets/fonts";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LineRevealOnScroll from "@/components/LineReveal";
import { SITE_NAME } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
gsap.registerPlugin(ScrollTrigger, useGSAP);
export default function Footer({
  footerRef: wrapperRef,
  footerContainerRef: containerRef,
}: {
  footerRef: any;
  footerContainerRef: any;
}) {
  return (
    <div
      ref={wrapperRef}
      id="getintouch"
      className="w-full md:pl-15 relative overflow-hidden"
    >
      <div
        ref={containerRef}
        data-speed="0.3"
        className="z-[10] relative py-12 bg-center flex justify-between flex-col items-start md:min-h-screen parallax-container w-full"
      >
        <Image
          src={"/Nose_Left.JPG"}
          alt={"loading..."}
          fill
          className="object-cover brightness-50 contrast-100 w-full h-full grayscale-100 -z-1"
        />

        <div
          className={`w-full uppercase text-[var(--destructive)] text-3xl sm:text-5xl md:text-[7rem] leading-[1.5] md:leading-[1] font-extrabold flex flex-col ${AvanttFont.className}`}
        >
          <motion.h6
            initial={{ x: 0 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="max-md:text-center md:text-center"
          >
            <LineRevealOnScroll text={"Save"} />
          </motion.h6>
          <motion.h6
            initial={{ x: 430 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="max-md:text-center md:text-left"
          >
            <LineRevealOnScroll text={"More on"} />
          </motion.h6>
          <motion.h6
            initial={{ x: -430 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="max-md:text-center md:text-right"
          >
            <LineRevealOnScroll text={"Every Charter"} />
          </motion.h6>
          <motion.h6
            initial={{ x: 0 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="max-md:text-center md:text-right md:mt-15 md:pr-5 md:pr-0 md:mr-40"
          >
            <LineRevealOnScroll text={"24×7 Assistance"} />
          </motion.h6>
        </div>

        {/* RESPONSIVE GRID: Added gap-10 for mobile stacking, text scaling */}
        {/* <div className="max-w-3xl pl-5 pr-5 md:pr-0 w-full grid gap-10 md:gap-0 md:grid-cols-3 mt-10 md:mt-0">
          <div className="grid gap-3">
            <span className="uppercase text-[var(--destructive-secondary)] font-bold text-base md:text-lg flex items-center gap-1">
              <span className="text-xs">■</span> schedule a call
            </span>
            <a
              className="text-xl sm:text-2xl md:text-3xl max-w-fit bottom-shine border-b-3 border-b-[var(--foreground)] pb-1 font-extrabold tracking-[1.1]"
              href={"https://calendly.com"}
              target="_blank"
            >
              <LineRevealOnScroll text={"calendly.com"} />
            </a>
          </div>
          <div className="grid gap-3">
            <span className="uppercase text-[var(--destructive-secondary)] font-bold text-base md:text-lg flex items-center gap-1">
              <span className="text-xs">■</span> leave a message
            </span>
            <a
              className="text-xl sm:text-2xl md:text-3xl max-w-fit bottom-shine border-b-3 border-b-[var(--foreground)] pb-1 font-extrabold tracking-[1.1]"
              href={"tel:312-436-1845"}
            >
              <LineRevealOnScroll text={"312-436-1845"} />
            </a>
          </div>
          <div className="grid gap-3">
            <span className="uppercase text-[var(--destructive-secondary)] font-bold text-base md:text-lg flex items-center gap-1">
              <span className="text-xs">■</span> email me
            </span>
            <a
              className="text-xl sm:text-2xl md:text-3xl bottom-shine border-b-3 border-b-[var(--foreground)] max-w-fit pb-1 font-extrabold tracking-[1.1]"
              href={"mailto:won@wjystudios.com"}
            >
              <LineRevealOnScroll text={"won@wjystudios.com"} />
            </a>
          </div>
        </div> */}
      </div>

      {/* RESPONSIVE BOTTOM: Switched to min-h-screen to avoid overlap on mobile */}
      <div className="min-h-screen md:h-screen flex flex-col justify-between p-6 w-full gap-12 md:gap-0">
        <div className="space-y-5">
        <div className="justify-center md:justify-end flex">
          <div className="flex items-center max-w-xs justify-between w-full">
            <h6 className="capitalize text-lg text-gray-500/80">social</h6>
            <Separator orientation="vertical"/>
            <a className="border-1" href={"#"}>
              <FaLinkedin />
            </a>
            <Separator orientation="vertical"/>
            <a className="border-1" href={"#"}>
              <FaGlobe />
            </a>
            <Separator orientation="vertical"/>
            <a className="border-1" href={"#"}>
              <FaInstagram />
            </a>
          </div>
        </div>
        <Separator/>
          </div>
        <div
          className={`justify-self-center flex flex-col justify-center items-center gap-5 text-center align-self-center ${AvanttFont.className} mx-auto max-w-4xl w-full`}
        >
          {/* RESPONSIVE QUOTE: Scaled down text-[6rem] */}
          <h3
            className={`text-center mx-auto max-w-4xl leading-[0.8] font-extrabold w-full text-5xl md:text-[6rem]`}
          >
            <LineRevealOnScroll
              text={`“Transparent, tech-driven 
                private charter with 
                full control. ”`}
            />
          </h3>
          {/* RESPONSIVE IMAGE: Scaled down signature w-100 */}
          {/* <div className="relative h-16 w-52 md:h-30 md:w-100">
            <Image
              src={"/sign.png"}
              alt={"Logo"}
              fill
              className="object-contain"
            />
          </div> */}
        </div>

        {/* RESPONSIVE LINKS & COPYRIGHT: Flex-col on mobile, flex-row on desktop */}
        <div className="flex flex-col md:flex-row items-end justify-end gap-6 md:gap-0 text-center">
          {/* <div className="text-[var(--destructive)] text-lg md:text-xl font-bold flex flex-wrap justify-center md:justify-start gap-4 md:gap-0 md:space-x-4">
            <a className="border-b-3 border-b-[var(--destructive)]" href="#">
              Personal site↗
            </a>
            <a className="border-b-3 border-b-[var(--destructive)]" href="#">
              Medium↗
            </a>
            <a className="border-b-3 border-b-[var(--destructive)]" href="#">
              Resources↗
            </a>
            <a className="border-b-3 border-b-[var(--destructive)]" href="#">
              Colophon↗
            </a>
          </div> */}
          <span className="text-gray-500/80 text-sm md:text-base">
            Copyright ©2025-26. All rights reserved by {SITE_NAME}.
          </span>
        </div>
      </div>
    </div>
  );
}
