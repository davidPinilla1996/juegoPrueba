import React from 'react'
import { Button, ImageBackground, Text, View } from 'react-native';
import { styles } from './styles';
import { Card } from '../../components';
import { colors } from '../../constants';

const GameOver = ({rounds, selectedNumber, onHandleRestartGame}) => {
  return (
<ImageBackground source={(require("../../img/juegoDelCalamarGameOver.jpg"))} style={styles.image}>
    <View style={styles.container}>
        <Card style={styles.content}>
            <Text style={styles.rondasText}>Rondas: {rounds}</Text>
            <Text style={styles.selectedNumber}>Numero seleccionado: {selectedNumber}</Text>
            <Button 
               title="Reiniciar juego" 
               onPress={onHandleRestartGame}
               color={colors.red}
            />
        </Card>
    </View>   
</ImageBackground>  
  );
};


export default GameOver;
