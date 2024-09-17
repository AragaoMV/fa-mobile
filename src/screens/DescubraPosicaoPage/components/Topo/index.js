import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Topo() {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Descubra sua Posição</Text>
            <Text style={styles.text}> Preencha o formulário com as informações solicitadas para
                que o FA Mobile possa indicar uma possível posição idel para você.</Text>
            <Text style={styles.disclaimer}>A informação dada pelo FA Mobile serve apenas como um direcional, o seu desempenho no campo é mais importante do que apenas dados.</Text>

        </View>

    )
}