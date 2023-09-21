import PermissionController from "../../controllers/PermissionController.js";
import { URL } from "../../helpers/Url.js";
import { authentication } from "../../middlewares/Auth.js";

// Definición de rutas del modulo de permisos
const routesPermission = (router) =>{
    router.get(URL.getPermissions, authentication, PermissionController);
}

export default routesPermission; 