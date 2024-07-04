"use client";

import { Inter } from "next/font/google";
import { useFonts } from "@unitools/fonts-loader";
import "./globals.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

const inter1 = useFonts();

const inter = Inter({
  weight: ["100", "500", "600"],
  subsets: ["latin"],
  variable: "--inter",
});

import StyledJsxRegistry from "./registry";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable} style={{ display: "flex" }}>
        <StyledJsxRegistry>
          <GluestackUIProvider mode="light">{children}</GluestackUIProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
