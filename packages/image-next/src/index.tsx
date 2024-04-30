import NextImage from "next/image";
import type { IImageProps } from "@unitools/image";

function Image(props: IImageProps) {
  let {
    source,
    height,
    width,
    placeholder,
    contentFit,
    contentPosition,
    ...restProps
  } = props;

  if (typeof source === "string") {
    return (
      //@ts-ignore
      <NextImage
        src={source}
        height={height}
        width={width}
        objectFit={contentFit}
        objectPosition={contentPosition}
        //@ts-ignore
        placeholder={placeholder?.uri}
        {...restProps}
      />
    );
  }

  return (
    <NextImage
      //@ts-ignore
      src={source?.uri}
      height={height}
      width={width}
      objectFit={contentFit}
      objectPosition={contentPosition}
      //@ts-ignore
      placeholder={placeholder?.uri}
      {...restProps}
    />
  );
}

export default Image;
