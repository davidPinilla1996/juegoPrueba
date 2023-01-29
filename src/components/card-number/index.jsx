import { React } from "react";
import { Button, Text } from "react-native";
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
        <NumberContainer number={selectedNumber} />
        <Button 
           title={buttonText}
           onPress={onHandleStartGame}
           color={colors.primary}
        />
    </Card>
    )
}

export default CardNumber; 