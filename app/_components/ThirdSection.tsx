"use client";

export default function ThirdSection({
  sectionRef,
  thirdSectionTextRef,
  thirdSectionSvgWrapper,
  thirdMobileSvgWrapper,
  thirdMobileTextRef,
}: {
  sectionRef: any;
  thirdSectionTextRef: any;
  thirdSectionSvgWrapper: any;
  thirdMobileTextRef: any;
  thirdMobileSvgWrapper: any;
}) {
  return (
    <div
      ref={sectionRef}
      id="mentorship"
      className="
        w-full 
        overflow-hidden
        max-md:w-screen
        min-h-screen
      "
    >
      <svg
        ref={thirdMobileSvgWrapper}
        className="w-full md:hidden max-md:h-screen max-md:absolute scale-300 block overflow-hidden"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <mask id="text-mask-1">
            <rect width="100%" height="100%" fill="white" />
            <g ref={thirdMobileTextRef}>
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontWeight="900"
                fill="black"
                fontSize="10"
              >
                <tspan x="50%" dy="-0.6em">
                  MEET
                </tspan>
                <tspan x="50%" dy="1.2em">
                  WON
                </tspan>
              </text>
            </g>
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="black" mask="url(#text-mask-1)" />
      </svg>
      <svg
        ref={thirdSectionSvgWrapper}
        className="
          absolute inset-0 
          min-w-full
          w-max 
          left-[38%]
          h-full 
          z-10
          max-md:hidden
          max-md:text-center
        "
      >
        <defs>
          <mask id="text-mask-2">
            <rect width="100%" height="100%" fill="white" />
            <text
              ref={thirdSectionTextRef}
              x="0%"
              id="text-to-be-scaled"
              y="51%"
              textAnchor="start"
              dy=".35em"
              fontSize="60"
              className="md:[font-size:800px]"
              fontWeight="900"
              fill="black"
            >
              MEET WON
            </text>
          </mask>
        </defs>

        <rect width="100%" height="100%" fill="black" mask="url(#text-mask-2)" />
      </svg>
    </div>
  );
}
