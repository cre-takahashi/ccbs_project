import React from 'react'
import request from 'superagent'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import ButtonBase from '@material-ui/core/ButtonBase'
import {
  mailFolderListItems,
  otherMailFolderListItems,
  kanriListItems,
  ippanListItems,
  kojiListItems,
  systemName,
  restUrl
} from './tileData'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import Avatar from '@material-ui/core/Avatar'
import Save from '@material-ui/icons/Save'
import Menu from '@material-ui/core/Menu'

import Chip from '@material-ui/core/Chip'
import { Manager, Target, Popper } from 'react-popper'
import Grow from '@material-ui/core/Grow'
import MenuList from '@material-ui/core/MenuList'
import Collapse from '@material-ui/core/Collapse'
import Portal from '@material-ui/core/Portal'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Search from '@material-ui/icons/Search'
import Edit from '@material-ui/icons/Edit'
import Web from '@material-ui/icons/Web'
import AddAPhoto from '@material-ui/icons/AddAPhoto'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const restdomain = require('../common/constans.js').restdomain

var createObjectURL =
  (window.URL || window.webkitURL).createObjectURL || window.createObjectURL

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%'
  },
  buttonFrame: {
    position: 'static',
    marginRight: 24
  },
  buttonFrame2: {
    position: 'static',
    marginRight: 0
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'appBarShift-left': {
    marginLeft: drawerWidth
  },
  'appBarShift-right': {
    marginRight: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  'content-left': {
    marginLeft: -drawerWidth
  },
  'content-right': {
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'contentShift-left': {
    marginLeft: 0
  },
  'contentShift-right': {
    marginRight: 0
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15
      },
      '& $imageMarked': {
        opacity: 0
      },
      '& $imageTitle': {
        border: '4px solid currentColor'
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  },
  card2: {
    display: 'flex'
  },
  details2: {
    display: 'flex',
    flexDirection: 'column'
  },
  details3: {
    display: 'table-cell',
    verticalAlign: 'middle'
  },
  content2: {
    flex: '1 0 auto'
  },
  cover2: {
    width: 151,
    height: 151
  },
  controls2: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  completed: {
    display: 'inline-block'
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  stepSize: {
    width: 20,
    height: 10,
    textAlign: 'left',
    verticalAlign: 'top'
  },
  stepSize2: {
    width: 15,
    height: 5,
    textAlign: 'left',
    verticalAlign: 'top'
  },
  tdSize: {
    textAlign: 'left',
    verticalAlign: 'bottom',
    paddingBottom: '7px'
  },
  input: {
    margin: theme.spacing.unit
  },
  avatarRow: {
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 150,
    height: 150
  },
  headLine: {
    width: 350
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 900
  },
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  button2: { margin: theme.spacing.unit },

  shainImgTable: {
    width: 500
  },
  InputLabel: {
    whiteSpace: 'nowrap'
  },
  select: {
    width: 140
  }
})

const testData = [
  {
    url: '/images/yamashita.png',
    title: '第５回EQトレーニング',
    name: '剛田　武'
  },
  {
    url: '/images/mikami.png',
    title: '△△△案件プロジェクト報告',
    name: '札幌　太郎'
  },
  {
    url: '/images/ishigaki.jpg',
    title: '◯◯◯案件プロジェクト報告',
    name: '江別　野郎'
  }
]

class ShainTorokuForm extends React.Component {
  state = {
    open: false,
    open2: false,
    anchor: 'left',
    completed: {},
    comment: {},
    haifuCoin: 150,
    tohyoCoin: 0,
    resultKengenList: [],
    resultShainData: [],
    userid: null,
    password: null,
    tShainPk: 0,
    imageFileName: null,
    shimei: null,
    kengenCd: null,
    inputTShainPk: 0,
    inputShimeiKana: null,
    inputShimeiKanji: null,
    inputUserId: null,
    inputPassword: null,
    inputPassword2: null,
    inputKengenCd: '0',
    inputImage: null,
    updateFlg: false,
    gazo: [],
    filename: '',
    pShainPk: 0
  }

  constructor(props) {
    super(props)
    this.props = props
  }

  /** コンポーネントのマウント時処理 */
  componentWillMount() {
    var loginInfos = JSON.parse(sessionStorage.getItem('loginInfo'))
    for (var i in loginInfos) {
      var loginInfo = loginInfos[i]
      this.setState({ userid: loginInfo['userid'] })
      this.setState({ password: loginInfo['password'] })
      this.setState({ tShainPk: loginInfo['tShainPk'] })
      this.state.tShainPk = Number(loginInfo['tShainPk'])
      this.setState({ imageFileName: loginInfo['imageFileName'] })
      this.setState({ shimei: loginInfo['shimei'] })
      this.setState({ kengenCd: loginInfo['kengenCd'] })

      // 遷移元画面からの引き渡しパラメータ
      const { shainToroku } = this.props

      this.state.inputTShainPk = Number(shainToroku.pShainPk)

      request
        .post(restdomain + '/shain_toroku/find')
        .send(this.state)
        .end((err, res) => {
          if (err) return
          if (res.body.status) {
            // 検索結果表示
            this.setState({ resultKengenList: res.body.kengenList })
            if (res.body.shainData.length !== 0) {
              this.setState({ inputTShainPk: res.body.shainData[0].t_shain_pk })
              this.setState({
                inputShimeiKana: res.body.shainData[0].shimei_kana
              })
              this.setState({ inputShimeiKanji: res.body.shainData[0].shimei })
              this.setState({ inputUserId: res.body.shainData[0].user_id })
              this.setState({ inputKengenCd: res.body.shainData[0].kengen_cd })
              this.setState({
                inputImage:
                  'http://localhost:3001/uploads/' +
                  res.body.shainData[0].image_file_nm
              })
              this.setState({
                updateFlg: res.body.shainData[0].updateFlg
              })
            }
          }
        })
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  handleLogoutClick = () => {
    // ログアウト時にsessionStorageをクリアする
    sessionStorage.clear()
  }

  handleToggle = () => {
    this.setState({ open2: !this.state.open2 })
  }

  handleToggleClose = event => {
    if (this.target1.contains(event.target)) {
      return
    }

    this.setState({ open2: false })
  }

  handleClickFile = event => {
    document.getElementById('file').onchange
  }

  handleChangeFile = event => {
    // ①イベントからfileの配列を受け取る
    var files = event.target.files

    this.setState({ gazo: files[0] })
    this.setState({ filename: files[0].name })

    // ②createObjectURLで、files[0]を読み込む
    var image_url = createObjectURL(files[0])

    // ③setStateする！
    this.setState({ inputImage: image_url })
  }

  handleClick = event => {
    // 必須チェック（氏名かな）
    if (
      this.state.inputShimeiKana === '' ||
      this.state.inputShimeiKana === null
    ) {
      // checkFlg = true
      this.setState({
        msg: '氏名（かな）は必須入力です。'
      })
      return
    }
    // 必須チェック（氏名漢字）
    if (
      this.state.inputShimeiKanji === '' ||
      this.state.inputShimeiKanji === null
    ) {
      // checkFlg = true
      this.setState({
        msg: '氏名（漢字）は必須入力です。'
      })
      return
    }

    // 必須チェック（新規登録時のみ）
    if (!this.state.updateFlg) {
      // 必須チェック（ユーザID）
      if (this.state.inputUserId === '' || this.state.inputUserId === null) {
        // checkFlg = true
        this.setState({
          msg: 'ユーザIDは必須入力です。'
        })
        return
      } else {
        if (!this.state.inputUserId.match(/^([a-zA-Z0-9]{4,20})$/)) {
          // checkFlg = true
          this.setState({
            msg: 'ユーザIDは半角英数字4～20文字で入力してください。'
          })
          return
        }
      }
      // 必須チェック（パスワード）
      if (
        this.state.inputPassword === '' ||
        this.state.inputPassword === null
      ) {
        // checkFlg = true
        this.setState({
          msg: 'パスワードは必須入力です。'
        })
        return
      } else {
        if (!this.state.inputPassword.match(/^([a-zA-Z0-9]{8,20})$/)) {
          // checkFlg = true
          this.setState({
            msg: 'パスワードは半角英数字8～20文字で入力してください。'
          })
          return
        }
      }
      // 必須チェック（パスワード（再入力用））
      if (
        this.state.inputPassword2 === '' ||
        this.state.inputPassword2 === null
      ) {
        // checkFlg = true
        this.setState({
          msg: 'パスワード（再入力）は必須入力です。'
        })
        return
      } else {
        if (!this.state.inputPassword2.match(/^([a-zA-Z0-9]{8,20})$/)) {
          // checkFlg = true
          this.setState({
            msg: 'パスワード（再入力）は半角英数字8～20文字で入力してください。'
          })
          return
        }
      }

      // パスワードとパスワード（再入力用）の一致チェック
      if (this.state.inputPassword !== this.state.inputPassword2) {
        // checkFlg = true
        this.setState({
          msg: 'パスワードとパスワード（再入力用）が不一致です。'
        })
        return
      }
    }

    // 必須チェック（権限コード）
    if (this.state.inputKengenCd === 0) {
      this.setState({
        msg: '権限コードは必須入力です。'
      })
      return
    }
    // 必須チェック（社員画像）
    if (this.state.inputImage === '' || this.state.inputImage === null) {
      this.setState({
        msg: '顔写真は必須入力です。'
      })
      return
    }

    if (window.confirm('入力情報を登録しますか？')) {
      var form = new FormData()
      form.append('image', this.state.gazo)
      form.append('inputTShainPk', this.state.inputTShainPk)
      form.append('inputUserId', this.state.inputUserId)
      form.append('inputPassword', this.state.inputPassword)
      form.append('inputShimeiKanji', this.state.inputShimeiKanji)
      form.append('inputImage', this.state.inputImage)
      form.append('inputKengenCd', this.state.inputKengenCd)
      form.append('userid', this.state.userid)
      form.append('inputShimeiKana', this.state.inputShimeiKana)
      form.append('updateFlg', this.state.updateFlg)

      request
        .post(restdomain + '/shain_toroku/create')
        .send(form)
        //.send(form)
        .end((err, res) => {
          if (err) {
            return
          }
          if (res.body.status) {
            this.props.history.push('/shain_kensaku')
          } else {
            this.setState({
              msg: '入力したユーザIDは既に登録済みです。'
            })
            return
          }
        })
    } else {
      return
    }
  }

  render() {
    const { classes, theme } = this.props
    const { anchor, open, open2 } = this.state
    const loginLink = props => <Link to="../" {...props} />

    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>{ippanListItems}</List>
        <Divider />
        <List>{kanriListItems}</List>
      </Drawer>
    )

    let before = null
    let after = null

    if (anchor === 'left') {
      before = drawer
    } else {
      after = drawer
    }

    const MyLink = props => <Link to="/sample" {...props} />

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-${anchor}`]]: open
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <div className={classes.appFrame}>
                <Typography variant="title" color="inherit" noWrap>
                  {systemName}
                </Typography>
              </div>
              <Manager>
                <Target>
                  <div
                    ref={node => {
                      this.target1 = node
                    }}
                  >
                    <Chip
                      avatar={
                        <Avatar
                          src={restUrl + `uploads/${this.state.imageFileName}`}
                        />
                      }
                      label={this.state.shimei}
                      className={classes.chip}
                      aria-label="More"
                      aria-haspopup="true"
                      onClick={this.handleToggle}
                      className={classNames(
                        !open && classes.buttonFrame,
                        open && classes.buttonFrame2
                      )}
                      style={{ fontSize: '100%' }}
                    />
                  </div>
                </Target>
                <Popper
                  placement="bottom-start"
                  eventsEnabled={open2}
                  className={classNames({ [classes.popperClose]: !open2 })}
                >
                  <Grow
                    in={open2}
                    id="menu-list-grow"
                    style={{ transformOrigin: '0 0 0' }}
                  >
                    <Paper>
                      <MenuList role="menu">
                        <MenuItem
                          id="logout"
                          onClick={this.handleLogoutClick}
                          component={loginLink}
                        >
                          Logout
                        </MenuItem>
                      </MenuList>
                    </Paper>
                  </Grow>
                </Popper>
              </Manager>
            </Toolbar>
          </AppBar>
          {before}
          <main
            className={classNames(
              classes.content,
              classes[`content-${anchor}`],
              {
                [classes.contentShift]: open,
                [classes[`contentShift-${anchor}`]]: open
              }
            )}
          >
            <div className={classes.drawerHeader} />
            <h2>
              <img
                src="/images/yajirushi.png"
                alt="サンプル"
                align="bottom"
                width="30"
                height="20"
              />
              <strong>社員情報</strong>
            </h2>
            <Typography
              component="p"
              style={{
                color: 'red'
              }}
            >
              {this.state.msg}
            </Typography>
            <Table className={classes.shainImgTable}>
              <TableRow>
                <CustomTableCell>顔写真</CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell rowSpan={2}>
                  <div align="center">
                    <img src={this.state.inputImage} />
                  </div>
                </CustomTableCell>
                <CustomTableCell style={{ border: 'none' }}>
                  <input
                    id="contained-button-file"
                    multiple
                    type="file"
                    ref="file"
                    style={{ display: 'none' }}
                    onChange={this.handleChangeFile}
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      className={classes.button}
                      variant="raised"
                      size="large"
                      component="span"
                    >
                      <AddAPhoto
                        className={classNames(
                          classes.leftIcon,
                          classes.iconSmall
                        )}
                      />
                      select photo
                    </Button>
                  </label>
                </CustomTableCell>
              </TableRow>
            </Table>
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableRow>
                  <CustomTableCell style={{ width: '20%' }}>
                    氏名（かな）
                  </CustomTableCell>
                  <CustomTableCell>
                    <form className={classes.root} autoComplete="off">
                      <TextField
                        id="inputShimeiKana"
                        label="氏名（かな）"
                        InputLabelProps={{
                          shrink: true
                        }}
                        placeholder="氏名（かな）を入力"
                        className={classes.textField}
                        value={this.state.inputShimeiKana}
                        onChange={this.handleChange('inputShimeiKana')}
                        margin="normal"
                      />
                    </form>
                  </CustomTableCell>
                </TableRow>
                <TableRow>
                  <CustomTableCell style={{ width: '20%' }}>
                    氏名（漢字）
                  </CustomTableCell>
                  <CustomTableCell>
                    <form className={classes.root} autoComplete="off">
                      <TextField
                        id="inputShimeiKanji"
                        label="氏名（漢字）"
                        InputLabelProps={{
                          shrink: true
                        }}
                        placeholder="氏名（漢字）を入力"
                        className={classes.textField}
                        value={this.state.inputShimeiKanji}
                        onChange={this.handleChange('inputShimeiKanji')}
                        margin="normal"
                      />
                    </form>
                  </CustomTableCell>
                </TableRow>
                <TableRow>
                  <CustomTableCell>ユーザID</CustomTableCell>
                  <CustomTableCell>
                    <form className={classes.root} autoComplete="off">
                      <TextField
                        id="inputUserId"
                        label="ユーザID"
                        InputLabelProps={{
                          shrink: true
                        }}
                        placeholder="ユーザIDを入力"
                        className={classes.textField}
                        value={this.state.inputUserId}
                        onChange={this.handleChange('inputUserId')}
                        margin="normal"
                        disabled={this.state.updateFlg}
                      />
                    </form>
                  </CustomTableCell>
                </TableRow>
                <TableRow>
                  <CustomTableCell>パスワード</CustomTableCell>
                  <CustomTableCell>
                    <form className={classes.root} autoComplete="off">
                      <TextField
                        id="inputPassword"
                        type="password"
                        label="パスワード"
                        InputLabelProps={{
                          shrink: true
                        }}
                        placeholder="パスワードを入力"
                        className={classes.textField}
                        value={this.state.inputPassword}
                        onChange={this.handleChange('inputPassword')}
                        margin="normal"
                        disabled={this.state.updateFlg}
                      />
                    </form>
                  </CustomTableCell>
                </TableRow>
                <TableRow>
                  <CustomTableCell>パスワード（再入力）</CustomTableCell>
                  <CustomTableCell>
                    <form className={classes.root} autoComplete="off">
                      <TextField
                        id="inputPassword2"
                        type="password"
                        label="パスワード（再入力）"
                        InputLabelProps={{
                          shrink: true
                        }}
                        placeholder="パスワード（再入力）を入力"
                        className={classes.textField}
                        value={this.state.inputPassword2}
                        onChange={this.handleChange('inputPassword2')}
                        margin="normal"
                        disabled={this.state.updateFlg}
                      />
                    </form>
                  </CustomTableCell>
                </TableRow>
                <TableRow>
                  <CustomTableCell>権限</CustomTableCell>
                  <CustomTableCell>
                    <form className={classes.root} autoComplete="off">
                      <FormControl className={classes.formControl}>
                        <InputLabel
                          htmlFor="kengen-simple"
                          className={classes.InputLabel}
                        >
                          権限
                        </InputLabel>
                        <Select
                          id="inputKengenCd"
                          InputLabelProps={{
                            shrink: true
                          }}
                          value={this.state.inputKengenCd}
                          onChange={this.handleChange('inputKengenCd')}
                          inputProps={{
                            name: 'kengen',
                            id: 'inputKengenCd'
                          }}
                          className={classes.select}
                        >
                          {this.state.resultKengenList.map(n => {
                            return (
                              <MenuItem value={n.kengen_cd}>
                                {n.kengen_nm}
                              </MenuItem>
                            )
                          })}
                        </Select>
                      </FormControl>
                    </form>
                  </CustomTableCell>
                </TableRow>
              </Table>
            </Paper>
            <Button
              className={classes.button}
              variant="raised"
              size="large"
              onClick={this.handleClick.bind(this)}
            >
              <Save
                className={classNames(classes.leftIcon, classes.iconSmall)}
              />
              SAVE
            </Button>
          </main>
          {after}
        </div>
      </div>
    )
  }
}

ShainTorokuForm.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

const mapState = state => ({
  shainToroku: state.shainToroku
})

export default withStyles(styles, { withTheme: true })(
  connect(mapState)(ShainTorokuForm)
)
