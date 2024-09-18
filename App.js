import * as React from "react";
import { Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from "@react-navigation/native";
import Fonts from "./src/constants/fonts";
import DrawerNavigator from "./src/navigation/DrawerNavigator";


export default function App() {
  const fontsLoaded = Fonts();

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
