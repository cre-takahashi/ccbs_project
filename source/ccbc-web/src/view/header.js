import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default class HeaderForm extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar title="MVPシステム">
          <a href="/menu">メニューに戻る</a>&nbsp;&nbsp;
          <a href="/">ログオフ</a>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}
