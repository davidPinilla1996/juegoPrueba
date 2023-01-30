import React from 'react';
import { useState } from "react";
import { Button, ImageBackground, Text, View } from 'react-native';
import { Card, NumberContainer } from "../../components";
import { colors } from '../../constants';
import { styles } from "./styles";

                          //setiamos en que rago deberia estar ese numero que quiero generar 
                          //tengo que tener como parametro un minimo, un maximo y un numero que quiero excluir que no me genere
const generateRandomNumber = (min, max, exclude) => {
  //el valor minimo deberia ser un redondeo de ese numero minimo 
  min = Math.ceil(min)
  //lo mismo con el numero maximo que lo redondee
  max = Math.floor(max)
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  //y este numero que yo estoy generando lo voy a evaluar 
  if (randomNumber === exclude) {
    generateRandomNumber(min, max, exclude)
  }else{
    return randomNumber;
  }
}

const Game = ({ selectedNumber }) => {
  
  const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100))
  
  return (
<ImageBackground source={(require("../../img/juegoDelCalamarEle.jpg"))} style={styles.image}>
    <View style={styles.container}>
         <Card style={styles.content}>
             <Text style={styles.title}>Numero del oponente</Text>
             <NumberContainer  number={currentGuess} />
             <View style={styles.buttonContainer}>
                 <Button title='Menor' onPress={() =>{}} color={colors.red} />
                 <Button title='Mayor' onPress={() =>{}} color={colors.red} />
             </View>
         </Card>
    </View>
</ImageBackground>
  );
};


export default Game; 