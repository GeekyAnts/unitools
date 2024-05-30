import type { ImageStyle, ImageContentFit } from "expo-image";

export type ImageSource = {
  /**
   * A string representing the resource identifier for the image,
   * which could be an http address, a local file path, or the name of a static image resource.
   */
  uri: string;
};

export interface IImageProps {
  /**
   * An image to display while loading the proper image and no image has been displayed yet or the source is unset.
   */
  placeholder?: ImageSource | string;
  /**
   * The text that's read by the screen reader when the user interacts with the image. Sets the the `alt` tag on web which is used for web crawlers and link traversal. Is an alias for `accessibilityLabel`.
   *
   * @alias accessibilityLabel
   * @default undefined
   */
  alt: string;

  /**
   * The image source, either a remote URL, a local file resource or a number that is the result of the `require()` function.
   * When provided as an array of sources, the source that fits best into the container size and is closest to the screen scale
   * will be chosen. In this case it is important to provide `width`, `height` and `scale` properties.
   */
  source?: ImageSource | number | string;
  height: number | string;
  width: number | string;
  style?: ImageStyle | ImageStyle[] | any;
  contentFit?: ImageContentFit;
  contentPosition?: string;
  onError?: (error: any) => void;
  priority?: any;
}

function Image(_: IImageProps) {
  return null;
}

export default Image;
