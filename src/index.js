import React from "react";
import ReactDOM from "react-dom";

import Routes from "./Routes";
import "./styles/app.scss";
import storage from "./utils/storage";
import { setAuthHeader } from "./api";

const isLoggedIn = storage("isLoggedIn").get();
if (isLoggedIn) setAuthHeader();

ReactDOM.render(<Routes />, document.getElementById("root"));
