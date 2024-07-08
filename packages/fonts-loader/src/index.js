import { useFonts as useExpoFonts } from "expo-font";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const useFonts = () => {
  const [loaded, error] = useExpoFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });
  return {
    loaded,
    error,
    inter: {
      className: "SpaceMono",
      variable: "SpaceMono",
      style: {
        fontFamily: "SpaceMono",
      },
    },
  };
};
