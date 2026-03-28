import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
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
gsap.registerPlugin(ScrollTrigger);
export default function Brands() {
    const [activeImage,setActiveImage] = useState("/example.jpg");
    useEffect(() => {
    const items = gsap.utils.toArray<HTMLElement>(".item");

    items.forEach((item) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 20%",
        end: "bottom 20%",

        onEnter: () => {
          setActiveImage(item.dataset.image || "");
        },

        onEnterBack: () => {
          setActiveImage(item.dataset.image || "");
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);
  return (
    <section className="relative w-full bg-black text-white">
      {/* 🔥 container with enough height */}
      <div className="flex px-3 mx-auto">
        {/* LEFT (sticky) */}
        <div className="w-1/2 h-screen sticky top-0 flex items-center justify-start">
          <div className="text-4xl text-[var(--destructive-secondary)] font-bold">
            Brand experience
          </div>
        </div>

        <div className="w-1/2 flex flex-col py-20 relative">
          <div className="absolute h-70 w-70 sticky top-50">
          <Image src={activeImage} alt={"Loading"} fill/>
          </div>
          {brands.map(({ name, image },index) => {
            return (
              <div key={index} data-image={image} className="font-extrabold text-7xl text-foreground">
                {name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center text-[var(--destructive-secondary)] cursor-pointer pb-2 capitalize font-bold underline">
        see past clients list↗
      </div>
    </section>
  );
}
