/**
 * ブロックチェーンAPI
 */
var request = require('superagent')
var express = require('express')
var router = express.Router()

/**
 * ユーザ登録（BCへのアカウント登録）
 */
router.post('/add_account', function (req, res, err) {
  var methodNm = "★add_account"
  console.log(methodNm + ":param:" + JSON.stringify(req.body))
  var password = req.body.password

  request
    .post("http://localhost:8545")
    .send({ "jsonrpc":"2.0", "method":"personal_newAccount", "params":[password], "id":"hoge" })
    .end((err, bc_res) => {
      if (err) {
        console.log(methodNm + ":err:" + err)
        return
      }
      console.log(methodNm + ":success:")
      console.log(JSON.stringify(bc_res))
      // 結果をJSON形式で返却（[body.result]にBCアカウントが設定される）
      res.json({ bc_account: bc_res.body.result })
    })
})

/**
 * ログイン（BCへの認証）
 */
router.post('/login', function (req, res, err) {
  var methodNm = "★login"
  console.log(methodNm + ":param:" + JSON.stringify(req.body))
  var account = req.body.account
  var password = req.body.password

  request
    .post("http://localhost:8545")
    .send({ "jsonrpc":"2.0", "method":"personal_unlockAccount", "params":[account, password], "id":"hoge" })
    .end((err, bc_res) => {
      if (err) {
        console.log(methodNm + ":err:" + err)
        return
      }
      console.log(methodNm + ":success:")
      console.log(JSON.stringify(bc_res))
      // 結果の判定（[body.result]がtrueの場合はアカウントとパスワードが合致し、unlock成功）
      var loginSuccess = false
      if (bc_res.body.result == true) {
        loginSuccess = true
      }
      // 結果をJSON形式で返却
      res.json({ result: loginSuccess })
    })
})

/**
 * コイン送金
 */
router.post('/send_coin', function (req, res, err) {
  var methodNm = "★send_coin"
  console.log(methodNm + ":param:" + JSON.stringify(req.body))
  var fromAccount = req.body.from_account
  var toAccount = req.body.to_account
  var password = req.body.password
  var coin = req.body.coin

  request
    .post("http://localhost:8545")
    .send({ "jsonrpc":"2.0", "method":"personal_unlockAccount", "params":[fromAccount, password], "id":"hoge" })
    .end((err, bc_res) => {
      if (err) {
        console.log(methodNm + "_unlock:err:" + err)
        return
      }
      console.log(methodNm + "_unlock:success:")
      console.log(JSON.stringify(bc_res))
      // 結果の判定（[body.result]がtrueの場合はアカウントとパスワードが合致し、unlock成功）
      var loginSuccess = false
      if (bc_res.body.result == true) {
        request
        .post("http://localhost:8545")
        .send({ "jsonrpc":"2.0", "method":"xxxxxxxx", "params":[fromAccount, toAccount, coin], "id":"hoge" })
        .end((err, bc_res) => {
          if (err) {
            console.log(methodNm + "_send:err:" + err)
            return
          }
          console.log(methodNm + "_send:success:")
          console.log(JSON.stringify(bc_res))

          // 結果をJSON形式で返却
          res.json({ transaction: "loginSuccess" })
        })
      }
    })
})

module.exports = router
