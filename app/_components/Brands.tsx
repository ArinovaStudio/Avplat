"use client";

import { useLayoutEffect, useState } from "react";
import useGsap from "@/components/useGSAP";
import Image from "next/image";

const brands = [
  { name: "American Express", image: "/example.jpg" },
  { name: "AARP", image: "/example.jpg" },
  { name: "Porsche", image: "/example.jpg" },
  { name: "ESPN", image: "/example.jpg" },
  { name: "The Home Depot", image: "/example.jpg" },
  { name: "Moët Hennessy", image: "/example.jpg" },
  { name: "Nikon", image: "/example.jpg" },
  { name: "Kimberly-Clark", image: "/example.jpg" },
  { name: "Duracell", image: "/example.jpg" },
  { name: "Intel", image: "/example.jpg" },
  { name: "Cadillac", image: "/example.jpg" },
  { name: "Discovery", image: "/example.jpg" },
  { name: "Edward Jones", image: "/example.jpg" },
  { name: "Cotton USA", image: "/example.jpg" },
  { name: "IBM", image: "/example.jpg" },
];

export default function Brands() {
  const [activeImage, setActiveImage] = useState("/example.jpg");
  const {gsap,ScrollTrigger} = useGsap();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".item");

      items.forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => setActiveImage(item.dataset.image || ""),
          onEnterBack: () => setActiveImage(item.dataset.image || ""),
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section  id="brandexperience" className="md:pl-15 relative w-full min-h-screen bg-background text-white">
      
      {/* CONTAINER */}
      <div className="flex flex-col lg:flex-row items-start px-4 sm:px-6 mx-auto">
        
        {/* LEFT */}
        <div className="w-full lg:w-1/2 lg:h-screen lg:sticky top-0 flex items-center justify-start py-10 lg:py-0">
          <div className="max-md:text-center text-[clamp(1.8rem,4vw,2.5rem)] text-[var(--destructive-secondary)] font-bold">
            Brand experience
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/2 flex flex-col py-1 lg:py-20 relative">
          
          {/* ✅ Sticky preview image (hidden on mobile) */}
          <div className="hidden sm:block absolute right-5 lg:right-10 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[240px] lg:h-[240px] sticky top-32">
            <Image
              src={activeImage}
              alt="brand"
              fill
              className="object-cover rounded-xl preview-img"
            />
          </div>

          {/* LIST */}
          {brands.map(({ name, image }, index) => (
            <div
              key={index}
              data-image={image}
              className="item font-extrabold text-[clamp(1rem,6vw,4.5rem)] text-foreground md:leading-[0.3] sm:py-8"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER LINK */}
      <div className="text-center text-[var(--destructive-secondary)] cursor-pointer pb-6 capitalize font-bold underline text-sm sm:text-base">
        see past clients list ↗
      </div>
    </section>
  );
}