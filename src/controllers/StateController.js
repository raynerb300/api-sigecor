import express from 'express';
import { URL } from '../helpers/Url.js';
import { STATUS, MESSAGE } from '../helpers/Constants.js';
import { responseMessage } from '../helpers/ResponseMessage.js';
import { getState, createState, updateState } from '../services/StateServices.js';
import StateValidator from '../validators/StateValidator.js';

const StateController = express.Router();

StateController.get(URL.getState, StateValidator, async (req, res) => {
    await getState(req.params.id)
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).json(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).json(response);
    })
});

StateController.post(URL.createState, StateValidator, async (req, res) => {
    await createState(req.body)
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).json(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).json(response);
    })
});

StateController.patch(URL.updateState, StateValidator, async (req, res) => {
    await updateState(req.params.id, req.body)
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).json(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).json(response);
    })
});

export default StateController;