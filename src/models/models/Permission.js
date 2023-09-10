import sequelize from '../../../config/Connection.js';
import { DataTypes } from 'sequelize';
import { Module } from './Module.js';

export const Permission = sequelize.define('permission', {
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

Permission.associate = function(models) {
    Permission.belongsTo(models.Module, {
      foreignKey: {
        name: 'module_id',
        allowNull: true
      }
    });
};