const request = require('superagent')
const express = require('express')
const router = express.Router()
const async = require('async')
const db = require('./common/sequelize_helper.js').sequelize
const bcdomain = require('./common/constans.js').bcdomain

router.post('/find', (req, res) => {
  console.log('OK')
  console.log(req.params)
  const params = []
  var sql =
    'select row_number() over () as id, *, tsha.t_shain_pk as t_shain_pk, tsha.shimei as shimei, tsha.image_file_nm as image_file_nm, tsha.bc_account as bc_account' +
    ' from t_shain tsha ' +
    " where tsha.delete_flg = '0'"
  db.query(sql).spread((datas, metadata) => {
    console.log('★★★')
    console.log(datas)
    res.json({ status: true, data: datas })
  })
})

router.post('/create', (req, res) => {
  console.log('◆◆◆')
  console.log(req.body.election)
  var resultList = req.body.resultList
  console.log(resultList)

  var sql =
    'insert into t_senkyo (senkyo_nm, tohyo_kaishi_dt, tohyo_shuryo_dt, haifu_coin, delete_flg, insert_user_id, insert_tm) ' +
    'VALUES (?, ?, ?, ?, ?, ?, ?) '
  db
    .transaction(async function(tx) {
      var resdatas = []
      // for (var i in resultList) {
      // var resdata = resultList[i]
      await db
        .query(sql, {
          transaction: tx,
          replacements: [
            req.body.election,
            req.body.startDate,
            req.body.endDate,
            req.body.coin,
            '0',
            null,
            null
          ]
        })
        .spread((datas, metadata) => {
          console.log(datas)
          resdatas.push(datas)
        })
      //}
      res.json({ status: true, data: resdatas })

      // このあとにawait sequelizeXXXXを記載することで連続して処理をかける
    })
    .then(result => {
      // コミットしたらこっち
      console.log('正常')
    })
    .catch(e => {
      // ロールバックしたらこっち
      console.log('異常')
      console.log(e)
    })
})

module.exports = router
