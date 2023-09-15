import express from 'express';
import { URL } from '../helpers/Url.js';
import { STATUS, MESSAGE } from '../helpers/Constants.js';
import { responseMessage } from '../helpers/ResponseMessage.js';
import { getPermissions } from '../services/PermissionServices.js';

const PersmissionController = express.Router();

PersmissionController.get(URL.getPermissions, async (req, res) => {
    await getPermissions()
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).json(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).json(response);
    })
});

export default PersmissionController;