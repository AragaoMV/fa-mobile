import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles";
import Topo from "./components/Topo";
import Formulario from "./components/Formulario";

export default function DescubraPosicaoPage() {
    const estilos = styles
    return (
        <ScrollView style={estilos.container} >
            <Topo/>
            <Formulario/>
        </ScrollView>
    );
}