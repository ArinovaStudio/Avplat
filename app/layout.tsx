import type { Metadata } from "next";
import "./globals.css";
import { AvanttFont } from "@/assets/fonts";
import ThemeProvider from "@/components/ThemeProvider";
import { siteInfo } from "@/lib/content";
export const metadata: Metadata = {
  title: `${siteInfo.SITE_NAME}`,
  description: `${siteInfo.SITE_NAME} is an website created for various purposes`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${AvanttFont.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
          <ThemeProvider
            defaultTheme="dark"
            attribute={"class"}
            enableColorScheme
            enableSystem
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
