import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer, Link as RNLink } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Link,
  usePathname,
  useRouter,
  useSearchParams,
} from "@unitools/navigation";
import Image from "@unitools/image";

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Text>Home Screen</Text>
      <Image src="test.png" width={50} height={50} alt="saj" />
      <Link
        href={{
          pathname: "/Second",
          params: { name: "saj" },
        }}
      >
        <Text>Second</Text>
      </Link>
    </View>
  );
}
function SecondScreen({ navigation }: any) {
  let route = useRouter();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Second Screen</Text>
      <Button
        title="Router Home"
        onPress={() => route.replace("/Home")}
      ></Button>
      <Button title="Home" onPress={() => navigation.navigate("Home")}></Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
