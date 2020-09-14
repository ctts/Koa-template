const { sequelize } = require('@/core/db')
const { Sequelize, Model } = require('sequelize')

class Web extends Model {

}

Web.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  webName: Sequelize.STRING,
  bdCloud: Sequelize.STRING
},{
  sequelize,
})

module.exports = Web