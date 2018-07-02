import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
//import { Route } from 'react-router'
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from 'react-router-redux'
import { countReducer } from './reducers/count'

import HeaderForm from './view/header'
import FooterForm from './view/footer'
import LoginForm from './view/login'
import CheckForm from './view/check'
import CheckSuccessForm from './view/check_success'
import ReduxForm from './view/redux'
import ReduxCountForm from './view/redux_count'
import ReduxDisplayForm from './view/redux_display'

import SampleForm from './view/sample'
import RadarChartForm from './view/radar'
import GraphForm from './view/graph'
import DbForm from './view/db'
import ImageForm from './view/image'
import MenuForm from './view/menu'
import SenkyoKanriForm from './view/senkyo_kanri'
import SenkyoTorokuForm from './view/senkyo_toroku'
import TohyoTorokuForm from './view/tohyo_toroku'
import TohyoIchiranForm from './view/tohyo_ichiran'
import TohyoShokaiKobetsuForm from './view/tohyo_shokai_kobetsu'
import TohyoShokaiShosaiForm from './view/tohyo_shokai_shosai'
import CommentShokaiForm from './view/comment_shokai'
import CoinShokaiForm from './view/coin_shokai'
import TohyoShokaiNendoForm from './view/tohyo_shokai_nendo'
import ShainKensakuForm from './view/shain_kensaku'
import ShainTorokuForm from './view/shain_toroku'
import CoinZoyoForm from './view/coin_zoyo'

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    count: countReducer,
    routing: routerReducer
  }),
  applyMiddleware(middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={LoginForm} />
        <Route path="/sample" component={SampleForm} />

        <Route path="/check" component={HeaderForm} />
        <Route path="/check" component={CheckForm} />
        <Route path="/check_success" component={HeaderForm} />
        <Route path="/check_success" component={CheckSuccessForm} />

        <Route path="/redux" component={HeaderForm} />
        <Route path="/redux" component={ReduxForm} />
        <Route path="/redux_count" component={HeaderForm} />
        <Route path="/redux_count" component={ReduxCountForm} />
        <Route path="/redux_display" component={HeaderForm} />
        <Route path="/redux_display" component={ReduxDisplayForm} />

        <Route path="/radar" component={HeaderForm} />
        <Route path="/radar" component={RadarChartForm} />
        <Route path="/graph" component={HeaderForm} />
        <Route path="/graph" component={GraphForm} />
        <Route path="/db" component={HeaderForm} />
        <Route path="/db" component={DbForm} />
        <Route path="/image" component={HeaderForm} />
        <Route path="/image" component={ImageForm} />
        <Route path="/menu" component={MenuForm} />
        <Route path="/senkyo_kanri" component={SenkyoKanriForm} />
        <Route path="/senkyo_toroku" component={SenkyoTorokuForm} />
        <Route path="/tohyo_toroku" component={TohyoTorokuForm} />
        <Route path="/tohyo_ichiran" component={TohyoIchiranForm} />
        <Route
          path="/tohyo_shokai_kobetsu"
          component={TohyoShokaiKobetsuForm}
        />
        <Route path="/tohyo_shokai_shosai" component={TohyoShokaiShosaiForm} />
        <Route path="/comment_shokai" component={CommentShokaiForm} />
        <Route path="/coin_shokai" component={CoinShokaiForm} />
        <Route path="/tohyo_shokai_nendo" component={TohyoShokaiNendoForm} />
        <Route path="/shain_kensaku" component={ShainKensakuForm} />
        <Route path="/shain_toroku" component={ShainTorokuForm} />
        <Route path="/coin_zoyo" component={CoinZoyoForm} />
        <FooterForm />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
