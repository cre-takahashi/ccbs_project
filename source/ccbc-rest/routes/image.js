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

router.post('/update', function(req, res) {
  console.log(req.body)
  var sql = 'update test set' + ' face_image = $2' + ' where id = $1'
  query(sql, [req.body.id, req.body.gazo], res)
})

router.get('/find', (req, res) => {
  console.log('OK')
  console.log(req.body)
  const params = []
  const sql = 'select face_image from test where id = 1'
  query(sql, params, res)
})

module.exports = router
