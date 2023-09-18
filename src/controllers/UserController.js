import express from 'express';
import { URL } from '../helpers/Url.js';
import { STATUS, MESSAGE } from '../helpers/Constants.js'
import { responseMessage } from '../helpers/ResponseMessage.js';
import UserValidator from '../validators/UserValidator.js';
import { getUsers, getUser, createUser, updateUser, resetPasswordUser, changePassword } from '../services/UserServices.js';

const UserController = express.Router();

UserController.get(URL.getUsers, async (req, res) => {
    await getUsers()
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).json(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).json(response);
    })
});

UserController.get(URL.getUser, UserValidator, async (req, res) => {
    await getUser(req.params.id)
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).json(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).json(response);
    })
});

UserController.post(URL.createUser, UserValidator, async (req, res) => {
    await createUser(req.body)
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).json(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).json(response);
    })
});

UserController.patch(URL.updateUser, UserValidator, async (req, res) => {
    await updateUser(req.params.id, req.body)
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).json(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).json(response);
    })
});

UserController.patch(URL.resetPasswordUser, UserValidator, async (req, res) => {
    await resetPasswordUser(req.params.id)
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).json(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).json(response);
    })
});

UserController.patch(URL.changePassword, UserValidator, async (req, res) => {
    await changePassword(req.params.id, req.body)
    .then(() => {
        const response = responseMessage(STATUS('success'), null, MESSAGE('success'));
        res.status(STATUS('success')).json(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).json(response);
    })
});

export default UserController;