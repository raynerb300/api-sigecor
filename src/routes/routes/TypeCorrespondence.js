import TypeCorrespondenceController from "../../controllers/TypeCorrespondenceController.js";
import { URL } from "../../helpers/Url.js";
import { authentication } from "../../middlewares/Auth.js";

// Definición de rutas del modulo de tipo de correspondencia
const routesTypeCorrespondence = (router) =>{
    router.get(URL.getTypeCorrespondence, authentication, TypeCorrespondenceController);
    router.post(URL.createTypeCorrespondence, authentication, TypeCorrespondenceController);
    router.patch(URL.updateTypeCorrespondence, authentication, TypeCorrespondenceController);
}

export default routesTypeCorrespondence; 