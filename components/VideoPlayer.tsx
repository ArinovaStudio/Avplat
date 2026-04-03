"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Video = {
  id: number;
  title: string;
  src: string;
};

const videos: Video[] = [
  {
    id: 1,
    title: "Site Video",
    src: "/hero-video.mp4",
  },
];

export default function VideoDialog({ children }: { children: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  //   const handleNext = () => {
  //     setCurrentIndex((prev) => (prev + 1) % videos.length);
  //   };

  const currentVideo = videos[currentIndex];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogTitle></DialogTitle>
        <div className="min-h-screen min-w-screen">
          <video
            key={currentVideo.src}
            src={currentVideo.src}
            controls
            autoPlay
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
