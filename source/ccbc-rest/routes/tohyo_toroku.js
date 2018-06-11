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

router.post('/find', (req, res) => {
  var sql =
    'select tsen.t_senkyo_pk as t_senkyo_pk, tsen.senkyo_nm as senkyo_nm, tsen.tohyo_kaishi_dt as tohyo_kaishi_dt,' +
    ' tsen.tohyo_shuryo_dt as tohyo_shuryo_dt, tsen.haifu_coin as haifu_coin,' +
    ' tpre.title as title, tsha.t_shain_pk as t_shain_pk, tsha.shimei as shimei, tsha.image_file_nm as image_file_nm, tsha.bc_account as bc_account' +
    ' from t_senkyo tsen' +
    ' inner join t_presenter tpre on tsen.t_senkyo_pk = tpre.t_senkyo_pk' +
    ' inner join t_shain tsha on tpre.t_shain_pk = tsha.t_shain_pk' +
    " where tsen.delete_flg = '0'  and tpre.delete_flg = '0' and tsha.delete_flg = '0'" +
    ' and 1 = (select count(1) from t_senkyo tsen2 inner join t_shussekisha tshu2 on tsen2.t_senkyo_pk = tshu2.t_senkyo_pk' +
    " where tsen2.delete_flg = '0' and tshu2.delete_flg = '0' and tshu2.t_shain_pk = :mypk)" +
    ' and tsen.tohyo_kaishi_dt <= current_date and current_date <= tsen.tohyo_shuryo_dt and tpre.t_shain_pk <> :mypk'
  sequelize
    .query(sql, {
      replacements: { mypk: req.body.tShainPk },
      type: sequelize.QueryTypes.RAW
    })
    .spread((datas, metadata) => {
      console.log('★★★')
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
