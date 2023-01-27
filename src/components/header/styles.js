//importamos el StyleSheet para poder estilizar 
import { StyleSheet } from "react-native";
//importamos el  
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20
    },
    title: {
        fontSize: 20,
        fontFamily: "Orbitron-Regular",
        color: colors.white
    }
})