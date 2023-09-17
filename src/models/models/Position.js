import sequelize from '../../../config/Connection.js';
import { DataTypes } from 'sequelize';
import { Area } from './Area.js';

export const Position = sequelize.define('position', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
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

Position.belongsTo(Area, {
    foreignKey: {
        name: 'area_id',
        allowNull: false
    }
});