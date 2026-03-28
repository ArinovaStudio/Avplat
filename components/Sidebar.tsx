"use client";

import { ArrowUpRight, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const sections = ["intro", "mentorship", "about", "education", "getintouch"];

const toRoman = (num: number) => {
  const romans = ["I", "II", "III", "IV", "V", "VI"];
  return romans[num - 1];
};

export default function Sidebar() {
  const [active, setActive] = useState(0);
  return (
    <div className="left-0 top-0 overflow-hidden bg-background! z-[99] fixed h-screen w-15 bg-black text-white flex flex-col items-center border-r border-neutral-800">
      {/* Top Menu Icon */}
      <div className="h-15 w-full overflow-hidden flex items-center justify-center border-b border-neutral-800">
        <Menu size={20} />
      </div>

      <div className="flex-1 w-full flex flex-col">
        {sections.map((item, index) => (
          <Button
            variant={"ghost"}
            onClick={()=>{setActive(index)}}
            key={item}
            className={`border-0 ${active===index ? "max-h-30":"hover:max-h-30 max-h-15"} font-bold bg-background! text-center rounded-none  group flex-1  text-center text-center! transition-all text-xs duration-300 uppercase relative border-b border-gray-700 flex! items-center! justify-center! ${active===index ? "text-[var(--foreground)]":"text-neutral-600 hover:text-[var(--foreground)]"} [writing-mode:vertical-rl]`}
          >
            <span>{toRoman(index + 1)}. </span>
            <span
              className={`
                
                overflow-hidden 
                whitespace-nowrap
                transition-all duration-500 ease-in-out
                ${
                  active===index ?
                  "max-w-xs block translate-x-0":"group-hover:max-w-xs group-hover:block group-hover:translate-x-0 max-w-0 translate-x-2 hidden"
                }
              `}
            >
              {item}
            </span>
          </Button>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="w-full h-38 bg-[var(--anothersecondary)] text-background flex items-center justify-center">
        <span className="[writing-mode:vertical-rl] flex whitespace-nowrap items-center gap-2 font-extrabold uppercase tracking-tighter text-sm">
          Let’s Connect ↗
        </span>
      </div>
    </div>
  );
}
