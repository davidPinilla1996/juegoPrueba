//le indicamos donde se encuentra la raiz principal de mi app
import { registerRootComponent } from "expo";

//exportamos el app que viene desde la ruta expesifiacada
import App from "./src/index";

//le indicamos a nuestro componente de registerRootComponent que recibe la vista o el componente que se 
//refiere a la raiz de mi app.
registerRootComponent(App);