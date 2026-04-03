"use client";

export default function ThirdSection({
  sectionRef,
  thirdSectionTextRef,
  thirdSectionSvgWrapper
}: {
  sectionRef: any;
  thirdSectionTextRef: any;
  thirdSectionSvgWrapper: any
}) {
  return (
    <div
      ref={sectionRef}
      id="mentorship"
      className="
        w-full 
        overflow-hidden
        max-md:w-screen
        h-screen
      "
    >
      <svg
      ref={thirdSectionSvgWrapper}
        className="
          absolute inset-0 
          min-w-full
          w-max 
          left-[36%]
          h-full 
          z-10
          max-md:hidden
          max-md:text-center
        "
      >
        <defs>
          <mask id="text-mask">
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

        <rect width="100%" height="100%" fill="black" mask="url(#text-mask)" />
      </svg>
    </div>
  );
}