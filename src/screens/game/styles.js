import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";


export const styles = StyleSheet.create({
    image: {
      height: "100%",
    },
    container: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 20,
    },
    content: {
        width: "80%",
        height: 200,
        marginTop: 20,
        padding: 15,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: colors.black,
        shadowColor: "#d60707",
        backgroundColor: colors.backgroundFonds,
        shadowOffset: {
	    width: 0,
	    height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        borderBottomEndRadius: 60,
        borderTopLeftRadius: 60,
    },
    title: {
        fontSize: 22,
        fontFamily: "Orbitron-Regular",
        color: colors.text
    },
    buttonContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
    }
});