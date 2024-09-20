import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Colors from "../../../../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import CustomModal from "./Modal";

export default function Formulario() {
  // Estados para armazenar os dados de cada campo
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [forca, setForca] = useState("");
  const [velocidade, setVelocidade] = useState("");

  // Estados para controlar a visibilidade das modais
  const [modalForcaVisible, setModalForcaVisible] = useState(false);
  const [modalVelocidadeVisible, setModalVelocidadeVisible] = useState(false);
  const [modalPosicaoVisible, setModalPosicaoVisible] = useState(false);
  const [posicaoRecomendada, setPosicaoRecomendada] = useState("");

  const handleAnalisar = () => {
    // Coletando os dados inseridos no formulário
    const formData = {
      altura: parseFloat(altura),
      peso: parseFloat(peso),
      forca: parseFloat(forca),
      velocidade: parseFloat(velocidade),
    };

    // Aplicando as condicionais para definir a posição recomendada
    let posicao = '';
    if (formData.altura > 180 && formData.peso > 100 && formData.velocidade >= 6 && formData.forca >= 40) {
      posicao = 'OL/DL';
    } else if (formData.altura > 180 && formData.peso > 80 && formData.forca > 30 && formData.velocidade <= 5.5) {
      posicao = 'TE';
    } else if (formData.altura > 175 && formData.peso > 80 && formData.forca > 30 && formData.velocidade <= 5.5) {
      posicao = 'LB';
    } else if (formData.altura >= 176 && formData.forca > 30 && formData.velocidade <= 5) {
      posicao = 'DB';
    } else if (formData.altura >= 176 && formData.peso <= 90 && formData.velocidade <= 5) {
      posicao = 'WR';
    } else if (formData.altura < 175 && formData.peso >= 70 && formData.forca > 30 && formData.velocidade <= 4.7) {
      posicao = 'RB';
    } else {
      posicao = 'Posição não encontrada';
    }

    // Definindo a posição recomendada no estado e exibindo a modal
    setPosicaoRecomendada(posicao);
    setModalPosicaoVisible(true);

    // Limpando os campos do formulário
    setAltura("");
    setPeso("");
    setForca("");
    setVelocidade("");
  };

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
        <TouchableOpacity onPress={() => setModalForcaVisible(true)}>
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
        <TouchableOpacity onPress={() => setModalVelocidadeVisible(true)}>
          <MaterialIcons name="info-outline" size={16} color={Colors.main500} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputWrapper}>
        {!velocidade && <Text style={styles.customPlaceholder}>Velocidade</Text>}
        <TextInput
          style={styles.formulairo}
          keyboardType="numeric"
          onChangeText={setVelocidade}
          value={velocidade}
          placeholderTextColor="transparent" // Hide the default placeholder
        />
      </View>

      {/* Botão para coletar os dados */}
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={handleAnalisar}
        >
          <Text style={styles.btnText}>Analisar</Text>
        </TouchableOpacity>
      </View>

      {/* Modal Personalizada para o campo Força */}
      <CustomModal
        visible={modalForcaVisible}
        onClose={() => setModalForcaVisible(false)}
        message="Insira o número de flexões que você consegue fazer em 1 minuto"
      />

      {/* Modal Personalizada para o campo Velocidade */}
      <CustomModal
        visible={modalVelocidadeVisible}
        onClose={() => setModalVelocidadeVisible(false)}
        message="Insira o seu tempo da corrida de 40 jardas"
      />

      {/* Modal para mostrar a posição recomendada */}
      <CustomModal
        visible={modalPosicaoVisible}
        onClose={() => setModalPosicaoVisible(false)}
        message={`Posição recomendada: ${posicaoRecomendada}`}
      />
    </View>
  );
}
