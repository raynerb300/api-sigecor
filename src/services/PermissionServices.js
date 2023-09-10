import { Module } from '../models/models/Module.js';
import { Permission } from '../models/models/Permission.js';

export async function getPermissions(){
    return await Module.findAll({
        attributes: { exclude: ['created_at', 'update_at'] },
        include: [{
            model: Permission,
            attributes: { exclude: ['created_at', 'update_at'] }
        }]
    });
}
