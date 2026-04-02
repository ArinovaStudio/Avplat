"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import CustomEase from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText, CustomEase);
}
export { gsap, ScrollTrigger, useGSAP, CustomEase, SplitText };
