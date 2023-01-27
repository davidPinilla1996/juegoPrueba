import { StyleSheet } from "react-native";
import { colors } from "../../constants";



export const styles = StyleSheet.create({
    container: {
       width: 50,
       height: 50,
       alignItems: "center",
       justifyContent: "center",
       backgroundColor: colors.secondary,
       borderColor: colors.primary,
       borderWidth: 2,
       borderRadius: 5
    },
    number: {
        fontSize: 25,
        fontFamily: "Orbitron-Regular"
    }
})