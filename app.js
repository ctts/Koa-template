const Koa = require('koa');
const InitManager = require('./core/init')
const app = new Koa();
const parser = require('koa-bodyparser')
const catchError = require('./middlewares/exceptions')

// 中间件
app.use(catchError)
app.use(parser())

// 初始化
InitManager.initCore(app)
app.listen(3000);