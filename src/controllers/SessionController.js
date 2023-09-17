import express from 'express';
import { login } from '../services/SessionServices.js'; 
import { URL } from '../helpers/Url.js';
import { STATUS, MESSAGE } from '../helpers/Constants.js'
import { responseMessage } from '../helpers/ResponseMessage.js';
import SessionValidator from '../validators/SessionValidator.js';

const SessionController = express.Router();

SessionController.post(URL.login, SessionValidator, async (req, res) => {
    await login(req.body)
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).send(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).send(response);
    })
});

export default SessionController;