export const responseMessage = (status = '', data = {}, message = '', count = null, skip = null, limit = null) => {
    return {
        status: status,
        data: data,
        message: message,
        count: count,
        skip: skip,
        limit: limit
    }
}