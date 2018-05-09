import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

import HeaderForm from "./view/header";
import FooterForm from "./view/footer";
import LoginForm from "./view/login";
import MenuForm from "./view/menu";
import RadarChartForm from "./view/radar";
import GraphForm from "./view/graph";
import DbForm from "./view/db";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <HeaderForm />
      <Route exact path="/" component={LoginForm} />
      <Route path="/menu" component={MenuForm} />
      <Route path="/radar" component={RadarChartForm} />
      <Route path="/graph" component={GraphForm} />
      <Route path="/db" component={DbForm} />
      <FooterForm />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
