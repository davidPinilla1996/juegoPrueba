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
        shadowColor: "#d60707",
        backgroundColor: colors.backgroundFonds,
        shadowOffset: {
	    width: 0,
	    height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    confirmedTitle: {
        fontSize: 20,
        fontFamily: "Orbitron-Regular",
        color: colors.text,
    }
})
