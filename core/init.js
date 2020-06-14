const requireDirectory = require('require-directory')
const Router = require('koa-router');
const path = require('path')

class InitManager {
    // 入口方法
    static initCore (app) {
        InitManager.app = app
        InitManager.initLoadRouters()
        InitManager.initConfig()
    }
    static initConfig (path) {
        const configPath = path || `${process.cwd()}/config/config.js`
        const config = require(configPath)
        global.config = config
    }
    // 初始化路由
    static initLoadRouters () {
        requireDirectory(module, `${process.cwd()}/app/api`, {
            visit: obj => obj instanceof Router && InitManager.app.use(obj.routes())
        });
    }
}

module.exports = InitManager