import { StyleSheet } from "react-native";
import Colors from "../../constants/colors"; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.neutral500,
    },
    texto:{
        fontFamily: 'Roboto_400Regular',
        fontSize: 20,
        color:Colors.neutral100
    }
});

export default styles;
