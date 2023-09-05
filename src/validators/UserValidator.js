import express from 'express'
import { check, validationResult } from 'express-validator'
import { URL } from '../helpers/Url.js';
import { MESSAGE, STATUS } from '../helpers/Constants.js';
import { responseMessage } from '../helpers/ResponseMessage.js';

const UserValidator = express.Router();

UserValidator.get(URL.getUser, [
    check('id')
    .notEmpty().withMessage('El id es obligatorio.')
    .trim()
    .isUUID().withMessage('El id debe ser del tipo UUID.'),
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

UserValidator.post(URL.createUser, [
    check('username')
    .notEmpty().withMessage('El nombre de usuario es obligatorio.')
    .trim()
    .isString().withMessage('El nombre de usuario debe ser una cadena de carácteres.')
    .isLength({ max: 50}).withMessage('El nombre de usuario máximo puede tener 50 carácteres.'),
    check('names')
    .notEmpty().withMessage('El nombre es obligatorio.')
    .trim()
    .isString().withMessage('El nombre debe ser una cadena de carácteres.')
    .isLength({ max: 255 }).withMessage('El nombre máximo puede tener 255 carácteres.'),
    check('last_names')
    .notEmpty().withMessage('El apellido es obligatorio.')
    .trim()
    .isString().withMessage('El apellido debe ser una cadena de carácteres.')
    .isLength({ max: 255 }).withMessage('El nombre máximo puede tener 255 carácteres.'),
    check('email')
    .notEmpty().withMessage('El email es obligatorio.')
    .trim()
    .isEmail().withMessage('Debe ingresar un correo valido.'),
    check('type_document')
    .notEmpty().withMessage('El tipo de documento es obligatorio.')
    .isIn(['V', 'E']).withMessage('El tipo documento correcto debe ser: V o E'),
    check('sex')
    .notEmpty().withMessage('El sexo es obligatorio.')
    .isIn(['M', 'F']).withMessage('El sexo correcto debe ser: M o F'),
    check('nro_document')
    .notEmpty().withMessage('El número de documento es obligatorio.')
    .isInt().withMessage('El número de documento debe ser un número entero'),
    check('rol_id')
    .notEmpty().withMessage('El id del rol es obligatorio.')
    .isInt().withMessage('El rol_id debe ser un número entero')
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

UserValidator.patch(URL.updateUser, [
    check('id')
    .notEmpty().withMessage('El id es obligatorio.')
    .trim()
    .isUUID().withMessage('El id debe ser del tipo UUID.'),
    check('username')
    .notEmpty().withMessage('El nombre de usuario es obligatorio.')
    .trim()
    .isString().withMessage('El nombre de usuario debe ser una cadena de carácteres.')
    .isLength({ max: 50}).withMessage('El nombre de usuario máximo puede tener 50 carácteres.'),
    check('names')
    .notEmpty().withMessage('El nombre es obligatorio.')
    .trim()
    .isString().withMessage('El nombre debe ser una cadena de carácteres.')
    .isLength({ max: 255 }).withMessage('El nombre máximo puede tener 255 carácteres.'),
    check('last_names')
    .notEmpty().withMessage('El apellido es obligatorio.')
    .trim()
    .isString().withMessage('El apellido debe ser una cadena de carácteres.')
    .isLength({ max: 255 }).withMessage('El nombre máximo puede tener 255 carácteres.'),
    check('sex')
    .notEmpty().withMessage('El sexo es obligatorio.')
    .isIn(['M', 'F']).withMessage('El sexo correcto debe ser: M o F'),
    check('status')
    .notEmpty().withMessage('El estatus es obligatorio')
    .isBoolean().withMessage('El status debe ser un boolean.'),
    check('rol_id')
    .notEmpty().withMessage('El id del rol es obligatorio.')
    .isInt().withMessage('El rol_id debe ser un número entero')
], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw {
                name: 'badRequest',
                errors: errors
            }
        }
        return next();
    } catch (error) {
        res.status(STATUS(error.name)).send(responseMessage(STATUS(error.name), error.errors, MESSAGE(error.name)));
    }
});

UserValidator.patch(URL.resetPasswordUser,[
    check('id')
    .notEmpty().withMessage('El id es obligatorio.')
    .trim()
    .isUUID().withMessage('El id debe ser del tipo UUID.')
], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw {
                name: 'badRequest',
                errors: errors
            }
        }
        return next();
    } catch (error) {
        res.status(STATUS(error.name)).send(responseMessage(STATUS(error.name), error.errors, MESSAGE(error.name)));
    }
});

UserValidator.patch(URL.changePassword,[
    check('id')
    .notEmpty().withMessage('El id es obligatorio.')
    .trim()
    .isUUID().withMessage('El id debe ser del tipo UUID.'),
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
            }
        }
        return next();
    } catch (error) {
        res.status(STATUS(error.name)).send(responseMessage(STATUS(error.name), error.errors, MESSAGE(error.name)));
    }
});

export default UserValidator;