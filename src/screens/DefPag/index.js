import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function DefPage() {
    const estilos = styles
    return (
        <View style={estilos.container} >
            <Text style={estilos.texto}>Time de Defesa Page</Text>
        </View>
    );
}