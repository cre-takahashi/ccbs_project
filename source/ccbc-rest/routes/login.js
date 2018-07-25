const request = require('superagent')
const express = require('express')
const router = express.Router()
const async = require('async')
const db = require('./common/sequelize_helper.js').sequelize
const bcdomain = require('./common/constans.js').bcdomain

router.post('/find', (req, res) => {
  console.log('----------')
  console.log('id:' + req.body.id)
  console.log('----------')

  var sql =
    "select t_shain_pk, user_id, shimei, image_file_nm, kengen_cd, bc_account from t_shain where delete_flg = '0' and user_id = :mypk"

  db
    .query(sql, {
      replacements: { mypk: req.body.id },
      type: db.QueryTypes.RAW
    })
    .spread(async (datas, metadata) => {
      console.log('----------')
      console.log(datas)
      console.log('----------')

      // ユーザ情報が取得できない場合は終了
      if (datas == '') {
        res.json({ status: false })
        return
      }

      console.log('----------')
      console.log(datas[0].user_id)
      console.log(datas[0].shimei)
      console.log(datas[0].image_file_nm)
      console.log(datas[0].bc_account)
      console.log('----------')

      var result = await bcrequest(req, datas)

      console.log('----------')
      console.log('result:' + result)
      console.log('----------')

      if (result == true) {
        res.json({ status: true, data: datas })
      } else {
        res.json({ status: false })
      }

      // var param = {
      //   account: datas.bc_account,
      //   password: req.body.passwordInput
      // }

      // BC呼び出し
      // request
      //   .post(bcdomain + '/bc-api/login')
      //   .send(param)
      //   .end((err, res) => {
      //     console.log('◆３')
      //     console.log('★★★')

      //     if (err) {
      //       console.log('★' + err)
      //       return
      //     }
      //     // 検索結果表示
      //     console.log('★★★' + res)
      //     transaction_id = res.body.result
      //   })
    })

  //res.json({ status: true, data: datas })

  // console.log('----------')
  //console.log(res.body.data)
  // console.log('----------')

  // var sql =
  //   "select user_id, shimei, image_file_nm, kengen_cd, bc_account from t_shain where delete_flg = '0' and user_id = ?"
  // db
  //   .query(sql, {
  //     replacements: { mypk: req.body.id },
  //     type: db.QueryTypes.RAW
  //   })
  //   .spread((datas, metadata) => {
  //     console.log('★★★')
  //     console.log(datas)

  //     // 引数設定
  //     req.body.account = datas.bc_account
  //     req.body.password = req.password

  //     // BC呼び出し
  //     request.post(bcdomain + '/bc-api/login').end((err, res) => {
  //       console.log('◆３')
  //       console.log('★★★')

  //       if (err) {
  //         console.log('★' + err)
  //         return
  //       }
  //       // 検索結果表示
  //       console.log('★★★' + res)
  //       transaction_id = res.body.result
  //     })

  //     res.json({ status: true, data: datas })
  //   })
})

/**
 * @param {*} req
 * @param {*} resdata
 */
function bcrequest(req, datas) {
  return new Promise((resolve, reject) => {
    var param = {
      account: datas[0].bc_account,
      password: req.body.passwordInput
    }

    request
      .post(bcdomain + '/bc-api/login')
      .send(param)
      .end((err, res) => {
        console.log('◆３')
        console.log('★★★')

        if (err) {
          console.log('★' + err)
          return
        }
        // 検索結果表示
        console.log('★★★res:' + res)
        return resolve(res.body.result)
      })
  })
}

// router.post('/create', (req, res) => {
//   console.log('◆◆◆')
//   var resultList = req.body.resultList
//   var sql =
//     'insert into t_tohyo (t_presenter_pk, t_shussekisha_pk, hyoka1, hyoka2, hyoka3, hyoka4, hyoka5, hyoka_comment, transaction_id, delete_flg, insert_user_id, insert_tm) ' +
//     'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING t_tohyo_pk'

//   var sql2 = 'update t_tohyo set transaction_id = ? where t_tohyo_pk = ?'

//   db
//     .transaction(async function(tx) {
//       var resdatas = []
//       for (var i in resultList) {
//         var resdata = resultList[i]
//         var t_tohyo_pk = null
//         var transaction_id = null
//         console.log('◆１')
//         await db
//           .query(sql, {
//             transaction: tx,
//             replacements: [
//               resdata.t_presenter_pk,
//               resdata.t_shussekisha_pk,
//               req.body.activeStep1[i] + 1,
//               req.body.activeStep2[i] + 1,
//               req.body.activeStep3[i] + 1,
//               req.body.activeStep4[i] + 1,
//               req.body.activeStep5[i] + 1,
//               req.body.comment[i],
//               null,
//               '0',
//               null,
//               null
//             ]
//           })
//           .spread((datas, metadata) => {
//             console.log('◆２')
//             console.log(datas)
//             resdatas.push(datas)
//             t_tohyo_pk = datas[0].t_tohyo_pk

//             // BC呼び出し
//             request.post(bcdomain + '/bc-api/add_account').end((err, res) => {
//               console.log('◆３')
//               console.log('★★★')
//               if (err) {
//                 console.log('★' + err)
//                 return
//               }
//               // 検索結果表示
//               console.log('★★★' + res)
//               transaction_id = res.body.result
//             })
//           })
//         console.log('◆４')
//         await db
//           .query(sql2, {
//             transaction: tx,
//             replacements: [transaction_id, t_tohyo_pk]
//           })
//           .spread((datas, metadata) => {
//             console.log('◆５')
//             console.log(datas)
//           })
//       }
//       // このあとにawait sequelizeXXXXを記載することで連続して処理をかける

//       res.json({ status: true, data: resdatas })
//     })
//     .then(result => {
//       // コミットしたらこっち
//       console.log('正常')
//     })
//     .catch(e => {
//       // ロールバックしたらこっち
//       console.log('異常')
//       console.log(e)
//     })
// })

// router.post('/findA', (req, res) => {
//   // プルダウン用のマスタ読み込み
//   request.post(bcdomain + '/bc-api/add_account').end((err, res) => {
//     console.log('★★★')
//     if (err) {
//       console.log('★' + err)
//       return
//     }
//     // 検索結果表示
//     console.log('★★★' + res)
//   })

//   console.log('OK')
//   console.log(req.params)

//   db
//     .transaction(async function(tx) {
//       await db
//         .query('select * from test', { transaction: tx })
//         .spread((datas, metadata) => {
//           console.log(datas)
//           res.json({ status: true, data: datas })
//         })
//       // このあとにawait sequelizeXXXXを記載することで連続して処理をかける
//     })
//     .then(result => {
//       // コミットしたらこっち
//       console.log('正常')
//     })
//     .catch(() => {
//       // ロールバックしたらこっち
//       console.log('異常')
//     })
// })

module.exports = router
