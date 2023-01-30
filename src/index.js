//importamos el useState para que me permita saber si hay algun numero seleccionado
import { useState } from "react";
import { ActivityIndicator, View } from "react-native";
//importamos el Header
import { Header } from "./components";
//importamos el styles de src/styles.js
import {styles} from './styles.js';
//importamos la pantalla de juego ->Game<-
import { StartGame, Game } from "./screens";
import { useFonts } from "expo-font";
import { colors } from "./constants";

const App = () => {
  const [leaded] = useFonts({
    "Orbitron-Regular": require("../assets/fonts/Orbitron-Regular.ttf"),
    "Orbitron-Black": require("../assets/fonts/Orbitron-Black.ttf"),
    "Orbitron-Bold": require("../assets/fonts/Orbitron-Bold.ttf"),
    "Orbitron-ExtraBold": require("../assets/fonts/Orbitron-ExtraBold.ttf"),
    "Orbitron-Medium": require("../assets/fonts/Orbitron-Medium.ttf"),
    "Orbitron-SemiBold": require("../assets/fonts/Orbitron-SemiBold.ttf")
  });
  //creamos un estado que seria el numero que el usuario escribio o selecciono en esa primera pantalla que inicalmente va a ser nulo
  const [userNumber, setUserNumber] = useState(null);
  //creamos una funcion que reciba el numero seleccionado por el usuario 
  const onHandleStarGame = (selectedNumber) => {
    //setiamos el numero que a seleccionado el usuario
    setUserNumber(selectedNumber);
  }
//creamos una constante o componente que me permita validar si existe ese numero seleccionado o no 
  const Content = () => 
  //validamos si el numero esta setiado y si esta setiado significa que estamos en la pantalla de juego
  userNumber ? ( 
    <Game selectedNumber={userNumber} />
    ) : (
    //y si aun no tenemos un numero seleccionado signfica que estamos en la pantalla de inicio
              //le pasamos la funcion de ->onHandleStarGame<- para que yo pueda recibir el numero seleccionado
  <StartGame  onHandleStarGame={onHandleStarGame} />
  );

  if (!leaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    )
  }
  return (
    <View style={styles.container}>
        <Header title="Adivina el numero" />
        {/* renderizamos el componente ->Content<- */}
        <Content />
    </View>
  );
};

export default App;
