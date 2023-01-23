import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container: {
       backgroundColor: colors.white,
       shadowColor: colors.black,
       shadowOffset: {
	      width: 0,
	      height: 2,
       },
       shadowOpacity: 0.25,
       shadowRadius: 3.84,
       elevation: 5,
     }
});
