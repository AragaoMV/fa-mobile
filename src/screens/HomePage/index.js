import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles";
import Topo from "./components/Topo";
import Lista from "./components/Lista";


export default function HomePage() {
    const estilos = styles
    return (

        <ScrollView style={estilos.container} >
            <Topo />
            <Lista />
        </ScrollView>

    );
}