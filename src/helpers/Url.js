// Contiene todas las rutas de la API
export const URL = {
    // Rutas session
    login: '/login',
    logout: '/logout/:id',

    // Rutas User
    getUsers: '/users',
    getUser: '/users/:id',
    createUser: '/users',
    updateUser: '/users/:id',
    resetPasswordUser: '/users/:id/reset-password',
    changePassword: '/users/:id/change-password'

}