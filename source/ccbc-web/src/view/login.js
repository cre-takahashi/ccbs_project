import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FileUpload from '@material-ui/icons/FileUpload'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircle from '@material-ui/icons/AccountCircle'
import VpnKey from '@material-ui/icons/VpnKey'

import SampleForm from './sample'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit,
    marginLeft: 100
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  table: {
    minWidth: 0
  }
})

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
]

class TextFields extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Cat in the Hat',
      age: '',
      multiline: 'Controlled',
      currency: 'JPN',
      id: '',
      passwordInput: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    const { classes } = this.props
    const MyLink = props => <Link to="/sample" {...props} />

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <div
          style={{
            width: '100vw',
            height: 'auto',
            minHeight: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: 'url(/images/title.jpg)',

            display: '-webkit-box',
            display: '-ms-flexbox',
            display: 'flex',

            /* 左右中央寄せ */
            webkitBoxPack: 'center',
            msFlexPack: 'center',
            justifyContent: 'center',

            /* 上下中央寄せ */
            webkitBoxAlign: 'center',
            msFlexAlign: 'center',
            alignItems: 'center'
          }}
        >
          <table>
            <tr>
              <td colspan="3">
                <Typography
                  variant="headline"
                  style={{
                    color: 'white',
                    fontSize: 'xx-large',
                    fontWeight: 'bold'
                  }}
                  align="center"
                >
                  MVP Vote System
                </Typography>
              </td>
            </tr>
            <p
              style={{
                background: 'white'
              }}
            >
              <tr>
                <td>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                </td>
                <td>
                  <Typography variant="headline" align="center">
                    Log In
                  </Typography>
                </td>
                <td>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <TextField
                    id="id"
                    label="ID"
                    className={classes.textField}
                    onChange={this.handleChange('id')}
                    fullWidth
                    value={this.state.id}
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      )
                    }}
                  />
                </td>
                <td />
              </tr>
              <tr>
                <td />
                <td>
                  <TextField
                    id="passwordInput"
                    label="Password"
                    className={classes.textField}
                    onChange={this.handleChange('passwordInput')}
                    type="password"
                    autoComplete="current-password"
                    fullWidth
                    value={this.state.passwordInput}
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <VpnKey />
                        </InputAdornment>
                      )
                    }}
                  />
                </td>
                <td />
              </tr>
              <tr>
                <td />
                <td>
                  <Button
                    variant="raised"
                    color="default"
                    component={MyLink}
                    fullWidth="true"
                  >
                    login
                    <FileUpload className={classes.rightIcon} />
                  </Button>
                </td>
                <td />
              </tr>
              <tr>
                <td />
                <td colspan="2">
                  <br />
                  <br />
                  <br />
                  <Typography component="p" align="right">
                    ※ID、パスワード紛失時は管理者に連絡すること
                  </Typography>
                </td>
              </tr>
            </p>
            <tr>
              <td colspan="3">
                <Typography
                  component="p"
                  align="right"
                  style={{
                    color: 'white'
                  }}
                >
                  Copyright © 2018 Creative Consultant
                </Typography>
              </td>
            </tr>
          </table>
        </div>
      </form>
    )
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TextFields)
