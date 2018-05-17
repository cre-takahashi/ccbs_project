import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import HeaderForm from './view/header'
import FooterForm from './view/footer'
import LoginForm from './view/login'
import MenuForm from './view/menu'
import RadarChartForm from './view/radar'
import GraphForm from './view/graph'
import DbForm from './view/db'
import withStyles from './view/drawers'
import aaaa from './view/appbar'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <HeaderForm />
      <Route exact path="/" component={LoginForm} />
      <Route path="/menu" component={MenuForm} />
      <Route path="/radar" component={RadarChartForm} />
      <Route path="/graph" component={GraphForm} />
      <Route path="/db" component={DbForm} />
      <Route path="/drawers" component={withStyles} />
      <Route path="/appbar" component={aaaa} />
      <FooterForm />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
