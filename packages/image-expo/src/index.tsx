import { Image as ExpoImage } from "expo-image";

function Image(props: any) {
  const { height, width, style, ...restProps } = props;

  let updatedStyles = Array.isArray(style) ? [...style] : [{ ...style }];

  if (Array.isArray(updatedStyles)) {
    updatedStyles.unshift({ height, width });
  } else {
    updatedStyles = [{ height, width }, style];
  }

  return <ExpoImage {...restProps} style={updatedStyles} />;
}

export default Image;
