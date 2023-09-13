import sequelize from '../../config/Connection.js';
import { Area } from '../models/models/Area.js';
import { State } from '../models/models/State.js';
import { TypeCorrespondence } from '../models/models/TypeCorrespondence.js';
import { Op } from 'sequelize';

export async function getTypeCorrespondence(id){

    const typeCorrespondence = await TypeCorrespondence.findByPk(id, {
        attributes: { 
          exclude: ['created_at', 'updated_at'] 
        },
        raw: true
    });

    if(!(typeCorrespondence)){
        throw 'typeCorrespondenceNotFound';
    }

    typeCorrespondence.state = await State.findAll({
        attributes: {
            exclude: ['created_at', 'updated_at', 'type_correspondence_id']
        },
        where: {
            [Op.not]: {
                [Op.or]: [{
                    name: 'APROBADO'
                }, {
                    name: 'POR APROBAR'
                }]
            },
            type_correspondence_id: id
        },
        raw: true
    });

    return typeCorrespondence;
}

export async function createTypeCorrespondence(data){

    const t = await sequelize.transaction();
    const { name, area_id } = data;
    
    try {

        const existArea = await Area.findByPk(area_id);

        if(!existArea){
            throw 'areaNotFound';
        }
        
        const existingTypeCorrespondence = await TypeCorrespondence.findOne({
            where: {
                name: name,
                area_id: area_id
            }
        });

        if(existingTypeCorrespondence){
            throw 'alreadyExistTypeCorrespondence';
        }

        const typeCorrespondence = await TypeCorrespondence.create(data, { transaction: t });

        await State.create({
            name: 'POR APROBAR',
            description: 'Correspondencia por abrobar',
            orden: 1,
            type_correspondence_id: typeCorrespondence.id
        }, { transaction: t });
        await State.create({
            name: 'APROBADO',
            description: 'Correspondencia aprobada',
            orden: 2,
            type_correspondence_id: typeCorrespondence.id
        }, { transaction: t });

        await t.commit();
        return typeCorrespondence;
        
    } catch (error) {
        await t.rollback();
        throw error;
    }
}

export async function updateTypeCorrespondence(id, data){

    const { name } = data;

    try {

        const typeCorrespondence = await TypeCorrespondence.findByPk(id);

        if(!typeCorrespondence){
            throw 'typeCorrespondenceNotFound';
        }
        
        const existingTypeCorrespondence = await TypeCorrespondence.findOne({
            where: {
                name: name,
                area_id: typeCorrespondence.area_id,
                [Op.not]: {
                    id: id
                }
            }
        });

        if(existingTypeCorrespondence){
            throw 'alreadyExistTypeCorrespondence';
        }

        await TypeCorrespondence.update(data ,{
            where: {
                id: id
            }
        });

    } catch (error) {
        throw error;
    }
}