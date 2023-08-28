import db from '../../../config/Connection.js';
import { DataTypes } from 'sequelize';
import { Permission } from './Permission.js';

export const Rol = db.define('rol', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
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
        allowNull: false,
        name: 'rol_id'
    }
});

Permission.belongsToMany(Rol, {
    through: 'permission_rol',
    foreignKey: {
        allowNull: false,
        name: 'permission_id'
    }
})