import { Position } from '../models/models/Position.js';
import { Area } from '../models/models/Area.js';
import { Op } from 'sequelize';

export async function getPosition(id) {

    return await Position.findByPk(id, {
        attributes: {
            exclude: ['created_at', 'updated_at']
        }
    }).then((result) => {
        if (!result) {
            throw 'positionNotFound';
        }
        return result;
    });

}

export async function createPosition(data) {

    const { name, area_id } = data;

    await Area.findByPk(area_id)
        .then((result) => {
            if (!result) {
                throw 'areaNotFound';
            }
        });

   await Position.findOne({
        where: {
            name: name.toUpperCase(),
            area_id: area_id
        }
    }).then((result) => {
        if (result) {
            throw 'alreadyExistPosition';
        }
    });

    await Position.create(data);

}

export async function updatePosition(id, data) {

    const { name } = data;

    const position = await Position.findByPk(id)
        .then((result) => {
            if (!result) {
                throw 'positionNotFound';
            }
            return result;
        });

    await Position.findOne({
        where: {
            name: name.toUpperCase(),
            area_id: position.dataValues.area_id,
            [Op.not]: {
                id: id
            }
        }
    }).then((result) => {
        if (result) {
            throw 'alreadyExistPosition';
        }
    });

    await position.update(data);
}