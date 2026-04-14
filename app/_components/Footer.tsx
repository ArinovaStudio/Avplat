"use client";
import Image from "next/image";
import { AvanttFont } from "@/assets/fonts";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGlobe, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LineRevealOnScroll from "@/components/LineReveal";
import { contactInfo,siteInfo } from "@/lib/content";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import Link from "next/link";
import {CONTENT} from "@/lib/content";
gsap.registerPlugin(ScrollTrigger, useGSAP);
export default function Footer({
  footerRef: wrapperRef,
  footerContainerRef: containerRef,
}: {
  footerRef: any;
  footerContainerRef: any;
}) {
  const section1 = CONTENT.verticalScroll.section8.part1;
  const section2 = CONTENT.verticalScroll.section8.part2;
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
          src={section1.image}
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
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="max-md:text-center md:text-left"
          >
            <LineRevealOnScroll text={"More on"} />
          </motion.h6>
          <motion.h6
            initial={{ x: -100 }}
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
          <Link target="_blank" href={section1.booking_url} className="text-lg cursor-pointer hover:bg-white text-[var(--anothersecondary)] px-12 py-3 mt-5 w-fit mx-auto border border-[var(--anothersecondary)]">BOOK FLIGHT TODAY</Link>
        </div>
      </div>
 
      {/* RESPONSIVE BOTTOM: Switched to min-h-screen to avoid overlap on mobile */}
      <div className="min-h-screen md:h-screen flex flex-col justify-between p-6 w-full gap-12 md:gap-0">
        <div className="space-y-5">
        <div className="justify-center md:justify-end flex">
          <div className="flex items-center max-w-xs justify-between w-full">
            <h6 className="capitalize text-lg text-gray-500/80">social</h6>
            <Separator orientation="vertical"/>
            <a className="border-1" href={contactInfo.linkedin}>
              <FaLinkedin />
            </a>
            <Separator orientation="vertical"/>
            <a className="border-1" href={contactInfo.youtube}>
              <FaYoutube />
            </a>
            <Separator orientation="vertical"/>
            <a className="border-1" href={contactInfo.instagram}>
              <FaInstagram />
            </a>
            <Separator orientation="vertical"/>
            <a className="border-1" href={contactInfo.facebook}>
              <FaFacebook />
            </a>
            <Separator orientation="vertical"/>
            <a className="border-1" href={contactInfo.x}>
              <X size={20} className="bg-foreground rounded-full text-black p-1" strokeWidth={3} />
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
              text={section2.basicText}
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
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 md:gap-0 text-center">
          <div className="text-gray-600 text-lg md:text-xl font-medium flex flex-wrap justify-center md:justify-start gap-4 md:gap-0 md:space-x-4">
            <Link className="border-b-3" href="/privacy-policy">
              Privacy & Policy ↗
            </Link>
            <Link className="border-b-3 " href="/terms-and-conditions">
              Terms & Condition ↗
            </Link>
            {/* <Link className="border-b-3" href="#">
              Resources↗
            </Link>
            <Link className="border-b-3 " href="#">
              Colophon↗
            </Link> */}
          </div>
          <span className="text-gray-500/80 text-sm md:text-base">
            © 2026. All rights reserved by {siteInfo.SITE_NAME}.
          </span>
        </div>
      </div>
    </div>
  );
}
