class HttpException extends Error {
    constructor(msg = '服务器异常', errorCode = 10000, code = 400) {
        super()
        this.errorCode = errorCode
        this.code = code
        this.msg = msg
    }
}

class ParameterException extends HttpException{
    constructor(msg = '参数错误', errorCode = 10000, code = 400) {
        super()
        this.errorCode = errorCode
        this.code = code
        this.msg = msg
    }
}

class NotFound extends HttpException {
    constructor(msg = '资源未找到') {
        super()
        this.code = 404
        this.errorCode = 10001
        this.msg = msg
    }
}
// 虽然是操作成功,但是统一是以异常的形式抛出,方便管理
class Success extends HttpException{
    constructor(msg, errorCode) {
        super()
        this.code =  201
        this.errorCode = errorCode || 0 
        this.msg = msg || 'ok'
    }
}

module.exports = {
    HttpException,
    NotFound,
    ParameterException,
    Success,
}