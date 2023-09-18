import express from 'express';
import { URL } from '../helpers/Url.js';
import { STATUS, MESSAGE } from '../helpers/Constants.js';
import { responseMessage } from '../helpers/ResponseMessage.js';
import { getTypeCorrespondence, createTypeCorrespondence, updateTypeCorrespondence } from '../services/TypeCorrespondenceServices.js';
import TypeCorrespondenceValidator from '../validators/TypeCorrespondenceValidator.js';

const TypeCorrespondenceController = express.Router();

TypeCorrespondenceController.get(URL.getTypeCorrespondence, TypeCorrespondenceValidator, async (req, res) => {
    await getTypeCorrespondence(req.params.id)
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).json(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).json(response);
    })
});

TypeCorrespondenceController.post(URL.createTypeCorrespondence, TypeCorrespondenceValidator, async (req, res) => {
    await createTypeCorrespondence(req.body)
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).json(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).json(response);
    })
});

TypeCorrespondenceController.patch(URL.updateTypeCorrespondence, TypeCorrespondenceValidator, async (req, res) => {
    await updateTypeCorrespondence(req.params.id, req.body)
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).json(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).json(response);
    })
});

export default TypeCorrespondenceController;