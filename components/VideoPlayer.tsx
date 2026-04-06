"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRef, useState } from "react";

export default function VideoDialog({ children, setExpanded }: { children: any;setExpanded: any }) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = (e: any) => {
    e.preventDefault();
    // clear previous timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // set new debounce timer
    timerRef.current = setTimeout(() => {
      setOpen(true);
    }, 2000);
  };
  return (
    <Dialog open={open} onOpenChange={(isOpen)=>{
      setOpen(isOpen);
      if(!isOpen){
        setExpanded(false);
      }
    }}>
      <DialogTrigger onClick={handleClick} asChild>{children}</DialogTrigger>
      <DialogContent className="!max-w-[80vw] !w-[80vw] z-[1000] bg-zinc-900 border-none p-0 overflow-hidden">
        <DialogTitle className="sr-only"></DialogTitle>
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
