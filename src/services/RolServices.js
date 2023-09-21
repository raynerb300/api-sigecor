import sequelize from '../../config/Connection.js';
import { Rol } from '../models/models/Rol.js';
import { Permission } from '../models/models/Permission.js';
import { Module } from '../models/models/Module.js';
import { Op } from 'sequelize';

export async function getRols(){
    return await Rol.findAll({
        attributes: { exclude: ['created_at', 'updated_at'] }
    });
}

export async function getRol(id){

    const rol = await Rol.findByPk(id, {
        attributes: { 
          exclude: ['created_at', 'updated_at'] 
        }
    });

    if(!rol){
        throw 'rolNotFound';
    }

    rol.dataValues.modules = await Module.findAll({
        attributes: ['id', 'name', 'status'],
        include: [{
            model: Permission,
            attributes: ['id', 'name', 'status'],
            required: true,
            include: [{
                model: Rol,
                attributes: [],
                where: {
                    id: id
                }
            }]
        }]
    });
      
    return rol;
}

export async function createRol(data){

    const t = await sequelize.transaction();
    const { permissions, name } = data;

    try {
        
        const existingRol = await Rol.findOne({
            where: {
                name: name.toUpperCase()
            }
        });

        if(existingRol){
            throw 'alreadyExistRol';
        }

        const rol = await Rol.create(data, { transaction: t });

        // Busco todos los permisos
        const existPermission = await Permission.findAll({
            where: {
              id: permissions
            }
        });

        // Si no existe todos los permisos throw
        if(existPermission.length != permissions.length){
            throw 'permissionNotFound';
        }

        if(permissions.length){
            await rol.setPermissions(permissions, { transaction: t });
        }

        await t.commit();
        return rol;
        
    } catch (error) {
        await t.rollback();
        throw error;
    }
}

export async function updateRol(id, data){

    const t = await sequelize.transaction();
    const { permissions, name } = data;

    try {

        const rol = await Rol.findByPk(id);

        if(!rol){
            throw 'rolNotFound';
        }

        const existingRol = await Rol.findOne({
            where: {
                name: name.toUpperCase(),
                [Op.not]: {
                    id: id
                }
            }
        });

        // Si existe el nombre del rol registrado throw
        if(existingRol){
            throw 'alreadyExistRol';
        }

        await Rol.update(data ,{
            where: {
                id: id
            }
        }, { transaction: t });

        // Busco todos los permisos
        const existPermission = await Permission.findAll({
            where: {
              id: permissions
            }
        });

        // Si no existen todos los permisos throw
        if(existPermission.length != permissions.length){
            throw 'permissionNotFound';
        }

        if(permissions.length){
            await rol.setPermissions(permissions, { transaction: t });
        }

        await t.commit();

    } catch (error) {
        await t.rollback();
        throw error;
    }
}