import React from 'react'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

import Avatar from 'material-ui/Avatar'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 500,
    height: 800,
    overflowY: 'auto'
  }
}

const tilesData = [
  {
    img: 'images/shain_kanri.png',
    title: '社員管理'
  },
  {
    img: 'images/senkyo_kanri.png',
    title: '選挙管理'
  },
  {
    img: 'images/senkyo.png',
    title: '投票'
  },
  {
    img: 'images/zoyo.png',
    title: 'コイン贈与'
  },
  {
    img: 'images/tohyo_kekka.png',
    title: '投票照会'
  },
  {
    img: 'images/coin_shokai.png',
    title: 'コイン照会'
  }
]

export default class DrawerSimpleExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: true }
  }

  handleToggle = () => this.setState({ open: !this.state.open })

  render() {
    return (
      <MuiThemeProvider>
        <div style={styles.root}>
          <GridList cellHeight={250} style={styles.gridList}>
            {tilesData.map(tile => (
              <GridTile
                key={tile.img}
                title={tile.title}
                actionIcon={
                  <IconButton>
                    <StarBorder color="white" />
                  </IconButton>
                }
              >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
        </div>
        <div>
          <Drawer open={this.state.open}>
            <AppBar title="AppBar" />
            <List>
              <ListItem
                primaryText="社員管理"
                leftAvatar={<Avatar src="images/shain_kanri.png" />}
              />
              <ListItem
                primaryText="選挙管理"
                leftAvatar={<Avatar src="images/senkyo_kanri.png" />}
              />
              <ListItem
                primaryText="投票"
                leftAvatar={<Avatar src="images/senkyo.png" />}
              />
              <ListItem
                primaryText="コイン贈与"
                leftAvatar={<Avatar src="images/zoyo.png" />}
              />
              <ListItem
                primaryText="投票照会"
                leftAvatar={<Avatar src="images/tohyo_kekka.png" />}
              />
              <ListItem
                primaryText="コイン照会"
                leftAvatar={<Avatar src="images/coin_shokai.png" />}
              />
            </List>
          </Drawer>
        </div>
      </MuiThemeProvider>
    )
  }
}
