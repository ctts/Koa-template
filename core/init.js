const requireDirectory = require('require-directory')
const jwt = require('koa-jwt');
const config = require('../config')
const err = require('../core/HTTPException')
const Router = require('koa-router');

class InitManager {
    // 入口方法
    static initCore(app) {
        InitManager.app = app
        InitManager.initLoadRouters()
        InitManager.initJWT(app)
        InitManager.initConfig()
        InitManager.initError()
        InitManager.initDB()
        InitManager.initTest()
    }
    static initConfig() {
        global.config = config
    }
    // 初始化路由
    static initLoadRouters() {
        requireDirectory(module, `${process.cwd()}/app/routes`, {
            visit: (obj, path) => {
                obj instanceof Router && InitManager.app.use(obj.routes())
            }
        });
    }
    static initJWT(app) {
        app.use(jwt({ secret: config.secret }).unless({ path: [/\/routes\/public/] }));
    }
    static initTest() {
        require('@app/controllers').CrewlerGame
    }
    static initDB() {
        require('./db')
    }
    static initError() {
        global.err = err
    }
}

module.exports = InitManager