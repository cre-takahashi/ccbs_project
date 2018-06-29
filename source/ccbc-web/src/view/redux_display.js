import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as myActions from '../actions/count'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {}
})

class ReduxDisplayForm extends Component {
  render() {
    const { count, actions } = this.props

    return (
      <div style={{ width: '300px', marginLeft: '200px' }}>{count.number}</div>
    )
  }
}

const mapState = state => ({
  count: state.count
})

const mapDispatch = dispatch => ({
  actions: bindActionCreators(myActions, dispatch)
})

export default withStyles(styles, { withTheme: true })(
  connect(mapState, mapDispatch)(ReduxDisplayForm)
)
