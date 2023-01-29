import React from 'react';
//exportamos los componentes que vamos a usar
import { View, Text } from 'react-native';
import { styles } from "./styles";

//creamos la funcion NumberContainer que recibe el numero que nosotros vamos a seleccionar ->{number}<-
const NumberContainer = ({number}) => {
  //va a retornear un componente
  return (
    //retornamos el componente contenedor View
    <View style={styles.container}>
      {/* //retornamos el componente Text o un texto con el numero que seleccionamos ->{number}<- */}
       <Text style={styles.number}>{number}</Text>
    </View>
  )
}
//exportamos el componente NumberContainer
export default NumberContainer;
