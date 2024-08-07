import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import Link from "@unitools/link";
import { useNavigation } from "expo-router";
import Image from "@unitools/image";
import { Image as ExpoImage } from "expo-image";
import type { ImageProps } from "expo-image";
import { useRouter } from "@unitools/router";
import Button from "@/components/button/button";

export default function TabOneScreen() {
  let a: ImageProps = {};

  const router = useRouter();
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <View style={styles.container}>
      <Text
        className="font-body"
        style={
          {
            // fontFamily: "SpaceMono",
            // fontWeight: 900,
          }
        }
      >
        Go to Tab two
      </Text>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <Link href="/(tabs)/two">Go to tabs</Link>
      <Image
        source={require("@/assets/images/splash.png")}
        placeholder={blurhash}
        contentFit="cover"
        alt="dkfjndkb"
        height={200}
        width={200}
      />
      <Button />
      {/* <ExpoImage
        style={{
          flex: 1,
          width: "100%",
          backgroundColor: "#0553",
        }}
        source={require("@/assets/images/splash.png")}
      /> */}
      <Pressable
        onPress={() => {
          router.push("/(tabs)/two");
        }}
      >
        <Text className="bg-red-500 font-body">Go to Tab two</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
