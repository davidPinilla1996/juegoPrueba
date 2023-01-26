//importando los componentes
import { useState } from "react";
import { View } from "react-native";
//importamos el Header
import { Header } from "./components";
//importamos el styles de src/styles.js
import {styles} from './styles.js';
import { StartGame, Game } from "./screens";

const App = () => {
  const [userNumber, setUserNumber] = useState(null);
//el manejador del inicio de juegos
  const onHandleStarGame = (selectedNumber) => {
    //setiamos el numero que a seleccionado el usuario
    setUserNumber(selectedNumber);
  }

  const Content = () => userNumber ? <Game selectedNumber={userNumber} /> : <StartGame  onHandleStarGame={onHandleStarGame} />;
  return (
    <View style={styles.container}>
        <Header title="Adivina el numero" />
        <Content />
    </View>
  );
};

export default App;
