import * as React from "react";
import { Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from "@react-navigation/native";
import Fonts from "./src/constants/fonts"; // Hook de fontes
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const fontsLoaded = Fonts(); // Carregamento das fontes

  React.useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync(); // Esconde a Splash Screen quando as fontes estiverem carregadas
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    // A Splash Screen vai cobrir isso, então não precisa renderizar nada
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
