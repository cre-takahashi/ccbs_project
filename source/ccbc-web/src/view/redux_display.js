import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {}
})

class ReduxDisplayForm extends Component {
  render() {
    const { count } = this.props

    return (
      <div style={{ width: '300px', marginLeft: '200px' }}>{count.number}</div>
    )
  }
}

const mapState = state => ({
  count: state.count
})

export default withStyles(styles, { withTheme: true })(
  connect(mapState)(ReduxDisplayForm)
)
