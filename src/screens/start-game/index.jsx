import  React, { useState }  from "react";
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard} from "react-native";
import { styles } from "./styles";
import { Card } from "../../components";
import { colors } from "../../constants";


export const StartGame = () => {
   const [enteredValue, setEnteredValue] = useState("");

   const onHandlerChange = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
   };

return (
<TouchableWithoutFeedback onPress={() => {
    Keyboard.dismiss();
}}>  
    <View style={styles.container}>
        <Text style={styles.titlee}>Comenzar juegoo</Text>
        <Card style={styles.inputContainer}>
            <Text style={styles.label}>Escribe un numero</Text>
            <TextInput 
            value={enteredValue}
            keyboardType="numeric" 
            style={styles.input} 
            placeholder="0"
            onChangeText={onHandlerChange}
            //para solo escribir dos numeros maximos en el campo 
            maxLength={2}
            />
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
    </TouchableWithoutFeedback>  
    )
}


export default StartGame;