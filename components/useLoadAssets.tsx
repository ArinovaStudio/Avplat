"use client";
import React, { useEffect, useState } from "react";
import { ASSETS } from "@/assets/assets";
export default function useLoadAssets() {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    window.scroll(0,0);
    const loadAssets = async () => {
      document.body.style.cursor = "not-allowed";
      document.body.style.overflow = "hidden";

      const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

      let curr = 0;
      const n = ASSETS.length;

      await Promise.all(
        ASSETS.map(async (asset, index) => {

          return new Promise<void>((resolve, reject) => {
            const handleDone = () => {
              curr += 1;
              setProgress(Math.round((curr / n) * 100));
              resolve();
            };

            if (asset.type === "image") {
              const img = new Image();
              img.src = asset.location;
              img.onload = handleDone;
              img.onerror = reject;
            } else if (asset.type === "video") {
              const video = document.createElement("video");
              video.src = asset.location;
              video.oncanplaythrough = handleDone;
              video.onerror = reject;
            }
          });
        })
      );

      setTimeout(() => {
        document.body.style.cursor = "default";
        document.body.style.overflow = "auto";
        setLoaded(true);
      }, 2000);
    };

    loadAssets();
  }, []);
  return { loaded, progress };
}
