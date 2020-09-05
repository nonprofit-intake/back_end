
/*
     Used for sending error messages and status codes to the global error handler

     example:

     const error = new AppError("some error message", 400)
     
     next(error) // Will send to the global handler with the error message and status code

*/


class AppError extends Error {
    constructor(message, statusCode) {
        super(message)

        this.statusCode = statusCode
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'
        this.isOperation = true

        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = AppError