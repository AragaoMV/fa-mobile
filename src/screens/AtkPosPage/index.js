import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import Topo from "./components/Topo";
import Lista from "./components/Lista";

export default function AtkPosPage() {
    const estilos = styles

    return (
        <View style={estilos.container} >
            <Topo />
            <Lista />
        </View>
    );
}