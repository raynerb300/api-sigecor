import { Area } from '../models/models/Area.js';
import { TypeCorrespondence } from '../models/models/TypeCorrespondence.js';
import { User } from '../models/models/User.js';
import { Op } from 'sequelize';

export async function getAreas(){

    return await Area.findAll({
        attributes: { 
            exclude: ['created_at', 'updated_at', 'manager_id', 'coordinator_id'] 
        },
        include: [ { 
            model: User, 
            as: 'manager',
            attributes: ['names', 'last_names', 'type_document', 'nro_document'] 
        }, { 
            model: User, 
            as: 'coordinator',
            attributes: ['names', 'last_names', 'type_document', 'nro_document'] 
        }]
    });

}

export async function getArea(id){

    Area.associate({ TypeCorrespondence });

    const area = await Area.findByPk(id, {
        attributes: { 
          exclude: ['created_at', 'updated_at', 'manager_id','coordinator_id'] 
        },
        include: [ { 
            model: User, 
            as: 'manager',
            attributes: ['names', 'last_names', 'type_document', 'nro_document'] 
        }, { 
            model: User, 
            as: 'coordinator',
            attributes: ['names', 'last_names', 'type_document', 'nro_document'] 
        }, {
            model: TypeCorrespondence,
            attributes: { 
                exclude: ['created_at', 'updated_at'] 
            }
        }]
    });

    if(!(area)){
        throw 'areaNotFound';
    }
    
    return area;
}

export async function createArea(data){

    const { name, manager_id, coordinator_id } = data;

    try {
        const existingArea = await Area.findOne({
            where: {
                name: name
            }
        });

        if(existingArea){
            throw 'alreadyExistArea';
        }

        const manager = await User.findByPk(manager_id);

        if(!manager){
            throw 'userNotFound';
        }

        const coordinator = await User.findByPk(coordinator_id);

        if(!coordinator){
            throw 'userNotFound';
        }

        return await Area.create(data);

    } catch (error) {
        throw error;
    }
}

export async function updateArea(id, data){

    const { name, manager_id, coordinator_id } = data;

    try {

        const area = await Area.findByPk(id);

        if(!area){
            throw 'areaNotFound';
        }

        const existingArea = await Area.findOne({
            where: {
                name: name,
                [Op.not]: { 
                    id: id
                }
            }
        });

        if(existingArea){
            throw 'alreadyExistArea';
        }

        const manager = await User.findByPk(manager_id);

        if(!manager){
            throw 'userNotFound';
        }

        const coordinator = await User.findByPk(coordinator_id);

        if(!coordinator){
            throw 'userNotFound';
        }

        area.update(data);

    } catch (error) {
        throw error;
    }
}