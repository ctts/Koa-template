// const Router = require('koa-router')
import * as Router from 'koa-router'
const router = new Router()
// const { HttpException } = require('@src/core/HttpException')

router.get('/', (ctx) => {
    // ctx.router available
    const path = ctx.params
    const query = ctx.request.query
    const header = ctx.request.header
    // 需要先引入 koa-bodyparser
    const body = ctx.request.body
    ctx.body = 'hello'
    console.log('hello')
});

module.exports = router