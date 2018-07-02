import React, { Component } from 'react'
import request from 'superagent'
import { Redirect, Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {}
})

class CheckForm extends Component {
  constructor(props) {
    super(props)
    const params = this.props.match
    this.state = {
      msg: ''
    }
  }

  onClick = event => {
    this.setState({ msg: '' })
    var test = document.getElementById('test').value
    if (test === 'test') {
      window.location.href = '/check_success'
    } else {
      this.setState({ msg: '入力エラーです。testを入力してください。' })
    }
  }

  render() {
    return (
      <div>
        <label>"test"を入力したら画面遷移する</label>
        <br />
        <input type="text" id="test" />
        <br />
        <button onClick={this.onClick} type="button">
          チェック
        </button>
        <br />
        {this.state.msg}
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(CheckForm)
