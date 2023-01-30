import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 30
    },
    image: {
      width: "100%",
      height: "93%"
    },
    image: {
      height: "100%",
      width: "100%"
    },
    titlee: {
        fontSize: 27,
        marginBottom: 20,
        borderRadius: 20,
        padding: 25,
        color: colors.text,
        textAlign: "center",
        paddingVertical: 15,
        fontFamily: "Orbitron-Regular",
        backgroundColor: colors.red
    },
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
        paddingVertical: 20,
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
    label: {
        fontSize: 20,
        color: colors.text,
        paddingVertical: 5,
        textAlign: "center",
        fontFamily: "Orbitron-Regular"
    },
    input : {
        width: "100%",
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
        minWidth: 70,
        fontSize : 22,
        paddingVertical: 10,
        textAlign: "center",
        color: colors.white,
    },
    buttonContainer: {
        flexDirection: "row",
        width: "75%",
        justifyContent: "space-around",
        marginTop: 20
    }
});