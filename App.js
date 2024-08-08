import * as React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigation/botTabNavigator";  // Importe o BottomTabNavigator
import Fonts from "./src/constants/fonts";

export default function App() {
  const fontsLoaded = Fonts();

  return (
    <NavigationContainer >
      <SafeAreaView style={{ flex: 1, }}>
        <BottomTabNavigator /> 
      </SafeAreaView>
    </NavigationContainer>
  );
}
