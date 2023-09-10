import express from 'express';
import { check, validationResult } from 'express-validator';
import { URL } from '../helpers/Url.js';
import { MESSAGE, STATUS } from '../helpers/Constants.js';
import { responseMessage } from '../helpers/ResponseMessage.js';
import { ONLY_LETTERS_NUMBERS } from '../helpers/Regex.js';

const RolValidator = express.Router();

RolValidator.get(URL.getRol, [
    check('id')
    .notEmpty().withMessage('El id es obligatorio.')
    .trim()
    .isInt().withMessage('El id debe ser del tipo integer.'),
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

RolValidator.post(URL.createRol, [
    check('name')
    .notEmpty().withMessage('El nombre de Rol es obligatorio.')
    .trim()
    .isString().withMessage('El nombre de rol debe ser una cadena de carácteres.')
    .isLength({ max: 50}).withMessage('El nombre de rol máximo puede tener 50 carácteres.')
    .matches(ONLY_LETTERS_NUMBERS).withMessage('El nombre debe contener solo números, letras y espacios en blanco'),
    check('description')
    .notEmpty().withMessage('La descripción es obligatorio.')
    .trim()
    .isString().withMessage('La descripción debe ser una cadena de carácteres.')
    .isLength({ max: 255 }).withMessage('La descripción máximo puede tener 255 carácteres.')
    .matches(ONLY_LETTERS_NUMBERS).withMessage('La descripción debe contener solo números, letras y espacios en blanco'),
    check('permissions')
    .notEmpty().withMessage('Se debe proporcionar al menos un permiso')
    .isArray().withMessage('Los permisos deben ser proporcionados en formato de arreglo'),
    check('permissions.*')
    .notEmpty().withMessage('Se debe proporcionar el id del permiso.')
    .isInt().withMessage('El id del permiso debe ser un número entero.')
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

RolValidator.put(URL.updateRol, [
    check('name')
    .notEmpty().withMessage('El nombre de Rol es obligatorio.')
    .trim()
    .isString().withMessage('El nombre de rol debe ser una cadena de carácteres.')
    .isLength({ max: 50}).withMessage('El nombre de rol máximo puede tener 50 carácteres.')
    .matches(ONLY_LETTERS_NUMBERS).withMessage('El nombre debe contener solo números, letras y espacios en blanco'),
    check('description')
    .notEmpty().withMessage('La descripción es obligatorio.')
    .trim()
    .isString().withMessage('La descripción debe ser una cadena de carácteres.')
    .isLength({ max: 255 }).withMessage('La descripción máximo puede tener 255 carácteres.')
    .matches(ONLY_LETTERS_NUMBERS).withMessage('La descripción debe contener solo números, letras y espacios en blanco'),
    check('status')
    .notEmpty().withMessage('El estatus es obligatorio')
    .isBoolean().withMessage('El status debe ser un boolean.'),
    check('permissions')
    .notEmpty().withMessage('Se debe proporcionar al menos un permiso')
    .isArray().withMessage('Los permisos deben ser proporcionados en formato de arreglo'),
    check('permissions.*')
    .notEmpty().withMessage('Se debe proporcionar el id del permiso.')
    .isInt().withMessage('El id del permiso debe ser un número entero.')
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

export default RolValidator;