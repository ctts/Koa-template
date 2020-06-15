const requireDirectory = require('require-directory')
// const Router = require('koa-router')
import * as Router from 'koa-router'
import * as Koa from "koa"

class InitManager {
    static app: Koa
    // 入口方法
    static initCore(app: Koa) {
        InitManager.app = app
        InitManager.initLoadRouters()
        // InitManager.initConfig()
    }
    // static initConfig(path: string) {
    //     const configPath = path || `${process.cwd()}/src/config/config.js`
    //     const config = require(configPath)
    //     global.config = config
    // }
    // 初始化路由
    static initLoadRouters() {
        requireDirectory(module, getRealPath(`${process.cwd()}/src/app/api`), {
            // @ts-ignore
            visit: obj => obj instanceof Router && InitManager.app.use(obj.routes())
        });
    }
}

function getRealPath(path: string) {
    return path.replace(/\/src\//g, '/dist/')
}

module.exports = InitManager