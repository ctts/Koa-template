const requireDirectory = require('require-directory')
const jwt = require('koa-jwt');
const config = require('../config')
const Router = require('koa-router');

class InitManager {
    // 入口方法
    static initCore(app) {
        InitManager.app = app
        InitManager.initLoadRouters()
        InitManager.initJWT(app)
        // InitManager.initConfig()
    }
    // static initConfig(path) {
    //     const configPath = path || `${process.cwd()}/config/config.js`
    //     const config = require(configPath)
    //     global.config = config
    // }
    // 初始化路由
    static initLoadRouters() {
        requireDirectory(module, `${process.cwd()}/app/routes`, {
            visit: (obj, path) => {
                obj instanceof Router && InitManager.app.use(obj.routes())
                // } else {
                // if (!!path.match(/\/routes\/private\//g)) {
                //     // 私有,需要 jwt 验证
                //     obj instanceof Router && InitManager.app.use(obj.routes())
                // } else {
                //     // 公有,无需验证
                //     obj instanceof Router && InitManager.app.use(obj.routes())
                // }
            }
        });
    }
    static initJWT(app) {
        app.use(jwt({ secret: config.secret }).unless({ path: [/\/routes\/public/] }));
    }
}

module.exports = InitManager