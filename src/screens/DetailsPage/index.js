import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './styles';

export default function DetailsPage({ route }) {
  const { titulo, img, detalhes } = route.params;
  const estilos = styles;

  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>{titulo}</Text>
      <Image source={{ uri: img }} style={estilos.image} />
      <Text style={estilos.description}>{detalhes}</Text>
    </View>
  );
}

