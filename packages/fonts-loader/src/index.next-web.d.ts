declare module "@unitools/fonts" {
  import { NextFontWithVariable } from "next/dist/compiled/@next/font";

  interface UseFontsResult {
    loaded: boolean;
    error: boolean;
    variables: string;
  }

  export const useFonts: (params: NextFontWithVariable[]) => UseFontsResult;
}
