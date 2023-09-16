import express from 'express';
import { check, validationResult } from 'express-validator';
import { URL } from '../helpers/Url.js';
import { MESSAGE, STATUS } from '../helpers/Constants.js';
import { responseMessage } from '../helpers/ResponseMessage.js';
import { ONLY_LETTERS_NUMBERS } from '../helpers/Regex.js';

const StateValidator = express.Router();

StateValidator.get(URL.getState, [
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

StateValidator.post(URL.createState, [
    check('name')
    .notEmpty().withMessage('El nombre de estado es obligatorio.')
    .trim()
    .isString().withMessage('El nombre de estado debe ser una cadena de carácteres.')
    .isLength({ max: 50}).withMessage('El nombre de estado máximo puede tener 50 carácteres.')
    .matches(ONLY_LETTERS_NUMBERS).withMessage('El nombre de estado debe contener solo números, letras y espacios en blanco'),
    check('description')
    .optional({ nullable: true }) 
    .notEmpty().withMessage('La descripción es obligatorio.')
    .trim()
    .isString().withMessage('La descripción debe ser una cadena de carácteres.')
    .isLength({ max: 255 }).withMessage('La descripción máximo puede tener 255 carácteres.')
    .matches(ONLY_LETTERS_NUMBERS).withMessage('La descripción debe contener solo números, letras y espacios en blanco'),
    check('order')
    .notEmpty().withMessage('El orden es obligatorio')
    .isInt().withMessage('El orden debe ser un número entero'),
    check('type_correspondence_id')
    .notEmpty().withMessage('El id del type_correspondence_id es obligatorio.')
    .isInt().withMessage('El id del type_correspondence_id debe ser un número entero')
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

StateValidator.patch(URL.updateState, [
    check('name')
    .notEmpty().withMessage('El nombre de estado es obligatorio.')
    .trim()
    .isString().withMessage('El nombre de estado debe ser una cadena de carácteres.')
    .isLength({ max: 50}).withMessage('El nombre de estado máximo puede tener 50 carácteres.')
    .matches(ONLY_LETTERS_NUMBERS).withMessage('El nombre de estado debe contener solo números, letras y espacios en blanco'),
    check('description')
    .optional({ nullable: true }) 
    .notEmpty().withMessage('La descripción es obligatorio.')
    .trim()
    .isString().withMessage('La descripción debe ser una cadena de carácteres.')
    .isLength({ max: 255 }).withMessage('La descripción máximo puede tener 255 carácteres.')
    .matches(ONLY_LETTERS_NUMBERS).withMessage('La descripción debe contener solo números, letras y espacios en blanco'),
    check('order')
    .notEmpty().withMessage('El orden es obligatorio')
    .isInt().withMessage('El orden debe ser un número entero'),
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

export default StateValidator;