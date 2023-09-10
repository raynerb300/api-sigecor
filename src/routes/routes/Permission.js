import PermissionController from "../../controllers/PermissionController.js";
import { URL } from "../../helpers/Url.js";

// Definición de rutas del modulo de permisos
const routesPermission = (router) =>{
    router.get(URL.getPermissions, PermissionController);
}

export default routesPermission; 