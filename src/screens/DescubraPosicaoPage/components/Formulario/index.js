import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Colors from "../../../../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import CustomModal from "./Modal"; // Importando a modal personalizada

export default function Formulario() {
  // Estados para armazenar os dados de cada campo
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [forca, setForca] = useState("");
  const [velocidade, setVelocidade] = useState("");

  // Estado para controlar a visibilidade da modal
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Campo Altura */}
      <View style={styles.topoCampo}>
        <Text style={styles.tituloCampo}>Altura (cm)</Text>
      </View>
      <View style={styles.inputWrapper}>
        {!altura && <Text style={styles.customPlaceholder}>Altura</Text>}
        <TextInput
          style={styles.formulairo}
          maxLength={3}
          keyboardType="number-pad"
          onChangeText={setAltura}
          value={altura}
          placeholderTextColor="transparent" // Hide the default placeholder
        />
      </View>

      {/* Campo Peso */}
      <View style={styles.topoCampo}>
        <Text style={styles.tituloCampo}>Peso (kg)</Text>
      </View>
      <View style={styles.inputWrapper}>
        {!peso && <Text style={styles.customPlaceholder}>Peso</Text>}
        <TextInput
          style={styles.formulairo}
          maxLength={3}
          keyboardType="number-pad"
          onChangeText={setPeso}
          value={peso}
          placeholderTextColor="transparent" // Hide the default placeholder
        />
      </View>

      {/* Campo Força */}
      <View style={styles.topoCampo}>
        <Text style={styles.tituloCampo}>Força</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <MaterialIcons name="info-outline" size={16} color={Colors.main500} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputWrapper}>
        {!forca && <Text style={styles.customPlaceholder}>Força</Text>}
        <TextInput
          style={styles.formulairo}
          keyboardType="number-pad"
          maxLength={3}
          onChangeText={setForca}
          value={forca}
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
      <View style={styles.inputWrapper}>
        {!velocidade && <Text style={styles.customPlaceholder}>Velocidade</Text>}
        <TextInput
          style={styles.formulairo}
          keyboardType="decimal-pad"
          onChangeText={setVelocidade}
          value={velocidade}
          placeholderTextColor="transparent" // Hide the default placeholder
        />
      </View>

      {/* Botão para coletar os dados */}
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => {
            // Coletando os dados inseridos no formulário
            const formData = {
              altura,
              peso,
              forca,
              velocidade,
            };
            console.log(formData); // Apenas imprime os dados no console, sem realizar nenhuma ação por enquanto
          }}
        >
          <Text style={styles.btnText}>Analisar</Text>
        </TouchableOpacity>
      </View>

      {/* Modal Personalizada */}
      <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
}
