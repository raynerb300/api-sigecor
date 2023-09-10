import RolController from "../../controllers/RolController.js";
import { URL } from "../../helpers/Url.js";

// Definición de rutas del modulo de Rol
const routesRol = (router) =>{
    router.get(URL.getRols, RolController);
    router.get(URL.getRol, RolController);
    router.post(URL.createRol, RolController);
    router.put(URL.updateRol, RolController);
}

export default routesRol; 