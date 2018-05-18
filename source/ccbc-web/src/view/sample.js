import React, { Component } from 'react'
import request from 'superagent'
import { Redirect } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import List from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import { mailFolderListItems, otherMailFolderListItems } from './tileData'

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
})

function ClippedDrawer(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography noWrap>
          {'You think water moves fast? You should see ice.'}
        </Typography>
      </main>
    </div>
  )
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default class SampleForm extends Component {
  render() {
    return (
      <MuiThemeProvider>
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
              <a href="/">【03】選挙登録</a>
            </li>
            <li>
              <a href="/">【04】投票登録</a>
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
        {ClippedDrawer}
      </MuiThemeProvider>
    )
  }
}
