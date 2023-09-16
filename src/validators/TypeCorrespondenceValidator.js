import express from 'express';
import { check, validationResult } from 'express-validator';
import { URL } from '../helpers/Url.js';
import { MESSAGE, STATUS } from '../helpers/Constants.js';
import { responseMessage } from '../helpers/ResponseMessage.js';
import { ONLY_LETTERS_NUMBERS } from '../helpers/Regex.js';

const TypeCorrespondenceValidator = express.Router();

TypeCorrespondenceValidator.get(URL.getTypeCorrespondence, [
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

TypeCorrespondenceValidator.post(URL.createTypeCorrespondence, [
    check('name')
    .notEmpty().withMessage('El nombre de tipo de correspondencia es obligatorio.')
    .trim()
    .isString().withMessage('El nombre de tipo de correspondencia debe ser una cadena de carácteres.')
    .isLength({ max: 50}).withMessage('El nombre de tipo de correspondencia máximo puede tener 50 carácteres.')
    .matches(ONLY_LETTERS_NUMBERS).withMessage('El nombre de tipo correspondencia debe contener solo números, letras y espacios en blanco'),
    check('description')
    .optional({ nullable: true }) 
    .notEmpty().withMessage('La descripción es obligatorio.')
    .trim()
    .isString().withMessage('La descripción debe ser una cadena de carácteres.')
    .isLength({ max: 255 }).withMessage('La descripción máximo puede tener 255 carácteres.')
    .matches(ONLY_LETTERS_NUMBERS).withMessage('La descripción debe contener solo números, letras y espacios en blanco'),
    check('approved')
    .notEmpty().withMessage('La aprobación es obligatoria')
    .isBoolean().withMessage('La aprobación debe ser un boolean.'),
    check('area_id')
    .notEmpty().withMessage('El id del area es obligatorio.')
    .isInt().withMessage('El area_id debe ser un número entero')
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

TypeCorrespondenceValidator.patch(URL.updateTypeCorrespondence, [
    check('name')
    .notEmpty().withMessage('El nombre de tipo de correspondencia es obligatorio.')
    .trim()
    .isString().withMessage('El nombre de tipo de correspondencia debe ser una cadena de carácteres.')
    .isLength({ max: 50}).withMessage('El nombre de tipo de correspondencia máximo puede tener 50 carácteres.')
    .matches(ONLY_LETTERS_NUMBERS).withMessage('El nombre de tipo correspondencia debe contener solo números, letras y espacios en blanco'),
    check('description')
     .optional({ nullable: true }) 
    .notEmpty().withMessage('La descripción es obligatorio.')
    .trim()
    .isString().withMessage('La descripción debe ser una cadena de carácteres.')
    .isLength({ max: 255 }).withMessage('La descripción máximo puede tener 255 carácteres.')
    .matches(ONLY_LETTERS_NUMBERS).withMessage('La descripción debe contener solo números, letras y espacios en blanco'),
    check('approved')
    .notEmpty().withMessage('La aprobación es obligatoria')
    .isBoolean().withMessage('La aprobación debe ser un boolean.'),
    check('status')
    .notEmpty().withMessage('El estatus es obligatorio')
    .isBoolean().withMessage('El status debe ser un boolean.')
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

export default TypeCorrespondenceValidator;