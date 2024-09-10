import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import Lista from "./components/Lista/Lista";


export default function HomePage() {
    const estilos = styles
    return (

        <View style={estilos.container} >
            <Text style={estilos.texto}>Home Page</Text>
            <Lista />
        </View>

    );
}