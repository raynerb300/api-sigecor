import db from '../../../config/Connection.js';
import { DataTypes } from 'sequelize';

export const PermissionRol = db.define('permission_rol', {}, {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    defaultValues: {
        createdAt: DataTypes.NOW,
        updatedAt: DataTypes.NOW
    }
});
