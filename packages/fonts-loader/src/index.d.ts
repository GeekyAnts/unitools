declare module "@unitools/fonts" {
  import { FontSource } from "expo-font";

  interface FontParams {
    [key: string]: FontSource | string;
  }

  interface UseFontsResult {
    loaded: boolean;
    error: Error | null;
    result: Array<{
      [key: string]: {
        className: string;
        variable: string;
        style: { fontFamily: string };
      };
    }>;
  }

  export const useFonts: (params: FontParams) => UseFontsResult;
}
