class HttpException extends Error {
    constructor(msg = '服务器异常', errorCode = 10000, code = 400) {
        super();
        this.errorCode = errorCode;
        this.code = code;
        this.msg = msg;
    }
}
class NotFound extends HttpException {
    constructor(msg = '资源未找到', errorCode = 10001) {
        super();
        this.code = 404;
        this.errorCode = errorCode;
        this.msg = msg;
    }
}
module.exports = {
    HttpException,
    NotFound
};
//# sourceMappingURL=HttpException.js.map