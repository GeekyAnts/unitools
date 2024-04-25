import React from "react";
import { Pressable, Text, View } from "react-native";

import { preview } from "react-native-ide";

preview(<MyButton name={"ankit"} />);

function MyButton({ name }: any) {
  return (
    <Pressable>
      <Text>{name}</Text>
    </Pressable>
  );
}

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
};

export default App;
