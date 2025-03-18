class AppError extends Error {
    constructor(statusCode, message) {
        this.statusCode = statusCode;
        this.message = message;

        super(message);
        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;
