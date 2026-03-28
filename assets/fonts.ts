import localFont from "next/font/local";

export const AvanttFont = localFont({
  src: [
    {
      path: "../custom-fonts/avantt-font-family/AvanttTRIAL-Regular-BF6721a86b1a848.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../custom-fonts/avantt-font-family/AvanttTRIAL-Medium-BF6721a86adebb3.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../custom-fonts/avantt-font-family/AvanttTRIAL-SemiBold-BF6721a86b1576e.otf", // 👈 add this
      weight: "600",
      style: "normal",
    },
    {
      path: "../custom-fonts/avantt-font-family/AvanttTRIAL-Bold-BF6721a86b15f0a.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../custom-fonts/avantt-font-family/AvanttTRIAL-ExtraBold-BF6721a86b196a3.otf", // 👈 add this
      weight: "800",
      style: "normal",
    },
    {
      path: "../custom-fonts/avantt-font-family/AvanttTRIAL-Heavy-BF6721a86b17e0b.otf", // 👈 add this
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-avantt",
});