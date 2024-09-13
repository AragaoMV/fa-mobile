import React from "react";
import { ScrollView} from "react-native";
import styles from "./styles";
import Topo from "./components/Topo";
import Lista from "./components/Lista";

export default function AtkPage() {
    const estilos = styles
    return (
        <ScrollView style={estilos.container} >
            <Topo/>
            <Lista/>
        </ScrollView>
    );
}