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

    // Rutas Tipo Correspondencia
    getTypeCorrespondence: '/type-correspondences/:id',
    createTypeCorrespondence: '/type-correspondences',
    updateTypeCorrespondence: '/type-correspondences/:id',

    // Rutas area
    getAreas: '/areas',
    getArea: '/areas/:id',
    createArea: '/areas',
    updateArea: '/areas/:id',
    getAreaTypeCorrespondences: '/areas/:id/type-correspondences',
    getAreaPositions: '/areas/:id/positions',

    // Rutas estados
    getState: '/states/:id',
    createState: '/states',
    updateState: '/states/:id',

    // Rutas cargos
    getPosition: '/positions/:id',
    createPosition: '/positions',
    updatePosition: '/positions/:id',

    // Rutas miembros
    deleteMember: '/members',
    addMember: '/members',
    updateMember: '/members'
}