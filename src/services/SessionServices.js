import CryptoJS from 'crypto-js';
import { Module } from '../models/models/Module.js'
import { User } from '../models/models/User.js';
import { Permission } from '../models/models/Permission.js';
import { Rol } from '../models/models/Rol.js';
import jwt from 'jsonwebtoken';

export async function login(data){ 
    let { username, password } = data;

    password = CryptoJS.SHA256(password).toString();
    
    const user = await User.findOne({
        where: {
            username: username,
            password: password
        }
    });

    if (!user) {
        throw 'userOrPasswordInvalid';
    }
    
    const userInfo = user.toJSON();

    // Si el usuario esta inactivo 
    if(!(userInfo.status))
        throw 'userInactive';

    const token = jwt.sign({ user: userInfo }, process.env.JWT_SECRET, 
        { expiresIn: process.env.JWT_EXPIRES_IN });
        
    const menu = await Module.findAll({
        attributes: ['id','name'],
        include: [{
            model: Permission,
            attributes: ['id','name','status'],
            include: [{
                model: Rol,
                attributes: ['name','status'],
                through: { attributes: [] },
                where: {
                    id: userInfo.rol_id
                }
            }]
        }]
    });    

    return {
        token: token,
        menu: menu
    };

}

export async function logout(){

}

export async function changePassword(data){
    let { username, password } = data;

    password = CryptoJS.SHA256(password).toString();

    const user = await User.update({ password: password, tempory_password: false }, {
        where: {
            username: username
        },
        returning: true // Para retornar el objeto al actualizarlo
    });

    if(!(user[0])){
        throw 'userNotFound';
    }
}