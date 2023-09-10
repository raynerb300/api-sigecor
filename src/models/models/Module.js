import sequelize from '../../../config/Connection.js';
import { DataTypes } from 'sequelize';

export const Module = sequelize.define('module', {
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

Module.associate = function(models) {
    Module.hasMany(models.Permission, {
      foreignKey: {
        name: 'module_id',
        allowNull: null
      }
    });
  };