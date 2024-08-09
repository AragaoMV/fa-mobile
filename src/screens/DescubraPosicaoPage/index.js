import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function DescubraPosicaoPage() {
    const estilos = styles
    return (
        <View style={estilos.container} >
            <Text style={estilos.texto}>Formulario Descubra Posição</Text>
        </View>
    );
}