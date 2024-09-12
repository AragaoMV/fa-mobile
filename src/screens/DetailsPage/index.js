import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetailsPage({ route }) {
  const { titulo, img, detalhes } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titulo}</Text>
      <Image source={{ uri: img }} style={styles.image} />
      <Text style={styles.description}>{detalhes}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});