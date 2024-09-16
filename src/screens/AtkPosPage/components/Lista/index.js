import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { onValue, ref } from "firebase/database";
import { db } from "../../../../database/config";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./styles";
import Colors from "../../../../constants/colors";

export default function Lista() {
  const [todoData, setTodoData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const starCountRef = ref(db, 'posicao/' + 'ataque/');
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
        <TouchableOpacity key={index} onPress={() => handlePress(item)} style={styles.container}>
          <View style={styles.cardContent}>
            <Text style={styles.text}>{item.titulo}</Text>
            <Icon name="chevron-right" size={24} color={Colors.neutral100} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
