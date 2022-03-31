module.exports = class ResponseError extends Error {
    constructor(message, code = 500) {
        super(message);
        this.code = code;
    }
}