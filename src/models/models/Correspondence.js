import sequelize from '../../../config/Connection.js';
import { DataTypes } from 'sequelize';
import { State } from './State.js';
import { User } from './User.js';
import { Priority } from './Priority.js';
import { Document } from './Document.js';

export const Correspondence = sequelize.define('correspondence', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nro_correspondence: {
        type: DataTypes.STRING,
        allowNull: false
    },
    affair: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    observation: {
        type: DataTypes.STRING,
        allowNull: true
    },
    archive_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    resend: {
        type: DataTypes.BOOLEAN,
        allowNull:false,
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

Correspondence.belongsTo(State, {
    foreignKey: {
        name: 'state_id',
        allowNull: false
    }
});

Correspondence.belongsTo(User, {
    as: 'transmiter',
    foreignKey: {
        name: 'user_id',
        allowNull: true
    }
});

Correspondence.belongsTo(User, {
    as: 'responsible',
    foreignKey: {
        name: 'user_id',
        allowNull: true
    }
});

Correspondence.belongsTo(Priority, {
    foreignKey: {
        name: 'priority_id',
        allowNull: false
    },
});

Correspondence.hasMany(Document, {
    foreignKey: {
        name: 'correspondence_id',
        allowNull: false
    }
});

Correspondence.belongsToMany(Correspondence, {
    as: 'correspondence',
    through: 'response',
    foreignKey: {
        name: 'correspondence_id',
        allowNull: false
    }
});

Correspondence.belongsToMany(Correspondence, {
    as: 'responses',
    through: 'response',
    foreignKey: {
        name: 'response_id',
        allowNull: false
    }
});

Correspondence.belongsToMany(User, {
    through: 'approved',
    foreignKey: {
        name: 'correspondence_id',
        allowNull: false
    }
});

User.belongsToMany(Correspondence, {
    through: 'approved',
    foreignKey: {
        name: 'user_id',
        allowNull: false
    }
});