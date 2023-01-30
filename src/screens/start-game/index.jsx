import  React  from "react";
import { useState } from "react";
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert, ImageBackground} from "react-native";
import { styles } from "./styles";
import { Card } from "../../components";
import { colors } from "../../constants";
import { CardNumber } from "../../components";

                // este onHandleStarGame lo voy a recibir como propiedad en la pantalla de inicio de juego
                //para yo llamarla cuando le de click en en el boton de ->onHandleStartGame<-
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
//creamos una funcion que va a recibir el numero que seleccionamos en comenzar juego
const onHandleStartGame = () => {
    //llamamos esta fucnion y le pasamos el numero que seleccionamos en la pantalla de comenzar juego
    //cuando yo le de click en iniciar juego reciba el numero y cambie de pantalla
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
<ImageBackground source={(require("../../img/juegoDelCalamar.jpg"))} style={styles.image}>
    <View style={styles.container}>
            <Text style={styles.titlee}>Comenzar juego</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.label}>Escribe un numero</Text>
                <TextInput 
                     value={enteredValue}
                     keyboardType="number-pad" 
                     style={styles.input} 
                     placeholder="0"
                     placeholderTextColor="#fff" 
                     onChangeText={onHandlerChange}
                     //para solo escribir dos numeros maximos en el campo 
                     maxLength={2}
                />
                <View style={styles.buttonContainer}>
                    <Button 
                        title="Reiniciar"
                        onpress={onHandleReset}
                        color={colors.red}
                    />
                    <Button 
                        title="Confirmar"
                        onPress={onHandleConfirm}
                        color={colors.red}
                    />
                </View>   
            </Card>
        <Confirmed />
    </View>
</ImageBackground>
 </TouchableWithoutFeedback>  
    )
}


export default StartGame;