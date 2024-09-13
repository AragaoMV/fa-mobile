import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Topo() {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Times Especiais</Text>
            <Text style={styles.text}>Os times especiais são conhecidos também como time de chute,
                esse time é encarregado pelas jogadas feitas com os pés, usados geralmente na 4ª decida e para iniciar partidas.
                Os jogadores que geralmente compõem esse time são geralmente jogadores de
                segunda ou terceira rotação dos outros times (ataque e defesa).</Text>
        </View>

    )
}