import { Image as ExpoImage } from "expo-image";
import type { IImageProps } from "@unitools/image";

function Image(props: IImageProps) {
  const { height, width, style, ...restProps } = props;

  let updatedStyles = style;

  if (Array.isArray(updatedStyles)) {
    updatedStyles.unshift({ height, width });
  } else {
    updatedStyles = [{ height, width }, style];
  }

  // @ts-ignore
  return <ExpoImage {...restProps} style={updatedStyles} />;
}

export default Image;
