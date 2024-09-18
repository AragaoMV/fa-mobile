import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/colors';

export default function DetailsPage({ route }) {
  const { titulo, img, detalhes } = route.params;
  const [modoLeitura, setModoLeitura] = useState(false);
  const estilos = styles;

  //Função para o modoLeitura
  const iniciaModoLeitura = () => {
    setModoLeitura(!modoLeitura)
  }

  return (
    <ScrollView style={modoLeitura ? estilos.containerModoLeitura : estilos.container}>
      <Text style={modoLeitura ? estilos.titleModoLeitura : estilos.title}>{titulo}</Text>
      <Image source={{ uri: img }} style={estilos.image} />
      <View style={estilos.botaoModoLeitura}>
        <TouchableOpacity style={estilos.modoLeitura} onPress={iniciaModoLeitura}>
          <MaterialIcons name="import-contacts" size={32} color={Colors.main500} />
        </TouchableOpacity>
      </View>
      <Text style={modoLeitura ? estilos.descriptionModoLeitura : estilos.description}>{detalhes}</Text>
    </ScrollView>
  );
}

