"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import CustomEase from "gsap/CustomEase";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText, CustomEase,ScrollToPlugin);
}
export { gsap, ScrollTrigger, useGSAP, CustomEase, SplitText,ScrollToPlugin };
