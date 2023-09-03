export const STATUS = (element) => {
    const codes = {
        success: 200,
        badRequest: 400,
        userOrPasswordInvalid: 401,
        unauthorized: 401,
        userInactive: 403,
        notFound: 404,
        userNotFound: 404,
        serverError: 500
    }
    return codes[element] ?? STATUS('serverError');
}

export const MESSAGE = (element) => {
    const codes = {
        success: 'Operación exitosa.',
        badRequest: 'Sintaxis de solicitud incorrecta',
        userOrPasswordInvalid: 'Usuario o contraseña invalida.',
        unauthorized: 'Sesión expirada.',
        userInactive: "El usuario se encuentra inactivo",
        notFound: 'Registro no encontrado.',
        userNotFound: 'Usuario no encontrado',
        serverError: 'Error interno del servidor.'
    }
    return codes[element] ?? MESSAGE('serverError')
}