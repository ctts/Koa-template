// const Koa = require('koa');
const InitManager = require('./core/init')
const parser = require('koa-bodyparser')
const catchError = require('./middlewares/exceptions')
require('module-alias/register');

import * as Koa from "koa"
const app = new Koa()

console.log(process.env.NODE_ENV)

// 中间件
app.use(catchError)
app.use(parser())

// 初始化
InitManager.initCore(app)
app.listen(3000);
console.log('server running on port 3000')