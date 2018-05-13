import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

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

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const MenuSample = () => (
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
  </MuiThemeProvider>
)

export default MenuSample
