import { Image as ExpoImage } from "expo-image";
// console.log("UNIVERSAL IMAGE 0==||=========>");
function Image(props: {
  src: string;
  width: number;
  height: number;
  alt: string;
}) {
  let { src, ...restProps } = props;
  return <ExpoImage source={src} {...restProps} />;
}

export default Image;
