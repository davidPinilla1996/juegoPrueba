import React from 'react';
import { useState } from "react";
import { Button, Text, View } from 'react-native';
import { Card, NumberContainer } from "../../components";
import { colors } from '../../constants';
import { styles } from "./styles";


const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    generateRandomNumber(min, max, exclude)
  }else{
    return randomNumber;
  }
}

const Game = ({ selectedNumber }) => {
  
  const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100))
  
  return (
    <View style={styles.container}>
         <Card style={styles.content}>
             <Text style={styles.title}>Numero del oponente</Text>
             <NumberContainer  number={currentGuess} />
             <View style={styles.buttonContainer}>
                 <Button title='Menor' onPress={() =>{}} color={colors.primary} />
                 <Button title='Mayor' onPress={() =>{}} color={colors.primary} />
             </View>
         </Card>
    </View>
  );
};


export default Game; 