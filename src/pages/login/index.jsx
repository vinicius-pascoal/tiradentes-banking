import React, { useState } from "react";
import BaseLogin from "../../assets/components/baseLogin";
import { useNavigate } from "react-router-dom";

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        goTo("/dashboard", { replace: true });
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <>
      <BaseLogin>
        <form className="formularioLogin" onSubmit={handleSubmit}>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
          <button type="submit">Login</button>
          <div className="loginLinks">
            <a href="/criarConta">criar conta</a>
            <a href="/RecuperarConta">Recuperar senha</a>
          </div>
        </form>
      </BaseLogin>
    </>
  );
}

export default Login;
