import React from "react";
import { Link } from "react-router-dom";

import useForm from "../hooks/useForm";
import storage from "../utils/storage";
import { setAuthHeader } from "../api";

const Login = ({ history }) => {
  const handleFormSubmit = (vals) => {
    const { username, password } = vals;
    const users = storage("users").get() || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setAuthHeader();
      storage("isLoggedIn").set(true);
      storage("user").set(vals);
      history.push("/");
    }
  };

  const { values, handleSubmit, handleInputChange } = useForm(handleFormSubmit);

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={values.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="******"
          value={values.password}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>

      <div style={{ marginTop: "3rem" }}>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
