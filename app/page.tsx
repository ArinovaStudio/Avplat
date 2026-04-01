"use client";
import Sidebar from "@/components/Sidebar";
import { Suspense, useEffect, useRef, useState } from "react";
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import useLoadAssets from "@/components/useLoadAssets";
import ConnectSection from "./_components/ConnectScreen";
import { AnimatePresence } from "framer-motion";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}
export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [letsConnect, setLetsConnect] = useState(false);
  const { loaded, progress } = useLoadAssets();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const brandsRef = useRef(null);
  const educationRef = useRef(null);
  const footerRef = useRef(null);
  const sectionRefs = [
    homeRef,
    aboutRef,
    brandsRef,
    educationRef,
    footerRef
  ];
  useGSAP(
    () => {
      if (!sectionRef.current || !triggerRef.current) return;

      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.to(sectionRef.current, {
          x: () => "-350vw",
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: () => "+=" + window.innerWidth * 2,
            scrub: 0.5,
            pin: true,
            anticipatePin: 1,
            // 3. THIS IS CRITICAL: Forces GSAP to recalculate the start/end points
            // if the window resizes or dynamic content shifts the layout
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { dependencies: [loaded], revertOnUpdate: true }
  );
  useEffect(() => {
        ScrollTrigger.refresh();
  }, [loaded]);
  return (
    <div className="min-h-screen w-full flex max-md:flex-col">
      <Sidebar
        letsConnect={letsConnect}
        setLetsConnect={setLetsConnect}
        loaded={loaded}
        sectionRefs={sectionRefs}
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
              <Suspense fallback={"LOading..."}>
              <FirstSection ref={homeRef} loaded={loaded} />
              <SecondSection />
              <ThirdSection />
              </Suspense>
            </div>
          </div>
        </section>
        <AnimatePresence mode="popLayout">
          {letsConnect && <ConnectSection setLetsConnect={setLetsConnect} />}
        </AnimatePresence>
        <div className="max-w-screen w-full flex flex-col justify-center items-center h-auto">
            <Suspense fallback={"Loading..."}>

            <ParallaxScreen ref={aboutRef}/>
            <Brands ref={brandsRef} />
            <MoreDetails ref={educationRef} />
            <Footer ref={footerRef}/>
            </Suspense>
        </div>
      </div>
    </div>
  );
}
