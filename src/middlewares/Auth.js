import { STATUS, MESSAGE} from "../helpers/Constants.js";
import { responseMessage } from "../helpers/ResponseMessage.js";
import jwt from 'jsonwebtoken';

export async function authentication(req, res, next){

    const token = req.headers["token"] ? req.headers["token"] : res.status(STATUS('forbidden'));

    jwt.verify(token, process.env.JWT_SECRET, (error, data ) => {
        if(error){
            if(error.message === "jwt expired"){
                res.status(STATUS('tokenExpired')).json(responseMessage(STATUS('tokenExpired'), null, MESSAGE('tokenExpired')));
            }
            res.status(STATUS('forbidden')).json(responseMessage(STATUS('forbidden'), null, MESSAGE('forbidden')));
        } else {
            next();
        }
    });
}