import { StyleSheet } from "react-native";
import Colors from "../../constants/colors"; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: Colors.neutral500,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 16,
      color: Colors.main500,
      textAlign:"center"
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
      color: Colors.neutral100,
      textAlign: "justify",
      fontSize: 16,
      fontStyle: "normal",
      fontFamily: 'Roboto_400Regular',
      lineHeight: 18,
    },
  });

export default styles;
