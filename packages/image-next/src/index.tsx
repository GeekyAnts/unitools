import NextImage from "next/image";
import { forwardRef } from "react";

const Image = forwardRef((props: any) => {
  let {
    source,
    height,
    width,
    placeholder,
    contentFit,
    contentPosition,
    ...restProps
  } = props;

  let nextImageProps: any = {
    height,
    width,
    src: source,
  };

  if (height === "100%" && width === "100%") {
    nextImageProps.fill = true;
    delete nextImageProps.height;
    delete nextImageProps.width;
  }

  if (source?.uri) {
    nextImageProps.src = source?.uri;
  }

  return (
    <NextImage
      placeholder={placeholder?.uri ?? placeholder}
      {...nextImageProps}
      {...restProps}
      style={{
        objectFit: contentFit,
        objectPosition: contentPosition,
        ...restProps?.style,
      }}
    />
  );
});

Image.displayName = "NextImage";

export default Image;
