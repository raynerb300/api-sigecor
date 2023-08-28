import sequelize from '../../../config/Connection.js';
import { DataTypes } from 'sequelize';

export const User = sequelize.define('user', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tempory_password: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    names: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_names: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    type_document: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nro_document: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sex: {
        type: DataTypes.STRING,
        allowNull: false
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