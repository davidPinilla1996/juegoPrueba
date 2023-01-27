import  React  from "react";
import { useState } from "react";
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert} from "react-native";
import { styles } from "./styles";
import { Card, NumberContainer } from "../../components";
import { colors } from "../../constants";


const StartGame = ({onHandleStarGame}) => {

    const [enteredValue, setEnteredValue] = useState(""); 
    //con este estado estamos confirmando el numero con el que vamos a empezar a juagar
    const [confirmed, setConfirmed] = useState(false);
    //creamos un estado para que la app sepa cual es el numero que seleccionamos
    const [selectedNumber, setSelectedNumber] = useState(null);
//con esta funcion valido que todo lo que se escriba en el campo sea unicamente un numero del 1 hasta el 99
   const onHandlerChange = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
   };

   //con esta funcion reseteo el campo de escritura del numero.
const onHandleReset = () => {
    //Estamos setiando el valor por defecto del TextInput para al darle click al boton reinical se reinicie el campo
    setEnteredValue("");
    //reinica el estado de confirmacion del TextInput
    setConfirmed(false);
};
//evalua el numero que yo escriba dentro del campo
const onHandleConfirm = () => {
    //convertimos el valor o el numero ingresado en el campo a un numero, lo parciamos
   const chosenNumber = parseInt(enteredValue, 10);
   //Hacemos una validacion con if else
   if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
       Alert.alert("Numero invalido", "el numero tiene que estar entre el 1 y el 99", [{text: "Entendido", style: "destructive", onPress: onHandleReset}]);
   }else{
    //cuando se cumpla la confirmacion el estado pasara a true 
    setConfirmed(true);
    //setiando el numero que ya previamente elejimos y lo guardamos dentro de setSelectedNumber
    setSelectedNumber(chosenNumber);
    //vaciamos el capo despues de darle confirmar 
    setEnteredValue("");
   }
};

const onHandleStartGame = () => {
    onHandleStarGame(selectedNumber);
};

//hacemos una validacion para cuando estemos en estado de confirmacion pase algo y si no no pase nada
const Confirmed = () => 
//cuando estemos en estado de confirmacion renderizo un componente
confirmed ? (
    <Card style={styles.confirmedContainer}>
        <Text style={styles.confirmedTitle}>Numero seleccionado</Text>
        <NumberContainer number={selectedNumber} />
        <Button 
        title="Iniciar juego"
        onPress={onHandleStartGame}
        color={colors.primary}
        />
    </Card>
) : null;

   
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
            keyboardType="number-pad" 
            style={styles.input} 
            placeholder="0"
            onChangeText={onHandlerChange}
            />
            <View style={styles.buttonContainer}>
                 <Button 
                  title="Reiniciar"
                  onpress={onHandleReset}
                  color={colors.secondary}
                 />
                 <Button 
                  title="Confirmar"
                  onPress={onHandleConfirm}
                  color={colors.primary}
                 />
            </View>   
        </Card>
        <Confirmed />
    </View>
    </TouchableWithoutFeedback>  
    )
}


export default StartGame;