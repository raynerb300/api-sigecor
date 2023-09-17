import SessionController from "../../controllers/SessionController.js";
import { URL } from "../../helpers/Url.js";

// Definición de rutas del modulo de inicio de sesión
const routesSession = (router) =>{
    router.post(URL.login, SessionController);
}

export default routesSession; 