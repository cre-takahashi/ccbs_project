import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
import {
  mailFolderListItems,
  otherMailFolderListItems,
  kanriListItems,
  ippanListItems,
  kojiListItems
} from './tileData'
import { Link } from 'react-router-dom'
import ButtonBase from 'material-ui/ButtonBase'

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    //height: 500,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  flex: {
    flex: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
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
  }
})

const images = [
  {
    url: '/images/shain_kanri.png',
    title: '社員管理',
    width: '33%',
    path: '/'
  },
  {
    url: '/images/senkyo_kanri.png',
    title: '選挙管理',
    width: '34%',
    path: '/'
  },
  {
    url: '/images/coin_shokai.png',
    title: 'コイン照会',
    width: '33%',
    path: '/'
  }
]

const images2 = [
  {
    url: '/images/senkyo.png',
    title: '投票',
    width: '33%',
    path: '/'
  },
  {
    url: '/images/tohyo_kekka.png',
    title: '投票結果',
    width: '34%',
    path: '/'
  },
  {
    url: '/images/zoyo.png',
    title: 'コイン贈与',
    width: '33%',
    path: '/'
  }
]

function SenkyoKanriForm(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <List>{kanriListItems}</List>
        <Divider />
        <List>{ippanListItems}</List>
        <Divider />
        <List>{kojiListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div>ここに部品を組み込むこと</div>
      </main>
    </div>
  )
}

SenkyoKanriForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SenkyoKanriForm)
