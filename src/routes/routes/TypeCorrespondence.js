import TypeCorrespondenceController from "../../controllers/TypeCorrespondenceController.js";
import { URL } from "../../helpers/Url.js";

// Definición de rutas del modulo de tipo de correspondencia
const routesTypeCorrespondence = (router) =>{
    router.get(URL.getTypeCorrespondence, TypeCorrespondenceController);
    router.post(URL.createTypeCorrespondence, TypeCorrespondenceController);
    router.patch(URL.updateTypeCorrespondence, TypeCorrespondenceController);
}

export default routesTypeCorrespondence; 