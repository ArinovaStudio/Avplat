// "use client";

// import { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// type Video = {
//   id: number;
//   title: string;
//   src: string;
// };

// const videos: Video[] = [
//   {
//     id: 1,
//     title: "Site Video",
//     src: "/hero-video.mp4",
//   },
// ];

// export default function VideoDialog({ children }: { children: any }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const currentVideo = videos[currentIndex];

//   return (
//     <Dialog>
//       <DialogTrigger asChild>{children}</DialogTrigger>

//       <DialogContent className="min-w-[90vw]">
//         <DialogTitle></DialogTitle>
//         <div className="w-full overflow-clip max-h-[90vh]">
//           <video
//             key={currentVideo.src}
//             src={currentVideo.src}
//             controls
//             className="w-full max-h-[90vh]"
//             autoPlay
//           />
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function VideoDialog({ children }: { children: any }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="!max-w-[80vw] !w-[80vw] bg-zinc-900 border-none p-0 overflow-hidden"
      >
        <DialogTitle className="sr-only">Video</DialogTitle>
        <div className="w-full aspect-video mt-8">
          <iframe
            src="https://www.youtube.com/embed/IlbOpSccI_E?autoplay=1&controls=1&modestbranding=1&rel=0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}