import { Image as ExpoImage } from "expo-image";
import { forwardRef } from "react";

const Image = forwardRef((props: any, ref: any) => {
  const { height, width, style, ...restProps } = props;

  let updatedStyles = Array.isArray(style) ? [...style] : [{ ...style }];

  if (Array.isArray(updatedStyles)) {
    updatedStyles.unshift({ height, width });
  } else {
    updatedStyles = [{ height, width }, style];
  }

  return <ExpoImage {...restProps} style={updatedStyles} ref={ref} />;
});

Image.displayName = "ExpoImage";

export default Image;
