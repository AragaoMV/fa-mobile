import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../../../constants/colors";

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: screenWidth,
        flexShrink: 0,
        height: 54,
        paddingVertical: 8,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.neutral500,
        marginVertical: 8,
        // Efeito de sombra para Android
        elevation: 3,
        // Efeito de sombra para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    text: {
        color: Colors.neutral100, // Substitua pela cor correta
        textAlign: 'justify',
        fontFamily: 'Roboto_400Regular',
        fontSize: 12,
        fontStyle: 'normal',
        lineHeight: 18,
    },
});

export default styles;
