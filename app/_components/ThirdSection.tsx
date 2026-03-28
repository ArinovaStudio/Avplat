export default function ThirdSection() {
  return (
    <div className="relative h-full min-w-[280vw]">
      <div className="relative h-full min-w-screen">
        <div className="sticky top-0 left-0 w-full max-w-screen h-full">
          <video
            src="/MenuGif.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
            controls={false}
          />
        </div>
      </div>
      <svg className="absolute left-0 inset-0 min-w-full w-max h-full z-10"
      >
        <defs>
          <mask id="text-mask">
            <rect width="100%" height="100%" fill="white" />
            <text
              x="0%"
              y="50%"
              textAnchor="start"
              dy=".35em"
              fontSize="800"
              fontWeight="900"
              fill="black"
            >
              MEET WON
            </text>
          </mask>
        </defs>

        <rect width="100%" height="100%" fill="black" mask="url(#text-mask)" />
      </svg>
    </div>
  );
}
