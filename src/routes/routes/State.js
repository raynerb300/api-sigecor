import StateController from "../../controllers/StateController.js";
import { URL } from "../../helpers/Url.js";

// Definición de rutas del modulo de estados
const routesState = (router) =>{
    router.get(URL.getState, StateController);
    router.post(URL.createState, StateController);
    router.patch(URL.updateState, StateController);
}

export default routesState;