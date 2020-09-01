const { HttpException } = require('../core/exception')

const catchError = async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        if (process.env.NODE_ENV === 'dev') {
            throw err
        }
        const { msg, code, errorCode } = err
        if (err instanceof HttpException) { // 已知错误
            ctx.body = {
                msg,
                errorCode,
                errorUrl: `method:${ctx.method} path:${ctx.path}`
            }
            ctx.status = code
        } else { // 未知错误
            ctx.body = {
                msg: '未知错误',
                errorCode: 9999,
                errorUrl: `method:${ctx.method} path:${ctx.path}`,
            }
            ctx.status = 500
        }
    }
}

module.exports = catchError