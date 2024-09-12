import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { onValue, ref } from "firebase/database";
import { db } from "../../../../database/config";
import styles from "./styles";

export default function Lista() {
  const [todoData, setTodoData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const starCountRef = ref(db, 'conceitos/' + 'geral/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newConceito = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
      setTodoData(newConceito);
    });
  }, []);

  const handlePress = (item) => {
    navigation.navigate('Detalhes', {
      titulo: item.titulo,
      img: item.img,
      detalhes: item.detalhes
    });
  };

  return (
    <View>
      {todoData.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(item)}>
          <View>
            <Text>{item.titulo}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
