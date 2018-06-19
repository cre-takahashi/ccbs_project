/**
 * ブロックチェーンAPIスタブ
 */
var request = require("superagent");
var express = require("express");
var router = express.Router();

/**
 * ユーザ登録（BCへのアカウント登録）
 */
router.post("/add_account", function(req, res, err) {
  console.log("★add_account:param:" + JSON.stringify(req.body));
  res.json({ bc_account: "0xtest000000000000000000000000000000000000" });
});

/**
 * ログイン（BCへの認証）
 */
router.post("/login", function(req, res, err) {
  console.log("★login:param:" + JSON.stringify(req.body));
  res.json({ result: true });
});

/**
 * コイン送金
 */
router.post("/send_coin", function(req, res, err) {
  console.log("send_coin:param:" + JSON.stringify(req.body));
  var fromAccount = req.body.from_account;
  var toAccount = req.body.to_account;
  var password = req.body.password;
  var coin = req.body.coin;
  res.json({ transaction: "test_transaction" });
});

module.exports = router;
