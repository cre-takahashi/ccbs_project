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
import {
  mailFolderListItems,
  otherMailFolderListItems,
  kanriListItems,
  ippanListItems,
  kojiListItems,
  systemName
} from './tileData'
import Menu from '@material-ui/core/Menu'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'
import Chip from '@material-ui/core/Chip'
import { Manager, Target, Popper } from 'react-popper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import MenuList from '@material-ui/core/MenuList'
import Collapse from '@material-ui/core/Collapse'
import Portal from '@material-ui/core/Portal'

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
  }
})

class PersistentDrawer extends React.Component {
  state = {
    open: false,
    open2: false,
    anchor: 'left'
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
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
    const { anchorEl } = this.state
    const loginLink = props => <Link to="../" {...props} />

    var storage = sessionStorage
    var loginInfos = JSON.parse(sessionStorage.getItem('loginInfo'))
    for (var i in loginInfos) {
      var loginInfo = loginInfos[i]
      var userid = loginInfo['userid']
      var password = loginInfo['password']
      var image = loginInfo['image']
      var name = loginInfo['name']
      var kengen = loginInfo['kengen']
    }

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
            <Typography>
              <div>
                <h3>部品サンプル</h3>
                <ul>
                  <li>
                    <a href="/radar">【01】レーダーチャート</a>
                  </li>
                  <li>
                    <a href="/graph">【02】グラフ</a>
                  </li>
                  <li>
                    <a href="/db">【03】データベース</a>
                  </li>
                </ul>
                <h3>画面モックアップサンプル（イテレーション１）</h3>
                <ul>
                  <li>
                    <a href="/menu">【01】メインメニュー</a>
                  </li>
                  <li>
                    <a href="/senkyo_kanri">【02】選挙管理</a>
                  </li>
                  <li>
                    <a href="/senkyo_toroku">【03】選挙登録</a>
                  </li>
                  <li>
                    <a href="/tohyo_toroku">【04】投票登録</a>
                  </li>
                </ul>
                <h3>画面モックアップサンプル（イテレーション２）</h3>
                <ul>
                  <li>
                    <a href="/">【01】投票一覧</a>
                  </li>
                  <li>
                    <a href="/">【02】投票照会（個別）</a>
                  </li>
                  <li>
                    <a href="/">【03】投票照会（個別詳細）</a>
                  </li>
                  <li>
                    <a href="/">【04】コイン照会</a>
                  </li>
                  <li>
                    <a href="/">【05】コメント照会</a>
                  </li>
                </ul>
                <h3>画面モックアップサンプル（イテレーション３）</h3>
                <ul>
                  <li>
                    <a href="/">【01】コイン贈与</a>
                  </li>
                </ul>
                <h3>画面モックアップサンプル（イテレーション４）</h3>
                <ul>
                  <li>
                    <a href="/">【01】社員検索</a>
                  </li>
                  <li>
                    <a href="/">【02】社員登録</a>
                  </li>
                  <li>
                    <a href="/">【03】投票照会（年度）</a>
                  </li>
                </ul>
              </div>
            </Typography>
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
