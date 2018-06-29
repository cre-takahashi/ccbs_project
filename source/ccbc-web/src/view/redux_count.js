import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as myActions from '../actions/count'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {}
})

class ReduxCountForm extends Component {
  render() {
    const { count, actions } = this.props
    return (
      <div>
        <div>
          Some state changes:
          {count.number}
          <button onClick={() => actions.increase(1)}>Increase</button>
          <button onClick={() => actions.decrease(1)}>Decrease</button>
        </div>
        <div>
          <Link to="/redux_display">submit</Link>
        </div>
      </div>
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
  connect(mapState, mapDispatch)(ReduxCountForm)
)
