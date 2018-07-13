const request = require('superagent')
const express = require('express')
const router = express.Router()
const async = require('async')
const db = require('./common/sequelize_helper.js').sequelize
const bcdomain = require('./common/constans.js').bcdomain

/**
 * コメント_DB読み込み（初期表示時）
 */
router.post('/find', async (req, res) => {
  var datas = null
  console.log('◯◯◯◯◯◯')
  console.log(req.body.tTohyoPk)
  console.log(req.body.tZoyoPk)
  console.log(req.body.title)
  console.log(req.body.shimei)
  console.log(req.body.coin)
  if (req.body.tTohyoPk != null) {
    datas = await selectTohyo(req)
  } else {
    datas = await selectZoyo(req)
  }
  res.json({ status: true, data: datas })
})

function selectTohyo(req) {
  return new Promise((resolve, reject) => {
    var sql =
      "select hyoka1, hyoka2, hyoka3, hyoka4, hyoka5, hyoka_comment from t_tohyo where t_tohyo_pk = ? and delete_flg = '0'"
    db
      .query(sql, {
        replacements: [req.body.tTohyoPk]
      })
      .spread((datas, metadata) => {
        console.log(datas)
        return resolve(datas)
      })
  })
}

function selectZoyo(req) {
  return new Promise((resolve, reject) => {
    var sql =
      "select zoyo_comment from t_zoyo where t_zoyo_pk = ? and delete_flg = '0'"
    db
      .query(sql, {
        replacements: [req.body.tZoyoPk]
      })
      .spread((datas, metadata) => {
        console.log(datas)
        return resolve(datas)
      })
  })
}

module.exports = router
