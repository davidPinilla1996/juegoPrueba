import { React } from "react";
import { View } from "react-native";
import { styles } from "./styles";

//lo que contenga este componente es lo que va a utilizar o lo que va a recibir
const Card = ({children, style}) => {
                            //hacemos una copia de los estilos que yo le coloque y una copia del los estilos que yo le quiera agregar
    return <View style={{... styles.container, ...style}}>{children}</View>;
    
}


export default Card;