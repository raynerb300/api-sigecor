import sequelize from '../../config/Connection.js';
import { Area } from '../models/models/Area.js';
import { TypeCorrespondence } from '../models/models/TypeCorrespondence.js';
import { User } from '../models/models/User.js';
import { Position } from '../models/models/Position.js';
import { State } from '../models/models/State.js';
import { Op } from 'sequelize';

Area.associate({ TypeCorrespondence, Position });

export async function getAreas(){

    return await Area.findAll({
        attributes: { 
            exclude: ['created_at', 'updated_at', 'manager_id', 'coordinator_id'] 
        },
        include: [{ 
            model: Position, 
            attributes: ['name'],
            where: {
                name: ['GERENTE', 'COORDINADOR'] 
            },
            include: [{
                model: User,
                attributes: ['names', 'last_names', 'type_document', 'nro_document'],
                through: { 
                    attributes: [] 
                }
            }]
        }]
    });

}

export async function getArea(id){

    const area = await Area.findByPk(id, {
        attributes: { 
          exclude: ['created_at', 'updated_at', 'manager_id','coordinator_id'] 
        },
        include: [ { 
            model: Position, 
            attributes: ['name'],
            include: [{
                model: User,
                attributes: ['names', 'last_names', 'type_document', 'nro_document'],
                through: { 
                    attributes: [] 
                }
            }]
        }, {
            model: TypeCorrespondence,
            attributes: { 
                exclude: ['created_at', 'updated_at', 'area_id'] 
            }
        }]
    });

    if(!(area)){
        throw 'areaNotFound';
    }
    
    return area;
}

export async function createArea(data){

    const t = await sequelize.transaction();
    const { name  } = data;

    try {

        const existingArea = await Area.findOne({
            where: {
                name: name.toUpperCase()
            }
        });

        if(existingArea){
            throw 'alreadyExistArea';
        }

        const area = await Area.create(data, { transaction: t });

        await Position.create({
            name: 'COORDINADOR',
            area_id: area.dataValues.id,
            description: 'COORDINADOR DEL AREA'
        }, { transaction: t });

        await Position.create({
            name: 'GERENTE',
            area_id: area.dataValues.id,
            description: 'GERENTE DEL AREA'
        }, { transaction: t });

        const typeCorrespondence = await TypeCorrespondence.create({
            name: 'PÚBLICO',
            area_id: area.dataValues.id,
            description: 'TIPO DE CORRESPONDENCIA POR DEFECTO',
            approved: false
        }, { transaction: t });

        await State.create({
            name: 'POR APROBAR',
            description: 'CORRESPONDENCIA POR APROBAR',
            order: 1,
            type_correspondence_id: typeCorrespondence.dataValues.id
        }, { transaction: t });

        await State.create({
            name: 'APROBADO',
            description: 'CORRESPONDENCIA APROBADA',
            order: 2,
            type_correspondence_id: typeCorrespondence.dataValues.id
        }, { transaction: t });

        await t.commit();
        return area;

    } catch (error) {
        await t.rollback();
        throw error;
    }
}

export async function updateArea(id, data){

    const { name } = data;

    try {

        const area = await Area.findByPk(id);

        if(!area){
            throw 'areaNotFound';
        }

        const existingArea = await Area.findOne({
            where: {
                name: name.toUpperCase(),
                [Op.not]: { 
                    id: id
                }
            }
        });

        if(existingArea){
            throw 'alreadyExistArea';
        }
        
        area.update(data);

    } catch (error) {
        throw error;
    }
}