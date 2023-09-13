import sequelize from '../../../config/Connection.js';
import { DataTypes } from 'sequelize';
import { Area } from './Area.js';
import { State } from './State.js';

export const TypeCorrespondence = sequelize.define('type_correspondence', {
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
    },
    approved: {
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

TypeCorrespondence.belongsTo(Area, {
    foreignKey: {
        name: 'area_id',
        allowNull: false
    }
});

TypeCorrespondence.hasMany(State, {
    foreignKey: {
        name: 'type_correspondence_id',
        allowNull: false
    }
});
