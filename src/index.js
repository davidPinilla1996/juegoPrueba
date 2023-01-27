//importando los componentes
import { useState } from "react";
import { ActivityIndicator, View } from "react-native";
//importamos el Header
import { Header } from "./components";
//importamos el styles de src/styles.js
import {styles} from './styles.js';
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
  const [userNumber, setUserNumber] = useState(null);
//el manejador del inicio de juegos
  const onHandleStarGame = (selectedNumber) => {
    //setiamos el numero que a seleccionado el usuario
    setUserNumber(selectedNumber);
  }

  const Content = () => 
  userNumber ? ( 
  <Game selectedNumber={userNumber} />
  ) : (
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
        <Content />
    </View>
  );
};

export default App;
