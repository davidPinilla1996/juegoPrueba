import { StyleSheet } from "react-native";
import { colors } from "../../constants";



export const styles = StyleSheet.create({
    container: {
       width: 60,
       height: 60,
       alignItems: "center",
       justifyContent: "center",
       backgroundColor: colors.white,
       borderColor: colors.red,
       borderWidth: 3,
       borderRadius: 10,
    },
    number: {
        fontSize: 25,
        fontFamily: "Orbitron-Regular"
    }
})