import React, { useState } from "react";
import BaseLogin from "../../assets/components/baseLogin";
import { useNavigate, Link } from "react-router-dom";

import PropTypes from "prop-types";

function Login({ setLogged }) {
  const [errorMessages, setErrorMessages] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const goTo = useNavigate();
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
    {
      username: "user3",
      password: "pass3",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
    auth: "invalid username or password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = database.find((user) => user.username === username);

    if (userData) {
      if (userData.password !== password) {
        setErrorMessages({ name: "auth", message: errors.auth });
      } else {
        setLogged(true);
        goTo("/dashboard");
      }
    } else {
      setErrorMessages({ name: "auth", message: errors.auth });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <BaseLogin>
      <form className="formularioLogin" onSubmit={handleSubmit}>
        <div className="errorContainer flex justify-center"> {/* Added flex and justify-center classes */}
          {renderErrorMessage("auth")}
        </div>
        <input
          type="text"
          name="uname"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {renderErrorMessage("uname")}
        <input
          type="password"
          name="pass"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {renderErrorMessage("pass")}
        <button type="submit">Login</button>
        <div className="loginLinks">
          <Link to="/criarConta">criar conta</Link>
          <Link to="/recuperarConta">Recuperar senha</Link>
        </div>
      </form>
    </BaseLogin>
  );
}

Login.propTypes = {
  setLogged: PropTypes.func.isRequired,
};

export default Login;
