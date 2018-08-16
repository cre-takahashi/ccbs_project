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
import Send from '@material-ui/icons/Send'
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

import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Checkbox from '@material-ui/core/Checkbox'

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
  addToPaper: {
    marginTop: 10,
    marginLeft: 650,
    fontSize: 18
  },
  InputLabel: {
    whiteSpace: 'nowrap'
  },
  select: {
    width: 140
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  coinInfoTable: {
    width: 500
  }
})

class CoinZoyoForm extends React.Component {
  state = {
    open: false,
    open2: false,
    anchor: 'left',
    completed: {},
    resultList: [],
    userid: null,
    password: null,
    tShainPk: 0,
    imageFileName: null,
    shimei: null,
    kengenCd: null,
    target_manager: 0,
    comment: '',
    checked: false,
    zoyoCoin: 0,
    from_bcaccount: '',
    to_bcaccount: '',
    to_tShainPk: '',
    nenjiFlg: '0'
  }

  constructor(props) {
    super(props)
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
    }

    request
      .post('/coin_zoyo/find')
      .send(this.state)
      .end((err, res) => {
        if (err) {
          alert(err)
          return
        }
        var resList = res.body.data
        var bccoin = String(res.body.bccoin)
        // 検索結果表示
        this.setState({ resultList: resList })
        this.setState({ bccoin: bccoin })
        this.setState({ shimei: res.body.shimei })
        this.setState({ from_bcaccount: res.body.from_bcaccount })
      })
  }

  selectChange = event => {
    var checked = this.state.checked
    // 初期表示はFalse
    if (checked) {
      this.setState({ checked: false })
      this.setState({ zoyoCoin: 0 })
      this.setState({ comment: '' })
      this.setState({ nenjiFlg: '0' })
    } else {
      this.setState({ checked: true })
      this.setState({ zoyoCoin: this.state.bccoin })
      this.setState({ comment: '年度末コイン返却' })
      this.setState({ nenjiFlg: '1' })
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleChange2 = event => {
    var zIndex = event.target.value
    this.setState({ target_manager: zIndex })
    zIndex = zIndex - 1
    var resultList = this.state.resultList
    this.setState({ to_bcaccount: resultList[zIndex].bc_account })
    this.setState({ to_tShainPk: resultList[zIndex].t_shain_pk })
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
  handleSubmit() {
    if (window.confirm('入力情報を登録しますか？')) {
      request
        .post('/coin_zoyo/create')
        .send(this.state)
        .end((err, res) => {
          if (err) {
            return
          }
        })
      this.props.history.push('/menu') //これで遷移させる
    } else {
      return
    }
  }
  render() {
    const { classes, theme } = this.props
    const { anchor, open, open2 } = this.state
    const loginLink = props => <Link to="../" {...props} />
    const MenuLink = props => <Link to="/menu" {...props} />

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
    if (this.state.checked == false) {
      var zoyoCoinField = (
        <form className={classes.root} autoComplete="off">
          <TextField
            id="number"
            label="贈与コイン数"
            value={this.state.zoyoCoin}
            onChange={this.handleChange('zoyoCoin')}
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
        </form>
      )
      var commentField = (
        <form className={classes.root} autoComplete="off">
          <TextField
            id="comment"
            label="コメント"
            multiline
            rows="12"
            rowsMax="12"
            value={this.state.comment}
            onChange={this.handleChange('comment')}
            className={classes.textField}
            margin="normal"
            style={{ fontSize: '120%' }}
          />
        </form>
      )
    } else {
      var zoyoCoinField = (
        <form className={classes.root} autoComplete="off">
          <TextField
            id="number"
            label="贈与コイン数"
            value={this.state.zoyoCoin}
            onChange={this.handleChange('zoyoCoin')}
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            disabled
          />
        </form>
      )
      var commentField = (
        <form className={classes.root} autoComplete="off">
          <TextField
            id="comment"
            label="コメント"
            multiline
            rows="12"
            rowsMax="12"
            value={this.state.comment}
            onChange={this.handleChange('comment')}
            className={classes.textField}
            margin="normal"
            style={{ fontSize: '120%' }}
            disabled
          />
        </form>
      )
    }

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
            <div>
              <Paper className={classes.coinInfo}>
                <Typography variant="headline" component="h3">
                  {this.state.shimei}　の所持コイン数
                </Typography>
                <Typography variant="headline" component="h3">
                  {this.state.bccoin} コイン
                </Typography>
              </Paper>
            </div>
            <h2>
              <img
                src="/images/yajirushi.png"
                alt="サンプル"
                align="bottom"
                width="30"
                height="20"
              />
              <strong>個別贈与情報</strong>
            </h2>
            <Table className={classes.coinInfoTable}>
              <TableRow>
                <th style={{ textAlign: 'left' }}>
                  <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                      <InputLabel
                        htmlFor="Target_manager"
                        className={classes.InputLabel}
                      >
                        贈与相手
                      </InputLabel>
                      <Select
                        value={this.state.target_manager}
                        onChange={this.handleChange2}
                        input={
                          <Input name="target_manager" id="Target_Manager" />
                        }
                        className={classes.select}
                      >
                        {this.state.resultList.map(n => {
                          return <MenuItem value={n.id}>{n.shimei}</MenuItem>
                        })}
                      </Select>
                    </FormControl>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="default"
                          value={this.state.checked}
                          onClick={event => this.selectChange(event)}
                        />
                      }
                      label="年度末処理"
                    />
                  </form>
                </th>
              </TableRow>
              <TableRow>
                <th style={{ textAlign: 'left', padding: '10px' }}>
                  <div>{zoyoCoinField}</div>
                </th>
              </TableRow>
              <TableRow>
                <th>
                  <div>{commentField}</div>
                </th>
              </TableRow>
              <TableRow>
                <th style={{ textAlign: 'left', padding: '10px' }}>
                  <Button
                    variant="raised"
                    color="default"
                    size="large"
                    onClick={this.handleSubmit.bind(this)}
                    className={classes.button}
                  >
                    <Send
                      className={classNames(
                        classes.leftIcon,
                        classes.iconSmall
                      )}
                    />
                    COIN SEND
                  </Button>
                </th>
              </TableRow>
            </Table>
          </main>
          {after}
        </div>
      </div>
    )
  }
}

CoinZoyoForm.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(CoinZoyoForm)
