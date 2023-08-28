import db from '../../../config/Connection.js';
import { DataTypes } from 'sequelize';

export const Responsible = db.define('responsible',{
    end_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    approved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
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