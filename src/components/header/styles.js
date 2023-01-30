//importamos el StyleSheet para poder estilizar 
import { StyleSheet } from "react-native";
//importamos el  
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        height: 120,
        marginTop: 22,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 25,
        fontFamily: "Orbitron-Regular",
        color: colors.white
    }
})