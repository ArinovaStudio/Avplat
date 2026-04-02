"use client";
import Sidebar from "@/components/Sidebar";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import FirstSection from "./_components/FirstSection";
import SecondSection from "./_components/SecondSection";
import ThirdSection from "./_components/ThirdSection";
import ParallaxSection from "./_components/ParallaxScreen";
import MoreDetails from "./_components/MoreDetails";
import Footer from "./_components/Footer";
import Brands from "./_components/Brands";
import useLoadAssets from "@/components/useLoadAssets";
import ConnectSection from "./_components/ConnectScreen";
import { AnimatePresence } from "framer-motion";
import { gsap, ScrollTrigger, CustomEase, SplitText } from "@/lib/gsapConfig";
export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [letsConnect, setLetsConnect] = useState(false);
  const { loaded, progress } = useLoadAssets();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const brandsRef = useRef(null);
  const educationWrapperRef = useRef(null);
  const educationRef = useRef(null);
  const footerRef = useRef(null);
  const footerContainerRef = useRef(null);
  const clampMap: Record<number, number> = { 1: 100, 2: 150, 3: 200 };
  const sectionRefs = useMemo(
    () => [homeRef, aboutRef, brandsRef, educationRef, footerContainerRef],
    []
  );
  useEffect(() => {
    if (!loaded) return;
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      if (!sectionRef.current || !triggerRef.current) return;
      gsap.to(sectionRef.current, {
        x: () => "-460vw",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => "+=" + window.innerWidth * 2,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      const items = gsap.utils.toArray<HTMLElement>(".parallax-item");

      if (items.length === 0) return;

      items.forEach((item) => {
        const speed = Number(item.dataset.speed || 0.5);

        gsap.fromTo(
          item,
          { y: 0 },
          {
            y: () => -(window.innerHeight * speed),
            ease: "none",
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      });
    });
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".item", brandsRef.current);

      items.forEach((item: any) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 60%",
          end: "bottom 40%",
          invalidateOnRefresh: true,
          // onEnter: () => setActiveImage(item.dataset.image || ""),
          // onEnterBack: () => setActiveImage(item.dataset.image || ""),
        });
      });
    }, brandsRef);

    const educationContext = gsap.context(() => {
      const pinnedSection = educationRef.current;
      const wrapper = educationWrapperRef.current;

      const ups = gsap.utils.toArray<HTMLElement>('[data-type="up"]', wrapper);
      const downs = gsap.utils.toArray<HTMLElement>(
        '[data-type="down"]',
        wrapper
      );

      const animatedTexts = gsap.utils.toArray<HTMLElement>(
        ".anim-text",
        wrapper
      );
      const bottomTexts = gsap.utils.toArray<HTMLElement>(
        ".bottom-text",
        wrapper
      );

      const toggleColors = (isApplied: boolean) => {
        document.documentElement.style.setProperty(
          "--background",
          isApplied ? "oklch(0.9379 0.0423 74.15)" : "oklch(0.1149 0 0)"
        );

        animatedTexts.forEach((el) => {
          if (isApplied) el.classList.add("!text-white");
          else el.classList.remove("!text-white");
        });

        bottomTexts.forEach((el) => {
          if (isApplied) el.classList.add("!text-[var(--destructive)]");
          else el.classList.remove("!text-[var(--destructive)]");
        });
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinnedSection,
          start: "top top",
          end: "+=1200",
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      const wrappertl = gsap.timeline({
        scrollTrigger: {
          trigger: educationWrapperRef.current,
          start: "top top",
          end: "bottom top",
          onEnter: () => toggleColors(true),
          onLeave: () => toggleColors(false),
          onEnterBack: () => toggleColors(true),
          onLeaveBack: () => toggleColors(false),
        },
      });
      tl.to(
        ups,
        {
          y: (i, el) =>
            -(clampMap[Number(el.getAttribute("data-index"))] ?? 50),
          ease: "none",
          stagger: 0.1,
        },
        0
      );

      tl.to(
        downs,
        {
          y: (i, el) => clampMap[Number(el.getAttribute("data-index"))] ?? 50,
          ease: "none",
          stagger: 0.1,
        },
        0
      );
    }, educationRef);

    const footerContext = gsap.context(() => {
      gsap.fromTo(
        footerContainerRef.current,
        { yPercent: 50 },
        {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }, footerRef);
    return () => {
      mm.revert();
      ctx.revert();
      educationContext.revert();
      footerContext.revert();
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };
  }, [loaded]);
  return (
    <div className="min-h-screen w-full flex max-md:flex-col">
      <Sidebar
        letsConnect={letsConnect}
        setLetsConnect={setLetsConnect}
        loaded={loaded}
        sectionRefs={sectionRefs}
      />
      <div className="flex flex-col w-full max-md:max-w-screen">
        <section className="relative overflow-x-clip w-full">
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
              <FirstSection ref={homeRef} loaded={loaded} />
              <SecondSection />
              <ThirdSection />
            </div>
          </div>
        </section>
        <AnimatePresence mode="sync">
          {letsConnect && <ConnectSection setLetsConnect={setLetsConnect} />}
        </AnimatePresence>
        <div className="max-w-screen w-full flex flex-col justify-center items-center h-auto">
          <ParallaxSection aboutRef={aboutRef} />
          <Brands brandsRef={brandsRef} />
          <MoreDetails
            educationRef={educationRef}
            educationWrapperRef={educationWrapperRef}
          />
          <Footer
            footerRef={footerRef}
            footerContainerRef={footerContainerRef}
          />
        </div>
      </div>
    </div>
  );
}
