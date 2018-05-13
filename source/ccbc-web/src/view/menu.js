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
              <a href="/ui_table">【04】テーブルサンプル</a>
            </li>
            <li>
              <a href="/ui_menu">【05】メニューサンプル</a>
            </li>
            <li>
              <a href="/ui_avatar">【06】アバターサンプル</a>
            </li>
            <li>
              <a href="/ui_button">【07】ボタンサンプル</a>
            </li>
            <li>
              <a href="/ui_card">【08】カードサンプル</a>
            </li>
            <li>
              <a href="/ui_slider">【09】スライダーサンプル</a>
            </li>
            <li>
              <a href="/ui_grid">【10】グリッドサンプル</a>
            </li>
            <li>
              <a href="/menu_sample">【11】メインメニュー</a>
            </li>
          </ul>
        </div>
      </MuiThemeProvider>
    )
  }
}
