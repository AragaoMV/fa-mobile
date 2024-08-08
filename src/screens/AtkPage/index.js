import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function AtkPage() {
    const estilos = styles
    return (
        <View style={estilos.container} >
            <Text style={estilos.texto}>Time de Ataque Page</Text>
        </View>
    );
}