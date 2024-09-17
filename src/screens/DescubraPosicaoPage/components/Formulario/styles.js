import { StyleSheet } from "react-native";
import Colors from "../../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: Colors.neutral500,
        padding: 12,
    },
    formulairo: {
        borderColor: Colors.neutral300,
        borderRadius: 8,
        borderWidth: 1,
        height: 48,
        paddingVertical: 12,  // Adjust vertical padding
        paddingHorizontal: 8,  // Match horizontal padding
        color: Colors.neutral300,
        fontFamily: "Roboto_400Regular",
        fontSize: 16,  // Font size for input text
        lineHeight: 24,
    },
    customPlaceholder: {
        position: "absolute",
        left: 8,  // Match horizontal padding with TextInput
        top: '50%',  // Align vertically in the center
        transform: [{ translateY: -8 }],  // Adjust the vertical position
        color: Colors.neutral300,
        fontSize: 8,  // Font size for placeholder text
        fontFamily: "Roboto_400Regular",
    },
    inputWrapper: {
        position: "relative",  // To position the custom placeholder
    },
    tituloCampo: {
        color: Colors.neutral300,
        textAlign: "justify",
        fontFamily: "Roboto_400Regular",
        fontSize: 12,
        fontStyle: "normal",
        lineHeight: 18,
       
        marginBottom: 8,
    },
    topoCampo: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 12,
    },
});

export default styles;
