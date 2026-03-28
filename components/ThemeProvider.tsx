"use client";
import React, { useEffect } from "react";
import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes";
export default function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemeProvider>) {
  const {setTheme} = useTheme();
  useEffect(()=>{
    setTheme("dark");
  },[]);
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
