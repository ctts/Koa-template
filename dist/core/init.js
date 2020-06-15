"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requireDirectory = require('require-directory');
// const Router = require('koa-router')
const Router = require("koa-router");
class InitManager {
    // 入口方法
    static initCore(app) {
        InitManager.app = app;
        InitManager.initLoadRouters();
        // InitManager.initConfig()
    }
    // static initConfig(path: string) {
    //     const configPath = path || `${process.cwd()}/src/config/config.js`
    //     const config = require(configPath)
    //     global.config = config
    // }
    // 初始化路由
    static initLoadRouters() {
        // let temp = require('@src/app/api/v1/test.ts')
        // console.log(temp);
        // InitManager.app.use(temp.routes())
        console.log(`${process.cwd()}/dist/src/app/api`);
        requireDirectory(module, `${process.cwd()}/dist/app/api`, {
            // @ts-ignore
            visit: obj => obj instanceof Router && InitManager.app.use(obj.routes())
        });
    }
}
module.exports = InitManager;
//# sourceMappingURL=init.js.map