import sequelize from '../../../config/Connection.js';
import { DataTypes } from 'sequelize';
import { User } from './User.js';
import { Position } from './Position.js';

export const Job = sequelize.define('job', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date_end: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
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

Position.belongsToMany(User, {
    through: 'job',
    foreignKey: {
        name: 'position_id',
        allowNull: false,
        primaryKey: true
    }
});

User.belongsToMany(Position, {
    through: 'job',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
        primaryKey: true
    }
});