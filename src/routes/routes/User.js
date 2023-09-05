import UserController from "../../controllers/UserController.js";
import { URL } from "../../helpers/Url.js";

// Definición de rutas del modulo de usuario
const routesUser = (router) =>{
    router.get(URL.getUsers, UserController);
    router.get(URL.getUser, UserController);
    router.post(URL.createUser, UserController);
    router.patch(URL.updateUser, UserController);
    router.patch(URL.resetPasswordUser, UserController);
    router.patch(URL.changePassword, UserController);
}

export default routesUser; 