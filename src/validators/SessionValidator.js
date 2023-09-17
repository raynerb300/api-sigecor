import express from 'express'
import { check, validationResult } from 'express-validator'
import { URL } from '../helpers/Url.js';
import { MESSAGE, STATUS } from '../helpers/Constants.js';
import { responseMessage } from '../helpers/ResponseMessage.js';

const SessionValidator = express.Router();

SessionValidator.post(URL.login, [
    check('username')
    .notEmpty().withMessage('El nombre de usuario es obligatorio.')
    .trim()
    .isString().withMessage('El nombre de usuario debe ser una cadena de carácteres.'),
    check('password')
    .notEmpty().withMessage('La contraseña es obligatoria.')
    .trim()
    .isString().withMessage('La contraseña debe ser una cadena de carácteres.')
], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw { 
                name: 'badRequest', 
                errors: errors
            };   
        }
        return next();
    } catch (error) {
        res.status(STATUS(error.name)).send(responseMessage(STATUS(error.name), error.errors, MESSAGE(error.name)));
    }
});

export default SessionValidator;