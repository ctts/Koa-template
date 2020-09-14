const Router = require('koa-router')
const router = new Router

router.get('/test/:name', (ctx, next) => {
    // ctx.router available
    const path = ctx.params
    const query = ctx.request.query
    const header = ctx.request.header
    // 需要先引入 koa-bodyparser
    const body = ctx.request.body
});

module.exports = router