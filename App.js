import * as React from "react"
import HomePage from "./src/screens/HomePage";
import { SafeAreaView } from "react-native";


export default function App() {
    return (
        <SafeAreaView style={[{ flex: 1, alignItems: 'center', alignContent: 'flex-start',}]}>  
            <HomePage />
        </SafeAreaView>

    );
}