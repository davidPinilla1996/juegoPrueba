//importamos react
import React from "react";
//importando componentes
import { Text, View } from "react-native";
//importamnos el styles para estilizar mi app
import { styles } from "./styles";

//declaramos nuestro componente que en este caso es el header
//recibo como propiedad el titulo que se va a mostrar en la cabezera (title)
const Header = ({title}) => {
    return (
        //retornamos el componente View con el componente Text 
       <View style={styles.container}>
             {/* El componente Text va a recibir el title (titulo) por que va a ser dinamico*/}
            <Text style={styles.title}>{title}</Text>
       </View>
    )
}


export default Header;