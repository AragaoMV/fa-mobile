import * as React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Fonts from "./src/constants/fonts";
import DrawerNavigator from "./src/navigation/DrawerNavigator";

export default function App() {
  const fontsLoaded = Fonts();

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; 
  }

  return (
    <NavigationContainer >
      <SafeAreaView style={{ flex: 1 }}>
        <DrawerNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}
