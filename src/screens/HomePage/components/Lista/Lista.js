import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Text, View } from "react-native";
import { onValue, ref } from "firebase/database";
import { db } from "../../../../database/config";

export default function Lista() {

    const [todoData, setTodoData] = useState([])
    useEffect(() => {
        const starCountRef = ref(db, 'conceitos/' + 'geral/');
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
    )

}