import sequelize from '../../../config/Connection.js';
import { DataTypes } from 'sequelize';

export const Area = sequelize.define('area', {
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

Area.associate = function(models) {
    Area.hasMany(models.TypeCorrespondence, {
        foreignKey: {
            name: 'area_id',
            allowNull: null
        }
    });
}