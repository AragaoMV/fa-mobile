import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { onValue, ref } from "firebase/database";
import { db } from "../../database/config"; 
import styles from "./styles";

export default function PosicaoPage() {
    const estilos = styles
    const [todoData, setTodoData] = useState([])
    useEffect(() => {
        const starCountRef = ref(db, 'posicao/' + 'defesa/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            const newConceito = Object.keys(data).map(key => ({
                id: key,
                ...data[key]

            }));
            setTodoData(newConceito);
        })
    }, [])



    return (
        <View style={estilos.container} >
            <Text style={estilos.texto}>Posicao Defesa Page</Text>
            <View>
                {
                    todoData.map((item, index) => {
                        return (
                            <View key={index}>
                                <Text>{item.titulo}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    );
}