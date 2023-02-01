import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        width: "80%",
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
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
    rondasText: {
      fontSize: 16,
      textAlign: "center",
      paddingVertical: 10,
      fontFamily: "Orbitron-Regular",
      color: colors.white
    },
    selectedNumber: {
       color: colors.text,
       marginBottom: 10,
       fontSize: 18,
       fontFamily: "Orbitron-Regular",
    },
    image: {
        width: "100%",
        height: "93%"
      },
});