import { useState, useRef, useEffect } from "react";
import { Button, ImageBackground, Text, View, Alert } from 'react-native';
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
//Este componente esta recibiendo el numero seleccionado y aparte le vamos a pasar un metodo que me permita finalizar el juego
const Game = ({ selectedNumber, onHandleGameOver }) => {
  
  const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, selectedNumber))
  const [ rounds, setRounds] = useState(0)


  const currentLow = useRef(1)
  const currentHigh = useRef(100)

  useEffect(() => {
       if (currentGuess === selectedNumber) { 
        onHandleGameOver(rounds);
       }
  }, [currentGuess, selectedNumber, onHandleGameOver ]);


  const onHandleNextGuess = (direction) => {
    if( 
    (direction === "lower" && currentGuess < selectedNumber) ||
    (direction === "greater" && currentGuess > selectedNumber) 
    ){
      Alert.alert("No mientas!",  "Sabes que eso es incorrecto...", [
        { text: "Perdon", style: "Cancel"},
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds(currentRounds => currentRounds + 1);
  };
  
  return (
<ImageBackground source={(require("../../img/juegoDelCalamarEle.jpg"))} style={styles.image}>
    <View style={styles.container}>
         <Card style={styles.content}>
             <Text style={styles.title}>Numero del oponente</Text>
             <NumberContainer  number={currentGuess} />
             <View style={styles.buttonContainer}>
                 <Button title='Menor' onPress={() => onHandleNextGuess("lower")} color={colors.red} />
                 <Button title='Mayor' onPress={() => onHandleNextGuess("greater")} color={colors.red} />
             </View>
         </Card>
    </View>
</ImageBackground>
  );
};


export default Game; 