import sequelize from '../../config/Connection.js';
import './models/Area.js';
import './models/Audit.js';
import './models/Document.js';
import './models/ExternalAgent.js';
import './models/Module.js';
import './models/Permission.js';
import './models/PermissionRol.js';
import './models/Priority.js';
import './models/Response.js';
import './models/Responsible.js';
import './models/Rol.js';
import './models/State.js';
import './models/TypeCorrespondence.js';
import './models/User.js';
import './models/Correspondence.js';

const initModels = sequelize.sync({ force : false })
    .then(() => {
        console.log('Tablas sincronizadas');
    }
);

sequelize.addHook('beforeValidate', (instance, options) => { 
    const modelName =  instance.constructor.name;

    for (const key in instance.dataValues) {
        const value = instance.dataValues[key];
        if (typeof value === 'string') {
            if(!(modelName === 'user' && (key === 'username' || key === 'password'))){
                instance.dataValues[key] = value.toUpperCase();
            }
        }
    }
});

export default initModels;