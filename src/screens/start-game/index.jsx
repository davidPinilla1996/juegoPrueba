import { React } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./styles";
import { Card } from "../../components";
import { colors } from "../../constants";


export const StartGame = () => {
return (
    <View style={styles.container}>
        <Text style={styles.titlee}>Comenzar juegoo</Text>
        <Card style={styles.inputContainer}>
            <Text style={styles.label}>Escribe un numero</Text>
            <TextInput keyboardType="numeric" style={styles.input} placeholder="0"/>
            <View style={styles.buttonContainer}>
                 <Button 
                  title="Reiniciar"
                  onpress={() => null}
                  color={colors.secondary}
                 />
                 <Button 
                  title="Confirmar"
                  onpress={() => null}
                  color={colors.primary}
                 />
            </View>   
        </Card>
    </View>
    )
}


export default StartGame;