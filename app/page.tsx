"use client";
import Sidebar from "@/components/Sidebar";
import { useEffect, useRef, useState } from "react";
import FirstSection from "./_components/FirstSection";
import SecondSection from "./_components/SecondSection";
import dynamic from "next/dynamic";
const ThirdSection = dynamic(() => import("./_components/ThirdSection"), {
  ssr: false,
});
const MoreDetails = dynamic(() => import("./_components/MoreDetails"), {
  ssr: false,
});
const ParallaxScreen = dynamic(() => import("./_components/ParallaxScreen"), {
  ssr: false,
});
const Brands = dynamic(() => import("./_components/Brands"), { ssr: false });
const Footer = dynamic(() => import("./_components/Footer"), { ssr: false });
import useGsap from "@/components/useGSAP";
import useLoadAssets from "@/components/useLoadAssets";
import ConnectSection from "./_components/ConnectScreen";
import { AnimatePresence } from "framer-motion";
export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const { gsap, ScrollTrigger } = useGsap();
  const [letsConnect, setLetsConnect] = useState(false);
  const { loaded, progress } = useLoadAssets();
  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });

    if (!section || !trigger) return;
    const timer = setTimeout(() => {
      let tween;
      let mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const ctx = gsap.context(() => {
          tween = gsap.to(section, {
            x: () => "-350vw",
            ease: "none",
            scrollTrigger: {
              trigger: trigger,
              start: "top top",
              // 👇 THE FIX: Increase the scroll distance
              end: () => "+=" + window.innerWidth * 2,
              scrub: 0.5, // Note: scrub: 0.1 adds smoothing, it doesn't change overall speed
              pin: true,
              anticipatePin: 1,
            },
          });
        }, trigger);
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
        return () => {
          ctx.revert();
        };
      });
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="min-h-screen w-full flex max-md:flex-col">
      <Sidebar
        letsConnect={letsConnect}
        setLetsConnect={setLetsConnect}
        loaded={loaded}
      />
      <div className="flex flex-col overflow-x-clip w-full max-md:max-w-screen">
        <section className="relative w-full">
          <div ref={triggerRef} className="md:h-screen w-full">
            <div className="absolute top-0 left-0 w-full h-full z-0">
              <video
                src="/video.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                className="w-screen h-full object-cover"
              />
            </div>
            <div
              ref={sectionRef}
              className={`
            md:ml-15
            transition-all duration-1000
            md:w-[450vw]
            md:flex
            md:h-full
            relative
          `}
            >
              <FirstSection loaded={loaded} />
              <SecondSection />
              <ThirdSection />
            </div>
          </div>
        </section>
        <AnimatePresence mode="popLayout">
          {letsConnect && <ConnectSection setLetsConnect={setLetsConnect} />}
        </AnimatePresence>
        <div className="max-w-screen w-full flex flex-col justify-center items-center h-auto">
          <ParallaxScreen />
          <Brands />
          <MoreDetails />
          <Footer />
        </div>
      </div>
    </div>
  );
}
