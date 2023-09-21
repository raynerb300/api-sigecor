import UserController from "../../controllers/UserController.js";
import { URL } from "../../helpers/Url.js";
import { authentication } from "../../middlewares/Auth.js";

// Definición de rutas del modulo de usuario
const routesUser = (router) =>{
    router.get(URL.getUsers, authentication, UserController);
    router.get(URL.getUser, authentication, UserController);
    router.post(URL.createUser, authentication, UserController);
    router.patch(URL.updateUser, authentication, UserController);
    router.patch(URL.resetPasswordUser, authentication, UserController);
    router.patch(URL.changePassword, authentication, UserController);
}

export default routesUser; 