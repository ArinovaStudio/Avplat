import React from "react";
import { AvanttFont } from "@/assets/fonts";
export default function FirstSection() {
  return (
    <div className="pl-5 flex flex-col justify-between min-w-screen">
      <div
        className={`text-[var(--destructive)] font-[700] font-['avantt'] max-w-3xl text-[11rem] font-[900] leading-[0.9] uppercase flex flex-col text-left ${AvanttFont.className}`}
      >
        <h1>Educator</h1>
        <div className="flex">
          <span className="text-sm mt-5 max-w-[130px] capitalize text-[var(--foreground)]">
            Design mentorship by Won J. You{" "}
          </span>
          <span>coach </span>
        </div>
        <h2>Mentor </h2>
        <h2>consultant</h2>
      </div>
      <div className="flex items-center gap-2 mt-3">
        <span className="uppercase font-bold text-sm">Scroll to discover</span>
        <div className="h-[2px] w-[100px] animate-progress" />
      </div>
    </div>
  );
}
