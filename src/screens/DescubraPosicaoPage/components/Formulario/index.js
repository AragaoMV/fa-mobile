import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Colors from "../../../../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function Formulario() {
  const [value, setValue] = useState(""); // State to track input value

  return (
    <ScrollView style={styles.container}>
      {/* Campo Altura */}
      <View style={styles.topoCampo}>
        <Text style={styles.tituloCampo}>Altura (cm)</Text>
      </View>
      {/* Custom Placeholder */}
      <View style={styles.inputWrapper}>
        {!value && <Text style={styles.customPlaceholder}>Altura</Text>}
        <TextInput
          style={styles.formulairo}
          keyboardType="number-pad"
          onChangeText={setValue}
          value={value}
          placeholderTextColor="transparent" // Hide the default placeholder
        />

      </View>
      {/* Campo Peso */}
      <View style={styles.topoCampo}>
        <Text style={styles.tituloCampo}>Peso (kg)</Text>
      </View>
      {/* Custom Placeholder */}
      <View style={styles.inputWrapper}>
        {!value && <Text style={styles.customPlaceholder}>Peso</Text>}
        <TextInput
          style={styles.formulairo}
          keyboardType="number-pad"
          onChangeText={setValue}
          value={value}
          placeholderTextColor="transparent" // Hide the default placeholder
        />
      </View>

      {/* Campo Força */}
      <View style={styles.topoCampo}>
        <Text style={styles.tituloCampo}>Força</Text>
        <TouchableOpacity>
          <MaterialIcons name="info-outline" size={16} color={Colors.main500} />
        </TouchableOpacity>
      </View>
      {/* Custom Placeholder */}
      <View style={styles.inputWrapper}>
        {!value && <Text style={styles.customPlaceholder}>Força</Text>}
        <TextInput
          style={styles.formulairo}
          keyboardType="number-pad"
          onChangeText={setValue}
          value={value}
          placeholderTextColor="transparent" // Hide the default placeholder
        />
      </View>

      {/* Campo Velocidade */}
      <View style={styles.topoCampo}>
        <Text style={styles.tituloCampo}>Velocidade</Text>
        <TouchableOpacity>
          <MaterialIcons name="info-outline" size={16} color={Colors.main500} />
        </TouchableOpacity>
      </View>
      {/* Custom Placeholder */}
      <View style={styles.inputWrapper}>
        {!value && <Text style={styles.customPlaceholder}>Velocidade</Text>}
        <TextInput
          style={styles.formulairo}
          keyboardType="number-pad"
          onChangeText={setValue}
          value={value}
          placeholderTextColor="transparent" // Hide the default placeholder
        />
      </View>
    </ScrollView>
  );
}
