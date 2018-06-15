const Sequelize = require('sequelize')

exports.sequelize = new Sequelize(
  'postgres://postgres:pgadmin@localhost:5432/postgres',
  {
    dialect: 'postgres',
    operatorsAliases: false
  }
)
