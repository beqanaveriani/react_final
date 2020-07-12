import React from "react";
import { Link } from "react-router-dom";

import useForm from "../hooks/useForm";
import storage from "../utils/storage";

const Register = ({ history }) => {
  const handleFormSubmit = (vals) => {
    const users = storage("users").get() || [];
    storage("users").set([...users, vals]);
    history.push("/login");
  };

  const { values, handleSubmit, handleInputChange } = useForm(handleFormSubmit);

  return (
    <div className="register">
      <h2>Register</h2>
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
        <button type="submit">Register</button>
      </form>

      <div style={{ marginTop: "3rem" }}>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
