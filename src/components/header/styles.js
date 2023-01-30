//importamos el StyleSheet para poder estilizar 
//El Dimensions sirve para saber cual es el alto y el cacho del dispositivo
import { StyleSheet, Dimensions } from "react-native";
//importamos el  
import { colors } from "../../constants";

//atraves del ->Dimensions<- podemos acceder a un metodo que se llama get y el get nos permite saber el ancho o el alto de la 
//pantalla o de la pantalla en este caso vamos a saber el de la pantalla ->screen<-
     //y vamos a acceder directamente al ancho y al alto ->width, height<-
const {height} = Dimensions.get("screen")

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        //Para que mi cabezera ocupe solo el 12% o el 15% del alcho de mi pantalla lo multiplico por 0.12
        height: height * 0.12,
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