import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    confirmedContainer: {
        width: "78%",
        height: 180,
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 30,
        backgroundColor: colors.black,
        borderBottomEndRadius: 40,
        borderTopLeftRadius: 40,
    },
    confirmedTitle: {
        fontSize: 22,
        fontFamily: "Orbitron-Regular",
        color: colors.text,
    }
})
