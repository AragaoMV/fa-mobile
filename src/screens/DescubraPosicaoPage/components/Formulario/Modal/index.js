import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'; // Supondo que você tenha um arquivo styles.js para a modal

const CustomModal = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            Insira o número de flexões que você consegue fazer em 1 minuto
          </Text>
          <TouchableOpacity style={styles.okButton} onPress={onClose}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
