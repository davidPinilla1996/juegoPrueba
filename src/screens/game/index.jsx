import React from 'react';
import { Button, Text, View } from 'react-native';
import { Card, NumberContainer } from "../../components";
import { colors } from '../../constants';
import { styles } from "./styles";


const Game = ({ selectedNumber }) => {
  return (
    <View style={styles.container}>
         <Card style={styles.content}>
             <Text style={styles.title}>Numero del oponente</Text>
             <NumberContainer  number={selectedNumber} />
             <View>
                 <Button title='Menor' onPress={() =>{}} color={colors.primary} />
             </View>
         </Card>
    </View>
  );
};


export default Game; 