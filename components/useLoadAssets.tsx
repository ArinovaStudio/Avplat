"use client";
import React, { useEffect, useState } from "react";
import { ASSETS } from "@/assets/assets";
export default function useLoadAssets() {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const loadAssets = async () => {
      document.body.style.cursor = "not-allowed";
      const keys = Object.keys(ASSETS);
      const n = keys.length;
      let curr = 0;
      await Promise.all(
        ASSETS.map(async (asset) => {
          return new Promise((resolve, reject) => {
            if (asset.type === "image") {
              const img = new Image();
              img.src = asset.location;
              img.onload = resolve;
              img.onerror = reject;
            } else if (asset.type === "video") {
              const video = document.createElement("video");
              video.src = asset.location;
              video.oncanplaythrough = resolve;
              video.onerror = reject;
            }
            curr += 1;
            setProgress(Math.round(curr / n) * 100);
          });
        })
      );
      // const LocomotiveScroll = (await import("locomotive-scroll")).default;
      // const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setLoaded(true);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    };
    loadAssets();
  }, []);
  return { loaded, progress };
}
