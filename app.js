const Koa = require('koa');
const InitManager = require('./core/init')
const app = new Koa();
const config = require('./config')
const helmet = require("koa-helmet");
const parser = require('koa-bodyparser')
const catchError = require('./middlewares/exceptions')
const { loggerMiddleware } = require('./middlewares/logger')

// 中间件
app.use(loggerMiddleware) // 日志打印
app.use(catchError) // 全局错误处理中间件
app.use(helmet()); // 安全中间件
app.use(parser()) // bodyparser中间件

// 初始化
InitManager.initCore(app)
app.listen(config.port);