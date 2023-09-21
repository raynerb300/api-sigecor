import StateController from "../../controllers/StateController.js";
import { URL } from "../../helpers/Url.js";
import { authentication } from "../../middlewares/Auth.js";

// Definición de rutas del modulo de estados
const routesState = (router) =>{
    router.get(URL.getState, authentication, StateController);
    router.post(URL.createState, authentication, StateController);
    router.patch(URL.updateState, authentication, StateController);
}

export default routesState;