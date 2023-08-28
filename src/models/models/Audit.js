import db from '../../../config/Connection.js';
import { DataTypes } from 'sequelize';
import { User } from './User.js';

export const Audit = db.define('audit', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    new: {
        type: DataTypes.JSON,
        allowNull: false
    },
    old: {
        type: DataTypes.JSON,
        allowNull: false
    },
    action: {
        type: DataTypes.STRING,
        allowNull: false
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

Audit.belongsTo(User, { 
    foreignKey: {
        name: 'user_id', 
        allowNull: false
    }
});