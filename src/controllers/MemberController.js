import express from 'express';
import { URL } from '../helpers/Url.js';
import { STATUS, MESSAGE } from '../helpers/Constants.js';
import { responseMessage } from '../helpers/ResponseMessage.js';
import { addMember, deleteMember, updateMember } from '../services/MemberServices.js';
import MemberValidator from '../validators/MemberValidator.js';

const MemberController = express.Router();

MemberController.delete(URL.deleteMember, MemberValidator, async (req, res) => {
    deleteMember(req.body)
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).json(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).json(response);
    });
});

MemberController.post(URL.addMember, MemberValidator, async (req, res) => {
    addMember(req.body)
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).json(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).json(response);
    });
});

MemberController.patch(URL.updateMember, MemberValidator, async (req, res) => {
    updateMember(req.body)
    .then((result) => {
        const response = responseMessage(STATUS('success'), result, MESSAGE('success'));
        res.status(STATUS('success')).json(response);
    })
    .catch((error) => {
        const response = responseMessage(STATUS(error), null, MESSAGE(error));
        res.status(STATUS(error)).json(response);
    });
});

export default MemberController;