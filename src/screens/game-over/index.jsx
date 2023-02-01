import React from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from './styles';
import { Card } from '../../components';
import { colors } from '../../constants';

const GameOver = ({rounds, selectedNumber, onHandleRestartGame}) => {
  return (
    <View style={styles.container}>
        <Card style={styles.content}>
            <Text style={styles.rondasText}>Rondas: {rounds}</Text>
            <Text style={styles.selectedNumber}>Numero seleccionado: {selectedNumber}</Text>
            <Button 
               title="Reiniciar juego" 
               onPress={onHandleRestartGame}
               color={colors.primary}
            />
        </Card>
    </View>
  );
};


export default GameOver;
