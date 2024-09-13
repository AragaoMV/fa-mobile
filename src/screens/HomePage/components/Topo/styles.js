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
        fontSize: 12,
        fontStyle: 'normal',
        lineHeight: 18,
        marginTop: 40,
    },
});

export default styles;
