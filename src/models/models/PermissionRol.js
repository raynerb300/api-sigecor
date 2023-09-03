import sequelize from '../../../config/Connection.js';
import { DataTypes } from 'sequelize';
import { Permission } from './Permission.js';
import { Rol } from './Rol.js';

export const PermissionRol = sequelize.define('permission_rol', {}, {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    defaultValues: {
        createdAt: DataTypes.NOW,
        updatedAt: DataTypes.NOW
    }
});

Rol.belongsToMany(Permission, {
    through: 'permission_rol',
    foreignKey: {
        name: 'rol_id',
        allowNull: false
    }
});

Permission.belongsToMany(Rol, {
    through: 'permission_rol',
    foreignKey: {
        name: 'permission_id',
        allowNull: false
    }
});