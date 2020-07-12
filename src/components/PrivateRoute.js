import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <Route
      {...rest}
      render={() =>
        isLoggedIn ? <Component {...rest} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
