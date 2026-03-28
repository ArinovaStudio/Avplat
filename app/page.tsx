"use client";
import Sidebar from "@/components/Sidebar";
import { useEffect, useRef, useState } from "react";
import FirstSection from "./_components/FirstSection";
import SecondSection from "./_components/SecondSection";
import ThirdSection from "./_components/ThirdSection";
import ParallaxScreen from "./_components/ParallaxScreen";
import Brands from "./_components/Brands";
import MoreDetails from "./_components/MoreDetails";
import Footer from "./_components/Footer";

export default function Home() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current!;
    const inner = innerRef.current;

    let outerTarget = 0;
    let innerTarget = 0;

    const lerp = (start: number, end: number, t: number) =>
      start + (end - start) * t;

    let rafId: number;

    const animate = () => {
      if (outer) {
        outer.scrollLeft = lerp(outer.scrollLeft, outerTarget, 0.1);
      }

      if (inner) {
        inner.scrollLeft = lerp(inner.scrollLeft, innerTarget, 0.1);
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();

    const handleWheel = (e: WheelEvent) => {
      if (!outer) return;

      const rect = outer.getBoundingClientRect();
      const isAtTop = Math.abs(rect.top) < 1;

      if (!isAtTop) return;

      const isDown = e.deltaY > 0;

      const outerAtStart = outer.scrollLeft === 0;
      const outerAtEnd =
        outer.scrollLeft + outer.clientWidth >= outer.scrollWidth - 1;

      const isOnInnerSection = outerAtEnd;

      // 👉 INNER SCROLL
      if (isOnInnerSection && inner) {
        const innerAtStart = inner.scrollLeft === 0;
        const innerAtEnd =
          inner.scrollLeft + inner.clientWidth >= inner.scrollWidth - 1;

        if ((!innerAtEnd && isDown) || (!innerAtStart && !isDown)) {
          e.preventDefault();
          innerTarget += e.deltaY; // 🔥 smooth target update
          return;
        }
      }

      // 👉 OUTER SCROLL
      if ((!outerAtEnd && isDown) || (!outerAtStart && !isDown)) {
        e.preventDefault();
        outerTarget += e.deltaY; // 🔥 smooth target update
        return;
      }
    };

    outer.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      outer.removeEventListener("wheel", handleWheel);
      cancelAnimationFrame(rafId);
    };
  }, []);
  return (
    <div className="min-h-screen w-full">
      <Sidebar />
      {/* Horizontal Wrapper */}
      <div
        ref={outerRef}
        className="md:ml-15 py-5 h-screen flex flex-col md:flex-row overflow-x-auto overflow-y-hidden"
      >
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>

      {/* Vertical Sections */}
      <div className="md:ml-15 scroll-smooth">
      <ParallaxScreen/>
      <Brands/>
      <MoreDetails/>
      <Footer/>
      </div>
    </div>
  );
}
