import * as React from "react";
import { SafeAreaView } from "react-native";
import HomePage from "./src/screens/HomePage";
import Fonts from "./src/constants/fonts";

export default function App() {
  const fontsLoaded = Fonts();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomePage />
    </SafeAreaView>
  );
}
