import express from 'express';
import { check, validationResult } from 'express-validator';
import { URL } from '../helpers/Url.js';
import { MESSAGE, STATUS } from '../helpers/Constants.js';
import { responseMessage } from '../helpers/ResponseMessage.js';
import { ONLY_LETTERS_NUMBERS } from '../helpers/Regex.js';

const AreaValidator = express.Router();

AreaValidator.get(URL.getArea, [
    check('id')
    .notEmpty().withMessage('El id es obligatorio.')
    .trim()
    .isInt().withMessage('El id debe ser del tipo integer.')
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

AreaValidator.post(URL.createArea, [
    check('name')
    .notEmpty().withMessage('El nombre de área es obligatorio.')
    .trim()
    .isString().withMessage('El nombre de área debe ser una cadena de carácteres.')
    .isLength({ max: 50}).withMessage('El nombre de área máximo puede tener 50 carácteres.')
    .matches(ONLY_LETTERS_NUMBERS).withMessage('El nombre debe contener solo números, letras y espacios en blanco'),
    check('description')
    .notEmpty().withMessage('La descripción es obligatorio.')
    .trim()
    .isString().withMessage('La descripción debe ser una cadena de carácteres.')
    .isLength({ max: 255 }).withMessage('La descripción máximo puede tener 255 carácteres.')
    .matches(ONLY_LETTERS_NUMBERS).withMessage('La descripción debe contener solo números, letras y espacios en blanco'),
    check('manager_id')
    .notEmpty().withMessage('El manager_id es obligatorio.')
    .trim()
    .isUUID().withMessage('El manager_id debe ser del tipo UUID.'),
    check('coordinator_id')
    .notEmpty().withMessage('El coordinator_id es obligatorio.')
    .trim()
    .isUUID().withMessage('El coordinator_id debe ser del tipo UUID.')
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

AreaValidator.patch(URL.updateArea, [
    check('name')
    .notEmpty().withMessage('El nombre de área es obligatorio.')
    .trim()
    .isString().withMessage('El nombre de área debe ser una cadena de carácteres.')
    .isLength({ max: 50}).withMessage('El nombre de área máximo puede tener 50 carácteres.')
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
    check('manager_id')
    .notEmpty().withMessage('El manager_id es obligatorio.')
    .trim()
    .isUUID().withMessage('El manager_id debe ser del tipo UUID.'),
    check('coordinator_id')
    .notEmpty().withMessage('El coordinator_id es obligatorio.')
    .trim()
    .isUUID().withMessage('El coordinator_id debe ser del tipo UUID.')
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

export default AreaValidator;