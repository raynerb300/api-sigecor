import { User } from '../models/models/User.js';
import { Position } from '../models/models/Position.js';
import { Job } from '../models/models/Job.js';

Job.associate({ Position });

export async function deleteMember(data){

    const { user_id, position_id } = data;

    await User.findByPk(user_id)
        .then((result) => {
            if (!result) {
                throw 'userNotFound';
            }
            return result;
        });

    await Position.findByPk(position_id)
        .then((result) => {
            if(!result){
                throw 'positionNotFound';
            }
        });

    await Job.destroy({
        where: {
            position_id: position_id,
            user_id: user_id
        }
    })
}

export async function addMember(data){

    const { user_id, position_id } = data;

    await User.findByPk(user_id)
        .then((result) => {
            if(!result){
                throw 'userNotFound';
            }
            return result;
        });

    const position = await Position.findByPk(position_id)
        .then((result) => {
            if(!result){
                throw 'positionNotFound';
            }
            return result;
        });

    await Job.findAll({
        where: {
            user_id: user_id,
        },
        include: [{
            model: Position,
            where: {
                area_id: position.dataValues.area_id
            }
        }]
    }).then((result) => {
        if(result){
            throw 'userIsJob';
        }
    });

    await Job.create(data);

}

export async function updateMember(data){

    const { user_id, position_id } = data;

    await User.findByPk(user_id)
        .then((result) => {
            if(!result){
                throw 'userNotFound';
            }
            return result;
        });

    const position = await Position.findByPk(position_id)
        .then((result) => {
            if(!result){
                throw 'positionNotFound';
            }
            return result;
        });

    await Job.findOne({
        where: {
            user_id: user_id,
        },
        required: true,
        include: [{
            model: Position,
            where: {
                area_id: position.dataValues.area_id
            }
        }]
    }).then((result) => {
        if (!result) {
            throw 'userIsNotJob';
        }
        return result;
    });

    await Job.update(data, {
        where: {
            user_id: user_id,
        },
        required: true,
        include: [{
            model: Position,
            where: {
                area_id: position.dataValues.area_id
            }
        }]
    });

}