import CryptoJS from 'crypto-js';
import { User } from '../models/models/User.js';
import { Rol } from '../models/models/Rol.js';
import { generateRandomPassword } from '../helpers/GenerateRandomPassword.js';
import { Op } from 'sequelize';

export async function getUsers(){
    return await User.findAll({
        attributes: { exclude: ['password'] },
        raw: true
    });
}

export async function getUser(id){
    const user = await User.findByPk(id, {
        attributes: { 
            exclude: ['password'] 
        }
    });
    
    if(!(user)){
        throw 'userNotFound';
    }

    return user;
}

export async function createUser(data){

    const { username, email, nro_document, type_document } = data;

    const existUsername = await User.findOne({
        where: {
            username: username
        }
    });
    
    if(existUsername){
        throw 'alreadyExistUsername';
    }
    
    const existEmail = await User.findOne({
        where: {
            email: email
        }
    });
    
    if(existEmail){
        throw 'alreadyExistEmail';
    }

    const existDocument = await User.findOne({
        where: {
            nro_document: nro_document,
            type_document: type_document
        }
    });

    if(existDocument){
        throw 'alreadyExistDocument';
    }

    // Guardo la clave temporal generada
    const password = generateRandomPassword();

    data.tempory_password = true;
    data.password = CryptoJS.SHA256(password).toString();

    const user = await User.create(data);

    // Reasigno la clave temporal desencriptada para que pueda ser mostrada 1 vez.
    user.password = password;

    return user.toJSON();
}

export async function updateUser(id, data){

    const { username, names, last_names, sex, status, rol_id } = data;

    const existUsername = await User.findOne({ 
        where: { 
            username: username, 
            id: { [Op.ne]: id } 
        } 
    });

    if(existUsername){
        throw 'alreadyExistUsername';
    }

    const existRol = await Rol.findOne({
        where: {
            id: rol_id
        }
    });

    if(!(existRol)){
        throw 'rolNotFound';
    }

    const user = await User.update({ 
        username: username,
        names: names,
        last_names: last_names,
        sex: sex,
        status: status,
        rol_id: rol_id
    }, {
        where: {
            id: id
        },
        returning: true
    });

    if(!(user[0])){
        throw 'userNotFound';
    }
}

export async function resetPasswordUser(id) {
    const password = generateRandomPassword();

    const user = await User.update({
        password: CryptoJS.SHA256(password).toString(),
        tempory_password: true
    },{
        where: {
            id: id
        },
        returning: true,
        raw: true
    });

    if(!(user[0])){
        throw 'userNotFound';
    }

    return {
        password: password
    }
}

export async function changePassword(id, data){
    let { password } = data;

    password = CryptoJS.SHA256(password).toString();

    const user = await User.update({ 
        password: password, 
        tempory_password: false 
    }, {
        where: {
            id: id
        },
        returning: true // Para retornar el objeto al actualizarlo
    });

    if(!(user[0])){
        throw 'userNotFound';
    }
}