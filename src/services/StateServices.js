import { State } from '../models/models/State.js';
import { TypeCorrespondence } from '../models/models/TypeCorrespondence.js';
import { Op } from 'sequelize';

export async function getState(id){

    const state = await State.findByPk(id, {
        attributes: { 
          exclude: ['created_at', 'updated_at', 'type_correspondence_id'] 
        }
    });

    if(!(state)){
        throw 'stateNotFound';
    }

    return state;
}

export async function createState(data){

    const { name, type_correspondence_id, order } = data;
 
    const existTypeCorrespondence = await TypeCorrespondence.findByPk(type_correspondence_id);

    if (!existTypeCorrespondence) {
        throw 'typeCorrespondenceNotFound';
    }

    const existState = await State.findOne({
        where: {
            name: name,
            type_correspondence_id: type_correspondence_id
        }
    });

    if (existState) {
        throw 'alreadyExistState';
    }

    const existOrderState = await State.findOne({
        where: {
            type_correspondence_id: type_correspondence_id,
            order: order
        }
    });

    if(existOrderState){
        throw 'alreadyExistStateOrder';
    }

    return await State.create(data);

}

export async function updateState(id, data){

    const { name } = data;

    try {

        const state = await State.findByPk(id);

        if(!state){
            throw 'stateNotFound';
        }
        
        const existingState = await State.findOne({
            where: {
                name: name,
                type_correspondence_id: state.type_correspondence_id,
                [Op.not]: {
                    id: id
                }
            }
        });

        if(existingState){
            throw 'alreadyExistState';
        }

        await State.update(data ,{
            where: {
                id: id
            }
        });

    } catch (error) {
        throw error;
    }
}