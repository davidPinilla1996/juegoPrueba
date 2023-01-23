//importando los componentes
import { View } from "react-native";
import { Header } from "./components";
//importamos el styles de src/styles.js
import {styles} from './styles.js';
import { StartGame } from "./screens";

const App = () => {
  return (
    <View style={styles.container}>
        <Header title="Adivina el numero"/>
        <StartGame />
    </View>
  );
};

export default App;
