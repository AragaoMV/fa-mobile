import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import Topo from "./components/Topo";
import Formulario from "./components/Formulario";

export default function DescubraPosicaoPage() {
    const estilos = styles
    return (
        <View style={estilos.container} >
            <Topo/>
            <Formulario/>
        </View>
    );
}