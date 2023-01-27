import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    titlee: {
        fontSize: 18,
        color: colors.text,
        textAlign: "center",
        paddingVertical: 20,
        fontFamily: "Orbitron-Regular"
    },
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
        paddingVertical: 20
    },
    label: {
        fontSize: 15,
        color: colors.text,
        paddingVertical: 5,
        textAlign: "center",
        fontFamily: "Orbitron-Regular"
    },
    input : {
        width: "100%",
        borderBottomColor: colors.black,
        borderBottomWidth: 1,
        minWidth: 70,
        fontSize : 22,
        paddingVertical: 10,
        textAlign: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        width: "75%",
        justifyContent: "space-around",
        marginTop: 20
    },
    confirmedContainer: {
        width: "73%",
        height: 180,
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 30
    },
    confirmedTitle: {
        fontSize: 16,
        fontFamily: "Orbitron-Regular"
    }
});