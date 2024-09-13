import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Topo() {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Time de Ataque</Text>
            <Text style={styles.text}> O time de ataque é responsavel pela parte ofensiva do time,
                tem como objetivo petincipal pontuar na partida geralmente é composto pelos jogadores mais ágeis da equipe
            </Text>
           
        </View>

    )
}