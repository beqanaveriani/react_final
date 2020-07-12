import React from "react";
import { Link, useHistory } from "react-router-dom";

import { deleteAuthHeader } from "../api";
import storage from "../utils/storage";

const Header = () => {
  const history = useHistory();
  const usr = storage("user").get() || {};

  const logout = () => {
    deleteAuthHeader();
    storage("isLoggedIn").set(false);
    storage("user").unset();
    history.push("/login");
  };

  return (
    <header>
      <div>
        <button type="button">
          <Link to="/">Home</Link>
        </button>
        <button type="button">
          <Link to="/add">Add product</Link>
        </button>
      </div>
      <div>
        <span>{usr.username}</span>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
