const Sequelize = require('sequelize')
const { dbName, user, password, host, port } = global.config
const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  host,
  port,
  logging: true, //显示操作
  timezone: '+08:00',
  define: {
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true
  }
})

//连接测试
sequelize.authenticate()
  .then(() => {
    console.log("-------- mysql连接成功 --------");
  })
  .catch(err => {
    throw new Error('数据库连接失败:' + err)
  })

// sequelize.sync({
//   force: true
// })

module.exports = {
  sequelize
}