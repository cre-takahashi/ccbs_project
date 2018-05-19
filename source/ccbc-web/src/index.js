import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import HeaderForm from './view/header'
import FooterForm from './view/footer'
import LoginForm from './view/login'
import SampleForm from './view/sample'
import RadarChartForm from './view/radar'
import GraphForm from './view/graph'
import DbForm from './view/db'
import MenuForm from './view/menu'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LoginForm} />

      <Route path="/sample" component={SampleForm} />

      <Route path="/radar" component={HeaderForm} />
      <Route path="/radar" component={RadarChartForm} />

      <Route path="/graph" component={HeaderForm} />
      <Route path="/graph" component={GraphForm} />

      <Route path="/db" component={HeaderForm} />
      <Route path="/db" component={DbForm} />

      <Route path="/menu" component={HeaderForm} />
      <Route path="/menu" component={MenuForm} />

      <FooterForm />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
