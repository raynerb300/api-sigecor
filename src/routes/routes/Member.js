import MemberController from "../../controllers/MemberController.js";
import { URL } from "../../helpers/Url.js";
import { authentication } from "../../middlewares/Auth.js";

// Definición de rutas del modulo de Miembros
const routesMember = (router) =>{
    router.delete(URL.deleteMember, authentication, MemberController);
    router.post(URL.addMember, authentication, MemberController);
    router.patch(URL.updateMember, authentication, MemberController);
}

export default routesMember;