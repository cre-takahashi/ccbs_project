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
import { Link, BrowserRouter } from 'react-router-dom'
import {
  kanriListItems,
  ippanListItems,
  systemName,
  restUrl,
  documentHelp,
  presentationHelp,
  expressionHelp,
  influenceHelp,
  breakthroughHelp
} from './tileData'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import Avatar from '@material-ui/core/Avatar'
import Save from '@material-ui/icons/Save'
import Chip from '@material-ui/core/Chip'
import { Manager, Target, Popper } from 'react-popper'
import Grow from '@material-ui/core/Grow'
import MenuList from '@material-ui/core/MenuList'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'

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
  headLine: {},
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500
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
  }
})

function getSteps1() {
  return ['', '', '', '', '', '', '', '', '', '']
}

function getSteps2() {
  return ['', '', '', '', '', '', '', '', '', '']
}

function getSteps3() {
  return ['', '', '', '', '', '', '', '', '', '']
}

function getSteps4() {
  return ['', '', '', '', '', '', '', '', '', '']
}

function getSteps5() {
  return ['', '', '', '', '', '', '', '', '', '']
}

class TohyoTorokuForm extends React.Component {
  state = {
    open: false,
    open2: false,
    anchor: 'left',
    activeStep1: {},
    activeStep2: {},
    activeStep3: {},
    activeStep4: {},
    activeStep5: {},
    completed: {},
    comment: {},
    coin: 0,
    tohyoCoin: 0,
    headList: [],
    resultList: [],
    userid: null,
    password: null,
    tShainPk: 0,
    imageFileName: null,
    shimei: null,
    kengenCd: null,
    configCoin: 0
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
      .post('/tohyo_toroku/find')
      .send(this.state)
      .end((err, res) => {
        if (err) {
          return
        }
        var resList = res.body.data
        var head = []
        if (resList.length === 0) {
          head.push(false)
        } else {
          head.push(true)
        }
        // 検索結果表示
        this.setState({ resultList: resList })
        this.setState({ headList: head })

        for (var i in resList) {
          this.state.activeStep1[i] = 4
          this.state.activeStep2[i] = 4
          this.state.activeStep3[i] = 4
          this.state.activeStep4[i] = 0
          this.state.activeStep5[i] = 0
          this.state.config_coin = resList[i].config_coin
        }
        this.calculateCoin()
      })
  }

  calculatePointLine = index => {
    var sum = 0
    sum += this.state.activeStep1[index] + 1
    sum += this.state.activeStep2[index] + 1
    sum += this.state.activeStep3[index] + 1
    sum += this.state.activeStep4[index] + 1
    sum += this.state.activeStep5[index] + 1
    return sum
  }

  calculateCoinLine = index => {
    var sum = 0
    sum += this.state.activeStep1[index] + 1
    sum += this.state.activeStep2[index] + 1
    sum += this.state.activeStep3[index] + 1
    sum += this.state.activeStep4[index] + 1
    sum += this.state.activeStep5[index] + 1
    return sum * this.state.config_coin
  }

  calculateCoin = () => {
    var sum = 0
    for (var i in this.state.resultList) {
      sum += this.state.activeStep1[i] + 1
      sum += this.state.activeStep2[i] + 1
      sum += this.state.activeStep3[i] + 1
      sum += this.state.activeStep4[i] + 1
      sum += this.state.activeStep5[i] + 1
    }
    this.setState({ tohyoCoin: sum })
    this.state.tohyoCoin = sum
  }

  handleChange = (name, cnt) => event => {
    // テキストフィールドのonChangeイベントでsetStateすると劇遅になる
    // this.setState({
    //   [name[cnt]]: event.target.value
    // })
    this.state.comment[cnt] = event.target.value
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  handleStep1 = (step1, cnt) => () => {
    // const newArray = Object.assign([], this.state.activeStep1)
    // newArray[cnt] = step1
    // this.setState({ activeStep1: newArray })
    this.state.activeStep1[cnt] = step1
    this.calculateCoin()
  }

  handleStep2 = (step2, cnt) => () => {
    // const newArray = Object.assign([], this.state.activeStep2)
    // newArray[cnt] = step2
    // this.setState({ activeStep2: newArray })
    this.state.activeStep2[cnt] = step2
    this.calculateCoin()
  }

  handleStep3 = (step3, cnt) => () => {
    // const newArray = Object.assign([], this.state.activeStep3)
    // newArray[cnt] = step3
    // this.setState({ activeStep3: newArray })
    this.state.activeStep3[cnt] = step3
    this.calculateCoin()
  }

  handleStep4 = (step4, cnt) => () => {
    // const newArray = Object.assign([], this.state.activeStep4)
    // newArray[cnt] = step4
    // this.setState({ activeStep4: newArray })
    this.state.activeStep4[cnt] = step4
    this.calculateCoin()
  }

  handleStep5 = (step5, cnt) => () => {
    // const newArray = Object.assign([], this.state.activeStep5)
    // newArray[cnt] = step5
    // this.setState({ activeStep5: newArray })
    this.state.activeStep5[cnt] = step5
    this.calculateCoin()
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
    request
      .post('/tohyo_toroku/create')
      .send(this.state)
      .end((err, res) => {
        if (err) {
          return
        }
      })
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

    const steps1 = getSteps1()
    const steps2 = getSteps2()
    const steps3 = getSteps3()
    const steps4 = getSteps4()
    const steps5 = getSteps5()
    const {
      activeStep1,
      activeStep2,
      activeStep3,
      activeStep4,
      activeStep5
    } = this.state

    var head = this.state.headList.map((data, i) => {
      if (!data) {
        return (
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                有効な選挙がありません。
              </Typography>
            </CardContent>
          </Card>
        )
      } else {
        return (
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {this.state.resultList[0].senkyo_nm}
              </Typography>
              <Typography component="p" style={{ fontSize: '120%' }}>
                発表者に対して評価とコメントをつけて下さい。（配布しきれなかったコインは自動で回収されます）
              </Typography>
              <Typography component="p" style={{ fontSize: '120%' }}>
                配布コイン数：{this.state.resultList[0].haifu_coin}
              </Typography>
              <Typography component="p" style={{ fontSize: '120%' }}>
                1点辺りのコイン数：{this.state.resultList[0].config_coin}
              </Typography>
              <Typography component="p" style={{ fontSize: '120%' }}>
                投票コイン数：{this.state.tohyoCoin * this.state.config_coin}
              </Typography>
            </CardContent>
          </Card>
        )
      }
    })

    var resList = this.state.resultList.map((data, i) => {
      return (
        <div>
          <Paper className={classes.paper}>
            <Table className={classes.table}>
              <TableBody>
                <TableRow>
                  <div>
                    <table>
                      <tr>
                        <td rowspan="3" width="30%">
                          <Avatar
                            alt="Adelle Charles"
                            src={restUrl + `uploads/${data.image_file_nm}`}
                            className={classNames(
                              classes.avatar,
                              classes.bigAvatar
                            )}
                          />
                        </td>

                        <td width="5%" className={classes.tdSize}>
                          <Tooltip
                            id="tooltip-right"
                            title={documentHelp}
                            placement="right"
                          >
                            <label>資料作成</label>
                          </Tooltip>
                        </td>
                        <td width="25%">
                          <Stepper
                            nonLinear
                            activeStep={activeStep1[i]}
                            className={classes.stepSize2}
                          >
                            {steps1.map((label, index) => {
                              return (
                                <Step key={label} className={classes.stepSize2}>
                                  <StepButton
                                    onClick={this.handleStep1(index, i)}
                                    completed={this.state.completed[index]}
                                    className={classes.stepSize2}
                                  >
                                    {label}
                                  </StepButton>
                                </Step>
                              )
                            })}
                          </Stepper>
                        </td>
                        <td rowspan="6">
                          <TextField
                            id="comment"
                            label="コメント"
                            multiline
                            rows="12"
                            rowsMax="12"
                            value={this.state.comment[i]}
                            onChange={this.handleChange('comment', i)}
                            className={classes.textField}
                            margin="normal"
                            style={{ fontSize: '120%' }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className={classes.tdSize}>
                          <Tooltip
                            id="tooltip-right"
                            title={presentationHelp}
                            placement="right"
                          >
                            <label>発表力</label>
                          </Tooltip>
                        </td>
                        <td>
                          <Stepper
                            nonLinear
                            activeStep={activeStep2[i]}
                            className={classes.stepSize2}
                          >
                            {steps2.map((label, index) => {
                              return (
                                <Step key={label} className={classes.stepSize2}>
                                  <StepButton
                                    onClick={this.handleStep2(index, i)}
                                    completed={this.state.completed[index]}
                                    className={classes.stepSize2}
                                  >
                                    {label}
                                  </StepButton>
                                </Step>
                              )
                            })}
                          </Stepper>
                        </td>
                      </tr>
                      <tr>
                        <td className={classes.tdSize}>
                          <Tooltip
                            id="tooltip-right"
                            title={expressionHelp}
                            placement="right"
                          >
                            <label>表現力</label>
                          </Tooltip>
                        </td>
                        <td>
                          <Stepper
                            nonLinear
                            activeStep={activeStep3[i]}
                            className={classes.stepSize2}
                          >
                            {steps3.map((label, index) => {
                              return (
                                <Step key={label} className={classes.stepSize2}>
                                  <StepButton
                                    onClick={this.handleStep3(index, i)}
                                    completed={this.state.completed[index]}
                                    className={classes.stepSize2}
                                  >
                                    {label}
                                  </StepButton>
                                </Step>
                              )
                            })}
                          </Stepper>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Typography
                            variant="headline"
                            className={classes.headLine}
                          >
                            {data.title}
                          </Typography>
                        </td>

                        <td className={classes.tdSize}>
                          <Tooltip
                            id="tooltip-right"
                            title={influenceHelp}
                            placement="right"
                          >
                            <label>影響力</label>
                          </Tooltip>
                        </td>
                        <td>
                          <Stepper
                            nonLinear
                            activeStep={activeStep4[i]}
                            className={classes.stepSize2}
                          >
                            {steps4.map((label, index) => {
                              return (
                                <Step key={label} className={classes.stepSize2}>
                                  <StepButton
                                    onClick={this.handleStep4(index, i)}
                                    completed={this.state.completed[index]}
                                    className={classes.stepSize2}
                                  >
                                    {label}
                                  </StepButton>
                                </Step>
                              )
                            })}
                          </Stepper>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Typography
                            variant="subheading"
                            style={{ fontSize: '120%' }}
                          >
                            {data.shimei}
                          </Typography>
                        </td>

                        <td className={classes.tdSize}>
                          <Tooltip
                            id="tooltip-right"
                            title={breakthroughHelp}
                            placement="right"
                          >
                            <label>限界突破</label>
                          </Tooltip>
                        </td>
                        <td>
                          <Stepper
                            nonLinear
                            activeStep={activeStep5[i]}
                            className={classes.stepSize2}
                          >
                            {steps5.map((label, index) => {
                              return (
                                <Step key={label} className={classes.stepSize2}>
                                  <StepButton
                                    onClick={this.handleStep5(index, i)}
                                    completed={this.state.completed[index]}
                                    className={classes.stepSize2}
                                  >
                                    {label}
                                  </StepButton>
                                </Step>
                              )
                            })}
                          </Stepper>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Typography
                            variant="subheading"
                            style={{ fontSize: '140%' }}
                          >
                            {this.calculatePointLine(i)}点<label>　</label>
                            {this.calculateCoinLine(i)}coin
                          </Typography>
                        </td>
                      </tr>
                    </table>
                  </div>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
          {(() => {
            if (i === this.state.resultList.length - 1) {
              return (
                <div>
                  <br />
                  <Button
                    className={classes.button}
                    variant="raised"
                    size="large"
                    onClick={this.handleSubmit.bind(this)}
                    component={MenuLink}
                  >
                    <Save
                      className={classNames(
                        classes.leftIcon,
                        classes.iconSmall
                      )}
                    />
                    SAVE
                  </Button>
                </div>
              )
            }
          })()}
        </div>
      )
    })

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
            <form className={classes.container} noValidate autoComplete="off">
              <div>{head}</div>
              <div>{resList}</div>
            </form>
          </main>
          {after}
        </div>
      </div>
    )
  }
}

TohyoTorokuForm.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(TohyoTorokuForm)
