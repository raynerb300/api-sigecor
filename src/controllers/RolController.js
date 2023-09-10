import express from 'express';
import { URL } from '../helpers/Url.js';
import { STATUS, MESSAGE } from '../helpers/Constants.js';
import { responseMessage } from '../helpers/ResponseMessage.js';
import { getRols, getRol, createRol, updateRol } from '../services/RolServices.js';
import RolValidator from '../validators/RolValidator.js';

const RolController = express.Router();

RolController.get(URL.getRols, async (req, res) => {
    await getRols()
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).send(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).send(response);
    })
});

RolController.get(URL.getRol, RolValidator, async (req, res) => {
    await getRol(req.params.id)
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).send(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).send(response);
    })
});

RolController.post(URL.createRol, RolValidator, async (req, res) => {
    await createRol(req.body)
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).send(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).send(response);
    })
});

RolController.put(URL.updateRol, RolValidator, async (req, res) => {
    await updateRol(req.params.id, req.body)
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).send(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).send(response);
    })
});

export default RolController;