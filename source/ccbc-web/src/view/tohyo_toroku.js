import React from 'react'
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
  kojiListItems
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
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
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

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Step 1: Select campaign settings...'
    case 1:
      return 'Step 2: What is an ad group anyways?'
    case 2:
      return 'Step 3: This is the bit I really care about!'
    default:
      return 'Unknown step'
  }
}

class PersistentDrawer extends React.Component {
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
    haifuCoin: 150,
    tohyoCoin: 0
  }

  constructor(props) {
    super(props)
    for (var i in testData) {
      this.state.activeStep1[i] = 4
      this.state.activeStep2[i] = 4
      this.state.activeStep3[i] = 4
      this.state.activeStep4[i] = 4
      this.state.activeStep5[i] = 4
    }
    this.calculateCoin()
  }

  calculateCoinLine = index => {
    var sum = 0
    sum += this.state.activeStep1[index] + 1
    sum += this.state.activeStep2[index] + 1
    sum += this.state.activeStep3[index] + 1
    sum += this.state.activeStep4[index] + 1
    sum += this.state.activeStep5[index] + 1
    return sum
  }

  calculateCoin = () => {
    var sum = 0
    for (var i in testData) {
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
    this.setState({
      [name[cnt]]: event.target.value
    })
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

  handleLogoutClick = event => {
    // ログアウト時にセッションストレージをクリアする
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
                  Most Valuable Player Vote System
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
                      avatar={<Avatar src={'/images/yamashita.png'} />}
                      label="札幌　花子"
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
                  <ClickAwayListener onClickAway={this.handleToggleClose}>
                    <Grow
                      in={open2}
                      id="menu-list-grow"
                      style={{ transformOrigin: '0 0 0' }}
                    >
                      <Paper>
                        <MenuList role="menu">
                          <MenuItem
                            onClick={this.handleLogoutClick()}
                            component={loginLink}
                          >
                            Logout
                          </MenuItem>
                        </MenuList>
                      </Paper>
                    </Grow>
                  </ClickAwayListener>
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
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="/images/coin_shokai.png"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    平成３０年度９月部会
                  </Typography>
                  <Typography component="p">
                    発表者に対して評価とコメントをつけて下さい。（配布しきれなかったコインは自動で回収されます）
                  </Typography>
                  <Typography component="p">
                    配布コイン数：{this.state.haifuCoin}
                  </Typography>
                  <Typography component="p">
                    投票コイン数：{this.state.tohyoCoin}
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <Paper className={classes.paper}>
              <Table className={classes.table}>
                <TableBody>
                  {testData.map((data, i) => (
                    <TableRow>
                      <div>
                        <table>
                          <tr>
                            <td rowspan="3" width="50%">
                              <Avatar
                                alt="Adelle Charles"
                                src={data.url}
                                className={classNames(
                                  classes.avatar,
                                  classes.bigAvatar
                                )}
                              />
                            </td>

                            <td width="10%" className={classes.tdSize}>
                              <Tooltip
                                id="tooltip-right"
                                title="構成に関するヘルプです"
                                placement="right"
                              >
                                <label>構成</label>
                              </Tooltip>
                            </td>
                            <td width="40%">
                              <Stepper
                                nonLinear
                                activeStep={activeStep1[i]}
                                className={classes.stepSize2}
                              >
                                {steps1.map((label, index) => {
                                  return (
                                    <Step
                                      key={label}
                                      className={classes.stepSize2}
                                    >
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
                          </tr>
                          <tr>
                            <td className={classes.tdSize}>
                              <Tooltip
                                id="tooltip-right"
                                title="発表に関するヘルプです"
                                placement="right"
                              >
                                <label>発表</label>
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
                                    <Step
                                      key={label}
                                      className={classes.stepSize2}
                                    >
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
                                title="表現に関するヘルプです"
                                placement="right"
                              >
                                <label>表現</label>
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
                                    <Step
                                      key={label}
                                      className={classes.stepSize2}
                                    >
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
                                title="説得に関するヘルプです"
                                placement="right"
                              >
                                <label>説得</label>
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
                                    <Step
                                      key={label}
                                      className={classes.stepSize2}
                                    >
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
                                color="textSecondary"
                              >
                                {data.name}　{this.calculateCoinLine(i)}coin
                              </Typography>
                            </td>

                            <td className={classes.tdSize}>
                              <Tooltip
                                id="tooltip-right"
                                title="限界突破に関するヘルプです"
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
                                    <Step
                                      key={label}
                                      className={classes.stepSize2}
                                    >
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
                            <td colspan="3">
                              <TextField
                                id="comment"
                                label="コメント"
                                multiline
                                rows="5"
                                rowsMax="5"
                                value={this.state.comment[i]}
                                onChange={this.handleChange('comment', i)}
                                className={classes.textField}
                                margin="normal"
                              />
                            </td>
                          </tr>
                        </table>
                      </div>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>

            <Button
              className={classes.button}
              variant="raised"
              size="large"
              component={MyLink}
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

PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(PersistentDrawer)
