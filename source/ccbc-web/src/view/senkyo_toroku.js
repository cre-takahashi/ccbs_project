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
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import Avatar from '@material-ui/core/Avatar'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import Save from '@material-ui/icons/Save'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'
import { lighten } from '@material-ui/core/styles/colorManipulator'
import Menu from '@material-ui/core/Menu'
import Chip from '@material-ui/core/Chip'
import { Manager, Target, Popper } from 'react-popper'
import Grow from '@material-ui/core/Grow'
import MenuList from '@material-ui/core/MenuList'
import Collapse from '@material-ui/core/Collapse'
import Portal from '@material-ui/core/Portal'

const restdomain = require('../common/constans.js').restdomain

let counter = 0
function createData(name, image) {
  counter += 1
  return { id: counter, name, image }
}

const columnData = [
  { id: 'name', numeric: false, disablePadding: true, label: '名前' },
  {
    id: 'title',
    numeric: false,
    disablePadding: true,
    label: '発表タイトル'
  }
]

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property)
  }

  render() {
    const {
      onSelectAllClick,
      onSelectAllClick2,
      order,
      orderBy,
      numSelected,
      numSelected2,
      rowCount
    } = this.props
    const MenuLink = props => <Link to="/menu" {...props} />

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            参加者
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          <TableCell padding="checkbox">
            発表者
            <Checkbox
              indeterminate={numSelected2 > 0 && numSelected2 < rowCount}
              checked={numSelected2 === rowCount}
              onChange={onSelectAllClick2}
            />
          </TableCell>
          {columnData.map(column => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}
                colSpan={2}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            )
          }, this)}
        </TableRow>
      </TableHead>
    )
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  onSelectAllClick2: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
}

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: '1 1 100%'
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: '0 0 auto'
  }
})

let EnhancedTableToolbar = props => {
  const { numSelected, classes } = props

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subheading">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="title" id="tableTitle">
            参加者
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
    </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired
}

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar)

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
  root2: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 800
  },
  textField2: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 300,
    maxWidth: 500
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: theme.spacing.unit / 4
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: 'auto'
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

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

class PersistentDrawer extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      order: 'asc',
      orderBy: 'name',
      selected: [],
      page: 0,
      rowsPerPage: 5,
      open: false,
      open2: false,
      anchor: 'left',
      checked: [1],
      selected2: [],
      open2: false,
      anchor2: 'left',
      checked2: [1],
      election: null,
      startDate: null,
      endDate: null,
      multiline: 'Controlled',
      currency: 'EUR',
      name: [],
      anchorEl: null,
      coin: '0',
      resultList: [],
      happyotitle: [],
      bcaccount: null,
      bccoin: '0',
      configCoin: '10'
    }
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

    var now = new Date()
    var month = now.getMonth() + 1
    this.setState({
      election: now.getFullYear() + '年' + month + '月部会'
    })
    var account = null

    request
      .post(restdomain + '/senkyo_toroku/find')
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
      })
  }

  handleRequestSort = (event, property) => {
    const orderBy = property
    let order = 'desc'

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc'
    }

    const resultList =
      order === 'desc'
        ? this.state.resultList.sort(
            (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
          )
        : this.state.resultList.sort(
            (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1)
          )

    this.setState({ resultList, order, orderBy })
  }

  handleSelectAllClick = (event, checked) => {
    var calCoin = 0
    var selected = []
    var jogaiCoin = this.state.configCoin * 50

    if (checked) {
      selected = this.state.resultList.map(n => n.id)
      this.setState({ selected: this.state.resultList.map(n => n.id) })
    } else {
      this.setState({ selected: [] })
    }
    var happyoshaCount = 0
    for (var i in this.state.resultList) {
      var resultdata = this.state.resultList[i]
      for (var x in this.state.selected2) {
        if (resultdata.id == this.state.selected2[x]) {
          if (resultdata.kengen_cd != '3') {
            happyoshaCount = happyoshaCount + 1
          }
        }
      }
    }
    var shussekiFlg = 'false'
    var happyoFlg = 'false'
    for (var j in this.state.resultList) {
      var resultdata = this.state.resultList[j]
      for (var y in selected) {
        if (resultdata.id == selected[y]) {
          shussekiFlg = 'true'
          for (var z in this.state.selected2) {
            if (selected[y] == this.state.selected2[z]) {
              happyoFlg = 'true'
            }
          }
        }
      }
      if (shussekiFlg == 'true') {
        if (happyoFlg == 'true') {
          calCoin =
            happyoshaCount * this.state.configCoin * 10 * 5 -
            jogaiCoin +
            calCoin
        } else {
          calCoin = happyoshaCount * this.state.configCoin * 10 * 5 + calCoin
        }
      }
      shussekiFlg = 'false'
      happyoFlg = 'false'
    }
    this.setState({ coin: calCoin })
  }

  handleClick = (event, id) => {
    var calCoin = 0
    const { selected } = this.state
    const selectedIndex = selected.indexOf(id)
    let newSelected = []
    var jogaiCoin = this.state.configCoin * 50

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }
    this.setState({ selected: newSelected })

    var happyoshaCount = 0
    for (var i in this.state.resultList) {
      var resultdata = this.state.resultList[i]
      for (var x in this.state.selected2) {
        if (resultdata.id == this.state.selected2[x]) {
          if (resultdata.kengen_cd != '3') {
            happyoshaCount = happyoshaCount + 1
          }
        }
      }
    }
    var shussekiFlg = 'false'
    var happyoFlg = 'false'
    for (var j in this.state.resultList) {
      var resultdata = this.state.resultList[j]
      for (var y in newSelected) {
        if (resultdata.id == newSelected[y]) {
          shussekiFlg = 'true'
          for (var z in this.state.selected2) {
            if (newSelected[y] == this.state.selected2[z]) {
              happyoFlg = 'true'
            }
          }
        }
      }
      if (shussekiFlg == 'true') {
        if (happyoFlg == 'true') {
          calCoin =
            happyoshaCount * this.state.configCoin * 10 * 5 -
            jogaiCoin +
            calCoin
        } else {
          calCoin = happyoshaCount * this.state.configCoin * 10 * 5 + calCoin
        }
      }
      shussekiFlg = 'false'
      happyoFlg = 'false'
    }
    this.setState({ coin: calCoin })
  }

  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value })
  }

  isSelected = id => this.state.selected.indexOf(id) !== -1

  // 2つめ
  handleSelectAllClick2 = (event, checked) => {
    var calCoin = 0
    var length = 0
    var selected2 = []
    var jogaiCoin = this.state.configCoin * 50

    if (checked) {
      selected2 = this.state.resultList.map(n => n.id)
      this.setState({ selected2: this.state.resultList.map(n => n.id) })
      if (this.state.selected.length > 0) {
        length = this.state.resultList.length - this.state.selected.length
      }
    } else {
      this.setState({ selected2: [] })
    }
    var happyoshaCount = 0
    for (var i in this.state.resultList) {
      var resultdata = this.state.resultList[i]
      for (var x in selected2) {
        if (resultdata.id == selected2[x]) {
          if (resultdata.kengen_cd != '3') {
            happyoshaCount = happyoshaCount + 1
          }
        }
      }
    }
    var shussekiFlg = 'false'
    var happyoFlg = 'false'
    for (var j in this.state.resultList) {
      var resultdata = this.state.resultList[j]
      for (var y in this.state.selected) {
        if (resultdata.id == this.state.selected[y]) {
          shussekiFlg = 'true'
          for (var z in selected2) {
            if (this.state.selected[y] == selected2[z]) {
              happyoFlg = 'true'
            }
          }
        }
      }
      if (shussekiFlg == 'true') {
        if (happyoFlg == 'true') {
          calCoin =
            happyoshaCount * this.state.configCoin * 10 * 5 -
            jogaiCoin +
            calCoin
        } else {
          calCoin = happyoshaCount * this.state.configCoin * 10 * 5 + calCoin
        }
      }
      shussekiFlg = 'false'
      happyoFlg = 'false'
    }
    this.setState({ coin: calCoin })
  }

  handleClick3 = (event, id) => {
    var calCoin = 0
    const { selected2 } = this.state
    const selectedIndex2 = selected2.indexOf(id)
    let newSelected2 = []
    var jogaiCoin = this.state.configCoin * 50

    if (selectedIndex2 === -1) {
      newSelected2 = newSelected2.concat(selected2, id)
    } else if (selectedIndex2 === 0) {
      newSelected2 = newSelected2.concat(selected2.slice(1))
    } else if (selectedIndex2 === selected2.length - 1) {
      newSelected2 = newSelected2.concat(selected2.slice(0, -1))
    } else if (selectedIndex2 > 0) {
      newSelected2 = newSelected2.concat(
        selected2.slice(0, selectedIndex2),
        selected2.slice(selectedIndex2 + 1)
      )
    }
    this.setState({ selected2: newSelected2 })

    var happyoshaCount = 0
    for (var i in this.state.resultList) {
      var resultdata = this.state.resultList[i]
      for (var x in newSelected2) {
        if (resultdata.id == newSelected2[x]) {
          if (resultdata.kengen_cd != '3') {
            happyoshaCount = happyoshaCount + 1
          }
        }
      }
    }
    var shussekiFlg = 'false'
    var happyoFlg = 'false'
    for (var j in this.state.resultList) {
      var resultdata = this.state.resultList[j]
      for (var y in this.state.selected) {
        if (resultdata.id == this.state.selected[y]) {
          shussekiFlg = 'true'
          for (var z in newSelected2) {
            if (this.state.selected[y] == newSelected2[z]) {
              happyoFlg = 'true'
            }
          }
        }
      }
      if (shussekiFlg == 'true') {
        if (happyoFlg == 'true') {
          calCoin =
            happyoshaCount * this.state.configCoin * 10 * 5 -
            jogaiCoin +
            calCoin
        } else {
          calCoin = happyoshaCount * this.state.configCoin * 10 * 5 + calCoin
        }
      }
      shussekiFlg = 'false'
      happyoFlg = 'false'
    }
    this.setState({ coin: calCoin })
  }

  isSelected2 = id => this.state.selected2.indexOf(id) !== -1
  // ↑ここまで

  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
  }

  handleChange2 = (name, id) => event => {
    this.state.happyotitle[id] = event.target.value
  }

  handleChange3 = (name, id) => event => {
    var configCoin = event.target.value
    var calCoin = 0
    var selected = []
    var jogaiCoin = configCoin * 50
    var happyoshaCount = 0
    for (var i in this.state.resultList) {
      var resultdata = this.state.resultList[i]
      for (var x in this.state.selected2) {
        if (resultdata.id == this.state.selected2[x]) {
          if (resultdata.kengen_cd != '3') {
            happyoshaCount = happyoshaCount + 1
          }
        }
      }
    }
    var shussekiFlg = 'false'
    var happyoFlg = 'false'
    for (var j in this.state.resultList) {
      var resultdata = this.state.resultList[j]
      for (var y in this.state.selected) {
        if (resultdata.id == this.state.selected[y]) {
          shussekiFlg = 'true'
          for (var z in this.state.selected2) {
            if (this.state.selected[y] == this.state.selected2[z]) {
              happyoFlg = 'true'
            }
          }
        }
      }
      if (shussekiFlg == 'true') {
        if (happyoFlg == 'true') {
          calCoin = happyoshaCount * configCoin * 10 * 5 - jogaiCoin + calCoin
        } else {
          calCoin = happyoshaCount * configCoin * 10 * 5 + calCoin
        }
      }
      shussekiFlg = 'false'
      happyoFlg = 'false'
    }
    this.setState({ coin: calCoin })
    this.setState({ configCoin: configCoin })
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  handleToggle = value => () => {
    const { checked } = this.state
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    this.setState({
      checked: newChecked
    })
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

  handleClick2 = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  handleSubmit() {
    request
      .post(restdomain + '/senkyo_toroku/create')
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
    const {
      resultList,
      order,
      orderBy,
      selected,
      rowsPerPage,
      page
    } = this.state
    const emptyRows =
      rowsPerPage -
      Math.min(rowsPerPage, resultList.length - page * rowsPerPage)
    const loginLink = props => <Link to="../" {...props} />
    const MenuLink = props => <Link to="/menu" {...props} />

    const {
      order2,
      orderBy2,
      selected2,
      rowsPerPage2,
      page2,
      coin
    } = this.state
    const emptyRows2 =
      rowsPerPage2 -
      Math.min(rowsPerPage2, resultList.length2 - page2 * rowsPerPage2)

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
              <h2>
                <a href="#bottom" title="ページ最下部へ">
                  <div align="right">
                    <img
                      src="/images/yajirusi-shita.png"
                      width="50"
                      height="50"
                    />
                  </div>
                </a>
                <img
                  src="/images/yajirushi.png"
                  alt="サンプル"
                  align="bottom"
                  width="30"
                  height="20"
                />
                <strong>選挙情報</strong>
              </h2>
              <Paper className={classes.root}>
                <TextField
                  id="
                    election"
                  label="選挙名"
                  placeholder="選挙名を入力"
                  className={classes.textField}
                  value={this.state.election}
                  onChange={this.handleChange('election')}
                  margin="normal"
                  style={{ fontSize: '200%' }}
                />
                <br />
                <TextField
                  id="date"
                  label="開始日"
                  type="date"
                  className={classes.textField2}
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={this.handleChange('startDate')}
                />
                <TextField
                  id="date"
                  label="終了日"
                  type="date"
                  className={classes.textField2}
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={this.handleChange('endDate')}
                />
                <br />
                <TextField
                  id="textarea"
                  label="所持コイン数"
                  value={this.state.bccoin}
                  placeholder=""
                  multiline
                  className={classes.textField2}
                  margin="normal"
                  disabled
                />
                <TextField
                  id="number"
                  label="設定コイン（１点あたり）"
                  value={this.state.configCoin}
                  className={classes.textField2}
                  margin="normal"
                  onChange={this.handleChange3('configCoin')}
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="textarea"
                  label="配布コイン数"
                  value={this.state.coin}
                  placeholder=""
                  multiline
                  className={classes.textField2}
                  margin="normal"
                  disabled
                />
              </Paper>
              <br />
              <h2>
                <img
                  src="/images/yajirushi.png"
                  alt="サンプル"
                  align="top"
                  width="30"
                  height="20"
                />
                <strong>参加者選択</strong>
              </h2>
              <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                  <Table className={classes.table} aria-labelledby="tableTitle">
                    <EnhancedTableHead
                      numSelected={selected.length}
                      order={order}
                      orderBy={orderBy}
                      onSelectAllClick={this.handleSelectAllClick}
                      onRequestSort={this.handleRequestSort}
                      rowCount={this.state.resultList.length}
                      numSelected2={selected2.length}
                      onSelectAllClick2={this.handleSelectAllClick2}
                    />
                    <TableBody>
                      {this.state.resultList
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((n, i) => {
                          const isSelected = this.isSelected(n.id)
                          const isSelected2 = this.isSelected2(n.id)
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              aria-checked={isSelected}
                              tabIndex={-1}
                              key={n.id}
                              selected={isSelected}
                            >
                              <TableCell
                                padding="checkbox"
                                style={{ width: '5%' }}
                              >
                                <Checkbox
                                  onClick={event =>
                                    this.handleClick(event, n.id)
                                  }
                                  checked={isSelected}
                                />
                              </TableCell>
                              <TableCell
                                padding="checkbox"
                                style={{ width: '5%' }}
                              >
                                <Checkbox
                                  onClick={event =>
                                    this.handleClick3(event, n.id)
                                  }
                                  checked={isSelected2}
                                />
                              </TableCell>
                              <TableCell padding="none" style={{ width: '5%' }}>
                                <Avatar
                                  src={restUrl + `uploads/${n.image_file_nm}`}
                                />
                              </TableCell>
                              <TableCell
                                padding="none"
                                style={{ width: '90%' }}
                              >
                                {n.shimei}
                              </TableCell>
                              <TableCell
                                padding="none"
                                style={{ width: '70%' }}
                              >
                                <TextField
                                  id="happyotitle"
                                  name="happyotitle"
                                  label="Title"
                                  className={classes.textField}
                                  value={this.state.happyotitle[i]}
                                  onChange={this.handleChange2(
                                    'happyotitle',
                                    i
                                  )}
                                  margin="normal"
                                />
                              </TableCell>
                            </TableRow>
                          )
                        })}
                      {emptyRows > 0 && (
                        <TableRow style={{ height: 49 * emptyRows }}>
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
                <TablePagination
                  component="div"
                  count={resultList.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  backIconButtonProps={{
                    'aria-label': 'Previous Page'
                  }}
                  nextIconButtonProps={{
                    'aria-label': 'Next Page'
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
              </Paper>
              {(() => {
                return (
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
                )
              })()}
              <a href="#top" title="ページ最上部へ">
                <div align="right">
                  <img src="/images/yajirusi-ue.png" width="50" height="50" />
                </div>
              </a>
              <a name="bottom" />
            </form>
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
