"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";

const steps = [
  {
    id: "01",
    title: "Create your flight itinerary",
    desc: "Enter your departure and destination, select the date and time, and let us do the rest. Your journey is just a search away!",
  },
  {
    id: "02",
    title: "Select your aircraft",
    desc: "Explore the results and choose the option that suits your travel plans. Fine-tune your search with easy-to-use filters.",
  },
  {
    id: "03",
    title: "Charter Concierge & Trip Support",
    desc: "Enhance your trip with catering, transportation, assistance, and other special requests.",
  },
  {
    id: "04",
    title: "Confidence at every mile",
    desc: "Receive real-time updates through email and text, ensuring you are always in the loop.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full mt-30 py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground"
        >
          How {SITE_NAME} works.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-xl lg:text-2xl text-muted-foreground mt-2"
        >
          Booking → touchdown.
        </motion.p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-14">
         {steps.map((step, i) => (
  <motion.div
    key={i}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.15,
        },
      },
    }}
    className={`flex flex-col px-4 ${
      i % 2 === 0 ? "items-start text-left" : "items-end text-right"
    }`}
  >
    {/* ID */}
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.6 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{ duration: 0.4 }}
      className="w-10 h-10 flex items-center justify-center rounded-full border text-sm font-medium mb-4"
    >
      {step.id}
    </motion.div>

    {/* Title */}
    <motion.h3
      variants={{
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-lg md:text-xl font-semibold"
    >
      {step.title}
    </motion.h3>

    {/* Description */}
    <motion.p
      variants={{
        hidden: {
          opacity: 0,
          x: i % 2 === 0 ? -40 : 40,
        },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-sm md:text-base text-muted-foreground mt-2 max-w-xs"
    >
      {step.desc}
    </motion.p>
  </motion.div>
))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
         <Button size="lg" className="px-6 py-5 text-sm md:text-base uppercase rounded-none border border-gray-600 bg-transparent text-white hover:bg-white hover:text-black transition-colors">
  Plan your charter
</Button>
        </motion.div>
      </div>
    </section>
  );
}
