import AreaController from "../../controllers/AreaController.js";
import { URL } from "../../helpers/Url.js";

// Definición de rutas del modulo de Rol
const routesArea = (router) =>{
    router.get(URL.getAreas, AreaController);
    router.get(URL.getArea, AreaController);
    router.post(URL.createArea, AreaController);
    router.patch(URL.updateArea, AreaController);
}

export default routesArea; 