import { StyleSheet } from 'react-native';
import Colors from '../../../../../constants/colors'; // Importando suas cores

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
  },
  modalContainer: {
    width: '80%',
    backgroundColor: Colors.neutral500,
    borderWidth: 1,
    borderColor: Colors.main500, // Cor de fundo da modal
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 24,
    color: Colors.neutral100, // Cor do texto
    marginBottom: 10,
    textAlign: 'center',
  },
  okButton: {
    backgroundColor: Colors.main500, // Cor do botão
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  okButtonText: {
    color: Colors.neutral900,
    fontFamily: "Roboto_400Regular",
    fontSize: 12,
    lineHeight: 18,
    fontWeight: 'bold',
    marginHorizontal: 24,
    marginVertical:8,
  },
});

export default styles;
