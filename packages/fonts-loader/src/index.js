import { useFonts as useExpoFonts } from "expo-font";
export const useFonts = (params) => {
  const [loaded, error] = useExpoFonts(params);
  const result = []
  Object.keys(params).forEach((item) => {
    result.push({
      [item]: {
        className: item,
        variable: item,
        style: {
          fontFamily: item,
        }
      }
    })
  })
  return {
    loaded,
    error,
    result
  };
}