"use client";

import { ArrowDownRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
const sections = [
  { id: "intro", label: "intro" },
  { id: "vision", label: "Vision", jump: "mentorship" },
  { id: "about", label: "About Us" },
  { id: "whoweare", label: "Who We Are" },
  { id: "fleet", label: "Our Fleet" },
  { id: "clientcare", label: "Client Care" },
];

const toRoman = (num: number) => {
  const romans = ["I", "II", "III", "IV", "V", "VI"];
  return romans[num - 1];
};

export default function Sidebar({
  loaded,
  letsConnect,
  setLetsConnect,
  sectionRefs,
}: {
  setLetsConnect: any;
  loaded: boolean;
  letsConnect: any;
  sectionRefs: any[];
}) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrolled = scrollTop / docHeight;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (!sectionRefs?.length) return;

    const observers: IntersectionObserver[] = [];

    sectionRefs.forEach((ref, index) => {
      if (!ref?.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(index);
          }
        },
        {
          root: null,
          threshold: 0, // 50% visible = active
          rootMargin: "-30% 0px -30% 0px",
        }
      );

      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionRefs]);
  
  const handleJump = (index: number) => {
    setActive(index);

    const ref = sectionRefs[index];
    if (!ref?.current) return;
    if(index===1){
      window.scrollTo({
        top: 1500,
        behavior: "smooth"
      })
      return;
    }
    const headerOffset = 100;
    const elementPosition = ref.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({
      top: index === 0 ? 0 : offsetPosition,
      behavior: "smooth"
    });
  };

  return (
    <div
      className="
  w-full h-full md:h-15 flex z-[200] flex-row md:flex-col 
  sticky top-0
  md:fixed md:h-screen md:w-15 
  bg-background text-white 
  items-center border-border border-b md:border-b-0 md:border-r
  z-[99]
  max-md:px-5
"
    >
      <motion.div
        initial={{ x: -100 }}
        transition={{ duration: 1 }}
        animate={loaded ? { x: 0 } : { x: -100 }}
        className="h-15 w-full overflow-hidden flex items-center justify-start md:justify-center border-b"
      >
        <Menu size={20} />
      </motion.div>

      <motion.div
        initial={{ x: -100 }}
        transition={{ duration: 1 }}
        animate={loaded ? { x: 0 } : { x: -100 }}
        className="flex-none relative md:flex-1 w-auto md:w-full"
      >
        {/* BUTTONS CONTAINER (reference height) */}
        <div className="absolute flex-1 w-full flex flex-row md:flex-col h-full overflow-x-auto md:overflow-visible">
          {/* Buttons */}
          <div className="flex relative flex-row md:flex-col h-full md:max-h-[350px] w-full pl-3">
            <div className="absolute left-0 top-0 w-[2px] h-full">
              <div
                className="w-full bg-[var(--destructive)] origin-top"
                style={{
                  height: `${progress * 100}%`,
                }}
              />
            </div>
            {sections.map((item, index) => (
              <Button
                variant="ghost"
                onClick={() => handleJump(index)}
                key={item.id}
                className={`border-0 md:max-h-15 md:hover:max-h-30 h-full md:h-auto font-bold bg-background rounded-none group flex-1 text-xs duration-300 uppercase relative border-r md:border-b border-border flex items-center justify-center ${
                  active === index
                    ? "text-white md:max-h-30"
                    : "text-neutral-600 hover:text-white"
                } md:[writing-mode:vertical-rl]`}
              >
                <span>{toRoman(index + 1)}. </span>

                <span
                  className={`
              overflow-hidden 
              max-md:hidden!
              whitespace-nowrap
              transition-all duration-500 ease-in-out
              ${
                active === index
                  ? "max-w-xs block translate-x-0"
                  : "group-hover:max-w-xs group-hover:block group-hover:translate-x-0 max-w-0 translate-x-2 hidden"
              }
            `}
                >
                  {item.label}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: -100 }}
        transition={{ duration: 1 }}
        animate={loaded ? { x: 0 } : { x: -100 }}
        className="w-full max-md:flex max-md:justify-end"
      >

        <Button
          onClick={() => {
            setLetsConnect((prev: boolean) => !prev);
          }}
          className="w-auto rounded-none md:w-full bg-transparent  md:h-38 flex md:items-center md:justify-center text-[var(--anothersecondary)]"
        >
          <span className="md:[writing-mode:vertical-rl] flex whitespace-nowrap transition-all duration-300 items-center gap-2 font-extrabold uppercase tracking-tighter text-xs md:text-sm">
            {letsConnect ? "Never Mind" : "Let’s Connect"}{" "}
            <ArrowDownRight size={16} />
          </span>
        </Button>
        
        <Link href={"https://play.google.com/store/apps/details?id=com.avplat.aviation&hl=en_US"} target="_blank">
        <Button 
          className="w-auto rounded-none md:w-full bg-[var(--anothersecondary)]  md:h-38 flex md:items-center md:justify-center"
        >
          <span className="md:[writing-mode:vertical-rl] flex whitespace-nowrap transition-all duration-300 items-center gap-2 font-extrabold uppercase tracking-tighter text-xs md:text-sm">
            {letsConnect ? "Never Mind" : "Download"}{" "}
            <ArrowDownRight size={16} />
          </span>
        </Button>
        </Link>
      </motion.div>
    </div>
  );
}
