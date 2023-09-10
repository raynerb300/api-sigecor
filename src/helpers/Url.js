// Contiene todas las rutas de la API
export const URL = {
    // Rutas session
    login: '/login',
    logout: '/logout/:id',

    // Rutas user
    getUsers: '/users',
    getUser: '/users/:id',
    createUser: '/users',
    updateUser: '/users/:id',
    resetPasswordUser: '/users/:id/reset-password',
    changePassword: '/users/:id/change-password',

    // Rutas rol
    getRols: '/rols',
    getRol: '/rols/:id',
    createRol: '/rols',
    updateRol: '/rols/:id',

    // Rutas permisos
    getPermissions: '/permissions',

}