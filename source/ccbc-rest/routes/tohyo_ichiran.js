const express = require('express')

const router = express.Router()

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

router.get('/find', async (req, res) => {
  console.log('OK')
  console.log('req.params:' + req.params)
  console.log('req.body.Target_year:' + req.body.Target_year)
  const params = []
  const sql =
    "select t_senkyo_pk, senkyo_nm, tohyo_kaishi_dt, tohyo_shuryo_dt, haifu_coin from t_senkyo where delete_flg = '0' order by tohyo_kaishi_dt desc"
  query(sql, params, res)
})

router.post('/find', (req, res) => {
  console.log('---- POST ----')
  console.log('OK')
  console.log('req.body.targetYear:' + req.body.targetYear)
  const params = []
  const sql =
    "select t_senkyo_pk, senkyo_nm, tohyo_kaishi_dt, tohyo_shuryo_dt, haifu_coin from t_senkyo where delete_flg = '0' and tohyo_kaishi_dt between '" +
    req.body.targetYear +
    "0401' and '" +
    (req.body.targetYear + 1) +
    "0331'"
  query(sql, params, res)
})

module.exports = router
