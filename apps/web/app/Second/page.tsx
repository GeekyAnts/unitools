"use client";
import React from "react";
import { View, Text } from "react-native-web";
import Link from "next/link";

export default function SecondScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Second Screen</Text>
      <Link href="/">Home</Link>
    </View>
  );
}
