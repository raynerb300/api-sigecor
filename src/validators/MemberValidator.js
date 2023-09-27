import express from 'express';
import { check, validationResult } from 'express-validator';
import { URL } from '../helpers/Url.js';
import { MESSAGE, STATUS } from '../helpers/Constants.js';
import { responseMessage } from '../helpers/ResponseMessage.js';

const MemberValidator = express.Router();

MemberValidator.delete(URL.deleteMember, [
    check('user_id')
    .notEmpty().withMessage('El user_id es obligatorio.')
    .trim()
    .isUUID().withMessage('El user_id debe ser del tipo UUID.'),
    check('position_id')
    .notEmpty().withMessage('El position_id es obligatorio.')
    .trim()
    .isInt().withMessage('El position_id debe ser del tipo integer.')
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

MemberValidator.post(URL.addMember, [
    check('user_id')
    .notEmpty().withMessage('El user_id es obligatorio.')
    .trim()
    .isUUID().withMessage('El user_id debe ser del tipo UUID.'),
    check('position_id')
    .notEmpty().withMessage('El position_id es obligatorio.')
    .trim()
    .isInt().withMessage('El position_id debe ser del tipo integer.')
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

MemberValidator.patch(URL.updateMember, [
    check('user_id')
    .notEmpty().withMessage('El user_id es obligatorio.')
    .trim()
    .isUUID().withMessage('El user_id debe ser del tipo UUID.'),
    check('position_id')
    .notEmpty().withMessage('El position_id es obligatorio.')
    .trim()
    .isInt().withMessage('El position_id debe ser del tipo integer.')
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

export default MemberValidator;