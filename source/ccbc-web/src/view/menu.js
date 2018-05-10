import React, { Component } from 'react'
import request from 'superagent'
import { Redirect } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class MenuForm extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>メインメニュー</h1>
          <ul>
            <li>
              <a href="/radar">【01】レーダーチャート</a>
            </li>
            <li>
              <a href="/graph">【02】グラフ</a>
            </li>
            <li>
              <a href="/db">【03】データベース</a>
            </li>
            <li>
              <a href="/reference/all&1">【04】テスト</a>
            </li>
          </ul>
        </div>
      </MuiThemeProvider>
    )
  }
}
