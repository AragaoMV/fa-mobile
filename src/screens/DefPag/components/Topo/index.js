import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Topo() {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Time de Defesa</Text>
            <Text style={styles.text}>O Time de defesa é responsável pela parte defensiva do time, 
                sua principal função é parar o avanço adversário evitando com que eles pontuem, 
                geralmente seu time é composto por jogadores mais fortes e físicos.</Text>
        </View>

    )
}