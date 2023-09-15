import express from 'express';
import { URL } from '../helpers/Url.js';
import { STATUS, MESSAGE } from '../helpers/Constants.js';
import { responseMessage } from '../helpers/ResponseMessage.js';
import { getAreas, getArea, createArea, updateArea } from '../services/AreaServices.js';
import AreaValidator from '../validators/AreaValidator.js';

const AreaController = express.Router();

AreaController.get(URL.getAreas, async (req, res) => {
    await getAreas()
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).json(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).send(response);
    })
});

AreaController.get(URL.getArea, AreaValidator, async (req, res) => {
    await getArea(req.params.id)
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).json(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).send(response);
    })
});

AreaController.post(URL.createArea, AreaValidator, async (req, res) => {
    await createArea(req.body)
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).json(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).send(response);
    })
});

AreaController.patch(URL.updateArea, AreaValidator, async (req, res) => {
    await updateArea(req.params.id, req.body)
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).json(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).send(response);
    })
});

export default AreaController;