import sequelize from '../../../config/Connection.js';
import { DataTypes } from 'sequelize';

export const Responsible = sequelize.define('responsible',{
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