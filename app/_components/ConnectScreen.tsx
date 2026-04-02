"use client";
import { motion } from "framer-motion";
import { AvanttFont } from "@/assets/fonts";
import { FaLinkedin, FaGlobe, FaEnvelope, FaInstagram } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import LineRevealOnScroll from "@/components/LineReveal";
export default function ConnectSection({
  setLetsConnect,
}: {
  setLetsConnect: any;
}) {
  return (
    <motion.section
      initial={{ width: 0 }}
      whileInView={{ width: "80%" }}
      exit={{ width: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed max-md:max-h-[600px] max-md:top-10 md:min-h-screen z-[999] max-md:min-w-[100%] top-0 right-0 overflow-hidden bg-black text-white flex justify-center"
    >
      {/* 🔴 Overlay Gradient */}
      <div className="absolute inset-0 bg-[#ef5143] z-10" />

      {/* 🧠 Content */}
      <div className="relative z-20 w-full px-3 pt-10 flex flex-col gap-10">
        <div className="grid text-[var(--foreground)] grid-cols-2 md:absolute right-0 top-0 max-w-md p-5 w-full">
          <div className="p-3 flex justify-between items-center shadow-xs rounded-md">
            <div className="flex gap-2 items-center">
              <FaEnvelope /> <LineRevealOnScroll text={"Write Me"} />
            </div>
            <ArrowUpRight strokeWidth={3} size={20} />
          </div>
          <div className="p-3 flex justify-between items-center shadow-xs rounded-md">
            <div className="flex gap-2 items-center">
              <FaLinkedin /> <LineRevealOnScroll text={"Connect"} />
            </div>
            <ArrowUpRight strokeWidth={3} size={20} />
          </div>
          <div className="p-3 flex justify-between items-center shadow-xs rounded-md">
            <div className="flex gap-2 items-center">
              <FaGlobe /> <LineRevealOnScroll text={"Personal Site"} />
            </div>
            <ArrowUpRight strokeWidth={3} size={20} />
          </div>
          <div className="p-3 flex justify-between items-center shadow-xs rounded-md">
            <div className="flex gap-2 items-center">
              <FaInstagram /> <LineRevealOnScroll text={"Follow Me"} />
            </div>
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
              className="text-xl sm:text-2xl md:text-3xl bottom-shine border-b-3 border-b-[var(--foreground)] max-w-fit pb-1 font-extrabold tracking-[1.1] break-all"
              href={"mailto:won@wjystudios.com"}
            >
              <LineRevealOnScroll text={"won@wjystudios.com"} />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
