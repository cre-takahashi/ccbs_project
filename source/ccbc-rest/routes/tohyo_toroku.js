const request = require('superagent')
const express = require('express')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
  'postgres://postgres:pgadmin@localhost:5432/postgres',
  {
    dialect: 'postgres',
    operatorsAliases: false
  }
)
const router = express.Router()
const async = require('async')

const db = require('./common/pg_helper.js')

const query = (sql, params, res) => {
  db.query(sql, params, (err, datas) => {
    if (err) {
      console.log(`failed...${err}`)
      res.status(400).send(`エラーが発生しました<br />${err}`)
      return
    }
    console.log('success!!')
    console.log(datas)
    res.json({ status: true, data: datas })
  })
}

router.get('/find', (req, res) => {
  sequelize.query('select * from test').spread((datas, metadata) => {
    console.log(datas)
    res.json({ status: true, data: datas })
  })
})

router.post('/findA', (req, res) => {
  // プルダウン用のマスタ読み込み
  request.post('http://localhost:3002/bc-api/add_account').end((err, res) => {
    console.log('★★★')
    if (err) {
      console.log('★' + err)
      return
    }
    // 検索結果表示
    console.log('★★★' + res)
  })

  console.log('OK')
  console.log(req.params)

  sequelize
    .transaction(async function(tx) {
      await sequelize
        .query('select * from test', { transaction: tx })
        .spread((datas, metadata) => {
          console.log(datas)
          res.json({ status: true, data: datas })
        })
      // このあとにawait sequelizeXXXXを記載することで連続して処理をかける
    })
    .then(result => {
      // コミットしたらこっち
      console.log('正常')
    })
    .catch(() => {
      // ロールバックしたらこっち
      console.log('異常')
    })
})

module.exports = router
