import PositionController from "../../controllers/PositionController.js";
import { URL } from "../../helpers/Url.js";
import { authentication } from "../../middlewares/Auth.js";

// Definición de rutas del modulo de Cargos
const routesPosition = (router) =>{
    router.get(URL.getPosition, authentication, PositionController);
    router.post(URL.createPosition, authentication, PositionController);
    router.patch(URL.updatePosition, authentication, PositionController);
}

export default routesPosition;