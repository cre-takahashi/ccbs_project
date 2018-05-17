import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import List from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import { mailFolderListItems, otherMailFolderListItems } from './tileData'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

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
  toolbar: theme.mixins.toolbar,
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
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
          <Button
            variant="raised"
            color="inherit"
            color="secondary"
            href="/menu"
          >
            ログイン
          </Button>
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

export default withStyles(styles)(ClippedDrawer)
