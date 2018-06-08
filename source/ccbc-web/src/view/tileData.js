import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import StarIcon from '@material-ui/icons/Star'
import SendIcon from '@material-ui/icons/Send'
import MailIcon from '@material-ui/icons/Mail'
import DeleteIcon from '@material-ui/icons/Delete'
import ReportIcon from '@material-ui/icons/Report'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'

export const systemName = 'Most Valuable Player Vote System'
export const restUrl = 'http://localhost:3001/'

export const images = [
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

export const images2 = [
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

export const kanriListItems = (
  <div>
    <ListItem button component={Link} to="/">
      <Avatar alt="shain_kanri" src="/images/shain_kanri.png" />
      <ListItemText primary="社員管理" />
    </ListItem>
    <ListItem button component={Link} to="/">
      <Avatar alt="shain_kanri" src="/images/senkyo_kanri.png" />
      <ListItemText primary="選挙管理" />
    </ListItem>
    <ListItem button component={Link} to="/">
      <Avatar alt="shain_kanri" src="/images/coin_shokai.png" />
      <ListItemText primary="コイン照会" />
    </ListItem>
  </div>
)

export const ippanListItems = (
  <div>
    <ListItem button component={Link} to="/">
      <Avatar alt="shain_kanri" src="/images/senkyo.png" />
      <ListItemText primary="投票" />
    </ListItem>
    <ListItem button component={Link} to="/">
      <Avatar alt="shain_kanri" src="/images/tohyo_kekka.png" />
      <ListItemText primary="投票結果" />
    </ListItem>
    <ListItem button component={Link} to="/">
      <Avatar alt="shain_kanri" src="/images/zoyo.png" />
      <ListItemText primary="コイン贈与" />
    </ListItem>
  </div>
)

export const kojiListItems = (
  <div>
    <ListItem button component={Link} to="/menu">
      <Avatar alt="shain_kanri" src="/images/koji.png" />
      <ListItemText primary="画面モック" />
    </ListItem>
  </div>
)

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Starred" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Send mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem>
  </div>
)

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="All mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Trash" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Spam" />
    </ListItem>
  </div>
)
