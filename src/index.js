//importamos el useState para que me permita saber si hay algun numero seleccionado
import { useState } from "react";
import { ActivityIndicator, ImageBackground, View } from "react-native";
//importamos el Header
import { Header } from "./components";
//importamos el styles de src/styles.js
import {styles} from './styles.js';
//importamos la pantalla de juego ->Game<-
import { StartGame, Game, GameOver } from "./screens";
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

  const [guessRounds, setGuessRounds] = useState(0)
  //creamos una funcion que reciba el numero seleccionado por el usuario 
  const onHandleStarGame = (selectedNumber) => {
    //setiamos el numero que a seleccionado el usuario
    setUserNumber(selectedNumber);
  };

   const onHandleGameOver = (rounds) => {
    setGuessRounds(rounds);
   }


   const onHandleRestartGame = () => {
    setUserNumber(null);
    setGuessRounds(0);
   }

//creamos una constante o componente que me permita validar si existe ese numero seleccionado o no 
  const Content = () => {
    if (userNumber && guessRounds <= 0){
      return <Game selectedNumber={userNumber} onHandleGameOver={onHandleGameOver} />;
    }
    if (guessRounds > 0) {
       return <GameOver  onHandleRestartGame={onHandleRestartGame} rounds={guessRounds} selectedNumber={userNumber}/>;
    }
     return <StartGame onHandleStarGame={onHandleStarGame} />;
  }; 
  

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
