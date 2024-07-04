import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["100", "500", "600"],
  subsets: ["latin"],
  variable: "--inter",
});

export const useFonts = () => {
  return {
    loaded: null,
    error: null,
    ...inter,
  };
};
