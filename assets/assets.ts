const ASSETS = [
  {
    type: "image",
    location: "/example.jpg",
  },
  {
    type: "image",
    location: "/file.svg",
  },
  {
    type: "image",
    location: "/globe.svg",
  },
  {
    type: "image",
    location: "/man-working.png",
  },
  {
    type: "video",
    location: "/MenuGif.mp4",
  },
  {
    type: "image",
    location: "/next.svg",
  },
  {
    type: "image",
    location: "/professor.png",
  },
  {
    type: "image",
    location: "/sign.png",
  },
  {
    type: "image",
    location: "/vercel.svg",
  },
  {
    type: "video",
    location: "/video.mp4",
  },
  {
    type: "image",
    location: "/window.svg",
  },
  {
    type: "video",
    location: "/hero-video.mp4",
  },
  {
    type: "image",
    location: "/1.jpg",
  },
  {
    type: "image",
    location: "/Executive Lounge Chair.JPG",
  },
  {
    type: "image",
    location: "/Reg No.JPG",
  },
  {
    type: "image",
    location: "/Executive Lounge_Fwd.JPG",
  },
  {
    type: "image",
    location: "/Nose_Left.JPG",
  },
];

for(let i = 1;i<160;++i){
  ASSETS.push({
    type: "image",
    location: `/hero-photos/${i}.jpg`
  });
}

export {ASSETS};