import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FileUpload from '@material-ui/icons/FileUpload'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircle from '@material-ui/icons/AccountCircle'
import VpnKey from '@material-ui/icons/VpnKey'
import request from 'superagent'

import SampleForm from './sample'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit,
    marginLeft: 100
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  table: {
    minWidth: 0
  }
})

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
]

class TextFields extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      passwordInput: '',
      bc_account: '',
      image_file_nm: '',
      shimei: '',
      kengen_cd: ''
    }
  }

  /** コンポーネントのマウント時処理 */
  componentWillMount() {
    // ログイン画面遷移時にlocalSttorageをクリアする
    sessionStorage.clear()
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleClick = event => {
    // ユーザIDからDBを検索して、社員情報を取得
    request
      .post('/login/find')
      .send(this.state)
      .end((err, res) => {
        if (err) {
          return
        }
        if (res.body.status) {
          window.location.href = '/menu'
        } else {
          this.setState({
            msg: 'ユーザ名またはパスワードを確認してください'
          })
          return
        }

        // 結果が取得できない場合は終了
        if (typeof res.body.data === 'undefined') {
          return
        }
        var resList = res.body.data[0]

        // alert(resList.user_id)
        // alert(resList.bc_account)
        // alert(resList.image_file_nm)
        // alert(resList.shimei)
        // alert(resList.kengen_cd)

        // // 取得結果設定
        this.setState({ id: resList.user_id })
        this.setState({ bc_account: resList.bc_account })
        this.setState({ image_file_nm: resList.image_file_nm })
        this.setState({ shimei: resList.shimei })
        this.setState({ kengen_cd: resList.kengen_cd })
        this.setState({ password: this.state.passwordInput })

        // TODO ここでサーバ（BC）へリクエストを送ってログイン情報を取得し、セッションストレージに格納して持ち回る
        var loginInfo = [
          {
            userid: resList.bc_account, // ここはログイン画面で入力された値を設定
            password: this.state.passwordInput, // ここはログイン画面で入力された値を設定
            tShainPk: resList.t_shain_pk, // ここはDBから読み込んだ値を設定
            imageFileName: resList.image_file_nm, // ここはDBから読み込んだ値を設定
            shimei: resList.shimei, // ここはDBから読み込んだ値を設定
            kengenCd: resList.kengen_cd // ここはDBから読み込んだ値を設定
          }
        ]
        // alert(loginInfo.userid)
        // alert(loginInfo.password)
        // alert(loginInfo.tShainPk)
        // alert(loginInfo.imageFileName)
        // alert(loginInfo.shimei)
        // alert(loginInfo.kengenCd)

        sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo))
        sessionStorage.setItem('sessionId', true)

        var loginInfo2 = JSON.parse(sessionStorage.getItem('loginInfo'))

        // alert(loginInfo2.userid)
        // alert(loginInfo2.password)
        // alert(loginInfo2.tShainPk)
        // alert(loginInfo2.imageFileName)
        // alert(loginInfo2.shimei)
        // alert(loginInfo2.kengenCd)
      })
  }

  render() {
    const { classes } = this.props
    const MyLink = props => <Link to="/menu" {...props} />

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <div
          style={{
            width: '100vw',
            height: 'auto',
            minHeight: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: 'url(/images/title.jpg)',

            display: '-webkit-box',
            display: '-ms-flexbox',
            display: 'flex',

            /* 左右中央寄せ */
            webkitBoxPack: 'center',
            msFlexPack: 'center',
            justifyContent: 'center',

            /* 上下中央寄せ */
            webkitBoxAlign: 'center',
            msFlexAlign: 'center',
            alignItems: 'center'
          }}
        >
          <table>
            <tr>
              <td colspan="3">
                <Typography
                  variant="headline"
                  style={{
                    color: 'white',
                    fontSize: 'xx-large',
                    fontWeight: 'bold'
                  }}
                  align="center"
                >
                  MVP Vote System
                </Typography>
              </td>
            </tr>
            <p
              style={{
                background: 'white'
              }}
            >
              <tr>
                <td>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                </td>
                <td>
                  <Typography variant="headline" align="center">
                    Log In
                  </Typography>
                </td>
                <td>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <TextField
                    id="id"
                    label="ID"
                    className={classes.textField}
                    onChange={this.handleChange('id')}
                    fullWidth
                    value={this.state.id}
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      )
                    }}
                  />
                </td>
                <td />
              </tr>
              <tr>
                <td />
                <td>
                  <TextField
                    id="passwordInput"
                    label="Password"
                    className={classes.textField}
                    onChange={this.handleChange('passwordInput')}
                    type="password"
                    autoComplete="current-password"
                    fullWidth
                    value={this.state.passwordInput}
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <VpnKey />
                        </InputAdornment>
                      )
                    }}
                  />
                </td>
                <td />
              </tr>
              <tr>
                <td />
                <td>
                  <Button
                    variant="raised"
                    color="default"
                    onClick={this.handleClick}
                    fullWidth="true"
                  >
                    login
                    <FileUpload className={classes.rightIcon} />
                  </Button>
                  <Typography
                    component="p"
                    style={{
                      color: 'red'
                    }}
                  >
                    {this.state.msg}
                  </Typography>
                </td>
                <td />
              </tr>
              <tr>
                <td />
                <td colspan="2">
                  <br />
                  <br />
                  <Typography component="p" align="right">
                    <a href="/sample">
                      ※画面モックサンプルメニューへ遷移（実装用）
                    </a>
                  </Typography>
                  <Typography component="p" align="right">
                    ※ID、パスワード紛失時は管理者に連絡して下さい
                  </Typography>
                </td>
              </tr>
            </p>
            <tr>
              <td colspan="3">
                <Typography
                  component="p"
                  align="right"
                  style={{
                    color: 'white'
                  }}
                >
                  Copyright © 2018 Creative Consultant
                </Typography>
              </td>
            </tr>
          </table>
        </div>
      </form>
    )
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TextFields)
