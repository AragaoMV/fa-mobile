import { StyleSheet } from "react-native";
import Colors from "../../../../constants/colors";


const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 12,
    },
    header: {
        color: Colors.neutral100,
        textAlign: 'center',
        fontFamily: 'Roboto_700Bold',
        fontSize: 32,
        fontStyle: 'normal',
        lineHeight: 48,
    },
    text: {
        color: Colors.neutral100,
        textAlign: 'justify',
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        fontStyle: 'normal',
        lineHeight: 24,
        marginTop: 24,
    },
    disclaimer: {
        color: Colors.neutral100,
        fontFamily: 'Roboto_700Bold',
        fontSize: 8,
        lineHeight: 12,
        textAlign: 'justify',
        marginTop: 24,
    },
});

export default styles;
