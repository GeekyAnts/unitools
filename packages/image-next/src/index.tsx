import NextImage from "next/image";
import { forwardRef } from "react";

const Image = forwardRef((props: any, ref: any) => {
  let { source, placeholder, contentFit, contentPosition, ...restProps } =
    props;

  let nextImageProps: any = {
    src: source,
  };

  if (restProps?.height === "100%" && restProps?.width === "100%") {
    nextImageProps.fill = true;
    delete restProps.height;
    delete restProps.width;
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
      ref={ref}
    />
  );
});

Image.displayName = "NextImage";

export default Image;
