"use client";

import { ArrowUpRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const sections = [
  { id: "intro", label: "intro", jump: "intro" },
  { id: "mentorship", label: "mentorship", jump: "mentorship" },
  { id: "about", label: "about", jump: "about" },
  { id: "brandexperience", label: "brandexperience", jump: "brandexperience" },
  { id: "education", label: "education", jump: "education" },
  { id: "getintouch", label: "getintouch", jump: "getintouch" },
];

const toRoman = (num: number) => {
  const romans = ["I", "II", "III", "IV", "V", "VI"];
  return romans[num - 1];
};

export default function Sidebar({triggerRef}:{triggerRef: any}) {
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
  return (
    <div
      className="
  w-full h-15 flex flex-row md:flex-col 
  md:fixed md:h-screen md:w-15 
  bg-background text-white 
  items-center border-b md:border-b-0 md:border-r border-neutral-800
  z-[99]
"
    >
      {/* Top Menu Icon */}
      <div className="h-15 w-full overflow-hidden flex items-center justify-center border-b border-neutral-800">
        <Menu size={20} />
      </div>
      <div className="flex-none md:flex-1 w-auto md:w-full">
        {/* <div
          className={`w-[2px] bg-[var(--destructive)]`}
          style={{ height: `${Math.round(progress * 100)}%` }}
        /> */}
        <div className="flex-1 w-full flex flex-row md:flex-col h-full overflow-x-auto md:overflow-visible">
          {sections.map((item, index) => (
            <Button
              variant={"ghost"}
              onClick={() => {
                setActive(index);
                
              }}
              key={item.id}
              className={`border-0 md:max-h-15 md:hover:max-h-30 h-full md:h-auto font-bold bg-background! text-center rounded-none group flex-1 text-center text-center! transition-all text-xs duration-300 uppercase relative border-r md:border-b border-gray-700 flex! items-center! justify-center! ${
                active === index
                  ? "text-[var(--foreground)] md:max-h-30"
                  : "text-neutral-600 hover:text-[var(--foreground)]"
              } md:[writing-mode:vertical-rl]`}
            >
              <span>{toRoman(index + 1)}. </span>

              <span
                className={`
        overflow-hidden 
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
      {/* Bottom CTA */}
      <div className="w-auto md:w-full bg-[var(--anothersecondary)] h-full md:h-38 flex items-center justify-center">
        <span className="md:[writing-mode:vertical-rl] flex whitespace-nowrap items-center gap-2 font-extrabold uppercase tracking-tighter text-sm">
          Let’s Connect ↗
        </span>
      </div>
    </div>
  );
}
