import { React } from "react";
import { Button, Text, View } from "react-native";
import NumberContainer from "../number-container";
import Card from "../card";
import { colors } from "../../constants";
import { styles } from "./styles";

const CardNumber = ({
    selectedNumber, 
    onHandleStartGame, 
    buttonText
}) => {
    return (
        <Card style={styles.confirmedContainer}>
            <Text style={styles.confirmedTitle}>Numero seleccionado</Text>
            {/* colocamos el componente que creamos->NumberContainer<-  que recibe directamente el numero que seleccionamos*/}
            <NumberContainer number={selectedNumber} />
            <Button 
               title={buttonText}
               onPress={onHandleStartGame}
               color={colors.red}
            />
        </Card>
    )
}

export default CardNumber; 