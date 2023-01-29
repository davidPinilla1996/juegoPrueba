import  React  from "react";
import { useState } from "react";
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert} from "react-native";
import { styles } from "./styles";
import { Card } from "../../components";
import { colors } from "../../constants";
import { CardNumber } from "../../components";


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
//con esta funcion evaluo el numero que yo escriba dentro del campo
const onHandleConfirm = () => {
   //declaro el numero que yo e elejido ->chosenNumber<- y lo voy a convertir o parsear en un numero por que inicialmente lo que yo 
   //escriba dentro de un capo de un input siempre va a ser un string
   //estamos delimitando la funcion de la app a lo que yo escriba dentro del campo sea solo un numero del 1 al 99
    const chosenNumber = parseInt(enteredValue, 10);
   //Hacemos una validacion con if else que lo que se escriba sea un numero, que el numero sea mayor a 0 y que el nmumero sea menor a 99.
   if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
    //utilizamos el componente de alert para avisarle al usuario que no esta cumpliendo con lo que le indicamos
       Alert.alert("Numero invalido", "el numero tiene que estar entre el 1 y el 99", [{text: "Entendido", style: "destructive", onPress: onHandleReset}]);
   }else{
    //cuando se cumpla la confirmacion el estado pasara a true osea verdadero
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
    <CardNumber
    selectedNumber={selectedNumber}
    onHandleStartGame={onHandleStartGame}
    buttonText="Inicio Juego"
    />
    //y no estamos en estado de confimacion de renderizamos nada
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