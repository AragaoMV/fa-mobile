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
        fontSize: 24,
        fontStyle: 'normal',
        lineHeight: 36,
    },
});

export default styles;
