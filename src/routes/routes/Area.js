import AreaController from "../../controllers/AreaController.js";
import { URL } from "../../helpers/Url.js";
import { authentication } from "../../middlewares/Auth.js";

// Definición de rutas del modulo de Area
const routesArea = (router) =>{
    router.get(URL.getAreas, authentication, AreaController);
    router.get(URL.getArea, authentication, AreaController);
    router.post(URL.createArea, authentication, AreaController);
    router.patch(URL.updateArea, authentication, AreaController);
    router.get(URL.getAreaTypeCorrespondences, authentication, AreaController);
    router.get(URL.getAreaPositions, authentication, AreaController);
}

export default routesArea; 