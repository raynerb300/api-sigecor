import RolController from "../../controllers/RolController.js";
import { URL } from "../../helpers/Url.js";
import { authentication } from "../../middlewares/Auth.js";

// Definición de rutas del modulo de Rol
const routesRol = (router) =>{
    router.get(URL.getRols, authentication, RolController);
    router.get(URL.getRol, authentication, RolController);
    router.post(URL.createRol, authentication, RolController);
    router.patch(URL.updateRol, authentication, RolController);
}

export default routesRol; 