import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Main from "./containers/index";
import Login from "./containers/login";
import Register from "./containers/register";
import Add from "./containers/add";

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/add" component={Add} />
        <PrivateRoute path="/" component={Main} />
      </Switch>
    </div>
  </Router>
);

export default hot(Routes);
