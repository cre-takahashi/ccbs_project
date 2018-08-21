const Sequelize = require('sequelize')

exports.sequelize = new Sequelize(
  'postgres://postgres:pgadmin@localhost:5432/postgres',
  // 'postgres://vagrant:vagrant@192.168.0.62:5432/mvpsys',
  {
    dialect: 'postgres',
    operatorsAliases: false
  }
)
