export const STATUS = (element) => {
    const codes = {
        success: 200,
        badRequest: 400,
        userOrPasswordInvalid: 401,
        unauthorized: 401,
        forbidden: 403,
        tokenExpired: 403,
        userInactive: 403,
        notFound: 404,
        rolNotFound: 404,
        userNotFound: 404,
        permissionNotFound: 404,
        typeCorrespondenceNotFound: 404,
        areaNotFound: 404,
        stateNotFound: 404,
        positionNotFound: 404,
        alreadyExistUsername: 409,
        alreadyExistEmail: 409,
        alreadyExistDocument: 409,
        alreadyExistRol: 409,
        alreadyExistTypeCorrespondence: 409,
        alreadyExistArea: 409,
        alreadyExistState: 409,
        alreadyExistStateOrder: 409,
        cantModifyStateSystem: 409,
        alreadyExistPosition: 409,
        userIsJob: 409,
        userIsNotJob: 409,
        serverError: 500
    }
    return codes[element] ?? STATUS('serverError');
}

export const MESSAGE = (element) => {
    const codes = {
        success: 'Operación exitosa.',
        badRequest: 'Sintaxis de solicitud incorrecta.',
        userOrPasswordInvalid: 'Usuario o contraseña invalida.',
        unauthorized: 'Sesión expirada.',
        forbidden: 'Acceso restringido.',
        tokenExpired: "Token expirado",
        userInactive: "El usuario se encuentra inactivo.",
        notFound: 'Registro no encontrado.',
        rolNotFound: 'Rol no encontrado.',
        userNotFound: 'Usuario no encontrado.',
        permissionNotFound: 'Permiso no encontrado.',
        typeCorrespondenceNotFound: 'Tipo de correspondencia no encontrado.',
        areaNotFound: 'Area no encontrada.',
        stateNotFound: 'Estado no encontrado.',
        positionNotFound: 'Cargo no encontrado.',
        alreadyExistUsername: 'El nombre de usuario ya se encuentra registrado.',
        alreadyExistEmail: 'El email ya se encuentra registrado.',
        alreadyExistDocument: 'El número de documento ya se encuentra registrado.',
        alreadyExistRol: 'El nombre de rol ya se encuentra registrado.',
        alreadyExistTypeCorrespondence: 'El nombre de tipo de correspencia ya se encuentra registrado en el área.',
        alreadyExistArea: 'El nombre de área ya se encuentra registrado.',
        alreadyExistState: 'El nombre de estado ya se encuentra registrado en el tipo de correspondencia.',
        alreadyExistStateOrder: 'El orden del estado ya se encuentra registrado en el tipo de correspondencia.',
        alreadyExistPosition: 'El nombre del cargo ya se encuentra registrado en el área.',
        cantModifyStateSystem: 'No se pueden modificar los estados base del sistema.',
        userIsJob: "El usuario ya tiene un cargo dentro del area.",
        userIsNotJob: "El usuario no se encuentra trabajando en esa area.",
        serverError: 'Error interno del servidor.'
    }
    return codes[element] ?? MESSAGE('serverError')
}