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
import TableExampleComplex from './ui/ui_table'
import MenuExampleIcons from './ui/ui_menu'
import AvatarExampleSimple from './ui/ui_avatar'
import RaisedButtonExampleSimple from './ui/ui_button'
import CardExampleControlled from './ui/ui_card'
import SliderExampleControlled from './ui/ui_slider'
import GridListExampleSimple from './ui/ui_grid'
import MenuSample from './view/menu_sample'
import DrawerSimpleExample from './ui/ui_drawer'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <HeaderForm />
      <Route exact path="/" component={LoginForm} />
      <Route path="/menu" component={MenuForm} />
      <Route path="/radar" component={RadarChartForm} />
      <Route path="/graph" component={GraphForm} />
      <Route path="/db" component={DbForm} />
      <Route path="/ui_table" component={TableExampleComplex} />
      <Route path="/ui_menu" component={MenuExampleIcons} />
      <Route path="/ui_avatar" component={AvatarExampleSimple} />
      <Route path="/ui_button" component={RaisedButtonExampleSimple} />
      <Route path="/ui_card" component={CardExampleControlled} />
      <Route path="/ui_slider" component={SliderExampleControlled} />
      <Route path="/ui_grid" component={GridListExampleSimple} />
      <Route path="/menu_sample" component={MenuSample} />
      <Route path="/ui_drawer" component={DrawerSimpleExample} />
      <FooterForm />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
