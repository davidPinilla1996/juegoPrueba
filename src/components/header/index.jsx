//importamos react
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

//declaramos nuestro componente que en este caso el el header
//recibe como propiedad el titulo que se va a mostrar en la cabezera (title) va  ser un componente reutilizable
const Header = ({title}) => {
    return (
       <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
       </View>
    )
}


export default Header;