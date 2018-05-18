import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import FileUpload from 'material-ui-icons/FileUpload'

import Table from 'material-ui/Table'
import TableBody from 'material-ui/Table/TableBody'
import TableCell from 'material-ui/Table/TableCell'
import TableHead from 'material-ui/Table/TableHead'
import TableRow from 'material-ui/Table/TableRow'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit,
    marginLeft: 50
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
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR'
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    const { classes } = this.props

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <div style={{ margin: '0 auto' }}>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TextField
                  id="id"
                  label="ID"
                  className={classes.textField}
                  onChange={this.handleChange('id')}
                  fullWidth
                  margin="normal"
                />
              </TableRow>
              <TableRow>
                <TextField
                  id="password-input"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  autoComplete="current-password"
                  fullWidth
                  margin="normal"
                />
              </TableRow>
              <TableRow>
                <Button
                  className={classes.button}
                  variant="raised"
                  color="default"
                  href="/sample"
                >
                  login
                  <FileUpload className={classes.rightIcon} />
                </Button>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </form>
    )
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TextFields)
