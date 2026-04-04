"use client";
import Sidebar from "@/components/Sidebar";
import { useEffect, useMemo, useRef, useState } from "react";
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
import { gsap, ScrollTrigger, Flip } from "@/lib/gsapConfig";
import CursorLoader from "@/components/LoadingCursor";
import HowItWorks from "./_components/HowItWorks";
import CloseCursor from "@/components/CloseCursor";
export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [letsConnect, setLetsConnect] = useState(false);
  const { loaded, progress } = useLoadAssets();
  const thirdSectionRef = useRef(null);
  const homeRef = useRef(null);
  const innerHomeRef = useRef(null);
  const thirdMobileSvgWrapper = useRef(null);
  const thirdMobileTextRef = useRef(null);
  const thirdSectionSvgWrapper = useRef(null);
  const thirdSectionTextRef = useRef(null);
  const aboutRef = useRef(null);
  const brandsRef = useRef(null);
  const educationWrapperRef = useRef(null);
  const educationRef = useRef(null);
  const footerRef = useRef(null);
  const footerContainerRef = useRef(null);
  const clampMap: Record<number, number> = { 1: 100, 2: 150, 3: 200 };
  const sectionRefs = useMemo(
    () => [
      homeRef,
      thirdSectionRef,
      aboutRef,
      brandsRef,
      educationRef,
      footerContainerRef,
    ],
    []
  );
  useEffect(() => {
    gsap.set("#parallax-overlay", { yPercent: 100 });
    const homeContext = gsap.context(() => {
      if (loaded) return;
      const element = innerHomeRef.current;
      const lines = gsap.utils.toArray<HTMLElement>(".line");

      // 🔥 set initial positions
      gsap.set(lines, {
        yPercent: 100,
        opacity: 0,
        display: "none",
      });

      gsap.set(element, {
        alignItems: "center",
        justifyContent: "center",
      });

      const tl = gsap.timeline();

      lines.forEach((line, i) => {
        // current line enters
        tl.to(line, {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          display: "block",
          ease: "back.out(1.4)",
        });

        if (i >= 4) {
          tl.fromTo(
            ".top-text",
            { y: 0 },
            {
              y: -200,
              display: "none",
            },
            "<" // Optional: makes this start at the same time as the 5th line
          );
        }
      });

      // 🔥 THE FLIP INTEGRATION 🔥
      // Instead of tweening alignItems, we use a callback to capture state,
      // change the alignment, and trigger the smooth Flip transition.
      tl.add(() => {
        // 1. Capture the state of all direct children inside the container
        const state = Flip.getState((element as any).children);

        // 2. Change the CSS alignment instantly
        gsap.set(element, {
          justifyItems: "center",
          alignItems: "flex-start",
        });

        // 3. Animate them from their previous centered positions to the top
        Flip.from(state, {
          duration: 1,
          ease: "power3.inOut",
        });
      });

      // 4. Because Flip is running outside the timeline's main flow,
      // we add an empty 1-second tween so the timeline "waits" for Flip to finish
      tl.to({}, { duration: 1 });

      // Now continue with the rest of your sequence...
      tl.fromTo(
        ".left-text",
        { x: -100, display: "none" }, // Added display: none here for a cleaner fromTo
        {
          display: "block",
          x: 0,
        }
      );

      tl.fromTo(
        ".reveal-it",
        { opacity: 0, display: "none" },
        {
          opacity: 1,
          display: "flex",
        }
      );
    }, homeRef);

    if (!loaded) return;
    if (!loaded) return;
    let mm = gsap.matchMedia();
    mm.add("(max-width: 768px)", () => {
      const text = thirdMobileTextRef.current as any;
      const section = thirdSectionRef.current as any;
      const svgWrapper = thirdMobileSvgWrapper.current as any; // Assuming this is your ref name
      if (text && section && svgWrapper) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=2000",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            pinSpacing: true,
            invalidateOnRefresh: true,
          },
        });
        tl.to(text, {
          scale: 400,
          transformOrigin: "center center",
          ease: "power2.in",
          duration: 1.7,
        }).to(svgWrapper, {
          opacity: 0,
          ease: "power1.out",
          duration: 0.4,
        });
      }
    });
    mm.add("(min-width: 767px)", () => {
      if (!sectionRef.current || !triggerRef.current) return;
      const scrollTween = gsap.to(sectionRef.current, {
        x: () => "-330vw",
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

      const text = thirdSectionTextRef.current as any;
      const section = thirdSectionRef.current as any;
      const svgWrapper = thirdSectionSvgWrapper.current as any; // Assuming this is your ref name

      if (text && section && svgWrapper) {
        // 1. Create a timeline with your exact ScrollTrigger settings
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "85% 85%",
            end: "right left",
            scrub: true,
          },
        });
        tl.to(text, {
          scale: 1800,
          transformOrigin: "91.6% center",
          ease: "power2.in",
          duration: 0.5,
        }).to(
          svgWrapper,
          {
            opacity: 0,
            ease: "power1.out",
            duration: 0.6,
          },
          "<"
        );
      }
    });

    const aboutContext = gsap.context(() => {
      const overlay = document.querySelector("#parallax-overlay");

      if (!overlay) return;

      gsap.set(overlay, {
        yPercent: 100,
        autoAlpha: 0, // better than opacity
      });

      const tween = gsap.to(overlay, {
        yPercent: () => -15,
        ease: "none",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom", // section enters
          end: "bottom 50%",
          scrub: true,

          // 🔥 appear when entering
          onEnter: () => {
            gsap.set(overlay, { autoAlpha: 1 });
          },

          // 🔥 disappear when leaving forward
          onLeave: () => {
            gsap.set(overlay, {
              autoAlpha: 0,
              yPercent: 100, // reset below
            });
          },

          // 🔥 appear again when scrolling back
          onEnterBack: () => {
            gsap.set(overlay, { autoAlpha: 1 });
          },

          // 🔥 disappear when leaving backward
          onLeaveBack: () => {
            gsap.set(overlay, {
              autoAlpha: 0,
              yPercent: 100,
            });
          },
        },
      });
      const items = gsap.utils.toArray<HTMLElement>(".parallax-item");
      if (items.length !== 0) {
        items.forEach((item) => {
          // const speed = Number(item.dataset.speed || 0.5);
          gsap.fromTo(
            item,
            { y: 0 },
            {
              y: () => -(window.innerHeight * 1.6),
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
      }
    }, aboutRef);
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
      homeContext.revert();
      mm.revert();
      aboutContext.revert();
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
      <CursorLoader progress={progress} />
      <Sidebar
        letsConnect={letsConnect}
        setLetsConnect={setLetsConnect}
        loaded={loaded}
        sectionRefs={sectionRefs}
      />
      <div
        id="parallax-overlay"
        className="pointer-events-none fixed bottom-0 left-0 w-full h-[60%] bg-[rgba(0,0,0,0.25)] opacity-25 backdrop-grayscale z-[100]"
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
            md:w-[430vw]
            md:flex
            md:h-full
            relative
          `}
            >
              <FirstSection ref={homeRef} innerRef={innerHomeRef} loaded={loaded} />
              <SecondSection />
              <ThirdSection
                sectionRef={thirdSectionRef}
                thirdSectionSvgWrapper={thirdSectionSvgWrapper}
                thirdSectionTextRef={thirdSectionTextRef}
                thirdMobileTextRef={thirdMobileTextRef}
                thirdMobileSvgWrapper={thirdMobileSvgWrapper}
              />
            </div>
          </div>
        </section>
        <AnimatePresence mode="sync">
          {letsConnect && <ConnectSection letsConnect={letsConnect} setLetsConnect={setLetsConnect} />}
        </AnimatePresence>
        <div className="max-w-screen w-full flex flex-col justify-center items-center h-auto">
          <ParallaxSection aboutRef={aboutRef} />
          <Brands brandsRef={brandsRef} />
          <MoreDetails
            educationRef={educationRef}
            educationWrapperRef={educationWrapperRef}
          />
          <HowItWorks />
          <Footer
            footerRef={footerRef}
            footerContainerRef={footerContainerRef}
          />
        </div>
      </div>
    </div>
  );
}
