import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.neutral500, // Normal mode background color
  },
  containerModoLeitura: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.paperwhite, // Modo Leitura background color
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    color: Colors.main500, // Normal mode title color
    textAlign: "center",
  },
  titleModoLeitura: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    color: Colors.neutral500, // Modo Leitura title color
    textAlign: "center",
  },
  image: {
    width: '94%',
    alignSelf: "center",
    height: 192,
    borderRadius: 8,
    marginBottom: 16,
    resizeMode: "cover",
  },
  description: {
    color: Colors.neutral100, // Normal mode description color
    textAlign: "justify",
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: 'Roboto_400Regular',
    lineHeight: 18,
  },
  descriptionModoLeitura: {
    color: Colors.neutral500, // Modo Leitura description color
    textAlign: "justify",
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: 'Roboto_400Regular',
    lineHeight: 18,
  },
  botaoModoLeitura: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  modoLeitura: {
    borderWidth: 2,
    borderColor: Colors.main500,
    borderRadius: 40,
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default styles;
