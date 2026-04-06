"use client";
import { motion } from "framer-motion";
import { AvanttFont } from "@/assets/fonts";
import { FaLinkedin, FaGlobe, FaEnvelope, FaInstagram, FaCross, FaFacebook } from "react-icons/fa";
import { ArrowUpRight, X } from "lucide-react";
import LineRevealOnScroll from "@/components/LineReveal";
import CloseCursor from "@/components/CloseCursor";
import { FACEBOOK_HANDLE, INSTAGRAM_HANDLE, LINKEDIN_HANLDE, PHONE, SITE_NAME, X_HANDLE, YOUTUBE_HANDLE } from "@/lib/constants";
export default function ConnectSection({
  setLetsConnect,
  letsConnect
}: {
  setLetsConnect: any;
  letsConnect: boolean;
}) {
  return (
    <div className="w-full">
      <CloseCursor active={letsConnect} onClose={()=>{setLetsConnect(false)}}/>
    <motion.section
      initial={{ width: 0 }}
      whileInView={{ width: "80%" }}
      exit={{ width: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed max-md:max-h-[600px] max-md:top-10 md:min-h-screen z-[1000] max-md:min-w-[100%] top-0 right-0 overflow-hidden bg-black text-white flex justify-center"
    >
      {/* 🔴 Overlay Gradient */}
      <div className="absolute inset-0 bg-[#ef5143] z-10" />

      {/* 🧠 Content */}
      <div className="relative z-20 w-full px-3 pt-10 flex flex-col gap-10">
        <div className="grid text-[var(--foreground)] grid-cols-2 md:absolute right-0 top-0 max-w-md p-5 w-full">
          <div className="p-3 flex justify-between items-center shadow-xs rounded-md">
            <a href={FACEBOOK_HANDLE} className="flex gap-2 items-center">
              <FaFacebook /> <LineRevealOnScroll text={"Let's Chat"} />
            </a>
            <ArrowUpRight strokeWidth={3} size={20} />
          </div>
          <div className="p-3 flex justify-between items-center shadow-xs rounded-md">
            <a href={LINKEDIN_HANLDE} className="flex gap-2 items-center">
              <FaLinkedin /> {"Connect"}
            </a>
            <ArrowUpRight strokeWidth={3} size={20} />
          </div>
          <div className="p-3 flex justify-between items-center shadow-xs rounded-md">
            <a href={X_HANDLE} className="flex gap-2 items-center">
              <X /> <LineRevealOnScroll text={"X Handle"} />
            </a>
            <ArrowUpRight strokeWidth={3} size={20} />
          </div>
          <div className="p-3 flex justify-between items-center shadow-xs rounded-md">
            <a href={INSTAGRAM_HANDLE} className="flex gap-2 items-center">
              <FaInstagram /> <LineRevealOnScroll text={"Follow Me"} />
            </a>
            <ArrowUpRight strokeWidth={3} size={20} />
          </div>
        </div>
        {/* 🔥 Huge Text */}
        <h2
          className={`${AvanttFont.className} text-[4rem] max-md:text-center sm:text-[6rem] md:text-[17rem] font-black uppercase leading-[0.8] tracking-tight text-[var(--foreground)]`}
        >
          <LineRevealOnScroll text="LET'S" />
          <LineRevealOnScroll text="CONNECT" />
        </h2>

        {/* ✨ Subtext */}
        <p
          className={`md:max-w-xl text-md max-md:text-center font-bold md:text-3xl text-[var(--foreground)] md:ml-auto md:mr-15 ${AvanttFont.className}`}
        > 
          <LineRevealOnScroll
            text={"If you made it this far, we should talk."}
          />
        </p>

        {/* 🚀 Actions */}
        <div className="justify-self-end max-md:flex-col flex gap-5 self-end">
          <div className="grid gap-3">
            <span className="uppercase text-[var(--destructive-secondary)] font-bold text-base md:text-lg flex items-center gap-1">
              <span className="text-xs">■</span> Youtube
            </span>
            <a
              className="text-xl sm:text-2xl md:text-3xl max-w-fit bottom-shine border-b-3 border-b-[var(--foreground)] pb-1 font-extrabold tracking-[1.1]"
              href={YOUTUBE_HANDLE}
              target="_blank"
            >
              <LineRevealOnScroll text={"Click Here..."} />
            </a>
          </div>
          <div className="grid gap-3">
            <span className="uppercase text-[var(--destructive-secondary)] font-bold text-base md:text-lg flex items-center gap-1">
              <span className="text-xs">■</span> leave a message
            </span>
            <a
              className="text-xl sm:text-2xl md:text-3xl max-w-fit bottom-shine border-b-3 border-b-[var(--foreground)] pb-1 font-extrabold tracking-[1.1]"
              href={`tel:${PHONE}`}
            >
              <LineRevealOnScroll text={PHONE} />
            </a>
          </div>
          <div className="grid gap-3">
            <span className="uppercase text-[var(--destructive-secondary)] font-bold text-base md:text-lg flex items-center gap-1">
              <span className="text-xs">■</span> Facebook
            </span>
            <a
              className="text-xl sm:text-2xl md:text-3xl bottom-shine border-b-3 border-b-[var(--foreground)] max-w-fit pb-1 font-extrabold tracking-[1.1] break-all"
              href={FACEBOOK_HANDLE}
            >
              <LineRevealOnScroll text={"Click Here..."} />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
    </div>
  );
}
