import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Topo() {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Guia de Futebol Americano</Text>
            <Text style={styles.text}>O futebol americano é mais do que um esporte de contao. Força, agilidade,
                intensidade e o conhecimento das diverdsas jogadas a serem realizadas durante uma partida é
                o que torna quase um jogo de tabuleiro, torna os atletas do futebol americano completos
                e exige o seu máximo em comprometimento e conhecimento.</Text>
            <Text style={styles.text}>Esse app serve como um guia para atletas e amantes do esporte, feito de maneira didática
                para aumentar o crescimento sobe o esporte</Text>
        </View>

    )
}