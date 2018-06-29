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
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'

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
    minWidth: 1850
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
  coinInfo: {
    padding: 20,
    marginTop: 10
  },
  coinInfoTable: {
    width: 500
  },
  addToPaper: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    marginLeft: 1000
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

class CoinShokaiForm extends React.Component {
  state = {
    open: false,
    open2: false,
    anchor: 'left',
    completed: {},
    comment: {},
    haifuCoin: 150,
    tohyoCoin: 0,
    resultList: [],
    userid: null,
    password: null,
    tShainPk: 0,
    imageFileName: null,
    shimei: null,
    kengenCd: null,
    year_info: '',
    target_manager: ''
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
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
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
        <List>{kanriListItems}</List>
        <Divider />
        <List>{ippanListItems}</List>
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
            <div>
              <Paper className={classes.coinInfo}>
                <Table className={classes.coinInfoTable}>
                  <TableRow>
                    <th>
                      <form className={classes.root} autoComplete="off">
                        <FormControl className={classes.formControl}>
                          <InputLabel htmlFor="Target_year">
                            年度情報
                          </InputLabel>
                          <Select
                            value={this.state.year_info}
                            onChange={this.handleChange}
                            input={<Input name="year_info" id="Target_year" />}
                          >
                            <MenuItem value="">
                              <em>指定なし</em>
                            </MenuItem>
                            <MenuItem value={1}>2018年</MenuItem>
                            <MenuItem value={2}>2017年</MenuItem>
                            <MenuItem value={3}>2016年</MenuItem>
                          </Select>
                        </FormControl>
                      </form>
                    </th>
                    <th>
                      <form className={classes.root} autoComplete="off">
                        <FormControl className={classes.formControl}>
                          <InputLabel
                            htmlFor="Target_manager"
                            className={classes.InputLabel}
                          >
                            対象（管理者用）
                          </InputLabel>
                          <Select
                            value={this.state.target_manager}
                            onChange={this.handleChange}
                            input={
                              <Input
                                name="target_manager"
                                id="Target_Manager"
                              />
                            }
                            className={classes.select}
                          >
                            <MenuItem value="">
                              <em>指定なし</em>
                            </MenuItem>
                            <MenuItem value={1}>札幌 太郎</MenuItem>
                            <MenuItem value={2}>中央 花子</MenuItem>
                            <MenuItem value={3}>網走 順子</MenuItem>
                          </Select>
                        </FormControl>
                      </form>
                    </th>
                    <th>
                      <Typography component="p">発表数</Typography>
                      <Typography variant="headline" component="h3">
                        3
                      </Typography>
                    </th>
                  </TableRow>
                </Table>
              </Paper>
              <br />
              <Table className={classes.table}>
                <TableRow>
                  <CustomTableCell>
                    <h2>
                      <img
                        src="/images/yajirushi.png"
                        alt="サンプル"
                        align="top"
                        width="30"
                        height="20"
                      />
                      <strong>受領情報（投票（授与）者→本人）</strong>
                    </h2>
                  </CustomTableCell>
                  <Paper className={classes.addToPaper}>
                    <CustomTableCell>受領コイン計</CustomTableCell>
                    <CustomTableCell>5,000</CustomTableCell>
                  </Paper>
                </TableRow>
              </Table>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <CustomTableCell>日付</CustomTableCell>
                      <CustomTableCell>投票・コイン贈与</CustomTableCell>
                      <CustomTableCell>投票（授与）者</CustomTableCell>
                      <CustomTableCell>受領コイン</CustomTableCell>
                      <CustomTableCell>コメント</CustomTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <CustomTableCell>2018/10/26</CustomTableCell>
                      <CustomTableCell>平成30年度10月部会</CustomTableCell>
                      <CustomTableCell>札幌 花子</CustomTableCell>
                      <CustomTableCell>500</CustomTableCell>
                      <CustomTableCell>
                        <Button
                          variant="raised"
                          color="primary"
                          size="large"
                          className={classes.button}
                        >
                          照会
                        </Button>
                      </CustomTableCell>
                    </TableRow>
                    <TableRow>
                      <CustomTableCell>2018/10/20</CustomTableCell>
                      <CustomTableCell>平成30年度10月部会</CustomTableCell>
                      <CustomTableCell>札幌 三郎</CustomTableCell>
                      <CustomTableCell>300</CustomTableCell>
                      <CustomTableCell>
                        <Button
                          variant="raised"
                          color="primary"
                          size="large"
                          className={classes.button}
                        >
                          照会
                        </Button>
                      </CustomTableCell>
                    </TableRow>
                    <TableRow>
                      <CustomTableCell>2018/10/16</CustomTableCell>
                      <CustomTableCell>平成30年度10月部会</CustomTableCell>
                      <CustomTableCell>苫小牧 次郎</CustomTableCell>
                      <CustomTableCell>200</CustomTableCell>
                      <CustomTableCell>
                        <Button
                          variant="raised"
                          color="primary"
                          size="large"
                          className={classes.button}
                        >
                          照会
                        </Button>
                      </CustomTableCell>
                    </TableRow>
                    <TableRow>
                      <CustomTableCell>2018/07/21</CustomTableCell>
                      <CustomTableCell>平成30年度7月部会</CustomTableCell>
                      <CustomTableCell>札幌 花子</CustomTableCell>
                      <CustomTableCell>1,500</CustomTableCell>
                      <CustomTableCell>
                        <Button
                          variant="raised"
                          color="primary"
                          size="large"
                          className={classes.button}
                        >
                          照会
                        </Button>
                      </CustomTableCell>
                    </TableRow>
                    <TableRow>
                      <CustomTableCell>2018/03/28</CustomTableCell>
                      <CustomTableCell>コイン贈与（受領）</CustomTableCell>
                      <CustomTableCell>札幌 三郎</CustomTableCell>
                      <CustomTableCell>500</CustomTableCell>
                      <CustomTableCell>
                        <Button
                          variant="raised"
                          color="primary"
                          size="large"
                          className={classes.button}
                        >
                          照会
                        </Button>
                      </CustomTableCell>
                    </TableRow>
                    <TableRow>
                      <CustomTableCell>2018/03/20</CustomTableCell>
                      <CustomTableCell>コイン贈与（受領）</CustomTableCell>
                      <CustomTableCell>北海道 四郎</CustomTableCell>
                      <CustomTableCell>2,000</CustomTableCell>
                      <CustomTableCell>
                        <Button
                          variant="raised"
                          color="primary"
                          size="large"
                          className={classes.button}
                        >
                          照会
                        </Button>
                      </CustomTableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
              <br />
              <Table className={classes.table}>
                <TableRow>
                  <CustomTableCell>
                    <h2>
                      <img
                        src="/images/yajirushi.png"
                        alt="サンプル"
                        align="top"
                        width="30"
                        height="20"
                      />
                      <strong>授与情報（本人→投票相手・受領相手）</strong>
                    </h2>
                  </CustomTableCell>
                  <Paper className={classes.addToPaper}>
                    <CustomTableCell>授与コイン計</CustomTableCell>
                    <CustomTableCell>1,500</CustomTableCell>
                  </Paper>
                </TableRow>
              </Table>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <CustomTableCell>日付</CustomTableCell>
                      <CustomTableCell>投票・コイン贈与</CustomTableCell>
                      <CustomTableCell>投票（受領）相手</CustomTableCell>
                      <CustomTableCell>授与コイン</CustomTableCell>
                      <CustomTableCell>コメント</CustomTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <CustomTableCell>2018/10/30</CustomTableCell>
                      <CustomTableCell>平成30年度10月部会</CustomTableCell>
                      <CustomTableCell>札幌 花子</CustomTableCell>
                      <CustomTableCell>500</CustomTableCell>
                      <CustomTableCell>
                        <Button
                          variant="raised"
                          color="primary"
                          size="large"
                          className={classes.button}
                        >
                          照会
                        </Button>
                      </CustomTableCell>
                    </TableRow>
                    <TableRow>
                      <CustomTableCell>2018/10/26</CustomTableCell>
                      <CustomTableCell>平成30年度10月部会</CustomTableCell>
                      <CustomTableCell>札幌 三郎</CustomTableCell>
                      <CustomTableCell>700</CustomTableCell>
                      <CustomTableCell>
                        <Button
                          variant="raised"
                          color="primary"
                          size="large"
                          className={classes.button}
                        >
                          照会
                        </Button>
                      </CustomTableCell>
                    </TableRow>
                    <TableRow>
                      <CustomTableCell>2018/03/31</CustomTableCell>
                      <CustomTableCell>コイン贈与（授与）</CustomTableCell>
                      <CustomTableCell>札幌 四郎</CustomTableCell>
                      <CustomTableCell>300</CustomTableCell>
                      <CustomTableCell>
                        <Button
                          variant="raised"
                          color="primary"
                          size="large"
                          className={classes.button}
                        >
                          照会
                        </Button>
                      </CustomTableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
              <Paper className={classes.coinInfo}>
                <Typography component="p">最終所持コイン数</Typography>
                <Typography variant="headline" component="h3">
                  4,000
                </Typography>
              </Paper>
            </div>
          </main>
          {after}
        </div>
      </div>
    )
  }
}

CoinShokaiForm.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(CoinShokaiForm)
