export const STATUS = (element) => {
    const codes = {
        success: 200,
        userOrPasswordInvalid: 401,
        unauthorized: 401,
        notFound: 404,
        serverError: 500
    }
    return codes[element] ?? STATUS('serverError');
}

export const MESSAGE = (element) => {
    const codes = {
        success: 'Operación exitosa.',
        notFound: 'Registro no encontrado.',
        unauthorized: 'Sesión expirada.',
        userOrPasswordInvalid: 'Usuario o contraseña invalida.',
        serverError: 'Error interno del servidor.'
    }
    return codes[element] ?? MESSAGE('serverError')
}